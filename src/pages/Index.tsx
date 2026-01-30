import { Navbar } from "@/components/Navbar";
import { MedicationToolkit } from "@/components/MedicationToolkit";
import { ScienceSection } from "@/components/ScienceSection";
import { CTASection } from "@/components/CTASection";
import { SiteFooter } from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <MedicationToolkit />
        <ScienceSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
