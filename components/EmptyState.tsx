import Link from "next/link";

export default function EmptyState({
  title = "পাতাটি খুঁজে পাওয়া যায়নি",
  message = "আপনি যে পাতাটি খুঁজছেন সেটি নেই বা সরিয়ে নেওয়া হয়েছে।",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-base-300 bg-base-100 px-6 py-16 text-center">
      <p className="text-6xl font-bold text-primary">৪০৪</p>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="max-w-md text-base-content/75">{message}</p>
      <Link href="/" className="btn btn-primary">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
