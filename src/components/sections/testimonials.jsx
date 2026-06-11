"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

const testimonials = [
  {
    name: "Maya Fernandez",
    role: "CTO, Aura Payments",
    initials: "MF",
    quote:
      "OXY12 shipped what felt impossible - a fintech platform that is faster and more elegant than anything in our category.",
  },
  {
    name: "Daniel Cho",
    role: "Founder, Lume",
    initials: "DC",
    quote: "Every interaction feels intentional. They do not just build software, they sculpt experiences.",
  },
  {
    name: "Aisha Rahman",
    role: "Head of Product, Helios",
    initials: "AR",
    quote: "Engineering rigor with design taste. Rare combination. We extended the engagement twice.",
  },
  {
    name: "Lucas Pereira",
    role: "COO, Nova Group",
    initials: "LP",
    quote: "Our POS rollout across 40 outlets was flawless. Zero downtime, full team buy-in.",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const left = [testimonials[0], testimonials[2]];
  const right = [testimonials[1], testimonials[3]];

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-deep px-6 py-32 md:py-48">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <Reveal>
            <SectionLabel index="06" label="Voices" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              The kind of work that makes <span className="text-ember">clients say things.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div style={{ y: y1 }} className="space-y-6">
            {left.map((testimonial) => (
              <Card key={testimonial.name} testimonial={testimonial} />
            ))}
          </motion.div>
          <motion.div style={{ y: y2 }} className="space-y-6 md:mt-24">
            {right.map((testimonial) => (
              <Card key={testimonial.name} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ testimonial }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl glass p-8 md:p-10">
      <Quote className="size-8 text-ember/60" />
      <p className="text-balance mt-6 font-display text-xl leading-snug tracking-tight md:text-2xl">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
        <div className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-ember to-orange-700 font-display text-sm font-bold text-primary-foreground">
          {testimonial.initials}
        </div>
        <div>
          <div className="font-medium">{testimonial.name}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
