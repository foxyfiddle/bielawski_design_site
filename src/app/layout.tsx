import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLink from "../../components/NavLink";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bielawski Design",
  description: "Personal portfolio site of Josh Bielawski",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="josh">
      {/* or "light" */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-100 text-base-content`}
      >
        <div className="relative">
          {/* Navbar row */}
          <div className="navbar flex justify-start gap-7 px-6 mt-16">
            <NavLink href="/">Work</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Floating, centered logo (won't block links) */}
          <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-center">
            <Link href="/" className="pointer-events-auto">
              <Image
                src="/b_logo_black.svg"
                alt="Bielawski Design Logo"
                width={40}
                height={40}
                priority
              />
            </Link>
          </div>
        </div>

        {/* Prevent overlap with navbar/logo */}
        <main className="pt-10">{children}</main>
      </body>
    </html>
  );
}
