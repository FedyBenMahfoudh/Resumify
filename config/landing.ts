import { FeatureLdg, MarketingConfig, TestimonialType } from "@/types";

export const LandingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
};

export const features: FeatureLdg[] = [
  {
    title: "Easy CV Builder",
    description:
      "Create your professional CV in minutes with our intuitive, step-by-step builder. No design skills required.",
    link: "/features/builder",
    icon: "fileText",
  },
  {
    title: "Modern Templates",
    description:
      "Choose from a variety of beautiful, recruiter-approved templates to make your CV stand out.",
    link: "/features/templates",
    icon: "mic",
  },
  {
    title: "Instant Download & Sharing",
    description:
      "Download your CV as PDF or share it instantly with a unique online link.",
    link: "/features/sharing",
    icon: "lineChart",
  },
  {
    title: "Real-Time Preview",
    description:
      "See your changes live as you edit, so you always know exactly how your CV will look.",
    link: "/features/preview",
    icon: "messageSquare",
  },
  {
    title: "Custom Sections",
    description:
      "Add, remove, or reorder sections like Skills, Experience, Education, and more to fit your needs.",
    link: "/features/custom-sections",
    icon: "buildings",
  },
  {
    title: "Secure & Private",
    description:
      "Your data is safe. Only you control who can view or download your CV.",
    link: "/features/security",
    icon: "history",
  },
];
export const testimonials: TestimonialType[] = [
  {
    name: "Alex Chen",
    job: "Software Engineer at Google",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "CV Path made creating my CV so easy! The templates are modern and professional, and I landed more interviews after updating my resume.",
  },
  {
    name: "Sarah Miller",
    job: "Product Manager at CIN Group",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "I loved how simple it was to customize each section. I could highlight my experience and skills exactly how I wanted. Highly recommend CV Path!",
  },
  {
    name: "James Liu",
    job: "Data Scientist at Amazon",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "The real-time preview and instant PDF download saved me so much time. My new CV looks fantastic and got great feedback from recruiters.",
  },
  {
    name: "Ryan Park",
    job: "Frontend Developer at Apple",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "CV Path's templates helped my application stand out. The process was smooth and the results were impressive.",
  },
  {
    name: "Maya Patel",
    job: "DevOps Engineer at Microsoft",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
      "I was able to create a professional CV in minutes. The platform is user-friendly and the privacy controls gave me peace of mind.",
  },
  {
    name: "Emma Thompson",
    job: "Senior Product Designer at Spotify",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "As a designer, I appreciated the clean layouts and customization options. CV Path made my CV look polished and unique.",
  },
  {
    name: "Daniel Kim",
    job: "Full Stack Developer at Netflix",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    review:
      "I updated my CV with CV Path and immediately noticed more responses from employers. The sharing feature is super convenient!",
  },
];
