const lastUpdated = "September 1, 2026";

const sections = [
  {
    title: "1. About Oxy12",
    paragraphs: ["Oxy12 provides technology-related services which may include:"],
    items: [
      "Website design and development",
      "WordPress development",
      "E-commerce development",
      "Custom software development",
      "Web application development",
      "UI/UX implementation",
      "Hosting and deployment assistance",
      "Maintenance",
      "Technical consultation",
      "Other digital or technology services agreed with the client",
    ],
    closing:
      "The specific scope of each project is determined by the quotation, proposal, invoice, agreement, or written communication accepted by the client.",
  },
  {
    title: "2. Quotations and Project Scope",
    paragraphs: [
      "A quotation or proposal applies only to the work specifically described in it.",
      "Any feature, integration, page, functionality, content entry, redesign, revision, or other requirement outside the agreed scope may be treated as additional work and may require an additional charge.",
      "Oxy12 may provide a revised quotation where project requirements change significantly.",
    ],
  },
  {
    title: "3. Payments",
    paragraphs: [
      "Payment amounts, advance payments, milestones, and final balances will be determined by the relevant quotation, proposal, invoice, or project agreement.",
      "Work may begin only after any required advance payment has been received.",
      "Oxy12 may pause development, deployment, support, or delivery where an agreed payment becomes overdue.",
      "Final files, production deployment, administrative access, source files, or ownership transfer may be withheld until all amounts due for the project have been paid.",
    ],
  },
  {
    title: "4. Domain, Hosting, Licences and Third-Party Costs",
    paragraphs: ["Unless explicitly stated otherwise, costs relating to the following may be separate from Oxy12's development fee:"],
    items: [
      "Domain registration or renewal",
      "Hosting",
      "VPS or cloud infrastructure",
      "SSL certificates",
      "Premium themes",
      "Premium plugins",
      "External APIs",
      "Payment gateways",
      "SMS services",
      "Email services",
      "SaaS subscriptions",
      "Other third-party services",
    ],
    closing:
      "Third-party pricing, terms, uptime, availability, policy changes, and service interruptions are controlled by the respective third-party provider and not by Oxy12.",
  },
  {
    title: "5. Client Responsibilities",
    paragraphs: ["The client is responsible for providing accurate and timely:"],
    items: [
      "Project requirements",
      "Text content",
      "Images and media",
      "Product or service information",
      "Branding material",
      "Access credentials where required",
      "Approvals and feedback",
    ],
    closing:
      "Project deadlines may be extended where the client delays providing information, payment, feedback, approvals, or required access.",
  },
  {
    title: "6. Client Content and Intellectual Property",
    paragraphs: [
      "The client confirms that they have the right to use any text, images, trademarks, logos, files, media, data, or other material supplied to Oxy12.",
      "Oxy12 is not responsible for copyright, trademark, privacy, or other claims arising from material supplied or specifically requested by the client.",
    ],
  },
  {
    title: "7. Oxy12 Branding and Development Credit",
    paragraphs: [
      "Unless otherwise agreed in writing before the project begins, Oxy12 reserves the right to include a reasonable development credit on websites, software interfaces, project footers, project documentation, or related materials.",
      'This may include wording such as "Designed & Developed by Oxy12", "Developed by Oxy12", or an equivalent Oxy12 credit with a link to oxy12.com.',
      "The client agrees that this attribution forms part of Oxy12's standard project terms and pricing.",
      "If a client requires Oxy12's name, logo, link, authorship, development credit, or any reference to Oxy12 to be completely removed, hidden, prohibited from publication, or omitted from the project, this will be treated as a White-Label / Non-Attribution arrangement.",
      "Unless another amount is agreed in writing, a White-Label / Non-Attribution arrangement will require an additional fee equal to 75% of the original project development fee.",
      "For example, if the agreed development fee is LKR 100,000, removal of all Oxy12 development attribution would attract an additional LKR 75,000 fee.",
      "This additional charge is separate from domain costs, hosting costs, licences, third-party charges, maintenance fees, and other project expenses.",
      "The White-Label / Non-Attribution fee must be agreed and paid before Oxy12 becomes obligated to remove or permanently refrain from displaying its development credit.",
      "For strongest enforceability, this clause should also be repeated in the client quotation, proposal, or agreement rather than relying only on the website terms.",
    ],
  },
  {
    title: "8. Portfolio and Promotional Use",
    paragraphs: ["Unless the parties agree otherwise in writing, Oxy12 may identify completed work as part of its portfolio and may display:"],
    items: [
      "Project name",
      "Client or business name",
      "Screenshots",
      "Publicly accessible project pages",
      "General project description",
      "Technologies used",
    ],
    closing:
      "Oxy12 will not intentionally publish confidential information supplied by the client. Where a client purchases and completes the White-Label / Non-Attribution arrangement described above, Oxy12 will comply with the agreed restrictions on public attribution and portfolio use.",
  },
  {
    title: "9. Revisions and Change Requests",
    paragraphs: [
      "Revisions included in a project are limited to those specified in the applicable quotation, proposal, or agreement.",
      "Requests that substantially alter an approved design, workflow, architecture, feature set, or project scope may be considered additional work.",
    ],
  },
  {
    title: "10. Project Completion and Handover",
    paragraphs: ["A project is considered substantially complete when the agreed development scope has been delivered and is ready for client review or deployment.", "Final handover may take place once:"],
    items: ["Required client approvals have been received", "Outstanding project payments have been settled", "Relevant third-party requirements have been completed"],
  },
  {
    title: "11. Testing and Acceptance",
    paragraphs: [
      "Clients are expected to test the delivered website or software and promptly report any issues relating to the agreed project scope.",
      "Where a client approves the work, launches the project, begins commercial use, or fails to report material issues within a reasonable review period, the project may be considered accepted subject to any separately agreed warranty or support terms.",
    ],
  },
  {
    title: "12. Maintenance and Support",
    paragraphs: ["Unless expressly included in the project agreement, ongoing items such as content updates, software updates, plugin updates, server management, website maintenance, security monitoring, technical support, or new features are not automatically included in the original development fee.", "Ongoing support may require a separate maintenance or support agreement."],
  },
  {
    title: "13. Backups and Data",
    paragraphs: [
      "Oxy12 may maintain temporary or operational backups during development where technically available.",
      "Unless a separate backup or maintenance service is agreed, clients remain responsible for maintaining appropriate backups after final handover.",
    ],
  },
  {
    title: "14. Security",
    paragraphs: ["Oxy12 will take reasonable care when implementing websites and software.", "However, no digital platform can be guaranteed to be completely protected against:"],
    items: ["Cyberattacks", "Malware", "Unknown vulnerabilities", "Third-party service failures", "Credential compromise", "User error"],
    closing: "Clients are responsible for protecting credentials provided after project handover.",
  },
  {
    title: "15. Third-Party Software",
    paragraphs: [
      "Projects may use third-party frameworks, libraries, plugins, themes, APIs, open-source software, payment services, hosting platforms, or other external technologies.",
      "Those products remain subject to their respective licences and terms.",
      "Oxy12 cannot guarantee that a third-party service will remain available, free, unchanged, or compatible indefinitely.",
    ],
  },
  {
    title: "16. Delays Outside Our Control",
    paragraphs: ["Oxy12 is not responsible for delays or failures caused by circumstances reasonably outside our control, including:"],
    items: [
      "Hosting failures",
      "Domain or DNS problems",
      "Cloud provider outages",
      "API outages",
      "Payment gateway outages",
      "Internet disruptions",
      "Government restrictions",
      "Third-party software changes",
      "Natural disasters",
      "Cyber incidents",
      "Delays caused by the client",
    ],
  },
  {
    title: "17. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, Oxy12 will not be liable for indirect, incidental, consequential, or special losses arising from use or inability to use a website, software system, third-party platform, hosting provider, or external service.",
      "Nothing in these Terms is intended to exclude liability that cannot legally be excluded under applicable law.",
    ],
  },
  {
    title: "18. Suspension or Termination",
    paragraphs: ["Oxy12 may suspend or terminate work where:"],
    items: [
      "Required payments remain overdue",
      "The client materially breaches the agreed terms",
      "The project involves unlawful or prohibited activity",
      "The client requests work that creates material legal, security, or ethical risks",
    ],
    closing: "Any fees already earned for completed work remain payable.",
  },
  {
    title: "19. Website Content and Oxy12 Learn",
    paragraphs: [
      "Content published on learn.oxy12.com is provided primarily for educational and informational purposes.",
      "Technology, software, hosting, pricing, products, regulations, and third-party services may change over time.",
      "Readers should independently verify information before making important technical, financial, legal, or business decisions.",
    ],
  },
  {
    title: "20. Advertising and Affiliate Relationships",
    paragraphs: [
      "Oxy12 websites may display advertising, including advertisements served through services such as Google AdSense.",
      "Some articles may also contain affiliate links or commercial relationships.",
      "Where appropriate, such relationships may be disclosed within the relevant page or article.",
      "The presence of an advertisement does not automatically constitute an endorsement by Oxy12.",
    ],
  },
  {
    title: "21. Changes to These Terms",
    paragraphs: [
      "Oxy12 may update these Terms from time to time.",
      "Changes will apply from the date the revised Terms are published, except where a separate signed or accepted client agreement specifies otherwise.",
    ],
  },
  {
    title: "22. Governing Law",
    paragraphs: ["These Terms will be interpreted in accordance with the applicable laws of Sri Lanka, unless a separate written agreement specifies otherwise."],
  },
  {
    title: "23. Contact",
    paragraphs: ["Questions regarding these Terms may be sent to:"],
    items: ["Oxy12", "Website: oxy12.com", "Email: info@oxy12.com"],
  },
];

export const metadata = {
  title: "Terms & Conditions | OXY12",
  description: "Read the OXY12 terms and conditions for websites, projects, and client services.",
};

export default function TermsConditionsPage() {
  return (
    <section className="relative overflow-hidden bg-navy-deep px-6 pb-24 pt-36 text-foreground md:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 mesh-bg opacity-50" />
      <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ember">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">Terms & Conditions</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Last Updated: {lastUpdated}</p>
        <p className="mt-8 text-base leading-8 text-foreground/80">
          These Terms and Conditions govern your use of oxy12.com, learn.oxy12.com, and services provided under the
          Oxy12 brand.
        </p>
        <p className="mt-4 text-base leading-8 text-foreground/80">
          By using our website, requesting services, accepting a quotation or proposal, paying an invoice or advance
          payment, or authorising Oxy12 to begin work, you agree to the applicable terms below.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <article key={section.title} className="space-y-4">
              <h2 className="font-display text-2xl font-semibold tracking-tight">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-foreground/80">
                  {paragraph}
                </p>
              ))}
              {section.items?.length ? (
                <ul className="space-y-2 pl-5 text-base leading-8 text-foreground/80">
                  {section.items.map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.closing ? <p className="text-base leading-8 text-foreground/80">{section.closing}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
