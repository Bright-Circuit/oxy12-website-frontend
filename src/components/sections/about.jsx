import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

const phases = [
  { n: "01", title: "Innovation", desc: "We chase what has not shipped yet - experimenting until it feels inevitable." },
  { n: "02", title: "Strategy", desc: "Sharp positioning, real metrics, decisions that compound for years." },
  { n: "03", title: "Design", desc: "Type, motion, restraint. Interfaces that get out of the way." },
  { n: "04", title: "Development", desc: "Performant, scalable, beautifully architected code at every layer." },
  { n: "05", title: "Growth", desc: "We stay after launch - measuring, iterating, compounding momentum." },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionLabel index="01" label="About OXY12" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              We do not just build software. <span className="text-ember">We build digital advantages.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Born in the age of rapid innovation, OXY12 is a team of engineers and designers bridging the gap between complex systems and effortless human experiences.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-ember via-white/10 to-transparent" />
          <ol className="space-y-10">
            {phases.map((phase, index) => (
              <Reveal key={phase.n} delay={index * 0.08}>
                <li className="relative pl-20">
                  <div className="absolute left-0 top-0 grid size-12 place-items-center rounded-full glass font-mono text-xs text-ember">
                    {phase.n}
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{phase.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">{phase.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
