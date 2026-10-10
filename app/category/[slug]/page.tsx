import CategoryProducts from "@/components/CategoryProducts";
import EmptyState from "@/components/EmptyState";
import { getCategory, getProductsByCategory } from "@/lib/api";
import type { Product } from "@/lib/types";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [category, products] = await Promise.all([
    getCategory(slug),
    getProductsByCategory(slug).catch((): Product[] => []),
  ]);

  if (!category || products.length === 0) {
    return (
      <EmptyState
        title="কোনো পণ্য পাওয়া যায়নি"
        message="এই ক্যাটাগরিতে কোনো পণ্য নেই অথবা ক্যাটাগরিটি সঠিক নয়।"
      />
    );
  }

  return (
    <section>
      <h1 className="mb-6 flex items-center gap-3 text-3xl font-bold">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
          {category.icon}
        </span>
        {category.nameBn}
      </h1>
      <CategoryProducts products={products} />
    </section>
  );
}
