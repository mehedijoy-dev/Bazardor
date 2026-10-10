import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/SignOutButton";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/signin?reason=login&callbackUrl=%2Fprofile");

  const { user } = session;

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div>
        <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
        <p className="text-sm text-base-content/75">
          আপনার অ্যাকাউন্টের তথ্য দেখুন
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 rounded-2xl border border-base-300 bg-base-100 p-5">
        <div className="flex min-w-0 items-center gap-4">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name}
              className="h-14 w-14 rounded-xl object-cover"
            />
          ) : (
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-primary-content">
              {user.name.charAt(0).toUpperCase()}
            </span>
          )}
          <div className="min-w-0">
            <p className="truncate font-semibold">{user.name}</p>
            <p className="truncate text-sm text-base-content/75">
              {user.email}
            </p>
          </div>
        </div>
        <SignOutButton />
      </div>

      <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
        <h2 className="mb-4 font-semibold">তথ্য</h2>
        <dl className="mb-5 grid gap-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-base-content/75">নাম</dt>
            <dd className="font-medium">{user.name}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-base-content/75">ইমেইল</dt>
            <dd className="truncate font-medium">{user.email}</dd>
          </div>
        </dl>
        <Link href="/profile/update" className="btn btn-primary w-full">
          তথ্য আপডেট করুন
        </Link>
      </div>
    </div>
  );
}
