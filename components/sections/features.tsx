import { features } from "@/config/landing";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

import { AnimatedIcon } from "../shared/animated-icon";

export default function Features() {
  return (
    <section>
      <div className="pb-6 pt-28">
        <MaxWidthWrapper>
          <AnimatedIcon
            className="mx-auto size-24"
            icon="barChart"
            playMode="loop"
            speed={0.7}
          />
          <HeaderSection
            label="Why Choose CV Path?"
            title="Powerful Features for Effortless CV Creation"
            subtitle="Everything you need to build, customize, and share a standout CV. CV Path makes your professional journey easier with modern tools and beautiful templates."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = Icons[feature.icon || "nextjs"];
              return (
                <div
                  className="group relative overflow-hidden rounded-2xl border bg-background p-5 md:p-8"
                  key={feature.title}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-sky-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                  />
                  <div className="relative">
                    <div className="relative flex size-12 rounded-2xl border border-border shadow-sm *:relative *:m-auto *:size-6">
                      <Icon />
                    </div>

                    <p className="mt-6 pb-6 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
