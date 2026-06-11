import { Hero } from "@/components/sections/hero.jsx";
import { About } from "@/components/sections/about.jsx";
import { ServicesScroll } from "@/components/sections/services-scroll.jsx";
import { Process } from "@/components/sections/process.jsx";
import { Portfolio } from "@/components/sections/portfolio.jsx";
import { WhyChoose } from "@/components/sections/why-choose.jsx";
import { Testimonials } from "@/components/sections/testimonials.jsx";
import { Stats } from "@/components/sections/stats.jsx";
import { ContactCta } from "@/components/sections/contact-cta.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServicesScroll />
      <Process />
      <Portfolio />
      <WhyChoose />
      <Testimonials />
      <Stats />
      <ContactCta />
    </>
  );
}
