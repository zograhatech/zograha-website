"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ApiRequestError, api } from "@/lib/zograha-api";
import type { BlogPost, Industry, Job, Project, Service, Testimonial } from "@/types/api";
import { ApplicationForm } from "./forms";
import { SectionEyebrow } from "./site";
import { safePublicHref, useSiteSettings } from "./site-contact";

type LoadState<T> = { status: "loading" } | { status: "error"; message: string } | { status: "ready"; items: T[] };

function loadError(error: unknown) {
  return error instanceof ApiRequestError ? error.message : "We couldn’t load this content. Please try again later.";
}

function StateMessage({ children, onRetry }: { children: string; onRetry?: () => void }) {
  return <div className="content-state" role="status"><p>{children}</p>{onRetry ? <button className="settings-retry" type="button" onClick={onRetry}>Retry</button> : null}</div>;
}

function articleBlocks(content: string) {
  return content.split(/\n{2,}/).map((text) => {
    const heading = text.match(/^#{1,6}\s+(.+)$/);
    if (heading) return { type: "heading" as const, text: heading[1] };

    const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
    if (lines.length && lines.every((line) => /^[-*]\s+/.test(line))) {
      return { type: "list" as const, items: lines.map((line) => line.replace(/^[-*]\s+/, "")) };
    }

    return { type: "paragraph" as const, text: lines.join(" ") };
  }).filter((block) => block.type !== "paragraph" || block.text.length > 0);
}

const serviceIcons: Record<string, string> = {
  globe: "/figma/service-apps.svg",
  smartphone: "/figma/service-apps.svg",
  palette: "/figma/service-design.svg",
  megaphone: "/figma/service-marketing.svg",
  search: "/figma/service-consulting.svg",
  layers: "/figma/service-cloud.svg",
};

export function ServicesContent() {
  const [state, setState] = useState<LoadState<Service>>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    api.services.list({ limit: 12 }).then(({ items }) => {
      if (active) setState({ status: "ready", items });
    }).catch((error: unknown) => {
      if (active) setState({ status: "error", message: loadError(error) });
    });
    return () => { active = false; };
  }, [attempt]);

  if (state.status === "loading") return <StateMessage>Loading services…</StateMessage>;
  if (state.status === "error") return <StateMessage onRetry={() => setAttempt((value) => value + 1)}>{state.message}</StateMessage>;
  if (state.items.length === 0) return <StateMessage>There are no published services yet. Please check back soon.</StateMessage>;
  return (
    <div className="service-grid">
      {state.items.map((service, index) => (
        <article className="service-card" key={service.id}>
          <div className="service-card-top">
            <span className="service-icon"><Image src={serviceIcons[service.icon || ""] || serviceIcons.globe} alt="" width={24} height={24} unoptimized /></span>
            <span className="service-stage">{index < 2 ? "Build" : index < 4 ? "Grow" : "Scale"}</span>
          </div>
          <h2>{service.title}</h2>
          <p className="service-kicker">{service.shortDescription}</p>
          <p>{service.description}</p>
          {service.features.length ? <ul>{service.features.slice(0, 4).map((feature) => <li key={feature}>{feature}</li>)}</ul> : null}
          <Link className="card-link" href={`/services/${service.slug}`}>Learn more <span aria-hidden="true">→</span></Link>
        </article>
      ))}
    </div>
  );
}

export function ServiceDetailContent({ slug, initialService }: { slug: string; initialService?: Service }) {
  const [service, setService] = useState<Service | null>(initialService ?? null);
  const [state, setState] = useState<"loading" | "error" | "ready">(initialService ? "ready" : "loading");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (initialService?.slug === slug && attempt === 0) return;
    let active = true;
    api.services.get(slug).then((value) => {
      if (active) { setService(value); setState("ready"); }
    }).catch(() => {
      if (active) setState("error");
    });
    return () => { active = false; };
  }, [slug, attempt, initialService]);

  if (state === "loading") return <StateMessage>Loading service…</StateMessage>;
  if (state === "error" || !service) return <StateMessage onRetry={() => setAttempt((value) => value + 1)}>This service could not be loaded. It may no longer be available.</StateMessage>;
  return (
    <>
      <header className="resource-detail-hero">
        <p className="page-breadcrumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / {service.title}</p>
        <span className="eyebrow-pill"><i />{service.shortDescription}</span>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </header>
      <section className="service-detail site-section">
        {service.features.length ? <ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul> : null}
        <Link className="button-primary" href={`/contact?service=${encodeURIComponent(service.title)}`}>Discuss this service <span aria-hidden="true">→</span></Link>
      </section>
    </>
  );
}

