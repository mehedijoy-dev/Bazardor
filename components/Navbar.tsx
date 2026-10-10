import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/api";
import { banglaToday } from "@/lib/bn";
import NavLinks from "./NavLinks";

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <header className="bg-base-100 border-b border-base-300">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-icon.png" alt="বাজার দর" width={36} height={36} />
            <div className="leading-tight">
              <p className="text-lg font-bold">বাজার দর</p>
              <p className="text-xs text-base-content/60">{banglaToday()}</p>
            </div>
          </Link>

          <div className="flex gap-2">
            <Link href="/signin" className="btn btn-sm sm:btn-md btn-ghost">
              সাইন ইন
            </Link>
            <Link href="/signup" className="btn btn-sm sm:btn-md btn-primary">
              সাইন আপ
            </Link>
          </div>
        </div>

        <NavLinks categories={categories} />
      </div>
    </header>
  );
}
