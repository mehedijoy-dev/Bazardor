"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import AuthShell from "@/components/AuthShell";
import SocialButtons from "@/components/SocialButtons";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name")).trim();
    const email = String(fd.get("email")).trim();
    const password = String(fd.get("password"));
    const confirm = String(fd.get("confirm"));

    if (!name) return toast.error("আপনার নাম লিখুন");
    if (password.length < 8)
      return toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
    if (password !== confirm) return toast.error("পাসওয়ার্ড দুটি মিলছে না");

    setLoading(true);
    const { error } = await authClient.signUp.email({ name, email, password });
    setLoading(false);

    if (error) {
      toast.error(
        error.code?.startsWith("USER_ALREADY_EXISTS")
          ? "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে"
          : "রেজিস্ট্রেশন ব্যর্থ হয়েছে, আবার চেষ্টা করুন",
      );
      return;
    }

    toast.success("রেজিস্ট্রেশন সফল হয়েছে, এখন সাইন ইন করুন");
    router.push("/signin");
  }

  return (
    <AuthShell
      title="অ্যাকাউন্ট তৈরি করুন"
      subtitle="বিনামূল্যে সাইন আপ করে সব বিস্তারিত দাম দেখুন"
    >
      <form onSubmit={onSubmit} className="grid gap-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">নাম</span>
          <input
            name="name"
            type="text"
            placeholder="যেমন: রহিম উদ্দিন"
            className="input w-full"
            required
          />
        </label>

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

        <label className="block">
          <span className="mb-1 block text-sm font-medium">
            পাসওয়ার্ড নিশ্চিত করুন
          </span>
          <input
            name="confirm"
            type="password"
            placeholder="আবার লিখুন"
            className="input w-full"
            required
          />
        </label>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner" />
          ) : (
            "অ্যাকাউন্ট তৈরি করুন"
          )}
        </button>
      </form>

      <div className="divider my-5 text-xs">অথবা</div>
      <SocialButtons />

      <p className="mt-5 text-center text-sm">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="font-semibold text-primary">
          সাইন ইন করুন
        </Link>
      </p>
    </AuthShell>
  );
}
