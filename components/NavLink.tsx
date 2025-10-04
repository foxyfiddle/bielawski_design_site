// components/NavLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
  href={href}
  className={`relative inline-flex items-center h-8 ${
    isActive
      ? "text-base-content after:content-[''] after:absolute after:left-0 after:bottom-[22px] after:w-full after:h-[2px] after:bg-accent"
      : "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[22px] hover:after:w-full hover:after:h-[2px] hover:after:bg-neutral"
  }`}
>
  <span className="relative top-[-20px] block leading-none">
    {children}
  </span>
</Link>






  );
}
