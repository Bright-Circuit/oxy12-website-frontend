import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import northspireProjectImage from "@/assets/projects/project-northspire.png";
// import lamoreProjectImage from "@/assets/projects/project-lamore.png";
// import invoizaProjectImage from "@/assets/projects/project-invoiza.png";
import shwomensProjectImage from "@/assets/projects/project-shwomens.png";
// import luxoraProjectImage from "@/assets/projects/project-luxora.png";
import globalstarProjectImage from "@/assets/projects/project-global-star.png";
import AHDeliveryProjectImage from "@/assets/projects/project-AHDelivery.png";
import BlueFinAquaProjectImage from "@/assets/projects/project-bluefinaqua.png";
// import AkinduPlumbingProjectImage from "@/assets/projects/project-akindu-plumbing.png";
import MeetTheMeatzzzProjectImage from "@/assets/projects/project-meet-the-meatzzz.png";
import KCIEduProjectImage from "@/assets/projects/project-KCI-education.png";
import { Reveal } from "@/components/site/reveal.jsx";
import { SectionLabel } from "@/components/site/section-label.jsx";

export const projects = [
  {
    name: "KCI Education Lanka",
    category: "Website · Education",
    year: "2026",
    href: "https://kciedulanka.com/",
    tag: "Websites",
    image: KCIEduProjectImage,
    gradient: "from-amber-500/40 via-orange-600/30 to-rose-700/30",
    status: "Completed",
    summary:
      "KCI Education Lanka supports Sri Lankan students who are exploring higher-education opportunities and degree programmes in Malaysia. The website gives prospective students and families a clear place to understand the agency and review available study pathways.",
    problem:
      "Programme information, destination details, and enquiry options needed to be organized in a way that is understandable to students who may be comparing institutions and qualifications for the first time.",
    solution:
      "OXY12 created a responsive education website that introduces the agency, presents degree-programme information, and guides visitors toward the appropriate enquiry and contact options.",
    features: ["Degree-programme presentation", "Student-focused navigation", "Agency and destination information", "Enquiry and contact pathways"],
    tech: ["Responsive website", "Content management", "Mobile-first interface"],
    outcome:
      "KCI Education Lanka now has a dedicated public website that brings its Malaysia-focused education services and programme information together in one accessible location.",
  },
  {
    name: "Meet the Meatzzz",
    category: "E-Commerce · Food",
    year: "2026",
    href: "https://meetthemeatzzz.com/",
    tag: "E-Commerce",
    image: MeetTheMeatzzzProjectImage,
    gradient: "from-amber-500/40 via-orange-600/30 to-rose-700/30",
    status: "Completed",
    summary:
      "Meet the Meatzzz sells food products made from meat. Its WordPress e-commerce website allows customers to browse the available meat-based products, review product information, add items to a cart, and place an order online.",
    problem:
      "The business needed more than a promotional website: customers required a structured product catalogue and a straightforward purchasing journey that works across desktop and mobile devices.",
    solution:
      "OXY12 built a WordPress and WooCommerce storefront with product pages, shopping-cart functionality, checkout, order handling, and content-management access for the business.",
    features: ["Meat-based product catalogue", "Product and pricing pages", "Cart and checkout flow", "Online order management"],
    tech: ["WordPress", "WooCommerce", "Responsive web design"],
    outcome:
      "The completed store gives Meet the Meatzzz a direct online sales channel where its products and ordering process are available to customers in one consistent experience.",
  },
  // Temporarily hidden. Uncomment this object and its image import to restore the project.
  /*
  {
    name: "Akindu Plumbing & Construction",
    category: "Website · Company",
    year: "2026",
    href: "https://plumbing.bcircuit.com/",
    tag: "Websites",
    image: AkinduPlumbingProjectImage,
    gradient: "from-amber-500/40 via-orange-600/30 to-rose-700/30",
    status: "Ongoing",
  },
  */
  {
    name: "Blue Fin Aqua",
    category: "E-Commerce · Aquarium",
    year: "2026",
    href: "https://bluefinaqua.lk/",
    tag: "E-Commerce",
    image: BlueFinAquaProjectImage,
    gradient: "from-fuchsia-500/30 via-purple-700/30 to-violet-900/40",
    status: "Completed",
    summary:
      "Blue Fin Aqua is a specialist online store for aquarium-related products, including fish food and items used by aquarium owners. The website provides a focused catalogue for customers looking for products within this category.",
    problem:
      "Aquarium products needed to be presented in an organized storefront where customers could identify relevant items, view product details, and complete an online purchase without relying only on social-media messages.",
    solution:
      "OXY12 developed a WordPress and WooCommerce store with responsive product browsing, individual product pages, cart and checkout functions, and store-management tools.",
    features: ["Aquarium product catalogue", "Fish-food product listings", "Cart and checkout", "Order and content management"],
    tech: ["WordPress", "WooCommerce", "Responsive web design"],
    outcome:
      "Blue Fin Aqua now has a dedicated e-commerce channel where aquarium customers can explore the product range and place orders through a structured online process.",
  },
  {
    name: "Natural Fruit Product",
    category: "Website · Company",
    year: "2026",
    href: "https://naturalfruitproduct.lk/",
    tag: "Websites",
    image: globalstarProjectImage,
    gradient: "from-emerald-500/30 via-teal-700/30 to-indigo-800/40",
    status: "Completed",
    summary:
      "Natural Fruit Product is a Sri Lankan company involved in beverage production and the sale of a wider range of imported products. Its website presents the organization and its product portfolio to customers and business contacts.",
    problem:
      "A company with locally produced beverages and multiple imported product lines needed a clear corporate website that could explain the business and organize a varied product range without making the information difficult to navigate.",
    solution:
      "OXY12 created a responsive company website with structured brand and product information, clear navigation, and contact pathways for visitors who want to learn more about the company or its offerings.",
    features: ["Company profile", "Beverage and imported-product presentation", "Organized product categories", "Business contact information"],
    tech: ["Business website", "Responsive design", "Content management"],
    outcome:
      "The finished website gives Natural Fruit Product a central digital presence for presenting both its beverage-production activity and its broader imported-product portfolio.",
  },
  {
    name: "SH Womens",
    category: "E-Commerce · Fashion",
    year: "2026",
    href: "https://shwomens.com/",
    tag: "E-Commerce",
    image: shwomensProjectImage,
    gradient: "from-fuchsia-500/30 via-purple-700/30 to-violet-900/40",
    status: "Completed",
    summary:
      "SH Womens is a fashion and lifestyle retailer selling jewellery, sarees, shalwars, handbags, and related items. Its WordPress e-commerce website brings these categories together in a single online storefront.",
    problem:
      "The business needed a store that could present different product categories consistently, support product discovery on mobile devices, and provide customers with a complete online ordering journey.",
    solution:
      "OXY12 developed a WordPress and WooCommerce store with category navigation, product-detail pages, cart and checkout functionality, order handling, and administrator access for managing products and content.",
    features: ["Fashion and jewellery categories", "Product detail pages", "Cart and checkout", "Product and order administration"],
    tech: ["WordPress", "WooCommerce", "Responsive web design"],
    outcome:
      "SH Womens now has an owned e-commerce platform where customers can browse its different collections and purchase products through a consistent branded experience.",
  },
  {
    name: "AH Delivery",
    category: "E-Commerce · Delivery",
    year: "2026",
    href: "https://ahdeliveryservices.lk/",
    tag: "E-Commerce",
    image: AHDeliveryProjectImage,
    gradient: "from-fuchsia-500/30 via-purple-700/30 to-violet-900/40",
    status: "Completed",
    summary:
      "AH Delivery is a local delivery service operating in the Pulmoddai area of Sri Lanka. The website lists products from local restaurants, grocery sellers, and electrical-item suppliers rather than limiting customers to one shop.",
    problem:
      "Customers needed one place to discover products available from different local businesses, submit and pay for an order, and have AH Delivery coordinate collection and delivery to the customer.",
    solution:
      "OXY12 built an e-commerce website that organizes products from multiple local categories and supports the customer journey from product selection and checkout through to the delivery-service workflow.",
    features: ["Restaurant food listings", "Grocery and electrical-item categories", "Cart and customer checkout", "Order information for delivery fulfillment"],
    tech: ["E-commerce platform", "Responsive product catalogue", "Order workflow"],
    outcome:
      "The website gives AH Delivery a central ordering channel for connecting Pulmoddai-area customers with products from participating local businesses and completing the final delivery.",
  },
  {
    name: "Northspire Education",
    category: "LMS · Web Platform",
    year: "2025",
    href: "https://northspireedu.com/",
    tag: "Websites",
    image: northspireProjectImage,
    gradient: "from-amber-500/40 via-orange-600/30 to-rose-700/30",
    status: "Completed",
    summary:
      "Northspire Education combines a public educational website with a custom learning management system. It was developed as a custom-coded platform rather than assembled from a standard WordPress learning template.",
    problem:
      "The organization needed both a clear public presence for educational information and a structured application capable of supporting learning-related users, content, and workflows within one technical platform.",
    solution:
      "OXY12 designed and developed the frontend with Next.js and the backend with Spring Boot, using MySQL for structured data and RabbitMQ for asynchronous application tasks and communication between processes.",
    features: ["Public education website", "Custom learning-management workflows", "Role-based application access", "Structured course and learning information"],
    tech: ["Next.js", "Spring Boot", "MySQL", "RabbitMQ"],
    outcome:
      "Northspire Education received a custom web platform that connects its public educational presence with an LMS foundation designed around its own requirements and future development needs.",
  },
  // Temporarily hidden projects. Uncomment the required objects and image imports to restore them.
  /*
  {
    name: "Lamore Fashion",
    category: "E-Commerce · Luxury",
    year: "2025",
    href: "https://lamore.bcircuit.com/",
    tag: "E-Commerce",
    image: lamoreProjectImage,
    gradient: "from-emerald-500/30 via-teal-700/30 to-indigo-800/40",
    status: "Completed",
  },
  {
    name: "Luxora Fashion",
    category: "E-Commerce · Luxury",
    year: "2025",
    href: "https://luxorafashion.bcircuit.com/",
    tag: "E-Commerce",
    image: luxoraProjectImage,
    gradient: "from-fuchsia-500/30 via-purple-700/30 to-violet-900/40",
    status: "Completed",
  },
  {
    name: "Invoiza",
    category: "SaaS · Software",
    year: "2025",
    href: "https://invoiza.bcircuit.com/dashboard",
    tag: "Software",
    image: invoizaProjectImage,
    gradient: "from-sky-500/30 via-blue-700/40 to-indigo-900/40",
    status: "Completed",
  },
  */
];

