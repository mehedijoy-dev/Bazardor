import { getProducts } from "@/lib/api";
import { formatPct, toBn, UNIT_SHORT } from "@/lib/bn";

export default async function Ticker() {
  const products = await getProducts();

  const items = products.map((p) => {
    const color =
      p.change.dir === "up"
        ? "text-green-600 font-semibold"
        : p.change.dir === "down"
          ? "text-red-600 font-semibold"
          : "text-gray-500";
    const arrow =
      p.change.dir === "up" ? "▲" : p.change.dir === "down" ? "▼" : "—";

    return (
      <span
        key={p.id}
        className="mx-5 inline-flex items-center gap-2 whitespace-nowrap text-sm"
      >
        <span>{p.image}</span>
        <span className="font-medium">{p.nameBn}</span>
        <span>
          {toBn(p.today.toLocaleString("en-US"))} টাকা/{UNIT_SHORT[p.unit]}
        </span>
        <span className={color}>
          {arrow} {formatPct(p.change.pct)}%
        </span>
      </span>
    );
  });

  return (
    <div className="marquee overflow-hidden border-b border-base-300 bg-base-200 py-2">
      <div className="marquee-track">
        <div className="flex">{items}</div>
        <div className="flex" aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  );
}
