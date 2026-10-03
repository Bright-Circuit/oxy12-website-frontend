export const siteUrl = "https://oxy12.com";
export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;
export const founderId = `${siteUrl}/about#founder`;

export const organizationEntity = {
  "@type": "Organization",
  "@id": organizationId,
  name: "OXY12",
  url: `${siteUrl}/`,
  description:
    "OXY12 is a Sri Lanka-based software development company building business websites, custom software, e-commerce platforms, POS, ERP, and mobile apps.",
  foundingDate: "2025",
  foundingLocation: {
    "@type": "Country",
    name: "Sri Lanka",
  },
  founder: {
    "@id": founderId,
  },
  email: "info@oxy12.com",
  telephone: "+94711950429",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61579526365449",
    "https://www.instagram.com/oxy2welve",
    "https://www.tiktok.com/@oxy2welve",
  ],
};

export const websiteEntity = {
  "@type": "WebSite",
  "@id": websiteId,
  url: `${siteUrl}/`,
  name: "OXY12",
  publisher: {
    "@id": organizationId,
  },
  inLanguage: "en",
};

export const founderEntity = {
  "@type": "Person",
  "@id": founderId,
  name: "Mr. Akindu Ramsith",
  jobTitle: "Founder and Software Engineer",
  image: "https://learn.oxy12.com/wp-content/uploads/2026/09/akindu_ramsith_founder.webp",
  worksFor: {
    "@id": organizationId,
  },
  url: `${siteUrl}/about`,
};

export function createWebPageEntity({ type = "WebPage", id, url, name, description, mainEntity }) {
  return {
    "@type": type,
    "@id": id,
    url,
    name,
    description,
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": organizationId,
    },
    ...(mainEntity ? { mainEntity } : {}),
    inLanguage: "en",
  };
}

export function createBreadcrumbEntity({ id, pageName, pageUrl }) {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  };
}

export function createSchemaGraph(...entities) {
  return {
    "@context": "https://schema.org",
    "@graph": entities,
  };
}
