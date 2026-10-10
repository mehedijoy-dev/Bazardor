"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/lib/types";

export default function NavLinks({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 overflow-x-auto pb-2">
      {categories.map((c) => {
        const active = pathname === `/category/${c.slug}`;
        return (
          <Link
            key={c.id}
            href={`/category/${c.slug}`}
            className={`btn btn-ghost whitespace-nowrap text-base ${
              active ? "bg-primary text-primary-content hover:bg-primary" : ""
            }`}
          >
            {c.icon} {c.nameBn}
          </Link>
        );
      })}
    </nav>
  );
}
