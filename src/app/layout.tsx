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
    default: "Sandwalk — The agent harness for open science",
    template: "%s · Sandwalk",
  },
  description:
    "A local science agent with serious tools. Built for people who ship research.",
  applicationName: "Sandwalk",
  authors: [{ name: "Fastfold AI Labs" }],
  keywords: [
    "Sandwalk",
    "science agent",
    "open science",
    "drug discovery",
    "biology AI",
    "research agent",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sandwalk",
    title: "Sandwalk — The agent harness for open science",
    description:
      "A local science agent with serious tools. Built for people who ship research.",
    images: [
      {
        url: "/og.jpg",
        width: 1024,
        height: 487,
        alt: "Sandwalk — The agent harness for open science",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandwalk — The agent harness for open science",
    description:
      "A local science agent with serious tools. Built for people who ship research.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
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
