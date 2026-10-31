import type { Metadata } from "next";
import { Share_Tech_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const share = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share",
});

const jb = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb",
});

export const metadata: Metadata = {
  title: "Sharyar Aman | Full-Stack Developer",
  description:
    "Portfolio of Sharyar Aman, student and full-stack web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${share.variable} ${jb.variable}`}>
      <body>{children}</body>
    </html>
  );
}