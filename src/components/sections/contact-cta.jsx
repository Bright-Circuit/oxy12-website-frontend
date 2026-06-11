"use client";

import { useState } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { MagneticButton } from "@/components/site/magnetic-button.jsx";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

const services = [
  "Website Development",
  "Custom Software",
  "UI/UX Design",
  "E-Commerce",
  "POS Systems",
  "ERP Systems",
];

export function ContactCta() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = async (event) => {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden px-6 py-32 md:py-48">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 size-[600px] -translate-x-1/2 rounded-full bg-ember/20 blur-[160px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <SectionLabel index="07" label="Get In Touch" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
                Let&apos;s build something <span className="italic text-ember">amazing.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Whether it&apos;s a website, a custom platform, or an idea you cannot yet describe - start the conversation. We reply within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 space-y-5">
                <ContactItem icon={Phone} label="Direct line" value="+94 71 195 0429" href="tel:+94711950429" />
                <ContactItem icon={Mail} label="General inquiry" value="info@oxy12.com" href="mailto:info@oxy12.com" />
                <ContactItem icon={MapPin} label="Studio" value="Colombo, Sri Lanka" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-3xl glass p-8 md:p-12">
              {submitted ? (
                <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                  <div className="ember-glow grid size-20 place-items-center rounded-full bg-ember/20 text-ember">
                    <Check className="size-10" />
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-bold tracking-tight">Message received.</h3>
                  <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out. A senior strategist will be in touch within 24 hours to set up a discovery call.
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handle}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Company" name="company" />
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Service</label>
                    <select
                      name="service"
                      defaultValue=""
                      className="w-full rounded-xl border border-white/10 bg-navy-deep/60 px-4 py-3.5 text-sm transition-colors focus:border-ember focus:outline-none"
                    >
                      <option value="" disabled>
                        Pick one...
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-navy-deep/60 px-4 py-3.5 text-sm transition-colors focus:border-ember focus:outline-none"
                    />
                  </div>
                  <MagneticButton type="submit" variant="primary" className="w-full">
                    {loading ? "Sending..." : "Send Inquiry"}
                  </MagneticButton>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <div className="space-y-2">
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-navy-deep/60 px-4 py-3.5 text-sm transition-colors focus:border-ember focus:outline-none"
      />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="grid size-12 place-items-center rounded-full glass text-ember">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="mt-0.5 font-display text-lg font-medium">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block transition-colors hover:text-ember">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}
