import "./globals.css";
import { inter, jetBrainsMono, sora } from "./fonts.js";
import { Navbar } from "@/components/site/navbar.jsx";
import { Footer } from "@/components/site/footer.jsx";
import { SmoothScroll } from "@/components/site/smooth-scroll.jsx";
import { Cursor } from "@/components/site/cursor.jsx";
import oxy12Logo from "@/assets/oxy12-logo.png";

export const metadata = {
  metadataBase: new URL("https://oxy12.com"),
  title: {
    default: "Software Development Company in Sri Lanka | OXY12",
    template: "%s | OXY12",
  },
  description:
    "OXY12 is a Sri Lanka-based software development company building business websites, custom software, e-commerce platforms, POS, ERP, and mobile apps.",
  authors: [{ name: "OXY12" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Software Development Company in Sri Lanka | OXY12",
    description:
      "OXY12 is a Sri Lanka-based software development company building business websites, custom software, e-commerce platforms, POS, ERP, and mobile apps.",
    url: "https://oxy12.com/",
    siteName: "OXY12",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Software Development Company in Sri Lanka | OXY12",
    description:
      "OXY12 is a Sri Lanka-based software development company building business websites, custom software, e-commerce platforms, POS, ERP, and mobile apps.",
  },
  icons: {
    icon: oxy12Logo.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-2846247687369936"
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ember px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <SmoothScroll />
        <Cursor />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
