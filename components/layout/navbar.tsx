import { LogIn, Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { ModeToggle } from "../shared/mode-toggle";
import { getUser } from "@/lib/user";
import { Icons } from "../shared/icons";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    dashboard: {
      title: string;
      url: string;
    };
  };
}

const Navbar = async ({
  logo = {
    url: "/",
    src: "/cvpath1.png",
    alt: "logo",
    title: "CV Path",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Team",
      url: "#",
    },
    {
      title: "About",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    dashboard: { title: "Dashboard", url: "/dashboard" },
  },
}: Navbar1Props) => {
  const user = await getUser();
  return (
    <header className="py-4 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="flex items-center justify-between w-full">
          {/* 1) LOGO AND NAME */}
          <a href={logo.url} className="flex items-center gap-1 min-w-0">
            <Image src={logo.src} alt={logo.alt} width={60} height={60} />
            <span className="text-2xl font-urban font-bold tracking-tighter truncate">
              {logo.title}
            </span>
          </a>

          {/* 2) NAV */}
          <nav className="hidden lg:flex flex-1 justify-center font-sans ">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* 3) LOGIN/SIGNUP */}
          <div className="hidden lg:flex gap-2 font-sans">
            {!user ? (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <a href={auth.login.url}>{auth.login.title}</a>
                <Icons.arrowRight className="size-4" />
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <a href={auth.dashboard.url}>{auth.dashboard.title}</a>
                <LogIn className="size-4" />
              </Button>
            )}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="flex flex-col gap-3 mt-4">
                    {user ? (
                      <Button
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <a href={auth.dashboard.url}>{auth.dashboard.title}</a>
                        <LogIn className="size-4" />
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <a href={auth.login.url}>{auth.login.title}</a>
                        <Icons.arrowRight className="size-4" />
                      </Button>
                    )}

                    <ModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="font-sans">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
