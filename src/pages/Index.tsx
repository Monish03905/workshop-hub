import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkshopGrid from "@/components/WorkshopGrid";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-20">
      <HeroSection />
      <WorkshopGrid />
      <FeaturesSection />
    </main>
    <Footer />
  </div>
);

export default Index;
