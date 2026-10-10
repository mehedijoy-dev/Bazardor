import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function Loading() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5">
        <div className="skeleton h-14 w-14 rounded-xl" />
        <div className="space-y-2">
          <div className="skeleton h-6 w-32" />
          <div className="skeleton h-4 w-48" />
        </div>
      </div>

      <div className="rounded-2xl border border-base-300 bg-base-100 p-3">
        <div className="skeleton ml-auto h-8 w-40" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
