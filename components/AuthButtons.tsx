"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function AuthButtons() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div className="skeleton h-9 w-28 rounded-xl" />;

  if (!session) {
    return (
      <div className="flex gap-2">
        <Link
          href="/signin"
          className="btn btn-sm sm:btn-md btn-ghost px-2 sm:px-4"
        >
          সাইন ইন
        </Link>
        <Link
          href="/signup"
          className="btn btn-sm sm:btn-md btn-primary px-3 sm:px-4"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  const user = session.user;
  const firstName = user.name.split(" ")[0];

  async function logout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সফলভাবে সাইন আউট হয়েছে");
          router.push("/");
          router.refresh();
        },
      },
    });
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost gap-2 px-2"
        aria-label="প্রোফাইল মেনু"
      >
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
            {user.name.charAt(0).toUpperCase()}
          </span>
        )}
        <span className="hidden text-sm font-medium sm:inline">
          {firstName}
        </span>
        <svg
          className="h-3 w-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu z-10 mt-2 w-60 rounded-xl border border-base-300 bg-base-100 p-2 shadow-lg"
      >
        <li className="pointer-events-none px-3 py-2">
          <p className="font-semibold">{user.name}</p>
          <p className="truncate text-xs text-base-content/75">{user.email}</p>
        </li>
        <li>
          <Link href="/profile">👤 আমার প্রোফাইল</Link>
        </li>
        <li>
          <button type="button" onClick={logout} className="text-red-600">
            ↩ সাইন আউট
          </button>
        </li>
      </ul>
    </div>
  );
}
