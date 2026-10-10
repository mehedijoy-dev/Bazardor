import { getProducts } from "@/lib/api";
import { formatPct, toBn, UNIT_SHORT } from "@/lib/bn";
import { trendArrow, trendStyle } from "@/lib/trend";

export default async function Ticker() {
  const products = await getProducts();

  const items = products.map((p) => (
    <span
      key={p.id}
      className="inline-flex items-center gap-2 whitespace-nowrap border-r border-base-300 px-5 text-base"
    >
      <span>{p.image}</span>
      <span className="font-semibold">{p.nameBn}</span>
      <span className="text-base-content/85">
        {toBn(p.today.toLocaleString("en-US"))} টাকা/{UNIT_SHORT[p.unit]}
      </span>
      <span className={`font-semibold ${trendStyle(p.change.dir).text}`}>
        {trendArrow(p.change.dir)} {formatPct(p.change.pct)}%
      </span>
    </span>
  ));

  return (
    <div className="marquee overflow-hidden border-b border-base-300 bg-base-100 py-2">
      <div className="marquee-track">
        <div className="flex">{items}</div>
        <div className="flex" aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  );
}
