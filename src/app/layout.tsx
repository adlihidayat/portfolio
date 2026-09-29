import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/FloatingNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhiya Adli Portfolio | Home",
  description:
    "I'm an AI Engineer specializing in NLP, recommendation systems, and intelligent automation. I design end-to-end architectures from data pipelines to model deployment that focused on scalability, performance, and measurable business impact.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased border-b border-white/10`}
      >
        <FloatingNav />
        <div className="mx-0.5 md:mx-auto md:max-w-2xl lg:max-w-3xl border-x border-white/10 min-h-screen flex flex-col relative">
          {children}
        </div>
      </body>
    </html>
  );
}
