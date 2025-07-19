import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedIcon } from "../shared/animated-icon";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";
interface HeroProps {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const HeroLanding = ({
  badge = "🚀 CV Customization Made Easy in the IA Era",
  heading = "Create Your CV in Minutes",
  description = "CV Path lets you easily build, customize, and share your professional CV. Choose a template, add your details, and download or share your CV instantly.",
  buttons = {
    primary: {
      text: "Get Started",
      url: "/sign-up",
    },
    secondary: {
      text: "Try it now",
      url: "/dashboard",
    },
  },
  reviews = {
    count: 200,
    rating: 5.0,
    avatars: [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
        alt: "Avatar 5",
      },
    ],
  },
}: HeroProps) => {
  return (
    <section className="py-20">
      <div className="container text-center">
        <div className="mx-auto flex justify-center items-center max-w-5xl flex-col gap-6">
          {badge && (
            <Link
              href={buttons.secondary?.url || "#"}
              className="text-xs font-medium text-black/90 dark:text-white/90 sm:text-sm z-50 flex items-center gap-1 rounded-full border px-3 py-2 backdrop-blur-md transition-colors duration-300 border-black/20 bg-white/10 hover:bg-black/20 dark:border-white/20 dark:bg-neutral-800/10 dark:hover:bg-white/20 animate-fade-down opacity-0 [animation-delay:2200ms] font-sans"
            >
              {badge}
              <ArrowUpRight className="ml-2 size-4" />
            </Link>
          )}
          <AnimatedIcon
            icon="penEdit"
            className="size-40 brightness-[1]"
            playMode="loop"
            hoverDuration={3000}
            speed={0.6}
          />
          <h1 className="animate-fade-up text-balance font-urban text-4xl font-extrabold tracking-tight text-black opacity-0 [animation-delay:100ms] dark:text-white sm:text-5xl md:text-6xl lg:text-[66px]">
            {heading}
          </h1>
          <p className="animate-fade-up font-sans text-balance font-medium leading-normal text-black/90 opacity-0 [animation-delay:600ms] dark:text-white sm:text-xl sm:leading-8">
            {description}
          </p>
        </div>
        <div className="mt-10 font-sans flex w-full flex-col justify-center gap-2 sm:flex-row">
          {buttons.primary && (
            <Button className="w-full sm:w-auto">
              <a href={buttons.primary.url}>{buttons.primary.text}</a>
            </Button>
          )}
          {buttons.secondary && (
            <Button variant="outline" className="w-full sm:w-auto">
              <a
                href={buttons.secondary.url}
                className="flex items-center gap-2"
              >
                {buttons.secondary.text}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          )}
        </div>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center-space-x-4">
            {reviews.avatars.map((avatar, index) => (
              <Avatar key={index} className="size-14 border bg">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
              </Avatar>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="size-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="mr-1 font-semibold">
                {reviews.rating?.toFixed(1)}
              </span>
            </div>
            <p className="text-muted-foreground text-left font-medium">
              from {reviews.count}+ reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroLanding };
