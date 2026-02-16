import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ParticlesBackground from "@/components/ParticlesBackground";
import CursorGlow from "@/components/CursorGlow";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yug Bhatt | AI & ML Portfolio",
  description: "Aspiring AI & Machine Learning Engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          relative 
          overflow-x-hidden
          bg-white text-black
          dark:bg-[#020617] dark:text-white
          transition-colors duration-300
        `}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>

          {/* Global Background Effects */}
          <ParticlesBackground />
          <CursorGlow />

          {/* Main Content */}
          <div className="relative z-10">
            {children}
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}