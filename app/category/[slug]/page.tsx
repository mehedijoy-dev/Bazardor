import CategoryProducts from "@/components/CategoryProducts";
import EmptyState from "@/components/EmptyState";
import { getCategory, getProductsByCategory } from "@/lib/api";
import { toBn } from "@/lib/bn";
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
    <section className="space-y-4">
      <div className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-base-200 text-3xl">
          {category.icon}
        </span>
        <div>
          <h1 className="text-2xl font-bold">{category.nameBn}</h1>
          <p className="text-sm text-base-content/75">
            {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <CategoryProducts products={products} />
    </section>
  );
}
