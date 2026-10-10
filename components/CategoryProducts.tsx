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
    <div className="space-y-4">
      <div className="flex items-center justify-end gap-2 rounded-2xl border border-base-300 bg-base-100 p-3">
        <label htmlFor="sort" className="text-sm text-base-content/75">
          সাজান:
        </label>
        <span className="relative">
          <select
            id="sort"
            value={mode}
            onChange={(e) => setMode(e.target.value as SortMode)}
            className="appearance-none rounded-lg border border-base-300 bg-base-100 py-1.5 pr-8 pl-3 text-sm font-medium focus:ring-2 focus:ring-primary focus:outline-none"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute top-1/2 right-2.5 h-4 w-4 -translate-y-1/2"
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
      </div>

      <p className="text-sm text-base-content/75">
        মোট {toBn(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
