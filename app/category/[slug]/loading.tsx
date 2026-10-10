import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function Loading() {
  return (
    <section>
      <div className="mb-6 flex items-center gap-3">
        <div className="skeleton h-12 w-12 rounded-xl" />
        <div className="skeleton h-8 w-40" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
