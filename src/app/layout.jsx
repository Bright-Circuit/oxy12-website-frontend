import "./globals.css";
import { Box } from "@mui/material";
import { AppProviders } from "./providers";
import { Navbar } from "@/components/site/navbar.jsx";
import { Footer } from "@/components/site/footer.jsx";
import { SmoothScroll } from "@/components/site/smooth-scroll.jsx";
import { Cursor } from "@/components/site/cursor.jsx";

export const metadata = {
  title: "OXY12 - Building Digital Experiences That Feel Like The Future",
  description:
    "OXY12 is a premium software studio designing and developing websites, custom software, UI/UX, e-commerce, POS and ERP systems for visionary brands.",
  authors: [{ name: "OXY12" }],
  openGraph: {
    title: "OXY12 - Digital Experiences From The Future",
    description:
      "Premium software development studio. Websites, custom software, UI/UX, e-commerce, POS and ERP.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@OXY12",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <AppProviders>
          <SmoothScroll />
          <Cursor />
          <Navbar />
          <Box component="main" sx={{ position: "relative" }}>
            {children}
          </Box>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