export function IndustriesContent() {
  const [state, setState] = useState<LoadState<Industry>>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    api.industries.list().then(({ items }) => {
      if (active) setState({ status: "ready", items });
    }).catch((error: unknown) => {
      if (active) setState({ status: "error", message: loadError(error) });
    });
    return () => { active = false; };
  }, [attempt]);

  if (state.status === "loading") return <StateMessage>Loading industries…</StateMessage>;
  if (state.status === "error") return <StateMessage onRetry={() => setAttempt((value) => value + 1)}>{state.message}</StateMessage>;
  if (!state.items.length) return <StateMessage>No industries are listed yet.</StateMessage>;
  return <div className="industry-grid">{state.items.map((industry) => <article key={industry.id}><span>{industry.slug}</span><h3>{industry.name}</h3>{industry.description ? <p>{industry.description}</p> : null}</article>)}</div>;
}

export function ProjectsContent() {
  const [state, setState] = useState<LoadState<Project>>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    api.projects.list({ featured: true, limit: 6 }).then(({ items }) => {
      if (active) setState({ status: "ready", items });
    }).catch((error: unknown) => {
      if (active) setState({ status: "error", message: loadError(error) });
    });
    return () => { active = false; };
  }, [attempt]);

  if (state.status === "loading") return <StateMessage>Loading projects…</StateMessage>;
  if (state.status === "error") return <StateMessage onRetry={() => setAttempt((value) => value + 1)}>{state.message}</StateMessage>;
  if (!state.items.length) return <StateMessage>No featured projects are available yet.</StateMessage>;
  return (
    <div className="project-grid">
      {state.items.map((project, index) => (
        <article className="project-card" key={project.id}>
          <Link className="project-card-image" href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
            {project.image ? <Image src={project.image} alt="" fill sizes="(max-width: 760px) 100vw, 360px" unoptimized /> : <span>{project.category || "Project"}</span>}
          </Link>
          <div className="project-card-copy"><span>{project.category || `0${index + 1}`}</span><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><Link className="card-link" href={`/projects/${project.slug}`}>View project <span aria-hidden="true">→</span></Link></div>
        </article>
      ))}
    </div>
  );
}

export function ProjectDetailContent({ slug, initialProject }: { slug: string; initialProject?: Project }) {
  const [project, setProject] = useState<Project | null>(initialProject ?? null);
  const [state, setState] = useState<"loading" | "error" | "ready">(initialProject ? "ready" : "loading");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (initialProject?.slug === slug && attempt === 0) return;
    let active = true;
    api.projects.get(slug).then((value) => {
      if (active) { setProject(value); setState("ready"); }
    }).catch(() => {
      if (active) setState("error");
    });
    return () => { active = false; };
  }, [slug, attempt, initialProject]);

  if (state === "loading") return <StateMessage>Loading project…</StateMessage>;
  if (state === "error" || !project) return <StateMessage onRetry={() => setAttempt((value) => value + 1)}>This project could not be loaded. It may no longer be available.</StateMessage>;
  const liveUrl = safePublicHref(project.liveUrl, ["https:", "http:"]);
  return (
    <>
      <header className="resource-detail-hero">
        <p className="page-breadcrumb"><Link href="/">Home</Link> / Portfolio / {project.title}</p>
        <span className="eyebrow-pill"><i />{project.category || "Selected work"}</span>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>
    <article className="project-detail site-section">
      {project.image ? <Image className="project-detail-image" src={project.image} alt={project.title} width={1440} height={810} unoptimized /> : null}
      {project.description ? <p>{project.description}</p> : null}
      {project.techStack.length ? <div className="project-tech">{project.techStack.map((technology) => <span key={technology}>{technology}</span>)}</div> : null}
      {liveUrl ? <a className="arrow-link" href={liveUrl} target="_blank" rel="noreferrer">Visit project <span aria-hidden="true">↗</span></a> : null}
    </article>
    </>
  );
}

