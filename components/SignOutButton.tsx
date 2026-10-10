"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();

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
    <button
      type="button"
      onClick={logout}
      className="btn btn-sm border-red-300 bg-base-100 text-red-600 hover:bg-red-50"
    >
      ↩ সাইন আউট
    </button>
  );
}
