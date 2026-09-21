import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

// Previous process-focused About content is preserved here for easy restoration.
/* const phases = [
  {
    n: "01",
    title: "Understand the Need",
    desc: "We document the users, daily workflows, current tools, pain points, and the outcome the project needs to achieve.",
  },
  {
    n: "02",
    title: "Define the Scope",
    desc: "Features, user roles, integrations, content needs, priorities, responsibilities, and delivery stages are agreed before development.",
  },
  {
    n: "03",
    title: "Design and Validate",
    desc: "User flows, wireframes, responsive screens, and clickable prototypes are reviewed before engineering begins.",
  },
  {
    n: "04",
    title: "Build and Test",
    desc: "The interface, backend, database, and integrations are built in testable stages with feedback and quality checks throughout.",
  },
  {
    n: "05",
    title: "Launch and Support",
    desc: "We deploy the product, verify its key workflows, provide handover guidance, and support future maintenance or improvements.",
  },
]; */

const aboutDetails = [
  {
    n: "01",
    title: "Who We Work With",
    desc: "We support small businesses, growing teams, and established organizations that need a new website, an online store, a mobile app, or software tailored to their operations.",
  },
  {
    n: "02",
    title: "Problems We Help Solve",
    desc: "Our work addresses repetitive manual tasks, disconnected tools, difficult-to-manage websites, unclear customer journeys, limited reporting, and workflows that no longer fit the business.",
  },
  {
    n: "03",
    title: "What We Deliver",
    desc: "Each engagement can include a requirements summary, approved interface designs, a tested digital product, deployment configuration, essential documentation, and practical handover guidance.",
  },
  {
    n: "04",
    title: "How Decisions Are Made",
    desc: "Features are prioritized by user need, business value, maintainability, budget, and delivery risk. Important trade-offs are explained before they affect cost or scope.",
  },
  {
    n: "05",
    title: "After the Launch",
    desc: "When ongoing support is required, we can handle fixes, security and dependency updates, content changes, monitoring, performance reviews, and planned product improvements.",
  },
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
              From business needs to <span className="text-ember">reliable digital tools.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              OXY12 plans, designs, develops, and supports websites and software for businesses. We begin by understanding
              how people work, then turn those requirements into tested interfaces, systems, integrations, and launch-ready
              documentation.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-ember via-white/10 to-transparent" />
          <ol className="space-y-10">
            {aboutDetails.map((phase, index) => (
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
