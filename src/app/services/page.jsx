import Link from "next/link";
import { ArrowUpRight, Code2, Cpu, Database, Palette, ScanLine, ShoppingBag } from "lucide-react";
import { ContactCta } from "@/components/sections/contact-cta.jsx";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

export const metadata = {
  title: "Services - OXY12",
  description:
    "Websites, custom software, UI/UX, e-commerce, POS and ERP solutions engineered by OXY12.",
};

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Award-winning marketing sites and web platforms built on bleeding-edge stacks.",
    tech: ["Next.js", "TanStack", "Astro", "Vercel"],
    starting: "$8k",
    process: ["Discovery", "Design", "Build", "Launch"],
    faqs: [
      { q: "How long does a typical site take?", a: "Marketing sites: 4-8 weeks. Web platforms: 8-16 weeks." },
      { q: "Do you handle hosting?", a: "Yes - we deploy to globally distributed edge networks and manage uptime." },
    ],
  },
  {
    icon: Cpu,
    title: "Custom Software Development",
    desc: "Bespoke enterprise systems engineered to solve complex business problems.",
    tech: ["Node", "Go", "Rust", "Postgres"],
    starting: "$25k",
    process: ["Requirements", "Architecture", "Build", "Test", "Deploy"],
    faqs: [
      { q: "Do you sign NDAs?", a: "Absolutely - and we work behind mutual NDA from the first call." },
      { q: "Do we own the source code?", a: "Yes. You own 100% of the IP. Full handover at the end." },
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Human-centric design systems that combine beauty with effortless usability.",
    tech: ["Figma", "Motion", "Tokens", "Storybook"],
    starting: "$6k",
    process: ["Audit", "Strategy", "Wireframe", "Visual", "System"],
    faqs: [{ q: "Do you build the design system too?", a: "Yes - handover-ready Figma libraries with code tokens." }],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    desc: "Conversion-tuned storefronts with deep integrations and headless commerce.",
    tech: ["Shopify", "Medusa", "Stripe", "Algolia"],
    starting: "$12k",
    process: ["Audit", "Strategy", "Design", "Build", "Optimize"],
    faqs: [{ q: "Headless or Shopify themes?", a: "Both - we recommend based on scale, budget and product velocity." }],
  },
  {
    icon: ScanLine,
    title: "POS Systems",
    desc: "Modern point-of-sale built for hospitality, retail, and multi-branch operations.",
    tech: ["Offline-first", "Sync", "Hardware integration"],
    starting: "$18k",
    process: ["Discovery", "Hardware spec", "Build", "Pilot", "Rollout"],
    faqs: [{ q: "Do you support existing hardware?", a: "Yes - most receipt printers, cash drawers, and card terminals." }],
  },
  {
    icon: Database,
    title: "ERP Systems",
    desc: "End-to-end ERP suites unifying finance, ops, inventory and people.",
    tech: ["Modular", "Multi-tenant", "Audit-ready"],
    starting: "$35k",
    process: ["Workshop", "Map", "Build", "Migrate", "Train"],
    faqs: [{ q: "Can you migrate from legacy ERP?", a: "Yes - we run dual-write migrations with zero downtime." }],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative px-6 pb-16 pt-40 md:pt-48">
        <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="" label="Capabilities" />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">
              Six disciplines. <br />
              <span className="italic text-ember">One studio.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-10">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <article className="group grid gap-10 rounded-3xl glass p-8 md:grid-cols-12 md:p-12">
                <div className="md:col-span-4">
                  <div className="grid size-14 place-items-center rounded-2xl bg-ember/15 text-ember">
                    <service.icon className="size-6" />
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-muted-foreground">{service.desc}</p>
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Starting at</div>
                    <div className="mt-1 font-display text-3xl font-extrabold text-ember">{service.starting}</div>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Process</h3>
                  <ol className="mt-4 space-y-3">
                    {service.process.map((step, stepIndex) => (
                      <li key={step} className="flex items-center gap-3 text-sm">
                        <span className="grid size-7 place-items-center rounded-full bg-ember/15 font-mono text-[10px] text-ember">
                          {String(stepIndex + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <h3 className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Tech</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.tech.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">FAQs</h3>
                  <div className="mt-4 space-y-4">
                    {service.faqs.map((faq) => (
                      <details key={faq.q} className="group/d border-b border-white/10 pb-3">
                        <summary className="flex cursor-pointer items-center justify-between text-sm font-medium">
                          {faq.q}
                          <span className="ml-3 text-ember transition-transform group-open/d:rotate-45">+</span>
                        </summary>
                        <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ember transition-transform hover:translate-x-1"
                  >
                    Discuss this service
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
