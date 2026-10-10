"use client";
import { useMemo, useState } from "react";
import { toBn } from "@/lib/bn";
import { SORT_OPTIONS, sortProducts, type SortMode } from "@/lib/sort";
import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function CategoryProducts({
  products,
}: {
  products: Product[];
}) {
  const [mode, setMode] = useState<SortMode>("default");
  const sorted = useMemo(() => sortProducts(products, mode), [products, mode]);

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-base-content/75">
          মোট {toBn(products.length)}টি পণ্য
        </p>

        <label className="flex items-center gap-2 text-sm">
          <span className="text-base-content/75">সাজান:</span>
          <span className="relative">
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as SortMode)}
              className="appearance-none rounded-xl border border-base-300 bg-base-100 py-2 pr-9 pl-3 font-medium focus:ring-2 focus:ring-primary focus:outline-none"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