export function TestimonialsContent() {
  const [state, setState] = useState<LoadState<Testimonial>>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    api.testimonials.list({ limit: 6 }).then(({ items }) => {
      if (active) setState({ status: "ready", items });
    }).catch((error: unknown) => {
      if (active) setState({ status: "error", message: loadError(error) });
    });
    return () => { active = false; };
  }, [attempt]);

  if (state.status === "loading") return <StateMessage>Loading testimonials…</StateMessage>;
  if (state.status === "error") return <StateMessage onRetry={() => setAttempt((value) => value + 1)}>{state.message}</StateMessage>;
  if (!state.items.length) return <StateMessage>No client stories are available yet.</StateMessage>;
  return <div className="testimonial-grid">{state.items.map((testimonial) => <article className="testimonial-card" key={testimonial.id}><span className="testimonial-rating" aria-label={`${testimonial.rating ?? 5} out of 5 stars`}>{"★".repeat(testimonial.rating ?? 5)}</span><p>{testimonial.content}</p><strong>{testimonial.name}</strong><span>{[testimonial.role, testimonial.company].filter(Boolean).join(" · ")}</span></article>)}</div>;
}

const blogImages = ["/figma/blog-ai.png", "/figma/blog-growth.png", "/figma/blog-digital.png"];

export function BlogContent({ limit = 9 }: { limit?: number }) {
  const [state, setState] = useState<LoadState<BlogPost>>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    api.blog.list({ limit }).then(({ items }) => {
      if (active) setState({ status: "ready", items });
    }).catch((error: unknown) => {
      if (active) setState({ status: "error", message: loadError(error) });
    });
    return () => { active = false; };
  }, [limit, attempt]);

  if (state.status === "loading") return <StateMessage>Loading articles…</StateMessage>;
  if (state.status === "error") return <StateMessage onRetry={() => setAttempt((value) => value + 1)}>{state.message}</StateMessage>;
  if (state.items.length === 0) return <StateMessage>No articles have been published yet. Please check back soon.</StateMessage>;
  return (
    <div className="blog-grid">
      {state.items.map((post, index) => (
        <article className={`blog-card${index === 0 ? " blog-card-featured" : ""}`} key={post.id}>
          <Link className="blog-image" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
            <Image src={post.coverImage || blogImages[index % blogImages.length]} alt={post.coverImage ? post.title : ""} fill sizes="(max-width: 760px) calc(100vw - 60px), 600px" unoptimized={Boolean(post.coverImage)} priority={limit > 3 && index === 0} />
            {post.category ? <span className="blog-category">{post.category}</span> : null}
          </Link>
          <div className="blog-card-copy">
            <div className="blog-meta">
              <time dateTime={post.publishedAt ?? post.createdAt}>{new Date(post.publishedAt ?? post.createdAt).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}</time>
              {post.author ? <span>{post.author}</span> : null}
            </div>
            <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            {post.excerpt ? <p>{post.excerpt}</p> : null}
            <Link className="card-link" href={`/blog/${post.slug}`}>Read full article <span aria-hidden="true">→</span></Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function BlogDetailContent({ slug, initialPost }: { slug: string; initialPost?: BlogPost }) {
  const [post, setPost] = useState<BlogPost | null>(initialPost ?? null);
  const [state, setState] = useState<"loading" | "error" | "ready">(initialPost ? "ready" : "loading");
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (initialPost?.slug === slug && attempt === 0) return;
    let active = true;
    api.blog.get(slug).then((value) => {
      if (active) { setPost(value); setState("ready"); }
    }).catch((reason: unknown) => {
      if (active) { setError(loadError(reason)); setState("error"); }
    });
    return () => { active = false; };
  }, [slug, attempt, initialPost]);

  if (state === "loading") return <StateMessage>Loading article…</StateMessage>;
  if (state === "error" || !post) return <StateMessage onRetry={() => setAttempt((value) => value + 1)}>{error || "This article is no longer available."}</StateMessage>;
  const blocks = articleBlocks(post.content);
  const headings = blocks.filter((block) => block.type === "heading");
  return (
    <>
      <header className="article-header">
        <p className="page-breadcrumb"><Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / Article</p>
        <span className="eyebrow-pill"><i />{post.category || "Insights"}</span>
        <h1>{post.title}</h1>
        {post.excerpt ? <p>{post.excerpt}</p> : null}
        <div className="blog-meta"><span>{post.author || "Zograha Team"}</span><time dateTime={post.publishedAt ?? post.createdAt}>{new Date(post.publishedAt ?? post.createdAt).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}</time></div>
      </header>
      <article className="article-layout">
      <aside className="article-index">
        <span>In this article</span>
        {headings.map((heading, index) => (
          <a href={`#article-section-${index + 1}`} key={`${index}-${heading.text.slice(0, 20)}`}>
            <i>{String(index + 1).padStart(2, "0")}</i>{heading.text}
          </a>
        ))}
      </aside>
      <div className="article-body">
        <p className="article-intro">{post.excerpt || blocks.find((block) => block.type === "paragraph")?.text}</p>
        {post.coverImage ? <Image className="article-image" src={post.coverImage} alt="" width={1200} height={800} unoptimized /> : null}
        {blocks.map((block, index) => {
          if (block.type === "heading") {
            const sectionIndex = headings.indexOf(block) + 1;
            return <section id={`article-section-${sectionIndex}`} key={`heading-${sectionIndex}`}><SectionEyebrow>{String(sectionIndex).padStart(2, "0")} · Insights</SectionEyebrow><h2>{block.text}</h2></section>;
          }
          if (block.type === "list") return <ul className="article-list" key={`list-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
          return <p key={`paragraph-${index}`}>{block.text}</p>;
        })}
      </div>
      </article>
    </>
  );
}

export function ContactOffice() {
  const settingsState = useSiteSettings();
  const settings = settingsState.status === "ready" ? settingsState.settings : null;
  const mapsUrl = safePublicHref(settings?.googleMapsEmbedUrl, ["https:"]);

  return (
    <section className="office-section">
      <div className="office-heading">
        <SectionEyebrow>Find us</SectionEyebrow>
        <h2>Visit our <em>head office.</em></h2>
        <p>We welcome clients and partners to our modern tech facility in Madurai.</p>
      </div>
      <div className="office-card">
        <div className="office-map">
          <Image src="/figma/contact-map.png" alt="Map showing the Zograha Technologies office in Madurai" fill sizes="(max-width: 760px) calc(100vw - 40px), 714px" />
          {mapsUrl ? <a href={mapsUrl} target="_blank" rel="noreferrer">Open in Maps <span aria-hidden="true">↗</span></a> : null}
        </div>
        <div className="office-details">
          <span className="office-label">Madurai headquarters</span>
          <p>{settings?.address || "Madurai, Tamil Nadu, India"}</p>
          {settings?.links.email ? <a href={settings.links.email}>{settings.email}</a> : null}
          {settings?.links.call ? <a href={settings.links.call}>{settings.phone}</a> : null}
          {settings?.links.whatsapp ? <a href={settings.links.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a> : null}
          {mapsUrl ? <a className="office-directions" href={mapsUrl} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a> : null}
          {settingsState.status === "error" ? <p role="alert">Office details unavailable. <button className="settings-retry" type="button" onClick={settingsState.retry}>Retry</button></p> : null}
        </div>
      </div>
    </section>
  );
}

export function CareersContent() {
  const [state, setState] = useState<LoadState<Job>>({ status: "loading" });
  const [selected, setSelected] = useState<Job | null>(null);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    api.jobs.list().then(({ items }) => {
      if (active) setState({ status: "ready", items });
    }).catch((error: unknown) => {
      if (active) setState({ status: "error", message: loadError(error) });
    });
    return () => { active = false; };
  }, [attempt]);

  return (
    <>
      <section className="positions-section">
        <div className="positions-heading"><h2>Open positions</h2><span>{state.status === "ready" ? `${state.items.length} roles · Madurai, Tamil Nadu` : "Madurai, Tamil Nadu"}</span></div>
        {state.status === "loading" ? <StateMessage>Loading open positions…</StateMessage> : null}
        {state.status === "error" ? <StateMessage onRetry={() => setAttempt((value) => value + 1)}>{state.message}</StateMessage> : null}
        {state.status === "ready" && state.items.length === 0 ? <StateMessage>There are no open positions right now. Please check back soon.</StateMessage> : null}
        {state.status === "ready" ? state.items.map((job) => (
          <article className="job-row" key={job.id}>
            <div className="job-description"><h3>{job.title}</h3><p>{job.summary}</p></div>
            <div className="job-tags">
              {job.department ? <span>{job.department}</span> : null}
              {job.location ? <span>{job.location}</span> : null}
              {job.type ? <span>{job.type}</span> : null}
              {job.experience ? <span>{job.experience}</span> : null}
            </div>
            <div className="job-actions">
              <details>
                <summary>Details</summary>
                <p>{job.description}</p>
                {job.responsibilities.length ? <ul>{job.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                {job.requirements.length ? <ul>{job.requirements.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              </details>
              <button className="button-primary" type="button" onClick={() => { setSelected(job); document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" }); }}>Apply</button>
            </div>
          </article>
        )) : null}
      </section>
      <section className="application-section" id="apply">
        <div><SectionEyebrow>Work with us</SectionEyebrow><h2>Make good work with good people.</h2><p>Tell us a little about yourself and the kind of work you want to do.</p></div>
        <ApplicationForm jobId={selected?.slug} jobTitle={selected?.title} />
      </section>
    </>
  );
}