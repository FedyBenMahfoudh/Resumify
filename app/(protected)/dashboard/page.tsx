

import { LogoutButton } from "@/components/layout/logout-button";
import { getUser } from "@/lib/user";

export default async function DashboardPage() {
  const user = await getUser();
  

  return (
    <div className="flex h-svh w-full items-center justify-center gap-2">
      <p>
        Hello <span>{(user && user.email) || "unknown user"}</span>
      </p>
      <LogoutButton />
    </div>
  );
}
