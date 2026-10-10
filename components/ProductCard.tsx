import Link from "next/link";
import { formatPrice, UNIT_LABEL } from "@/lib/bn";
import type { Product } from "@/lib/types";
import ChangeBadge from "./ChangeBadge";

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="card-body gap-2 p-4">
        <div className="text-4xl">{p.image}</div>
        <h3 className="text-lg font-semibold">{p.nameBn}</h3>
        <p className="text-sm text-base-content/75">{UNIT_LABEL[p.unit]}</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-xs text-base-content/75">আজকের দাম</p>
            <p className="font-bold text-red-600">{formatPrice(p.today)}</p>
          </div>
          <ChangeBadge change={p.change} />
        </div>
      </div>
    </Link>
  );
}
