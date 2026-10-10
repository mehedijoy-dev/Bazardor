import { bnToNum } from "./bn";
import type { Product } from "./types";

export type SortMode = "default" | "asc" | "desc";

export const SORT_OPTIONS: { value: SortMode; label: string }[] = [
  { value: "default", label: "ডিফল্ট" },
  { value: "asc", label: "দাম: কম থেকে বেশি" },
  { value: "desc", label: "দাম: বেশি থেকে কম" },
];

export const sortProducts = (items: Product[], mode: SortMode) =>
  mode === "default"
    ? items
    : [...items].sort((a, b) =>
        mode === "asc"
          ? bnToNum(a.today) - bnToNum(b.today)
          : bnToNum(b.today) - bnToNum(a.today),
      );
