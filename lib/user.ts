import { createClient as ServerClient } from "./server";
import { createClient } from "@/lib/client";
export const getUser = async () => {
  const supabase = await ServerClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return null;
  }

  return data.user;
};

export const Logout = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
};
