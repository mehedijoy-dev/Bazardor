import Link from "next/link";
import { toBn, UNIT_LABEL } from "@/lib/bn";
import type { Product } from "@/lib/types";
import ChangeBadge from "./ChangeBadge";

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="block rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-2xl">
          {p.image}
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-semibold">{p.nameBn}</h3>
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
