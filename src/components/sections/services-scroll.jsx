"use client";

import { LazyMotion, domAnimation, m, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Code2, Cpu, Database, Palette, ScanLine, ShoppingBag, Smartphone } from "lucide-react";
import { SectionLabel } from "@/components/site/section-label.jsx";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Responsive company websites, landing pages, and customer portals with editable content, contact forms, analytics, and technical SEO foundations.",
    tag: "Next.js · TanStack · Astro",
    stat: "Responsive",
    statLabel: "desktop, tablet & mobile",
  },
  {
    icon: Cpu,
    title: "Custom Software",
    desc: "Software shaped around your workflow, including dashboards, user roles, approvals, reports, third-party integrations, and task automation.",
    tag: "Node · Go · Rust",
    stat: "Role-based",
    statLabel: "users, access & approvals",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "User flows, wireframes, interactive prototypes, responsive screen designs, and reusable components created for clear and consistent use.",
    tag: "Figma · Motion · Tokens",
    stat: "Accessible",
    statLabel: "clear, usable interfaces",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "Online stores with product catalogues, secure checkout, payment gateways, inventory updates, order management, and customer notifications.",
    tag: "Shopify · Stripe · Medusa",
    stat: "Connected",
    statLabel: "payments, stock & orders",
  },
  {
    icon: ScanLine,
    title: "POS Systems",
    desc: "Point-of-sale systems for retail and hospitality with billing, receipts, stock updates, staff access, and multi-branch sales reporting.",
    tag: "Offline-first · Sync",
    stat: "Offline-ready",
    statLabel: "sales & branch syncing",
  },
  {
    icon: Database,
    title: "ERP Systems",
    desc: "Connected modules for finance, purchasing, inventory, operations, and staff so teams can manage records from one consistent system.",
    tag: "Modular · Multi-tenant",
    stat: "Centralized",
    statLabel: "operations & reporting",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Mobile apps for iOS and Android covering interface design, API integration, device testing, store preparation, and post-launch maintenance.",
    tag: "iOS · Android · React Native",
    stat: "Cross-platform",
    statLabel: "iOS & Android delivery",
  },
];

export function ServicesScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <LazyMotion features={domAnimation} strict>
      <section ref={ref} className="relative bg-navy-deep" style={{ height: "440vh" }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between px-6 pb-10 pt-28">
          <div>
            <SectionLabel index="02" label="Capabilities" />
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              Digital services for <br />
              <span className="text-ember">everyday business needs.</span>
            </h2>
            <Link
              href="/services"
              className="mt-5 inline-flex font-mono text-xs uppercase tracking-[0.18em] text-ember transition-colors hover:text-foreground"
            >
              Explore our web and software services
            </Link>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block">
            Explore what each service includes, from customer-facing websites and mobile apps to software that supports
            sales, inventory, reporting, and daily operations.
          </p>
        </div>

        <m.div style={{ x }} className="flex gap-8 px-6 will-change-transform">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex h-[64vh] w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl glass p-8 transition-transform duration-500 hover:scale-[1.01] md:w-[40vw] md:p-12"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-ember/10 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <div className="grid size-14 place-items-center rounded-2xl bg-ember/15 text-ember">
                  <service.icon className="size-6" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{service.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{service.desc}</p>
                {/* <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-ember/80">{service.tag}</p> */}
                <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">
                  <div>
                    <div className="font-display text-3xl font-bold text-foreground">{service.stat}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {service.statLabel}
                    </div>
                  </div>
                  {/* Temporarily hidden. Uncomment this block and restore the ArrowUpRight import to show the card arrow. */}
                  {/* <div className="grid size-12 place-items-center rounded-full border border-white/10 transition-all group-hover:bg-ember group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-5" />
                  </div> */}
                </div>
              </div>
            </article>
          ))}
        </m.div>
      </div>
      </section>
    </LazyMotion>
  );
}
