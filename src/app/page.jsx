import { Hero } from "@/components/sections/hero.jsx";
import { About } from "@/components/sections/about.jsx";
import { ServicesScroll } from "@/components/sections/services-scroll.jsx";
import { Process } from "@/components/sections/process.jsx";
// Temporarily hidden while the main-domain blog becomes the primary editorial destination.
// import { BlogHighlights } from "@/components/sections/blog-highlights.jsx";
import { WhyChoose } from "@/components/sections/why-choose.jsx";
import { Testimonials } from "@/components/sections/testimonials.jsx";
import { JsonLd } from "@/components/site/json-ld.jsx";
import {
  createSchemaGraph,
  createWebPageEntity,
  organizationEntity,
  websiteEntity,
} from "@/lib/structured-data.js";
// import { Stats } from "@/components/sections/stats.jsx";
// import { ContactCta } from "@/components/sections/contact-cta.jsx";

const homeSchema = createSchemaGraph(
  organizationEntity,
  websiteEntity,
  createWebPageEntity({
    id: "https://oxy12.com/#webpage",
    url: "https://oxy12.com/",
    name: "Software Development Company in Sri Lanka | OXY12",
    description:
      "OXY12 is a Sri Lanka-based software development company building business websites, custom software, e-commerce platforms, POS, ERP, and mobile apps.",
  }),
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <Hero />
      <About />
      <ServicesScroll />
      <Process />
      {/* Temporarily hidden. Uncomment the import above and this component to restore OXY12 Learn highlights. */}
      {/* <BlogHighlights /> */}
      <WhyChoose />
      <Testimonials />
      {/* Temporarily hidden. Uncomment the imports above and components below to restore them. */}
      {/* <Stats /> */}
      {/* <ContactCta /> */}
    </>
  );
}
