import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactCta } from "@/components/sections/contact-cta.jsx";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

export const metadata = {
  title: "Contact - OXY12",
  description: "Start your project with OXY12. We reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative px-6 pb-16 pt-40 md:pt-48">
        <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="" label="Get In Touch" />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">
              Let&apos;s build something <span className="italic text-ember">amazing.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <ContactCta />

      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            { icon: Phone, label: "Phone", value: "+94 71 195 0429", href: "tel:+94711950429" },
            { icon: Mail, label: "Email", value: "info@oxy12.com", href: "mailto:info@oxy12.com" },
            // { icon: MapPin, label: "Studio", value: "Colombo, Sri Lanka" },
            { icon: Clock, label: "Hours", value: "Mon-Fri · 9am-6pm" },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <div className="h-full rounded-3xl glass p-6">
                <item.icon className="size-5 text-ember" />
                <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} className="mt-1 block font-display text-lg font-medium hover:text-ember">
                    {item.value}
                  </a>
                ) : (
                  <div className="mt-1 font-display text-lg font-medium">{item.value}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-7xl">
          <Reveal>
            <div className="overflow-hidden rounded-3xl glass">
              <iframe
                title="OXY12 Studio Location"
                src="https://www.google.com/maps?q=Colombo,Sri+Lanka&output=embed"
                width="100%"
                height="420"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.6)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
