import { redirect } from "next/navigation";
import { getUser } from "@/lib/user";
import { sidebarLinks } from "@/config/dashboard";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface LandingLayoutProps {
  children: React.ReactNode;
}
export default async function LandingLayout({ children }: LandingLayoutProps) {
  const user = await getUser();
  if (!user) {
    // If the user is not logged in, redirect to the login page
    redirect("/login");
  }
  const currentUser = { ...user, user_role: "USER" }; // Ensure role is defined
  const filteredLinks = sidebarLinks.map((section) => ({
    ...section,
    items: section.items.filter(
      ({ authorizeOnly }) =>
        !authorizeOnly || authorizeOnly === currentUser.user_role
    ),
  }));
  return (
<div className="relative flex min-h-screen w-full" >
      <DashboardSidebar links={filteredLinks} />

      <div className="flex flex-1 flex-col">
        <DashboardNavbar filteredLinks={filteredLinks} />

        <main className="flex-1 p-4 xl:px-8">
          <MaxWidthWrapper className="flex h-full max-w-7xl flex-col gap-4 px-0 lg:gap-6">
            {children}
          </MaxWidthWrapper>
        </main>
      </div>
    </div>
  );
}
