import "./globals.css";
import Link from "next/link";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const metadata = {
  title: "Page Not Found | OXY12",
  description: "The requested page could not be found on OXY12.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <main className="relative flex min-h-screen items-center px-6 py-32 md:py-40">
          <div className="mx-auto w-full max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
              404
            </p>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
              Page not found<span className="text-ember">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The page you&rsquo;re looking for doesn&rsquo;t exist or may have
              moved.
            </p>
            <nav
              aria-label="Helpful pages"
              className="mt-10 flex flex-wrap gap-3"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:border-ember hover:text-ember focus-visible:border-ember focus-visible:text-ember"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </main>
      </body>
    </html>
  );
}
