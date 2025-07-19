import { LoginForm } from "@/components/forms/login-form";
import { getUser } from "@/lib/user";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getUser();
  if (user) {
    // If the user is already logged in, redirect to the dashboard
    redirect("/dashboard");
  }
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm font-sans">
        <LoginForm />
      </div>
    </div>
  );
}
