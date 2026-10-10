import type { Category, Product } from "./types";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

export const getProducts = () => get<Product[]>("/products");

export const getProductsByCategory = (slug: string) =>
  get<Product[]>(`/products?category=${slug}`);

export const getProductBySlug = async (slug: string) => {
  const list = await get<Product[]>(`/products?slug=${slug}`);
  return list[0] ?? null;
};

export const getCategories = () => get<Category[]>("/categories");

export const getCategory = async (slug: string) => {
  try {
    return await get<Category>(`/categories/${slug}`);
  } catch {
    return null;
  }
};
