import localFont from "next/font/local";

export const sora = localFont({
  src: "./fonts/sora-latin.woff2",
  weight: "300 800",
  style: "normal",
  variable: "--font-sora",
  display: "swap",
});

export const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "300 600",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

export const jetBrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  weight: "400 500",
  style: "normal",
  variable: "--font-jetbrains-mono",
  display: "swap",
});
