import Image from "next/image";
import Link from "next/link";
// import { Stats } from "@/components/sections/stats.jsx";
// import { ContactCta } from "@/components/sections/contact-cta.jsx";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";
import { JsonLd } from "@/components/site/json-ld.jsx";
import {
  createBreadcrumbEntity,
  createSchemaGraph,
  createWebPageEntity,
  founderEntity,
  organizationEntity,
  websiteEntity,
} from "@/lib/structured-data.js";

export const metadata = {
  title: {
    absolute: "About OXY12 | Sri Lankan Web & Software Studio",
  },
  description:
    "Learn about OXY12, a Sri Lankan web and software studio founded in 2025, including its founder, capabilities, industries, technologies, and project approach.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About OXY12 | Sri Lankan Web & Software Studio",
    description:
      "Learn about OXY12, a Sri Lankan web and software studio founded in 2025, including its founder, capabilities, industries, technologies, and project approach.",
    url: "https://oxy12.com/about",
    siteName: "OXY12",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "About OXY12 | Sri Lankan Web & Software Studio",
    description:
      "Learn about OXY12, a Sri Lankan web and software studio founded in 2025, including its founder, capabilities, industries, technologies, and project approach.",
  },
};

const values = [
  {
    t: "Clear requirements",
    d: "Before development begins, we document the intended users, important workflows, required features, integrations, content needs, responsibilities, and delivery priorities.",
  },
  {
    t: "Useful interfaces",
    d: "Navigation, forms, dashboards, and mobile layouts are designed around the tasks people need to complete, with clarity and accessibility considered throughout the design process.",
  },
  {
    t: "Maintainable systems",
    d: "We choose technology according to the project rather than trends, organize the code for future updates, and document decisions that affect hosting, integrations, security, and maintenance.",
  },
  {
    t: "Visible progress",
    d: "Work is shared in reviewable stages so clients can see what has been completed, test important flows, provide feedback early, and understand what remains before launch.",
  },
];

const expertise = [
  {
    title: "Services",
    description:
      "Our work includes business websites, e-commerce stores, custom web software, UI/UX design, point-of-sale systems, ERP modules, and mobile applications for iOS and Android.",
    details:
      "Depending on the project, delivery may cover research, requirements, interface design, development, integrations, testing, deployment, documentation, and ongoing maintenance.",
    href: "/services",
    linkLabel: "Explore OXY12 services",
  },
  {
    title: "Industries",
    description:
      "Our current portfolio includes work connected to education, retail, e-commerce, food and hospitality, fashion, delivery services, construction, and other service-based businesses.",
    details:
      "We do not assume that two organizations work in the same way. Each project begins by reviewing its users, daily operations, existing tools, data, and practical constraints.",
    href: "/portfolio",
    linkLabel: "See completed client projects",
  },
  {
    title: "Technology",
    description:
      "We work with modern web technologies such as Next.js, React, Node.js, APIs, relational databases, WordPress, WooCommerce, and mobile development frameworks where they fit the requirements.",
    details:
      "Technology is selected after considering functionality, budget, hosting, maintainability, available integrations, security needs, and the skills required to support the product after launch.",
  },
];

const aboutPageId = "https://oxy12.com/about#webpage";
const aboutSchema = createSchemaGraph(
  organizationEntity,
  websiteEntity,
  createWebPageEntity({
    type: "AboutPage",
    id: aboutPageId,
    url: "https://oxy12.com/about",
    name: "About OXY12 | Sri Lankan Web & Software Studio",
    description:
      "Learn about OXY12, a Sri Lankan web and software studio founded in 2025, including its founder, capabilities, industries, technologies, and project approach.",
    mainEntity: {
      "@id": "https://oxy12.com/#organization",
    },
  }),
  founderEntity,
  createBreadcrumbEntity({
    id: "https://oxy12.com/about#breadcrumb",
    pageName: "About",
    pageUrl: "https://oxy12.com/about",
  }),
);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />

      <section className="relative px-6 pb-16 pt-40 md:pt-48">
        <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="01" label="About OXY12" />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">
              A Sri Lankan studio building <span className="italic text-ember">practical digital products.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Founded in Sri Lanka in 2025, OXY12 helps businesses improve customer-facing experiences and daily operations
              through websites, online stores, mobile applications, and custom software. Our work combines requirements,
              interface design, development, testing, deployment, and post-launch support.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl glass p-10">
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-ember">Company Overview</h2>
              <p className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                OXY12 is a web and software development studio established in 2025 and based in Sri Lanka.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                We build customer-facing websites and applications as well as internal systems that help teams manage sales,
                inventory, reporting, communication, and other operational work.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-3xl glass p-10">
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-ember">What Clients Can Expect</h2>
              <p className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                A defined scope, reviewed designs, staged development, testing, deployment support, and a clear handover.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                The exact process is adjusted to the product, but decisions and progress are explained in plain language so
                clients can review the work and understand what is being delivered.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="02" label="How We Work" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
              Practical standards applied to every project.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.t} delay={index * 0.06}>
                <div className="rounded-3xl glass p-8">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{value.t}</h3>
                  <p className="mt-3 text-muted-foreground">{value.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="03" label="Services and Experience" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
              What we build, who it supports, and how we choose the tools.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {expertise.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-3xl glass p-8">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>
                  <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.details}
                  </p>
                  {item.href && (
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex font-mono text-xs uppercase tracking-[0.18em] text-ember transition-colors hover:text-foreground"
                    >
                      {item.linkLabel}
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-8 max-w-3xl rounded-3xl glass p-8">
              <p className="leading-relaxed text-muted-foreground">
                OXY12 Learn publishes practical guides on business software, websites, AI tools, hosting, and related
                technology decisions.
              </p>
              <a
                href="https://learn.oxy12.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex font-mono text-xs uppercase tracking-[0.18em] text-ember transition-colors hover:text-foreground"
              >
                Explore practical guides on OXY12 Learn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="04" label="Founder" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
              Leadership with direct involvement in the work.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <article className="mt-16 grid overflow-hidden rounded-3xl glass lg:grid-cols-2">
              <div className="relative min-h-[420px] overflow-hidden bg-navy-deep lg:min-h-[560px]">
                <Image
                  src="https://learn.oxy12.com/wp-content/uploads/2026/09/akindu_ramsith_founder.webp"
                  alt="Mr. Akindu Ramsith, Founder and Software Engineer at OXY12"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, calc(100vw - 48px)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/65 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-ember">Founder and Software Engineer</p>
                <h3 className="mt-5 font-display text-4xl font-extrabold tracking-tight md:text-5xl">Mr. Akindu Ramsith</h3>
                <p className="mt-7 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Mr. Akindu Ramsith founded OXY12 in Sri Lanka in 2025 to provide businesses with websites and software
                  that are practical to use, clearly scoped, and maintainable after launch.
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  As Founder and Software Engineer, he works across requirements, application structure, interface decisions,
                  integrations, testing, deployment, and technical support. This direct involvement helps keep business needs,
                  user experience, and engineering decisions connected throughout a project.
                </p>

                <dl className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Founded</dt>
                    <dd className="mt-2 font-display text-xl font-bold">2025</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Based in</dt>
                    <dd className="mt-2 font-display text-xl font-bold">Sri Lanka</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Primary focus</dt>
                    <dd className="mt-2 font-display text-xl font-bold">Software Engineering</dd>
                  </div>
                </dl>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Temporarily hidden. Uncomment the imports above and components below to restore these sections. */}
      {/* <Stats /> */}
      {/* <ContactCta /> */}
    </>
  );
}
