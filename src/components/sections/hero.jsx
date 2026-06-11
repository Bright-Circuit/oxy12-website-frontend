"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/site/magnetic-button.jsx";
import { SplitHeading } from "@/components/site/reveal.jsx";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="mesh-bg relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-32"
    >
      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute -left-32 top-1/3 size-[520px] rounded-full bg-ember/30 blur-[140px] animate-pulse-glow"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute -right-32 top-1/4 size-[480px] rounded-full bg-indigo-700/30 blur-[160px]"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 glass px-4 py-2 text-[10px] font-mono uppercase tracking-[0.25em]"
        >
          <Sparkles className="size-3 text-ember" />
          Premium Software Studio - Est. 2025
        </motion.div>

        <SplitHeading
          text="Building Digital Experiences"
          className="text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl"
        />
        <div className="mt-2">
          <SplitHeading
            text="That Feel Like The Future"
            className="text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-pretty mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          We design and develop websites, software platforms, and digital products that transform businesses into industry leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/contact">
            <MagneticButton variant="primary" className="gap-2">
              Start Your Project
              <ArrowRight className="ml-2 size-4" />
            </MagneticButton>
          </Link>
          <Link href="/portfolio">
            <MagneticButton variant="ghost">View Our Work</MagneticButton>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute bottom-[-10%] left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="octagon size-[480px] bg-gradient-to-br from-ember/60 to-indigo-500/20 blur-2xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -8 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 left-6 hidden w-64 animate-float-slow rounded-2xl glass p-4 shadow-2xl shadow-black/40 xl:block"
      >
        <div className="mb-3 flex gap-1.5">
          <div className="size-2.5 rounded-full bg-red-500/60" />
          <div className="size-2.5 rounded-full bg-yellow-500/60" />
          <div className="size-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="space-y-2">
          <div className="h-1.5 w-3/4 rounded bg-white/15" />
          <div className="h-1.5 w-1/2 rounded bg-white/10" />
          <div className="mt-3 h-12 rounded bg-gradient-to-br from-ember/40 to-transparent" />
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">deploy.success</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-12 right-6 hidden w-72 animate-float-slow rounded-2xl glass p-5 font-mono text-[11px] leading-relaxed shadow-2xl shadow-black/40 xl:block"
        style={{ animationDelay: "1.5s" }}
      >
        <p className="text-ember">const oxy12 = future();</p>
        <p className="text-muted-foreground">await oxy12.build(</p>
        <p className="pl-4 text-foreground/80">&quot;digital advantage&quot;</p>
        <p className="text-muted-foreground">);</p>
        <p className="mt-2 text-foreground/40">{`// -> shipped`}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
