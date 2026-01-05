import { Header } from "@/components/Header";
import { MedicationHero } from "@/components/MedicationHero";
import { MedicationToolkit } from "@/components/MedicationToolkit";
import { ScienceSection } from "@/components/ScienceSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <MedicationHero />
        <MedicationToolkit />
        <ScienceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
