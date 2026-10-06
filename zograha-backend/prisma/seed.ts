/* Placeholder content so the frontend has data to render. Replace via the admin API. */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const services = [
  ["web-development", "Website Development", "globe", "Fast, secure and SEO-ready websites built with modern technology.", ["Responsive design", "SEO-friendly structure", "CMS integration", "Performance optimisation"]],
  ["mobile-app-development", "Mobile App Development", "smartphone", "Android and iOS apps that your customers love to use.", ["Cross-platform apps", "API integration", "Push notifications", "App store deployment"]],
  ["ui-ux-design", "UI/UX Design", "palette", "Premium interfaces designed around real user journeys.", ["Wireframes & prototypes", "Design systems", "Usability testing", "Brand-aligned visuals"]],
  ["digital-marketing", "Digital Marketing", "megaphone", "Data-driven campaigns that grow traffic, leads and sales.", ["Social media marketing", "Performance ads", "Email campaigns", "Analytics & reporting"]],
  ["seo-content", "SEO & Content", "search", "Rank higher and earn trust with technical SEO and quality content.", ["Technical SEO audit", "Keyword strategy", "Content writing", "Local SEO"]],
  ["business-software", "Custom Business Software", "layers", "CRMs, dashboards and automation tailored to your workflow.", ["Custom dashboards", "Workflow automation", "Third-party integrations", "Ongoing support"]],
] as const;

const industries = ["Healthcare", "Education", "Retail & E-commerce", "Real Estate", "Manufacturing", "Hospitality", "Startups", "Finance"];

async function main() {
  for (const [i, [slug, title, icon, short, features]] of services.entries()) {
    await prisma.service.upsert({
      where: { slug },
      update: {},
      create: {
        slug, title, icon, shortDescription: short, features: [...features], order: i,
        description: `${short}\n\nWe work closely with your team to understand your goals, then plan, design, build and launch a solution that fits your business.`,
        seoTitle: `${title} Services | Zograha Technologies`, seoDescription: short.slice(0, 160),
      },
    });
  }

  for (const [i, name] of industries.entries()) {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
    await prisma.industry.upsert({ where: { slug }, update: {}, create: { slug, name, order: i } });
  }

  if ((await prisma.testimonial.count()) === 0) {
    await prisma.testimonial.createMany({
      data: [
        { name: "Sample Client", role: "Founder", company: "Sample Co.", content: "Zograha delivered our website on time and the quality was outstanding.", order: 0 },
        { name: "Another Client", role: "Marketing Head", company: "Demo Ltd.", content: "Our leads doubled within three months of working with the team.", order: 1 },
      ],
    });
  }

  await prisma.project.upsert({
    where: { slug: "sample-ecommerce-platform" }, update: {},
    create: { slug: "sample-ecommerce-platform", title: "Sample E-commerce Platform", client: "Sample Co.", category: "Web Development", summary: "A fast, conversion-focused online store.", techStack: ["React", "Next.js", "PostgreSQL"], featured: true },
  });

  await prisma.blogPost.upsert({
    where: { slug: "why-your-business-needs-a-fast-website" }, update: {},
    create: {
      slug: "why-your-business-needs-a-fast-website", title: "Why Your Business Needs a Fast Website",
      excerpt: "Speed shapes first impressions, SEO rankings and conversions.", category: "Web Development",
      tags: ["performance", "seo"], published: true, publishedAt: new Date(), readingTime: 2,
      content: "## Speed matters\n\nVisitors leave slow websites. Faster pages rank better and convert more.\n\n## What to do\n\n- Optimise images\n- Use a CDN\n- Ship less JavaScript",
      seoTitle: "Why Your Business Needs a Fast Website", seoDescription: "Learn how website speed affects SEO and conversions.",
    },
  });

  await prisma.job.upsert({
    where: { slug: "full-stack-developer" }, update: {},
    create: {
      slug: "full-stack-developer", title: "Full Stack Developer", department: "Development", experience: "0-2 years",
      summary: "Build and ship web applications with React, Node.js and PostgreSQL.",
      description: "Join our development team to build modern web products for clients across industries.",
      responsibilities: ["Build responsive UIs in React", "Develop REST APIs", "Write clean, tested code"],
      requirements: ["Good knowledge of JavaScript/TypeScript or Java", "Understanding of SQL databases", "Willingness to learn"],
    },
  });

  console.log("Seed complete");
}

main().finally(() => prisma.$disconnect());
