import Link from "next/link";
import { ArrowUpRight, Code2, Cpu, Database, Palette, ScanLine, ShoppingBag, Smartphone } from "lucide-react";
// import { ContactCta } from "@/components/sections/contact-cta.jsx";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";
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
    absolute: "Web & Software Development Services Sri Lanka | OXY12",
  },
  description:
    "Explore OXY12 website, custom software, UI/UX, e-commerce, POS, ERP, and Flutter app development services for businesses in Sri Lanka and beyond.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web & Software Development Services Sri Lanka | OXY12",
    description:
      "Explore OXY12 website, custom software, UI/UX, e-commerce, POS, ERP, and Flutter app development services for businesses in Sri Lanka and beyond.",
    url: "https://oxy12.com/services",
    siteName: "OXY12",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Web & Software Development Services Sri Lanka | OXY12",
    description:
      "Explore OXY12 website, custom software, UI/UX, e-commerce, POS, ERP, and Flutter app development services for businesses in Sri Lanka and beyond.",
  },
};

const services = [
  {
    id: "website-development",
    icon: Code2,
    title: "Website Development",
    desc: "We create responsive business websites with WordPress or custom Next.js development, clear service content, contact forms, content management, integrations, and practical deployment support.",
    whoFor:
      "Businesses, professional services, educational organizations, and growing brands that need a new website or want to replace a site that is slow, outdated, difficult to update, or unclear on mobile devices.",
    included: [
      "Requirements and content-structure planning",
      "Responsive page design for desktop, tablet, and mobile",
      "Content management and administrator access where required",
      "Contact forms, analytics setup, and technical SEO foundations",
      "Testing, deployment, and basic handover guidance",
    ],
    features: ["Service and product pages", "Blog or news publishing", "Inquiry and contact workflows", "Editable page content"],
    tech: ["WordPress", "Next.js", "Spring Boot", "REST APIs"],
    process: ["Discovery", "Content structure", "UI design", "Development", "Testing and launch"],
    deliverables: ["Production-ready website", "Responsive page templates", "CMS or admin setup", "Deployment and handover notes"],
    relatedLinks: [
      { href: "/portfolio#kci-education-lanka", label: "KCI Education Lanka" },
      { href: "/portfolio#natural-fruit-product", label: "Natural Fruit Product" },
    ],
    faqs: [
      {
        q: "Should we use WordPress or Next.js?",
        a: "WordPress is often suitable when frequent content editing is the priority. Next.js is useful for highly customized interfaces, integrations, and application-like experiences. We recommend an option after reviewing your content, features, budget, and maintenance needs.",
      },
      {
        q: "How is the website timeline decided?",
        a: "The schedule depends on the number of pages, content readiness, design complexity, integrations, and review time. We confirm the stages and expected timeline after the initial scope is agreed.",
      },
    ],
  },
  {
    id: "custom-software-development",
    icon: Cpu,
    title: "Custom Software Development",
    desc: "We develop browser-based software around the way your organization actually works, replacing repetitive manual tasks and disconnected spreadsheets with structured workflows and reliable records.",
    whoFor:
      "Teams that have outgrown generic software or need a system for approvals, customer records, staff access, reporting, document handling, scheduling, inventory, or another organization-specific workflow.",
    included: [
      "Workflow mapping and functional requirements",
      "User roles, permissions, and secure authentication",
      "Responsive dashboards and task-focused interfaces",
      "Database design, APIs, reports, and third-party integrations",
      "Testing, deployment planning, documentation, and support",
    ],
    features: ["Role-based dashboards", "Approval workflows", "Searchable business records", "Reports and data exports"],
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "REST APIs"],
    process: ["Requirements", "System design", "Prototype", "Development", "Testing and deployment"],
    deliverables: ["Working web application", "Configured user roles", "Database and integrations", "Technical handover information"],
    relatedLinks: [{ href: "/portfolio#northspire-education", label: "Northspire Education" }],
    faqs: [
      {
        q: "Can custom software connect to our existing tools?",
        a: "It can when those tools provide a suitable API, data export, or supported integration method. We review documentation, access requirements, data ownership, and limitations before confirming an integration.",
      },
      {
        q: "Can the system grow after the first release?",
        a: "Yes. We can plan the first release around the highest-priority workflows and organize the system so approved modules and integrations can be added in later stages.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    desc: "We organize screens, navigation, forms, and interactions so users can understand a digital product and complete important tasks without unnecessary confusion.",
    whoFor:
      "Businesses planning a new website or application, and teams that need to improve an existing product with clearer navigation, more consistent screens, better mobile behavior, or a reusable design system.",
    included: [
      "Existing-product review or new-product discovery",
      "Information architecture and user-flow planning",
      "Wireframes for key pages and workflows",
      "Responsive interface design and clickable prototypes",
      "Reusable components and developer handover specifications",
    ],
    features: ["User flows", "Responsive wireframes", "Interactive prototypes", "Reusable interface components"],
    tech: ["Figma", "Design systems", "Component specifications", "Accessibility review"],
    process: ["Research", "User flows", "Wireframes", "Visual design", "Prototype and handover"],
    deliverables: ["Approved screen designs", "Clickable prototype", "Component library", "Design notes for development"],
    relatedLinks: [{ href: "/portfolio", label: "See OXY12 project examples" }],
    faqs: [
      {
        q: "Do you design before development begins?",
        a: "Yes. Reviewing user flows, wireframes, and key screens before development reduces ambiguity and makes it easier to identify missing states or confusing interactions early.",
      },
      {
        q: "Can you improve an existing interface?",
        a: "Yes. We can review the current structure and important workflows, identify usability and consistency issues, and redesign selected screens or the full product depending on the agreed scope.",
      },
    ],
  },
  {
    id: "ecommerce-development",
    icon: ShoppingBag,
    title: "E-Commerce Development",
    desc: "We build online stores that help customers find products, understand prices and options, complete checkout, and receive clear order information while giving staff practical order-management tools.",
    whoFor:
      "Retailers, product brands, wholesalers, and service providers that need to sell online, replace a limited store, or connect product, payment, inventory, and order workflows.",
    included: [
      "Store structure, product catalogue, and customer-flow planning",
      "Responsive storefront and product-page design",
      "Cart, checkout, payment-gateway, and order setup",
      "Inventory, customer notifications, and administrator workflows",
      "Testing, launch support, and store-management guidance",
    ],
    features: ["Products and variations", "Cart and secure checkout", "Payment gateway integration", "Orders and stock management"],
    tech: ["WordPress", "WooCommerce", "Next.js", "Spring Boot"],
    process: ["Store discovery", "Catalogue planning", "Design", "Development and integration", "Testing and launch"],
    deliverables: ["Customer storefront", "Store administration setup", "Payment and order workflow", "Launch and handover guidance"],
    relatedLinks: [
      { href: "/portfolio#meet-the-meatzzz", label: "Meet the Meatzzz" },
      { href: "/portfolio#blue-fin-aqua", label: "Blue Fin Aqua" },
      { href: "/portfolio#sh-womens", label: "SH Womens" },
      { href: "/portfolio#ah-delivery", label: "AH Delivery" },
    ],
    faqs: [
      {
        q: "When is WooCommerce suitable?",
        a: "WooCommerce is often suitable for stores that need WordPress content management and established commerce features. A custom Next.js and Spring Boot solution may fit more specialized workflows or integrations.",
      },
      {
        q: "Can you connect a local payment gateway?",
        a: "We can integrate a gateway when the provider supports the selected platform and supplies the required account access and technical documentation. Compatibility is checked during planning.",
      },
    ],
  },
  {
    id: "pos-systems",
    icon: ScanLine,
    title: "POS Systems",
    desc: "We develop point-of-sale software that records transactions, supports day-to-day billing, and connects sales information with products, stock, staff access, and management reporting.",
    whoFor:
      "Retail shops, restaurants, service counters, and multi-branch operations that need a POS workflow adapted to their products, staff roles, reporting requirements, or existing business system.",
    included: [
      "Sales workflow and hardware-requirement review",
      "Product, price, tax, discount, and receipt configuration",
      "Staff accounts, permissions, shifts, and activity records",
      "Inventory updates, branch data, and management reports",
      "Pilot testing, rollout planning, and user guidance",
    ],
    features: ["Fast billing workflow", "Receipts and transaction history", "Stock updates", "Branch and staff reports"],
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "Offline synchronization"],
    process: ["Workflow review", "System design", "Development", "Pilot testing", "Branch rollout"],
    deliverables: ["POS application", "Configured products and roles", "Reporting workflows", "Deployment and operating guidance"],
    relatedLinks: [{ href: "/portfolio", label: "See OXY12 project examples" }],
    faqs: [
      {
        q: "Can the POS continue during an internet interruption?",
        a: "Offline operation can be designed for selected sales workflows. The exact behavior, local storage, conflict handling, and later synchronization must be planned around the business rules and deployment environment.",
      },
      {
        q: "Will it work with our existing hardware?",
        a: "Compatibility depends on the device model, operating system, connection method, and available drivers or APIs. We review printers, scanners, cash drawers, and other devices before confirming support.",
      },
    ],
  },
  {
    id: "erp-systems",
    icon: Database,
    title: "ERP Systems",
    desc: "We develop modular ERP software that brings important operational records into one controlled system, reducing duplicate data entry and improving visibility across departments.",
    whoFor:
      "Organizations that need connected workflows for purchasing, suppliers, stock, sales, finance-related records, staff activity, approvals, reporting, or multiple branches.",
    included: [
      "Department and workflow analysis",
      "Module, role, permission, and approval design",
      "Shared records, dashboards, reports, and audit history",
      "Data-import and integration planning",
      "Phased testing, training support, rollout, and maintenance planning",
    ],
    features: ["Purchasing and suppliers", "Inventory and stock movements", "Approvals and audit records", "Operational reports"],
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "REST APIs"],
    process: ["Operational workshop", "Module mapping", "Phased development", "Data and user testing", "Rollout and training"],
    deliverables: ["Configured ERP modules", "Roles and approval paths", "Reports and shared records", "Deployment and handover documentation"],
    relatedLinks: [{ href: "/portfolio", label: "See OXY12 project examples" }],
    faqs: [
      {
        q: "Does every ERP module need to launch at once?",
        a: "No. A phased rollout can reduce risk by starting with the most important workflows, validating them with users, and adding approved modules after the foundation is stable.",
      },
      {
        q: "Can existing data be migrated?",
        a: "Migration depends on the quality, format, ownership, and volume of the available data. We first review sample records, define mappings, identify cleanup needs, and agree on validation before import.",
      },
    ],
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile Application Development",
    desc: "We build Flutter applications for iOS and Android with a shared codebase, consistent interfaces, and secure connections to the APIs and business systems the app needs.",
    whoFor:
      "Organizations that need a customer app, staff tool, field-service application, booking experience, delivery workflow, or mobile access to an existing web platform.",
    included: [
      "Mobile requirements and user-flow planning",
      "Responsive Flutter interface development",
      "Authentication, API integration, and device permissions",
      "Testing on supported Android and iOS devices",
      "Store preparation, release support, and maintenance planning",
    ],
    features: ["User accounts and profiles", "API-connected data", "Notifications where required", "Device and offline capabilities"],
    tech: ["Flutter", "Dart", "REST APIs", "Android and iOS"],
    process: ["Discovery", "Mobile UX design", "Flutter development", "Device testing", "Store release"],
    deliverables: ["Flutter application", "Integrated API workflows", "Tested release builds", "Store and technical handover assets"],
    relatedLinks: [{ href: "/contact", label: "Discuss a mobile application project" }],
    faqs: [
      {
        q: "Can one Flutter app support iOS and Android?",
        a: "Yes. Flutter supports a shared codebase for both platforms, while platform-specific permissions, testing, signing, and store requirements are handled separately where necessary.",
      },
      {
        q: "Do you help with app-store submission?",
        a: "Yes. We can prepare release builds and assist with the technical submission process. The client provides and owns the required Apple and Google developer accounts, legal details, and store content.",
      },
    ],
  },
];

