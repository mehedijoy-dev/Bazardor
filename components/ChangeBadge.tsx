import { formatPct } from "@/lib/bn";
import { trendArrow, trendStyle } from "@/lib/trend";
import type { Product } from "@/lib/types";

export default function ChangeBadge({ change }: { change: Product["change"] }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${trendStyle(change.dir).badge}`}
    >
      {trendArrow(change.dir)} {formatPct(change.pct)}%
    </span>
  );
}
