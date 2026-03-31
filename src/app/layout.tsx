import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mhoooo — Your AI Department",
  description:
    "Thai tech consulting powered by AI. We build, deploy, and maintain intelligent systems that actually run your business. Your dedicated AI partner at a fraction of the cost.",
  keywords: [
    "AI consulting",
    "Thailand",
    "tech consulting",
    "AI automation",
    "business AI",
    "Thai SME",
    "AI agent",
  ],
  openGraph: {
    title: "mhoooo — Your AI Department",
    description:
      "Thai tech consulting powered by AI. We build intelligent systems that actually run your business.",
    url: "https://mhoooo.com",
    siteName: "mhoooo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mhoooo — Your AI Department",
    description:
      "Thai tech consulting powered by AI. We build intelligent systems that actually run your business.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
