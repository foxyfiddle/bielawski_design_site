// components/NavLink.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLink({
  href,
  children,
}: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "no-underline pb-1",                    // remove any inherited underline
        isActive
          ? "border-b-2 border-primary text-primary"
          : "hover:border-b-2 hover:border-base-content"
      )}
    >
      {children}
    </Link>
  );
}

