import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/api";
import { banglaShortDate, banglaToday } from "@/lib/bn";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <>
      <header className="border-b border-base-300 bg-base-100">
        <div className="mx-auto max-w-6xl px-3 sm:px-4">
          <div className="flex items-center justify-between gap-2 py-3">
            <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary sm:h-10 sm:w-10">
                <Image
                  src="/logo-icon.png"
                  alt="বাজার দর"
                  width={22}
                  height={22}
                  className="brightness-0 invert"
                />
              </span>
              <div className="min-w-0 leading-tight">
                <p className="text-base font-bold sm:text-lg">বাজার দর</p>
                <p className="whitespace-nowrap text-[11px] text-base-content/60 sm:hidden">
                  {banglaShortDate()}
                </p>
                <p className="hidden whitespace-nowrap text-xs text-base-content/60 sm:block">
                  {banglaToday()}
                </p>
              </div>
            </Link>

            <AuthButtons />
          </div>
        </div>
      </header>

      <div className="sticky top-0 z-40 border-b border-base-300 bg-base-100/70 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-3 sm:px-4">
          <NavLinks categories={categories} />
        </div>
      </div>
    </>
  );
}
