"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm({
  initialName,
}: {
  initialName: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = String(new FormData(e.currentTarget).get("name")).trim();

    if (!name) return toast.error("নাম খালি রাখা যাবে না");

    setLoading(true);
    const { error } = await authClient.updateUser({ name });
    setLoading(false);

    if (error) return toast.error("তথ্য আপডেট করা যায়নি, আবার চেষ্টা করুন");

    toast.success("তথ্য সফলভাবে আপডেট হয়েছে");
    router.push("/profile");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div>
        <h1 className="text-2xl font-bold">তথ্য আপডেট করুন</h1>
        <p className="text-sm text-base-content/75">আপনার নাম পরিবর্তন করুন</p>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid gap-4 rounded-2xl border border-base-300 bg-base-100 p-5"
      >
        <h2 className="font-semibold">তথ্য</h2>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">নাম</span>
          <input
            name="name"
            type="text"
            defaultValue={initialName}
            placeholder="আপনার নাম"
            className="input w-full"
            required
          />
        </label>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? <span className="loading loading-spinner" /> : "আপডেট"}
        </button>
      </form>

      <p className="text-center text-sm">
        <Link
          href="/profile"
          className="text-base-content/75 hover:text-primary"
        >
          ← প্রোফাইলে ফিরে যান
        </Link>
      </p>
    </div>
  );
}
