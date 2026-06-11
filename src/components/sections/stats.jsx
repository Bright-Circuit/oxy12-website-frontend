import { Counter } from "@/components/site/counter.jsx";
import { Reveal } from "@/components/site/reveal.jsx";

const stats = [
  { n: 150, suffix: "+", label: "Projects Completed" },
  { n: 50, suffix: "+", label: "Global Clients" },
  { n: 8, suffix: "+", label: "Years Excellence" },
  { n: 99, suffix: "%", label: "Client Satisfaction" },
];

export function Stats() {
  return (
    <section className="relative border-y border-white/5 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="border-l border-ember/40 pl-6">
                <div className="font-display text-5xl font-extrabold tracking-tighter text-foreground md:text-7xl">
                  <Counter to={stat.n} suffix={stat.suffix} />
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:text-xs">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
