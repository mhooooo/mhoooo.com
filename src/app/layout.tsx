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
  title: "mhoooo - Boring AI systems for real customer work",
  description:
    "Bangkok AI systems studio building demo-first automation for Thai SMEs: lead response, operations workflows, business dashboards, and maintained AI agents.",
  keywords: [
    "AI consulting",
    "Thailand",
    "tech consulting",
    "AI automation",
    "business AI",
    "Thai SME",
    "AI agent",
    "Fastwork",
    "workflow automation",
  ],
  openGraph: {
    title: "mhoooo - Boring AI systems for real customer work",
    description:
      "Demo-first AI automation and workflow systems for Thai businesses.",
    url: "https://mhoooo.com",
    siteName: "mhoooo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mhoooo - Boring AI systems for real customer work",
    description:
      "Demo-first AI automation and workflow systems for Thai businesses.",
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
