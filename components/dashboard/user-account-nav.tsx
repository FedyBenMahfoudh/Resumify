"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, LogOut, Settings, UserCog } from "lucide-react";
import { Drawer } from "vaul";

import { useMediaQuery } from "@/hooks/use-media-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "../shared/user-avatar";
import { Logout } from "@/lib/user";

import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function UserAccountNav({ user }: { user: User | null }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const closeDrawer = () => {
    setOpen(false);
  };

  const { isMobile } = useMediaQuery();

  //   if (loading)
  //     return (
  //       <div className="size-8 animate-pulse rounded-full border bg-muted" />
  //     );
  const handleLogout = async () => {
    await Logout();
    router.push("/login");
  };
  if (!user)
    return (
      <div className="size-8 animate-pulse rounded-full border bg-muted" />
    );

  if (isMobile) {
    return (
      <Drawer.Root open={open} onClose={closeDrawer}>
        <Drawer.Trigger onClick={() => setOpen(true)}>
          <UserAvatar user={user} className="size-9 border" />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay
            className="font-sans fixed inset-0 z-40 h-full bg-background/80 backdrop-blur-sm"
            onClick={closeDrawer}
          />
          <Drawer.Content className="font-sans fixed inset-x-0 bottom-0 z-50 mt-24 overflow-hidden rounded-t-[10px] border bg-background px-3 text-sm">
            <div className="sticky top-0 z-20 flex w-full items-center justify-center bg-inherit">
              <div className="my-3 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
            </div>

            <div className="font-sans flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col">
                {user.user_metadata.name && (
                  <p className="font-medium">{user.user_metadata.name}</p>
                )}
                {user.email && (
                  <p className="w-[200px] truncate text-muted-foreground">
                    {user?.email}
                  </p>
                )}
              </div>
            </div>

            <ul role="list" className="mb-14 mt-1 w-full text-muted-foreground">
              {user.role === "ADMIN" ? (
                <li className="rounded-lg text-foreground hover:bg-muted">
                  <Link
                    href="/admin"
                    onClick={closeDrawer}
                    className="flex w-full items-center gap-3 px-2.5 py-2"
                  >
                    <Lock className="size-4" />
                    <p className="text-sm">Admin</p>
                  </Link>
                </li>
              ) : null}

              <li className="rounded-lg text-foreground hover:bg-muted">
                <Link
                  href="/profile"
                  onClick={closeDrawer}
                  className="font-sans flex w-full items-center gap-3 px-2.5 py-2"
                >
                  <Settings className="size-4" />
                  <p className="text-sm">Settings</p>
                </Link>
              </li>

              <li
                className="rounded-lg text-foreground hover:bg-muted"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <div className="flex w-full items-center gap-3 px-2.5 py-2">
                  <LogOut className="size-4" />
                  <p className="text-sm">Log out </p>
                </div>
              </li>
            </ul>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            src={
              user.user_metadata?.avatar_url ||
              "https://www.gravatar.com/avatar/"
            }
            alt="User"
            className="rounded-full"
          />
          <AvatarFallback className="rounded-full border border-white">
            {user.user_metadata?.username
              ? user.user_metadata.username
                  .split(" ")
                  .map((name: string) => name[0])
                  .join("")
              : "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-sans">
        <div className="font-sans flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <div className="flex items-center gap-2">
              {user.user_metadata?.username && (
                <p className="font-medium">{user.user_metadata?.username}</p>
              )}
            </div>
            {user?.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center space-x-2.5">
            <UserCog className="size-4" />
            <p className="text-sm">Profile</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="cursor-pointer"
          onClick={handleLogout}
        >
          <div className="flex items-center space-x-2.5">
            <LogOut className="size-4" />
            <p className="text-sm">Log out </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
