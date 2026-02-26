import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/FloatingNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhiya Adli Portfolio | Home",
  description: "I'm an AI Engineer specializing in NLP, recommendation systems, and intelligent automation. I design end-to-end architectures from data pipelines to model deployment that focused on scalability, performance, and measurable business impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased border-b border-white/10`}
      >
        <FloatingNav />
        <div className="mx-[2px] md:mx-auto md:max-w-2xl lg:max-w-3xl border-x border-white/10 min-h-screen flex flex-col relative">
          {children}
        </div>
        {/* Global Bottom Fading Overlay */}
        <div className="fixed bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#0C0C0C] to-transparent pointer-events-none z-50" />
      </body>
    </html>
  );
}
