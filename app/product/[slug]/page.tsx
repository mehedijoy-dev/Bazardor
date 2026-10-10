import Link from "next/link";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import ChangeBadge from "@/components/ChangeBadge";
import { getProductBySlug } from "@/lib/api";
import { auth } from "@/lib/auth";
import { toBn, UNIT_LABEL, UNIT_SHORT } from "@/lib/bn";

const tk = (n: number) => `${toBn(n.toLocaleString("en-US"))} টাকা`;

function Money({ n, className }: { n: number; className?: string }) {
  return (
    <span className={className}>
      {toBn(n.toLocaleString("en-US"))}{" "}
      <span className="text-sm font-normal">টাকা</span>
    </span>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect(
      `/signin?reason=login&callbackUrl=${encodeURIComponent(`/product/${slug}`)}`,
    );
  }

  const p = await getProductBySlug(slug).catch(() => null);
  if (!p) notFound();

  const rows = p.markets
    .map((m) => ({ ...m, avg: Math.round((m.min + m.max) / 2) }))
    .sort((a, b) => a.avg - b.avg || a.min - b.min);

  const has = rows.length > 0;
  const min = has ? Math.min(...rows.map((r) => r.min)) : p.today;
  const max = has ? Math.max(...rows.map((r) => r.max)) : p.today;
  const avg = has
    ? Math.round(rows.reduce((s, r) => s + r.avg, 0) / rows.length)
    : p.today;

  const diff = p.today - p.yesterday;
  const trend =
    diff > 0 ? (
      <>
        <span className="font-bold text-red-600">বেড়েছে</span> · {tk(diff)}
      </>
    ) : diff < 0 ? (
      <>
        <span className="font-bold text-green-600">কমেছে</span> · {tk(-diff)}
      </>
    ) : (
      <span className="font-bold">অপরিবর্তিত আছে</span>
    );

  return (
    <div className="space-y-5">
      <nav className="flex flex-wrap items-center gap-2 text-sm text-base-content/75">
        <Link href="/" className="hover:text-primary">
          হোম
        </Link>
        <span>›</span>
        <Link href={`/category/${p.category}`} className="hover:text-primary">
          {p.categoryNameBn}
        </Link>
        <span>›</span>
        <span className="font-medium text-base-content">{p.nameBn}</span>
      </nav>

      <section className="flex flex-col gap-5 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-base-200 text-5xl">
            {p.image}
          </span>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">{p.nameBn}</h1>
            <p className="text-sm text-base-content/75">
              {UNIT_LABEL[p.unit]} · {p.categoryNameBn}
            </p>
            <p className="text-sm text-base-content/75">
              গতকালের তুলনায় আজকের দাম {trend}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-base-200 px-6 py-4 text-center sm:min-w-44">
          <p className="text-xs text-base-content/75">আজকের দাম</p>
          <p className="text-3xl font-bold">
            {toBn(p.today.toLocaleString("en-US"))}
          </p>
          <p className="mb-2 text-xs text-base-content/75">
            টাকা / {UNIT_SHORT[p.unit]}
          </p>
          <ChangeBadge change={p.change} />
        </div>
      </section>

      <section className="space-y-6 rounded-2xl border border-base-300 bg-base-100 p-6">
        <div>
          <h2 className="mb-3 text-lg font-bold">দামের সারসংক্ষেপ</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-base-300 p-4">
              <p className="text-xs text-base-content/75">সর্বনিম্ন দাম</p>
              <Money
                n={min}
                className="mt-1 block text-2xl font-bold text-green-600"
              />
              <p className="mt-1 text-xs text-base-content/75">
                সবচেয়ে কম দামের বাজার
              </p>
            </div>
            <div className="rounded-xl border border-base-300 p-4">
              <p className="text-xs text-base-content/75">সর্বোচ্চ দাম</p>
              <Money
                n={max}
                className="mt-1 block text-2xl font-bold text-red-600"
              />
              <p className="mt-1 text-xs text-base-content/75">
                সবচেয়ে বেশি দামের বাজার
              </p>
            </div>
            <div className="rounded-xl border border-base-300 p-4">
              <p className="text-xs text-base-content/75">গড় দাম</p>
              <Money
                n={avg}
                className="mt-1 block text-2xl font-bold text-green-700"
              />
              <p className="mt-1 text-xs text-base-content/75">
                {UNIT_LABEL[p.unit]}-এর হিসাবে
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold">বাজারভিত্তিক আজকের দাম</h2>
          <div className="overflow-x-auto rounded-xl border border-base-300">
            <table className="table min-w-[520px]">
              <thead>
                <tr className="border-b border-base-300 text-base-content/75">
                  <th>বাজার</th>
                  <th>বিভাগ</th>
                  <th className="text-right">সর্বনিম্ন</th>
                  <th className="text-right">সর্বোচ্চ</th>
                  <th className="text-right">গড়</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={`${r.division}-${r.market}`}
                    className="border-b border-base-300 last:border-0"
                  >
                    <td className="font-medium">{r.market}</td>
                    <td>{r.division}</td>
                    <td className="text-right">{tk(r.min)}</td>
                    <td className="text-right">{tk(r.max)}</td>
                    <td className="text-right font-bold">{tk(r.avg)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
