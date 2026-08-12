import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Figtree, Fraunces, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/landing/site-header";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sandwalk.sh";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sandwalk: Great ideas need a path. This one is yours.",
    template: "%s · Sandwalk",
  },
  description:
    "An open agent on your machine, directed by you. For hard science, and for anything else worth doing.",
  applicationName: "Sandwalk",
  authors: [{ name: "Fastfold AI Labs" }],
  keywords: [
    "Sandwalk",
    "agent harness",
    "self-hosted agent",
    "open source",
    "open science",
    "research agent",
    "personal agent",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sandwalk",
    title: "Sandwalk: Great ideas need a path. This one is yours.",
    description:
      "An open agent on your machine, directed by you. For hard science, and for anything else worth doing.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sandwalk: Great ideas need a path. This one is yours.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandwalk: Great ideas need a path. This one is yours.",
    description:
      "An open agent on your machine, directed by you. For hard science, and for anything else worth doing.",
    images: ["/og.jpg"],
  },
  icons: {
    // Stable public/ URLs. OpenRouter scrapes via Google Favicon, which
    // needs a clean /favicon.ico (not Next hashed app/favicon routes).
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${fraunces.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full overflow-hidden bg-background text-foreground">
        <SiteHeader />
        <main className="h-full">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
