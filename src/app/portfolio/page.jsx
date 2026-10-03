import { PortfolioPageView } from "@/components/pages/portfolio-page.jsx";
import { projects } from "@/components/sections/portfolio.jsx";
import { JsonLd } from "@/components/site/json-ld.jsx";
import {
  createBreadcrumbEntity,
  createSchemaGraph,
  createWebPageEntity,
  organizationEntity,
  websiteEntity,
} from "@/lib/structured-data.js";

export const metadata = {
  title: {
    absolute: "Web & Software Development Portfolio Sri Lanka | OXY12",
  },
  description:
    "Review OXY12 website, e-commerce, and software projects across education, retail, food, fashion, and delivery, with features, technologies, and outcomes.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Web & Software Development Portfolio Sri Lanka | OXY12",
    description:
      "Review OXY12 website, e-commerce, and software projects across education, retail, food, fashion, and delivery, with features, technologies, and outcomes.",
    url: "https://oxy12.com/portfolio",
    siteName: "OXY12",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Web & Software Development Portfolio Sri Lanka | OXY12",
    description:
      "Review OXY12 website, e-commerce, and software projects across education, retail, food, fashion, and delivery, with features, technologies, and outcomes.",
  },
};

const projectId = (name) =>
  `https://oxy12.com/portfolio#${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
const projectEntities = projects.map((project) => ({
  "@type": project.name === "Northspire Education" ? "SoftwareApplication" : "WebSite",
  "@id": projectId(project.name),
  name: project.name,
  description: project.summary,
  url: project.href,
  creator: {
    "@id": "https://oxy12.com/#organization",
  },
  keywords: project.tech.join(", "),
}));
const portfolioListEntity = {
  "@type": "ItemList",
  "@id": "https://oxy12.com/portfolio#project-list",
  name: "OXY12 Client Project Portfolio",
  numberOfItems: projectEntities.length,
  itemListElement: projectEntities.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@id": project["@id"],
    },
  })),
};
const portfolioSchema = createSchemaGraph(
  organizationEntity,
  websiteEntity,
  createWebPageEntity({
    type: "CollectionPage",
    id: "https://oxy12.com/portfolio#webpage",
    url: "https://oxy12.com/portfolio",
    name: "Web & Software Development Portfolio Sri Lanka | OXY12",
    description:
      "Review OXY12 website, e-commerce, and software projects across education, retail, food, fashion, and delivery, with features, technologies, and outcomes.",
    mainEntity: {
      "@id": portfolioListEntity["@id"],
    },
  }),
  portfolioListEntity,
  ...projectEntities,
  createBreadcrumbEntity({
    id: "https://oxy12.com/portfolio#breadcrumb",
    pageName: "Portfolio",
    pageUrl: "https://oxy12.com/portfolio",
  }),
);

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <PortfolioPageView />
    </>
  );
}
