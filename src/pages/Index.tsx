import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PlatformSection from "@/components/PlatformSection";
import BusinessSection from "@/components/BusinessSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <PlatformSection />
      <BusinessSection />
      <ContactSection />
      <footer className="border-t border-border py-6 px-4 md:px-8 lg:px-12 flex justify-between items-center">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          © 2026 Foundra Robotics
        </p>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          [ PRECISION IS NOT A SOFTWARE UPDATE ]
        </p>
      </footer>
    </main>
  );
};

export default Index;
