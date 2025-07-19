import React from "react";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { MobileSheetSidebar } from "../layout/dashboard-sidebar";
import { SearchCommand } from "./search-command";
import { ModeToggle } from "../shared/mode-toggle";
import { UserAccountNav } from "./user-account-nav";
import { SidebarNavItem } from "@/types";
import { getUser } from "@/lib/user";

interface DashboardNavbarProps {
  filteredLinks: SidebarNavItem[];
}
export const DashboardNavbar = async ({
  filteredLinks,
}: DashboardNavbarProps) => {
  const user = await getUser();
  console.log("DashboardNavbar user:", user);
  return (
    <header className="sticky top-0 z-50 flex h-14 bg-background px-4 lg:h-[60px] xl:px-8">
      <MaxWidthWrapper className="flex max-w-7xl items-center gap-x-3 px-0">
        <MobileSheetSidebar links={filteredLinks} />

        <div className="w-full flex-1">
          <SearchCommand links={filteredLinks} />
        </div>

        <ModeToggle />
        <UserAccountNav user={user} />
      </MaxWidthWrapper>
    </header>
  );
};
