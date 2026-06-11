"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Code2, Cpu, Database, Palette, ScanLine, ShoppingBag } from "lucide-react";
import { SectionLabel } from "@/components/site/section-label.jsx";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Award-worthy marketing sites and web platforms built on bleeding-edge stacks.",
    tag: "Next.js · TanStack · Astro",
    stat: "120ms",
    statLabel: "avg. LCP",
  },
  {
    icon: Cpu,
    title: "Custom Software",
    desc: "Bespoke enterprise systems engineered to solve complex business problems.",
    tag: "Node · Go · Rust",
    stat: "99.99%",
    statLabel: "uptime SLO",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Human-centric design systems that combine beauty with effortless usability.",
    tag: "Figma · Motion · Tokens",
    stat: "4.9 / 5",
    statLabel: "user rating",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "Conversion-tuned storefronts with deep integrations and headless commerce.",
    tag: "Shopify · Stripe · Medusa",
    stat: "+38%",
    statLabel: "conversion lift",
  },
  {
    icon: ScanLine,
    title: "POS Systems",
    desc: "Modern point-of-sale built for hospitality, retail, and multi-branch operations.",
    tag: "Offline-first · Sync",
    stat: "<300ms",
    statLabel: "ticket time",
  },
  {
    icon: Database,
    title: "ERP Systems",
    desc: "End-to-end ERP suites unifying finance, ops, inventory and people.",
    tag: "Modular · Multi-tenant",
    stat: "6 wk",
    statLabel: "to MVP",
  },
  {
    icon: Database,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps with seamless performance and stunning UI.",
    tag: "iOS · Android · React Native",
    stat: "6 wk",
    statLabel: "to MVP",
  },
];

export function ServicesScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <section ref={ref} className="relative bg-navy-deep" style={{ height: "440vh" }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between px-6 pb-10 pt-28">
          <div>
            <SectionLabel index="02" label="Capabilities" />
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              Premium services <br />
              <span className="text-ember">engineered for scale.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block">
            Six disciplines, one studio. Each capability is delivered by senior specialists with skin in the game.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 will-change-transform">
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
                  0{index + 1} / 06
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{service.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{service.desc}</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-ember/80">{service.tag}</p>
                <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">
                  <div>
                    <div className="font-display text-3xl font-bold text-foreground">{service.stat}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {service.statLabel}
                    </div>
                  </div>
                  <div className="grid size-12 place-items-center rounded-full border border-white/10 transition-all group-hover:bg-ember group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
