import Link from "next/link";
import { toBn, UNIT_LABEL } from "@/lib/bn";
import type { Product } from "@/lib/types";
import ChangeBadge from "./ChangeBadge";

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="group block cursor-pointer rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:ring-2 hover:ring-primary/25 focus-visible:-translate-y-1 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none active:translate-y-0 active:scale-[0.99]"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-2xl transition-all duration-200 group-hover:scale-110 group-hover:bg-primary/10">
          {p.image}
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-semibold transition-colors duration-200 group-hover:text-primary">
            {p.nameBn}
          </h3>
          <p className="text-sm text-base-content/75">{UNIT_LABEL[p.unit]}</p>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between gap-2">
        <div>
          <p className="text-xs text-base-content/75">আজকের দাম</p>
          <p className="text-xl font-bold">
            {toBn(p.today.toLocaleString("en-US"))}{" "}
            <span className="text-sm font-normal text-base-content/75">
              টাকা
            </span>
          </p>
        </div>
        <ChangeBadge change={p.change} />
      </div>
    </Link>
  );
}
