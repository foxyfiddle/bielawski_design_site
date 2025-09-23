import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLink from "../../components/NavLink";
import Link from "next/link";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <div className="relative bg-base-200">
  <div className="navbar bg-base-100 flex justify-start gap-7 px-6 mt-15">
    <NavLink href="/">Work</NavLink>
    <NavLink href="/about">About</NavLink>
    <NavLink href="/contact">Contact</NavLink>
  </div>

  {/* Logo floats above the navbar, centered */}
  <div className="absolute inset-x-0 top-1 flex justify-center">
    <Link href="/">
      <img
        src="/b_logo_black.svg"
        alt="Bielawski Design Logo"
        className="h-12 w-auto"
      />
    </Link>
  </div>
</div>


        {children}
      </body>
    </html>
  );
}
