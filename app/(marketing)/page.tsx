// import { DarkModeToggle } from "@/components/shared/darkmode-button";
// import { Button } from "@/components/ui/button";

import BentoGrid from "@/components/sections/bento-grid";
import Features from "@/components/sections/features";
import { HeroLanding } from "@/components/sections/hero-landing";
import HeroScroll from "@/components/sections/hero-scroll";
import MarqueeLogo from "@/components/sections/marquee-logo";
import Testimonials from "@/components/sections/testimonials";
// import { ModeToggle } from "@/components/shared/mode-toggle";

export default function Home() {
  return (
    <>
      {/* <ModeToggle /> */}

      <HeroLanding
        heading="Create Your CV in Minutes"
        description="CV Path lets you easily build, customize, and share your professional CV. Choose a template, add your details, and download or share your CV instantly."
      />
      <MarqueeLogo />
      <HeroScroll />
      <BentoGrid />
      <Features />
      <Testimonials />
    </>
  );
}
