"use client";

import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

const testimonials = [
  {
    name: "Mr. Kevin Kumara",
    role: "Founder, Northspire Education",
    initials: "KK",
    quote:
      "A smooth development process and an outstanding final product. Thank you for bringing our vision to life.",
  },
  {
    name: "Ms. Shaira Hussein",
    role: "Owner, SH Womens",
    initials: "SH",
    quote:
      "I had a great experience working with Oxy12 on the development of my website, www.shwomens.com. From the very beginning, their customer service was outstanding. The team was always friendly, professional, and extremely responsive, answering all my questions promptly and keeping me updated throughout the process. They delivered the project much faster than I expected without compromising on quality. Their pricing was also very reasonable, offering excellent value for the level of service provided. I’m very happy with the final result. I would highly recommend Oxy12 to anyone looking for a reliable and efficient web development company.",
  },
  {
    name: "Mr.Sujith Senevirathna",
    role: "Chairman, Global Star Importers (Pvt) Ltd",
    initials: "SS",
    quote: "Engineering rigor with design taste. Rare combination. We extended the engagement twice.",
  },
  {
    name: "Meet the Meatz",
    role: "Facebook Recommendation",
    initials: "MM",
    quote:
      "Oxy12 team is a great team. They did our website, and it is absolutely amazing and a very professional site. I highly recommend Oxy12. Keep up the great work.",
  },
  {
    name: "Bigtify",
    role: "Facebook Recommendation",
    initials: "BI",
    quote:
      "Thank you, Oxy12, for the excellent work and support. We’re very happy with the result and highly recommend your services. Looking forward to working with you again!",
  },
  {
    name: "AH Deliveryah",
    role: "Facebook Recommendation",
    initials: "AH",
    quote: "Well service and 100% customer support.",
  },
  {
    name: "Blue Fin Aqua",
    role: "Facebook Recommendation",
    initials: "BF",
    quote: "Best service ever. Recommended service and friendly service.",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const left = testimonials.filter((_, index) => index % 2 === 0);
  const right = testimonials.filter((_, index) => index % 2 !== 0);

  return (
    <LazyMotion features={domAnimation} strict>
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
          <m.div style={{ y: reduceMotion ? 0 : y1 }} className="space-y-6">
            {left.map((testimonial) => (
              <Card key={testimonial.name} testimonial={testimonial} />
            ))}
          </m.div>
          <m.div style={{ y: reduceMotion ? 0 : y2 }} className="space-y-6 md:mt-24">
            {right.map((testimonial) => (
              <Card key={testimonial.name} testimonial={testimonial} />
            ))}
          </m.div>
        </div>
      </div>
      </section>
    </LazyMotion>
  );
}

function Card({ testimonial }) {
  return (
    <figure className="group relative overflow-hidden rounded-3xl glass p-8 md:p-10">
      <Quote className="size-8 text-ember/60" aria-hidden="true" />
      <blockquote>
        <p className="text-balance mt-6 font-display text-xl leading-snug tracking-tight md:text-2xl">
          &quot;{testimonial.quote}&quot;
        </p>
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
        <div
          aria-hidden="true"
          className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-ember to-orange-700 font-display text-sm font-bold text-primary-foreground"
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="font-medium">{testimonial.name}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{testimonial.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
