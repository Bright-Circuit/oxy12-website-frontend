import { Cpu, Headphones, LayoutGrid, Search, Shield, Sparkles, Zap } from "lucide-react";
import { Counter } from "@/components/site/counter.jsx";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

const features = [
  { icon: Cpu, title: "Modern Technologies", desc: "Latest frameworks and battle-tested infrastructure." },
  { icon: LayoutGrid, title: "Scalable Solutions", desc: "Architected to grow from MVP to enterprise scale." },
  { icon: Zap, title: "Fast Delivery", desc: "Weekly vertical slices - momentum from week one." },
  { icon: Sparkles, title: "Premium Design", desc: "Award-worthy interfaces backed by design systems." },
  { icon: Search, title: "SEO Optimized", desc: "Core Web Vitals, schema, perf - out of the box." },
  { icon: Shield, title: "Secure Architecture", desc: "OWASP-ready, audited, encrypted at every layer." },
  { icon: Headphones, title: "Dedicated Support", desc: "Always-on support with proactive monitoring." },
];

export function WhyChoose() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid gap-12 md:grid-cols-2">
          <div>
            <Reveal>
              <SectionLabel index="05" label="Why OXY12" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
                Seven reasons clients <span className="text-ember">stay with us.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-8 self-end">
              <div>
                <div className="font-display text-5xl font-extrabold text-ember">
                  <Counter to={50} suffix="+" />
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Projects shipped</div>
              </div>
              <div>
                <div className="font-display text-5xl font-extrabold text-ember">
                  <Counter to={100} suffix="%" />
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Client satisfaction</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-8 transition-all hover:border-ember/40">
                <div className="absolute -right-12 -top-12 size-44 rounded-full bg-ember/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className="relative grid size-12 place-items-center rounded-2xl bg-ember/15 text-ember">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight">{feature.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