const servicesPageId = "https://oxy12.com/services#webpage";
const serviceSchemaIds = {
  "mobile-app-development": "mobile-application-development",
};
const serviceEntities = services.map((service) => ({
  "@type": "Service",
  "@id": `https://oxy12.com/services#${serviceSchemaIds[service.id] ?? service.id}`,
  name: service.title,
  description: service.desc,
  serviceType: service.title,
  provider: {
    "@id": "https://oxy12.com/#organization",
  },
}));
const servicesListEntity = {
  "@type": "ItemList",
  "@id": "https://oxy12.com/services#service-list",
  name: "OXY12 Web and Software Development Services",
  numberOfItems: serviceEntities.length,
  itemListElement: serviceEntities.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@id": service["@id"],
    },
  })),
};
const servicesFaqEntity = {
  "@type": "FAQPage",
  "@id": "https://oxy12.com/services#faqs",
  url: "https://oxy12.com/services",
  name: "OXY12 Services FAQs",
  isPartOf: {
    "@id": servicesPageId,
  },
  about: {
    "@id": "https://oxy12.com/#organization",
  },
  mainEntity: services.flatMap((service) =>
    service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  ),
  inLanguage: "en",
};
const servicesSchema = createSchemaGraph(
  organizationEntity,
  websiteEntity,
  createWebPageEntity({
    type: "CollectionPage",
    id: servicesPageId,
    url: "https://oxy12.com/services",
    name: "Web & Software Development Services Sri Lanka | OXY12",
    description:
      "Explore OXY12 website, custom software, UI/UX, e-commerce, POS, ERP, and Flutter app development services for businesses in Sri Lanka and beyond.",
    mainEntity: {
      "@id": servicesListEntity["@id"],
    },
  }),
  servicesListEntity,
  ...serviceEntities,
  servicesFaqEntity,
  createBreadcrumbEntity({
    id: "https://oxy12.com/services#breadcrumb",
    pageName: "Services",
    pageUrl: "https://oxy12.com/services",
  }),
);

