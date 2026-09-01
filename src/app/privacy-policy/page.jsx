const lastUpdated = "September 1, 2026";

const sections = [
  {
    title: "1. Information We May Collect",
    paragraphs: ["We may collect information that you voluntarily provide to us, including:"],
    items: [
      "Name",
      "Email address",
      "Telephone or WhatsApp number",
      "Company or business name",
      "Project requirements",
      "Messages submitted through contact or enquiry forms",
      "Information you provide when requesting a quotation, consultation, or service",
    ],
    closing:
      "We may also automatically receive limited technical information such as IP address, browser type, device type, operating system, pages visited, referral source, approximate location, date and time of visits, and website interaction or performance data.",
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: ["We may use information collected through our websites to:"],
    items: [
      "Respond to enquiries",
      "Prepare quotations and project proposals",
      "Provide website, software development, hosting, maintenance, and related services",
      "Communicate regarding projects",
      "Improve our websites and services",
      "Analyse website traffic and performance",
      "Prevent fraud, abuse, and security threats",
      "Maintain business and project records",
      "Comply with legal or regulatory requirements",
      "Display relevant advertising where applicable",
    ],
    closing: "We do not sell personal information to advertisers.",
  },
  {
    title: "3. Cookies and Similar Technologies",
    paragraphs: [
      "Our websites may use cookies and similar technologies to improve functionality, understand visitor behaviour, remember preferences, provide analytics, and support advertising.",
      "Cookies may be placed by Oxy12 or by third-party services used on our websites.",
      "You may restrict or remove cookies using your browser settings. However, disabling certain cookies may affect some website functions.",
    ],
  },
  {
    title: "4. Google Analytics and Other Analytics Services",
    paragraphs: [
      "We may use services such as Google Analytics or similar analytics platforms to understand how visitors use our websites.",
      "These services may process technical information such as your device information, IP address, pages viewed, and interactions with the website.",
      "The information is used to improve website performance, usability, and content.",
    ],
  },
  {
    title: "5. Google AdSense and Advertising",
    paragraphs: [
      "Some Oxy12 properties, including learn.oxy12.com, may use Google AdSense or other advertising services.",
      "Third-party vendors, including Google, may use cookies or similar technologies to serve advertisements based on a visitor's previous visits to our website or other websites.",
      "Google's use of advertising cookies may enable Google and its partners to serve personalised advertisements based on users' browsing activity.",
      "Users may manage personalised advertising through Google's advertising settings.",
      "Additional third-party advertising vendors or networks may also use cookies or similar technologies in accordance with their own privacy policies.",
      "Google requires publishers to disclose this use of cookies and third-party advertising technology in their privacy policy.",
      "Where required, including for eligible visitors in the EEA, United Kingdom, and Switzerland, we may display a consent management message before using certain advertising or tracking technologies.",
    ],
  },
  {
    title: "6. Third-Party Services",
    paragraphs: ["We may use third-party services for functions such as:"],
    items: [
      "Website hosting",
      "Cloud infrastructure",
      "Email",
      "Analytics",
      "Advertising",
      "Payment processing",
      "Website security",
      "Contact forms",
      "Content delivery",
      "Customer communications",
    ],
    closing:
      "These providers may process information only as necessary to provide their respective services and are subject to their own terms and privacy policies.",
  },
  {
    title: "7. Project and Client Information",
    paragraphs: [
      "When you engage Oxy12 for website development, software development, consulting, hosting, or related services, we may store information necessary to manage and complete the project.",
      "This may include contact information, requirements, communications, files, invoices, credentials provided specifically for project purposes, and technical configuration information.",
      "We take reasonable measures to restrict access to confidential project information.",
    ],
  },
  {
    title: "8. Data Retention",
    paragraphs: ["We retain information only for as long as reasonably necessary for:"],
    items: [
      "Providing requested services",
      "Maintaining project and business records",
      "Resolving disputes",
      "Meeting legal obligations",
      "Protecting our legitimate business interests",
    ],
    closing: "Information that is no longer reasonably required may be deleted, anonymised, or securely archived.",
  },
  {
    title: "9. Data Security",
    paragraphs: [
      "We use reasonable technical and organisational safeguards to protect information against unauthorised access, loss, misuse, alteration, or disclosure.",
      "However, no website, server, network, or online transmission method can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "10. Links to Other Websites",
    paragraphs: [
      "Our websites may contain links to third-party websites.",
      "Oxy12 is not responsible for the privacy practices, content, security, or policies of websites operated by third parties.",
      "Users should review the privacy policy of any external website they visit.",
    ],
  },
  {
    title: "11. Children's Privacy",
    paragraphs: [
      "Our websites and services are primarily intended for businesses, professionals, entrepreneurs, and general audiences.",
      "We do not knowingly seek to collect personal information from children where such collection would require parental or guardian consent under applicable law.",
    ],
  },
  {
    title: "12. Your Privacy Rights",
    paragraphs: ["Depending on applicable law and your location, you may have rights relating to your personal information, including requesting:"],
    items: ["Access", "Correction", "Updating", "Deletion", "Restriction of certain processing", "Information about how your information is used"],
    closing: "Requests may be subject to identity verification and applicable legal limitations.",
  },
  {
    title: "13. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy when our services, technologies, advertising arrangements, or legal requirements change.",
      `The updated version will be published on this page with a revised "Last Updated" date.`,
    ],
  },
  {
    title: "14. Contact Us",
    paragraphs: ["For privacy-related questions or requests, contact:"],
    items: ["Oxy12", "Website: oxy12.com", "Email: info@oxy12.com"],
  },
];

export const metadata = {
  title: "Privacy Policy | OXY12",
  description: "Read the OXY12 privacy policy for oxy12.com and learn.oxy12.com.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden bg-navy-deep px-6 pb-24 pt-36 text-foreground md:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 mesh-bg opacity-50" />
      <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ember">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Last Updated: {lastUpdated}</p>
        <p className="mt-8 text-base leading-8 text-foreground/80">
          Welcome to Oxy12 ("Oxy12", "we", "us", or "our"). This Privacy Policy explains how we collect, use, store,
          and protect information when you visit oxy12.com, learn.oxy12.com, or interact with our services.
        </p>
        <p className="mt-4 text-base leading-8 text-foreground/80">
          By using our websites or submitting information to us, you acknowledge the practices described in this
          Privacy Policy.
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
