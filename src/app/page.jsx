import { Hero } from "@/components/sections/hero.jsx";
import { About } from "@/components/sections/about.jsx";
import { ServicesScroll } from "@/components/sections/services-scroll.jsx";
import { Process } from "@/components/sections/process.jsx";
import { BlogHighlights } from "@/components/sections/blog-highlights.jsx";
import { WhyChoose } from "@/components/sections/why-choose.jsx";
import { Testimonials } from "@/components/sections/testimonials.jsx";
// import { Stats } from "@/components/sections/stats.jsx";
// import { ContactCta } from "@/components/sections/contact-cta.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServicesScroll />
      <Process />
      <BlogHighlights />
      <WhyChoose />
      <Testimonials />
      {/* Temporarily hidden. Uncomment the imports above and components below to restore them. */}
      {/* <Stats /> */}
      {/* <ContactCta /> */}
    </>
  );
}
