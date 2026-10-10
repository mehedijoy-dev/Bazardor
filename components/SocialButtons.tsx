"use client";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

export default function SocialButtons() {
  const login = async (provider: "google" | "github") => {
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
    if (error) toast.error("এই মাধ্যমে লগইন করা যায়নি, আবার চেষ্টা করুন");
  };

  const btn =
    "btn btn-outline flex-nowrap gap-2 px-3 text-sm whitespace-nowrap";

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button type="button" onClick={() => login("google")} className={btn}>
        <FcGoogle className="shrink-0 text-xl" />
        <span>Google দিয়ে চালিয়ে যান</span>
      </button>
      <button type="button" onClick={() => login("github")} className={btn}>
        <FaGithub className="shrink-0 text-xl" />
        <span>GitHub দিয়ে চালিয়ে যান</span>
      </button>
    </div>
  );
}