function BulletList({ items }) {
  return (
    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ember" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Tags({ items }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-foreground/80">
          {item}
        </span>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />

      <section className="relative px-6 pb-16 pt-40 md:pt-48">
        <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel index="01" label="Services" />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance max-w-5xl font-display text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">
              Web and software services for <span className="italic text-ember">real business workflows.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              OXY12 provides web and software development services for businesses in Sri Lanka and beyond. We plan, design,
              develop, test, and support digital products around real requirements and workflows. The sections below explain
              who each service is for, what can be included, the technologies we use, how delivery is handled, and what
              clients typically receive.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-10">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.04}>
              <article id={service.id} className="scroll-mt-32 rounded-3xl glass p-8 md:p-12">
                <div className="grid gap-10 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <div className="grid size-14 place-items-center rounded-2xl bg-ember/15 text-ember">
                      <service.icon className="size-6" />
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{service.title}</h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{service.desc}</p>

                    <div className="mt-8 border-t border-white/10 pt-6">
                      <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">Who this is for</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.whoFor}</p>
                    </div>
                    <div className="mt-8 border-t border-white/10 pt-6">
                      <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">Related work</h3>
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                        {service.relatedLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:text-ember"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">What is included</h3>
                    <BulletList items={service.included} />

                    <h3 className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-ember">Technologies</h3>
                    <Tags items={service.tech} />

                    <h3 className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-ember">Delivery process</h3>
                    <ol className="mt-4 space-y-3">
                      {service.process.map((step, stepIndex) => (
                        <li key={step} className="flex items-center gap-3 text-sm">
                          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ember/15 font-mono text-[10px] text-ember">
                            {String(stepIndex + 1).padStart(2, "0")}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">Example features</h3>
                    <BulletList items={service.features} />

                    <h3 className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-ember">Typical deliverables</h3>
                    <BulletList items={service.deliverables} />

                    <h3 className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-ember">Frequently asked questions</h3>
                    <div className="mt-4 space-y-4">
                      {service.faqs.map((faq) => (
                        <details key={faq.q} className="group/d border-b border-white/10 pb-3">
                          <summary className="flex cursor-pointer items-center justify-between text-sm font-medium">
                            {faq.q}
                            <span className="ml-3 text-ember transition-transform group-open/d:rotate-45">+</span>
                          </summary>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The full ContactCta form is temporarily hidden on this page. */}
      {/* <ContactCta /> */}

      <section className="px-6 py-24 md:py-32">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl glass p-8 md:flex-row md:items-center md:p-12">
            <div>
              <SectionLabel index="02" label="Project Inquiry" />
              <h2 className="mt-6 max-w-3xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">
                Not sure which service fits your project?
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Tell us about your users, current workflow, main problem, and the result you need. We will help identify a
                practical starting point before discussing scope and delivery.
              </p>
            </div>
            <Link
              href="/contact"
              className="ember-glow inline-flex shrink-0 items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:bg-ember-glow"
            >
              Discuss your project with OXY12
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
