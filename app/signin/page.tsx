"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import AuthShell from "@/components/AuthShell";
import SocialButtons from "@/components/SocialButtons";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("reason") === "login") {
      toast.error("এই পাতা দেখতে আগে সাইন ইন করুন", { id: "login-required" });
    }
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email")).trim();
    const password = String(fd.get("password"));

    if (!email || !password) return toast.error("ইমেইল ও পাসওয়ার্ড দিন");

    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) return toast.error("ইমেইল বা পাসওয়ার্ড সঠিক নয়");

    toast.success("সফলভাবে সাইন ইন হয়েছে");
    const next = new URLSearchParams(window.location.search).get("callbackUrl");
    router.push(next && next.startsWith("/") ? next : "/");
    router.refresh();
  }

  return (
    <AuthShell
      title="সাইন ইন"
      subtitle="বিস্তারিত দাম, বাজারভিত্তিক তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন"
    >
      <form onSubmit={onSubmit} className="grid gap-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">ইমেইল</span>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className="input w-full"
            required
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">পাসওয়ার্ড</span>
          <input
            name="password"
            type="password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            className="input w-full"
            required
          />
        </label>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? <span className="loading loading-spinner" /> : "সাইন ইন"}
        </button>
      </form>

      <div className="divider my-5 text-xs">অথবা</div>
      <SocialButtons />

      <p className="mt-5 text-center text-sm">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="font-semibold text-primary">
          সাইন আপ করুন
        </Link>
      </p>
    </AuthShell>
  );
}
