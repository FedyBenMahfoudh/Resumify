import { SidebarNavItem, SiteConfig } from "@/types";


const site_url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const siteConfig: SiteConfig = {
  name: "Resumind",
  description:
    "Walk into your dream job interview with unshakeable confidence. Our AI-powered mock interviews simulate the real thing, providing instant feedback and expert coaching that turns interview anxiety into your competitive advantage.",
  url: site_url,
  ogImage: `/cvpath2.png`,
  links: {
    gitHub: "",
    twitter: "",
    instagram: "",
    facebook: "",
    bluesky: "",
  },
  mailSupport: "fedi.bn.mahfoudh@gmail.com",
};

export const SUPPORTED_LANGUAGES = {
  EN: { name: "English", flag: "🇺🇸", greeting: "Hello!" },
  FR: { name: "French", flag: "🇫🇷", greeting: "Bonjour!" },
  ES: { name: "Spanish", flag: "🇪🇸", greeting: "¡Hola!" },
  DE: { name: "German", flag: "🇩🇪", greeting: "Hallo!" },
  AR: { name: "Arabic", flag: "🇸🇦", greeting: "!مرحبا" },
} as const;

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "/about" },
      // { title: "Enterprise", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  // {
  //   title: "Product",
  //   items: [
  //     { title: "Security", href: "#" },
  //     { title: "Customization", href: "#" },
  //     { title: "Customers", href: "#" },
  //     { title: "Changelog", href: "#" },
  //   ],
  // },
  // {
  //   title: "Docs",
  //   items: [
  //     { title: "Introduction", href: "#" },
  //     { title: "Installation", href: "#" },
  //     { title: "Components", href: "#" },
  //     { title: "Code Blocks", href: "#" },
  //   ],
  // },
];