import Image from "next/image";
import { banglaToday } from "@/lib/bn";

export default function Hero() {
  return (
    <section className="grid items-center gap-6 rounded-3xl border border-base-300 bg-base-100 p-6 md:grid-cols-2 md:p-10">
      <div className="space-y-4">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
          {banglaToday()}
        </span>

        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="text-base-content/85">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <a href="#সব-পণ্য" className="btn btn-primary">
          সব পণ্য দেখুন
        </a>
      </div>

      <Image
        src="/bazar-hero.png"
        alt="বাজারের ছবি"
        width={500}
        height={400}
        priority
        className="mx-auto h-auto w-full max-w-sm md:mr-0 md:ml-auto"
      />
    </section>
  );
}
