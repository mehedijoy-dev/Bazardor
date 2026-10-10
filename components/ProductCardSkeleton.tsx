export default function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="flex items-center gap-3">
        <div className="skeleton h-12 w-12 shrink-0 rounded-xl" />
        <div className="flex-1 space-y-2">
          <div className="skeleton h-4 w-3/4" />
          <div className="skeleton h-3 w-1/2" />
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div className="space-y-2">
          <div className="skeleton h-3 w-16" />
          <div className="skeleton h-6 w-24" />
        </div>
        <div className="skeleton h-6 w-14 rounded-full" />
      </div>
    </div>
  );
}
