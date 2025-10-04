// components/NavLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
  /** when true, only exact match is active (default false) */
  exact?: boolean;
};

export default function NavLink({ href, children, exact = false }: Props) {
  const pathname = usePathname() || "/";

  // Normalize paths (strip trailing slashes except root)
  const norm = (s: string) => s.replace(/\/+$/, "") || "/";
  const current = norm(pathname);
  const target = norm(href);

  const isActive = exact
    ? current === target
    : current === target || current.startsWith(target + "/");

  const base = "no-underline pb-1 transition-colors";
  const activeCls = "border-b-2 border-primary text-primary";
  const inactiveCls = "hover:border-b-2 hover:border-base-content";

  return (
    <Link href={href} className={`${base} ${isActive ? activeCls : inactiveCls}`}>
      {children}
    </Link>
  );
}


