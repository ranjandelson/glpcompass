import { Header } from "@/components/Header";
import { MedicationToolkit } from "@/components/MedicationToolkit";
import { ScienceSection } from "@/components/ScienceSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <MedicationToolkit />
        <ScienceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
