"use client";

import { Button } from "@/components/ui/button";
import { Logout } from "@/lib/user";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await Logout();
    router.push("/login");
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
