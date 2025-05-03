"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Bad+Script&family=Caveat&family=Cookie&family=Covered+By+Your+Grace&family=Dancing+Script&family=Great+Vibes&family=Handlee&family=Just+Another+Hand&family=La+Belle+Aurore&family=Marck+Script&family=Nothing+You+Could+Do&family=Pacifico&family=Parisienne&family=Qwigley&family=Sacramento&family=Satisfy&family=Shadows+Into+Light&family=Yellowtail&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} bg-white text-gray-800 min-h-screen`}
      >
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
          <nav className="w-full px-4 sm:px-8 md:px-16 py-5 flex justify-between items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold tracking-tight text-blue-600">
                Signaturely
              </h1>
            </Link>
            <div className="flex gap-4 items-center">
              <Link href="/signature-pad" className="hidden md:block">
                <Button variant="ghost" className="font-medium">
                  Draw Signature
                </Button>
              </Link>
              <Link href="/font-signature" className="hidden md:block">
                <Button variant="ghost" className="font-medium">
                  Type Signature
                </Button>
              </Link>
              <a href="https://github.com/ExploitEngineer" target="_blank">
                <Button className="gap-2 font-semibold">
                  Github
                  <Github size={16} strokeWidth={2.5} />
                </Button>
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-50 border-t border-gray-200 py-6 relative">
          <div className="max-w-[1500px] mx-auto px-6 text-center md:text-sm text-xs text-gray-500">
            © {new Date().getFullYear()} Signaturely Clone. Built by
            @ExploitEngineer.
          </div>
        </footer>
      </body>
    </html>
  );
}
