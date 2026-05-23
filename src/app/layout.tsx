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
    "mhoooo ออกแบบ AI products สำหรับธุรกิจไทย โดยเริ่มจาก workflow จริง และเชื่อมระบบเข้ากับ Second Brain เพื่อให้ข้อมูลลูกค้า งาน และการตัดสินใจนำกลับมาใช้ต่อได้",
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
      "AI products ที่เริ่มจาก workflow จริงและต่อยอดด้วย Second Brain ของธุรกิจ",
    url: "https://mhoooo.com",
    siteName: "mhoooo",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mhoooo - Second Brain systems",
    description:
      "AI products ที่เริ่มจาก workflow จริงและต่อยอดด้วย business memory",
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
