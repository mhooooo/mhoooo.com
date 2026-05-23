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
    "mhoooo สร้าง AI products ที่มี Second Brain อยู่ข้างใน สำหรับธุรกิจไทย เริ่มจาก workflow จริง แล้วต่อยอดเป็น chat system, dashboard, content studio, BI และ custom agent ได้ไม่จำกัด",
  keywords: [
    "Second Brain",
    "AI products",
    "AI automation",
    "business AI",
    "Thai SME",
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
      "AI products ที่มี Second Brain อยู่ข้างใน และต่อยอดได้ตามงานจริงของธุรกิจไทย",
    url: "https://mhoooo.com",
    siteName: "mhoooo",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mhoooo - Second Brain systems",
    description:
      "AI products ที่ต่อยอดจาก workflow จริงและ business memory",
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
