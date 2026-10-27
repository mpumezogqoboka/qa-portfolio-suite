import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; // Imports your custom hamburger menu navbar
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mpumezo Gqoboka | Expert QA Engineer Portfolio",
  description: "Professional software quality assurance portfolio showcasing manual testing, test documentation, and Playwright automation suites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen antialiased`}>
        {/* The global navigation layer */}
        <Navbar />
        
        {/* Main layout container adjusted down for header clearance */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
