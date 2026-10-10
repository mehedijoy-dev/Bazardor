import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UpdateProfileForm from "@/components/UpdateProfileForm";
import { auth } from "@/lib/auth";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/signin?reason=login&callbackUrl=%2Fprofile%2Fupdate");
  }

  return <UpdateProfileForm initialName={session.user.name} />;
}
