import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

interface LandingLayoutProps {
  children: React.ReactNode;
}

// export const metadata = constructMetadata({
//   title: "CVPath – Create Smart, Professional Resumes with AI Assistance",
// } );

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <NavMobile /> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
