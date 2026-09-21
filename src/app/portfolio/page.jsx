import { PortfolioPageView } from "@/components/pages/portfolio-page.jsx";
import { projects } from "@/components/sections/portfolio.jsx";

export const metadata = {
  title: "Website, E-Commerce & Software Portfolio | OXY12 Sri Lanka",
  description:
    "Explore real OXY12 website, e-commerce, LMS, education, retail, fashion, beverage, aquarium, and local-delivery projects with features, technologies, outcomes, and live links.",
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "OXY12 Client Project Portfolio",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: project.href,
    name: project.name,
    description: project.summary,
  })),
};

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }} />
      <PortfolioPageView />
    </>
  );
}
