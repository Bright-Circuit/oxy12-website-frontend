"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

const steps = [
  { n: "01", t: "Discovery", d: "We unpack the problem space, audit existing systems, and align on outcomes." },
  { n: "02", t: "Planning", d: "Architecture decisions, scope, milestones, and a sharp roadmap to ship." },
  { n: "03", t: "Design", d: "Wireframes, prototypes, motion direction and a tight feedback loop." },
  { n: "04", t: "Development", d: "Engineers ship vertical slices weekly - production-quality from day one." },
  { n: "05", t: "Testing", d: "Automation, QA passes, perf budgets, and security audits before launch." },
  { n: "06", t: "Launch", d: "Coordinated rollout with monitoring, growth instrumentation, and support." },
];

export function Process() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel index="03" label="The Journey" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-balance max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
            Six disciplined steps from <span className="text-ember">first call to launch day.</span>
          </h2>
        </Reveal>

        <div className="mt-20 space-y-6">
          {steps.map((step, index) => (
            <Step key={step.n} index={index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({ step, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const x = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <Reveal delay={index * 0.04}>
      <motion.div
        ref={ref}
        className="group relative grid grid-cols-[auto_1fr] items-center gap-6 overflow-hidden border-b border-white/5 py-8 md:grid-cols-[1fr_2fr_auto] md:py-12"
      >
        <motion.div
          style={{ x }}
          className="pointer-events-none absolute -bottom-6 -left-4 select-none font-display text-[10rem] font-extrabold leading-none tracking-tighter text-white/[0.04] md:text-[14rem]"
          aria-hidden
        >
          {step.n}
        </motion.div>
        <div className="relative font-mono text-xs uppercase tracking-[0.3em] text-ember">{step.n}</div>
        <h3 className="relative font-display text-3xl font-bold tracking-tight transition-colors group-hover:text-ember md:text-5xl">
          {step.t}
        </h3>
        <p className="relative max-w-md text-sm leading-relaxed text-muted-foreground md:text-right md:text-base">{step.d}</p>
      </motion.div>
    </Reveal>
  );
}
