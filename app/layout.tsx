import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "TolaniGrowth — Websites for Local Businesses in Metro Atlanta",
  description:
    "Modern, mobile-friendly websites for local small businesses across metro Atlanta. Live in 5–7 days. Based in Snellville, GA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
