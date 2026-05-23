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
  title: "mhoooo - Second Brain systems สำหรับธุรกิจไทย",
  description:
    "mhoooo ออกแบบ AI products, Second Brain workflows, advanced agent systems และคอร์สสอนทำเอง สำหรับงานที่มีข้อมูลกระจัดกระจายและ context ที่ไม่ควรหายไป",
  keywords: [
    "Second Brain",
    "AI products",
    "AI automation",
    "business AI",
    "Thai SME",
    "project memory",
    "knowledge management",
    "operations automation",
    "AI course",
    "workflow course",
    "agent operating system",
    "workflow automation",
    "LINE OA",
    "LINE Business Assistant",
    "AI chatbot Thailand",
    "Thailand",
    "AI agent",
    "Fastwork",
  ],
  openGraph: {
    title: "mhoooo - Second Brain systems",
    description:
      "Showcase, courses, and custom AI products with Second Brain inside.",
    url: "https://mhoooo.com",
    siteName: "mhoooo",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mhoooo - Second Brain systems",
    description:
      "Showcase, courses, and custom AI products with Second Brain inside.",
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
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