function ProjectStatus({ status }) {
  const isOngoing = status === "Ongoing";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
        isOngoing
          ? "border-red-500/30 bg-red-500/10 text-red-300"
          : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
      }`}
    >
      <span className="relative flex size-2.5">
        {isOngoing ? (
          <>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-red-500" />
          </>
        ) : (
          <span className="inline-flex size-2.5 rounded-full bg-emerald-400" />
        )}
      </span>
      {status}
    </span>
  );
}

export function Portfolio() {
  return (
    <section className="relative bg-navy-deep px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel index="04" label="Selected Work" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
                Selected <br />
                <span className="text-ember italic">pieces.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
              A curated selection of digital transformations and award-winning
              products we have shipped for partners worldwide.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              offset={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, offset = false, detailed = false }) {
  const ProjectHeading = detailed ? "h2" : "h3";

  return (
    <Reveal delay={offset ? 0.1 : 0} y={50}>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block ${offset ? "md:mt-24" : ""}`}
      >
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {project.image ? (
              <>
                <div className="absolute inset-1 overflow-hidden rounded-2xl border border-white/10 bg-navy-deep/0 backdrop-blur-md">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent" />
                </div>
              </>
            ) : (
              <div
                className={`relative h-full w-full bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`}
              >
                <div className="absolute inset-6 rounded-2xl border border-white/10 bg-navy-deep/70 p-6 backdrop-blur-md">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-500/50" />
                    <div className="size-2.5 rounded-full bg-yellow-500/50" />
                    <div className="size-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-2 w-3/5 rounded bg-white/15" />
                    <div className="h-2 w-2/5 rounded bg-white/10" />
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div className="aspect-square rounded bg-white/5" />
                      <div className="aspect-square rounded bg-white/8" />
                      <div className="aspect-square rounded bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy-deep/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-background">
              View Project
              <ArrowUpRight className="size-3.5" />
            </span>
          </div>
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <ProjectHeading className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-ember md:text-3xl">
              {project.name}
            </ProjectHeading>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {project.category}
            </p>
            <div className="mt-3">
              <ProjectStatus status={project.status} />
            </div>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
            {project.year}
          </span>
        </div>

        {detailed && (
          <div className="mt-7 space-y-7 border-t border-white/10 pt-7">
            <p className="text-base leading-relaxed text-muted-foreground">{project.summary}</p>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">Client need</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">What OXY12 built</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">Main features</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ember" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">Technology and implementation</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-foreground/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember">Project outcome</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.outcome}</p>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors group-hover:border-ember group-hover:text-ember">
              Visit live website
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        )}
      </a>
    </Reveal>
  );
}
