import assert from "node:assert/strict";
import test from "node:test";

const frontend = process.env.ZOGRAHA_FRONTEND_URL || "http://localhost:3000";
const backend = process.env.ZOGRAHA_API_URL || "http://localhost:4000";

async function readJson(url, init) {
  const response = await fetch(url, init);
  const body = await response.json();
  return { response, body };
}

test("public API health and content collections are available", async () => {
  for (const resource of ["health", "services", "industries", "projects", "testimonials", "blog", "jobs", "settings", "sitemap"]) {
    const { response, body } = await readJson(`${backend}/api/${resource}`);
    assert.equal(response.status, 200, `${resource} should return HTTP 200`);
    assert.equal(body.success, true, `${resource} should use the public success envelope`);
  }
});

test("public service, blog, project and job details resolve from live slugs", async () => {
  for (const resource of ["services", "blog", "projects", "jobs"]) {
    const { body: list } = await readJson(`${backend}/api/${resource}?limit=1`);
    assert.ok(list.data?.[0]?.slug, `${resource} fixture should include a published slug`);
    const { response, body } = await readJson(`${backend}/api/${resource}/${list.data[0].slug}`);
    assert.equal(response.status, 200, `${resource} detail should resolve`);
    assert.equal(body.data.slug, list.data[0].slug);
  }
});

test("dynamic frontend detail pages render live content and unknown records return 404", async () => {
  for (const [resource, pathPrefix] of [["services", "services"], ["blog", "blog"], ["projects", "projects"]]) {
    const { body: list } = await readJson(`${backend}/api/${resource}?limit=1`);
    const slug = list.data?.[0]?.slug;
    assert.ok(slug, `${resource} should have a published record for the smoke test`);
    const response = await fetch(new URL(`/${pathPrefix}/${slug}`, frontend));
    const html = await response.text();
    assert.equal(response.status, 200, `${pathPrefix}/${slug} should render`);
    assert.ok(html.includes(list.data[0].title), `${pathPrefix}/${slug} should include its live title in server HTML`);
  }

  const missingService = await fetch(new URL("/services/not-a-real-service", frontend));
  assert.equal(missingService.status, 404);
});

test("contact and application validation reject invalid submissions", async () => {
  const contact = await readJson(`${backend}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "x", email: "invalid", message: "short" }),
  });
  assert.equal(contact.response.status, 422);
  assert.equal(contact.body.error.message, "Validation failed");
  assert.ok(contact.body.error.details.email);

  const application = await readJson(`${backend}/api/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "x", email: "invalid" }),
  });
  assert.equal(application.response.status, 422);
  assert.equal(application.body.error.message, "Validation failed");
  assert.ok(application.body.error.details.phone);
});

test("CORS allows the configured local frontend origin", async () => {
  const response = await fetch(`${backend}/api/contact`, {
    method: "OPTIONS",
    headers: {
      Origin: frontend,
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "content-type",
    },
  });
  assert.equal(response.status, 204);
  assert.equal(response.headers.get("access-control-allow-origin"), frontend);
});

test("frontend public pages render and navigation stays internal", async () => {
  const cases = [
    ["/", "Dependable technology delivery"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/blog", "Blog"],
    ["/careers", "Careers"],
    ["/contact", "Contact Us"],
    ["/privacy-policy", "Privacy Policy"],
    ["/terms-and-conditions", "Terms &amp; Conditions"],
    ["/services/web-development", "Website Development"],
    ["/projects/sample-ecommerce-platform", "Sample E-commerce Platform"],
  ];
  for (const [path, marker] of cases) {
    const response = await fetch(new URL(path, frontend));
    const html = await response.text();
    assert.equal(response.status, 200, `${path} should render`);
    assert.ok(html.includes(marker), `${path} should contain its page marker`);
    assert.ok(html.includes('href="/contact"'), `${path} should include contact navigation`);
  }

  const missing = await fetch(new URL("/this-route-does-not-exist", frontend));
  assert.equal(missing.status, 404);
});

test("SEO routes include dynamic URLs and exclude the API test page", async () => {
  const sitemapResponse = await fetch(new URL("/sitemap.xml", frontend));
  const sitemap = await sitemapResponse.text();
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemap, /\/services\//);
  assert.match(sitemap, /\/blog\//);
  assert.match(sitemap, /\/projects\//);
  assert.doesNotMatch(sitemap, /test-api/);

  const robotsResponse = await fetch(new URL("/robots.txt", frontend));
  const robots = await robotsResponse.text();
  assert.equal(robotsResponse.status, 200);
  assert.match(robots, /Sitemap:/);
  assert.match(robots, /Disallow: \/test-api/);
});