import { Stats } from "@/components/sections/stats.jsx";
import { ContactCta } from "@/components/sections/contact-cta.jsx";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

export const metadata = {
  title: "About - OXY12",
  description:
    "Meet OXY12: a premium software studio of engineers and designers building digital advantages since 2017.",
};

const values = [
  { t: "Craft over hype", d: "We obsess over what most people will not notice. That is what makes it feel right." },
  { t: "Outcomes over outputs", d: "Shipping is not the goal - value is. We are paid to move metrics, not ship pixels." },
  { t: "Senior or nothing", d: "No juniors learning on your project. Every engagement is led by specialists." },
  { t: "Honest counsel", d: "We say no. Often. Because the best work comes from sharp, honest decisions." },
];

const timeline = [
  { y: "2017", t: "OXY12 founded in Colombo." },
  { y: "2019", t: "First enterprise ERP shipped across 12 countries." },
  { y: "2021", t: "Studio expanded to a multidisciplinary 25-person team." },
  { y: "2023", t: "Crossed 100 projects and launched our design language v3." },
  { y: "2026", t: "Now building the next generation of premium digital products." },
];

const team = [
  { name: "Ravindu Perera", role: "Founder · Director", initials: "RP" },
  { name: "Nayana Silva", role: "Head of Design", initials: "NS" },
  { name: "Kasun de Alwis", role: "Principal Engineer", initials: "KD" },
  { name: "Imali Jayawardena", role: "Head of Product", initials: "IJ" },
  { name: "Tharindu Bandara", role: "Lead UX Architect", initials: "TB" },
  { name: "Sahan Wickrama", role: "Engineering Manager", initials: "SW" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative px-6 pb-16 pt-40 md:pt-48">
        <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="01" label="Studio" />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">
              A studio for the <span className="italic text-ember">next generation</span> of digital products.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              OXY12 is a team of engineers, designers and strategists building software that feels inevitable. We partner with founders and enterprise leaders who refuse to ship generic.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl glass p-10">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-ember">Our Mission</h3>
              <p className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Build software that creates a measurable, compounding advantage for every partner we work with.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl glass p-10">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-ember">Our Vision</h3>
              <p className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                A future where every digital product feels engineered, intentional, and a little bit magical.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="02" label="Values" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
              The principles we will not trade.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.t} delay={index * 0.06}>
                <div className="rounded-3xl glass p-8">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{value.t}</h3>
                  <p className="mt-3 text-muted-foreground">{value.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="03" label="Timeline" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
              Eight years, <span className="text-ember">one obsession.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-5">
            {timeline.map((entry, index) => (
              <Reveal key={entry.y} delay={index * 0.06}>
                <div className="border-l border-ember/40 pl-5">
                  <div className="font-display text-3xl font-extrabold text-ember">{entry.y}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="04" label="Team" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
              The people who ship the work.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05}>
                <div className="group flex items-center gap-5 rounded-3xl glass p-6 transition-all hover:border-ember/40">
                  <div className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-ember to-orange-700 font-display text-base font-bold text-primary-foreground">
                    {member.initials}
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold">{member.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{member.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <ContactCta />
    </>
  );
}
