import Link from "next/link";

export default function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-lg py-4">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-sm text-base-content/75">{subtitle}</p>
      </div>

      <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
        {children}
      </div>

      <p className="mt-6 text-center text-sm">
        <Link href="/" className="text-base-content/75 hover:text-primary">
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </div>
  );
}
