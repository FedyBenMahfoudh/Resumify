import { SidebarNavItem } from "@/types";

enum UserRoles {
  USER = "USER",
  ADMIN = "ADMIN",
}

export const sidebarLinks: SidebarNavItem[] = [
  {
    title: "MENU",
    items: [
      {
        href: "/admin",
        icon: "laptop",
        title: "Admin Panel",
        authorizeOnly: UserRoles.ADMIN,
      },
      {
        href: "/builder",
        icon: "filePenLine",
        title: "Resumes",
        authorizeOnly: UserRoles.USER,
        disabled: true,
      },
      {
        href: "/analyze",
        icon: "chartNoAxes",
        title: "Analyze",
        authorizeOnly: UserRoles.USER,
      },
      {
        href: "/reviews",
        icon: "interviews",
        title: "Reviews",
        authorizeOnly: UserRoles.USER,
      },

      // {
      //   href: "/interviews/history",
      //   icon: "history",
      //   title: "History",
      //   authorizeOnly: UserRoles.USER,
      // },
      // {
      //   href: "/resumes",
      //   icon: "fileText",
      //   title: "My Resumes",
      //   authorizeOnly: UserRole.USER,
      //   disabled: true,
      // },

      // {
      //   href: "/billing",
      //   icon: "billing",
      //   title: "Billing",
      //   authorizeOnly: UserRoles.USER,
      // },

      // { href: "/charts", icon: "lineChart", title: "Charts" },
      {
        href: "/admin/orders",
        icon: "package",
        title: "Orders",
        badge: 2,
        authorizeOnly: UserRoles.ADMIN,
      },
      // {
      //   href: "#/dashboard/posts",
      //   icon: "post",
      //   title: "User Posts",
      //   authorizeOnly: UserRole.USER,
      //   disabled: true,
      // },
    ],
  },
  {
    title: "OPTIONS",
    items: [
      { href: "/profile", icon: "settings", title: "Profile" },
      // { href: "/", icon: "home", title: "Homepage" },
      // { href: "/docs", icon: "bookOpen", title: "Documentation" },
      {
        href: "/support",
        icon: "messages",
        title: "Support",
        authorizeOnly: UserRoles.USER,
        disabled: true,
      },
    ],
  },
];
