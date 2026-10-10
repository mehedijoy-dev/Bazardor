"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/lib/types";

export default function NavLinks({ categories }: { categories: Category[] }) {
  const pathname = usePathname();
  const cls = (active: boolean) =>
    `btn btn-sm rounded-full whitespace-nowrap ${active ? "btn-primary" : "btn-ghost"}`;

  return (
    <nav className="flex gap-2 overflow-x-auto pb-3">
      <Link href="/" className={cls(pathname === "/")}>
        🏠 হোম
      </Link>
      {categories.map((c) => (
        <Link
          key={c.id}
          href={`/category/${c.slug}`}
          className={cls(pathname === `/category/${c.slug}`)}
        >
          {c.icon} {c.nameBn}
        </Link>
      ))}
    </nav>
  );
}
