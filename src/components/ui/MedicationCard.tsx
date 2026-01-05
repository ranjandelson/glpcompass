import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Activity, Droplets, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";

interface MedicationCardProps {
  name: string;
  type: string;
  activeIngredient: string;
  deliveryMethod: "injection" | "oral";
  benefits: string[];
  boxWarning: string;
  warning: string;
  sideEffects: string[];
  drugInteractions: string;
  imageUrl?: string;
}

const benefitIcons: Record<string, React.ReactNode> = {
  "Regulates insulin": <Activity className="w-5 h-5" />,
  "Balances blood sugar": <Droplets className="w-5 h-5" />,
  "Reduces appetite": <CircleDot className="w-5 h-5" />,
};

export function MedicationCard({
  name,
  type,
  activeIngredient,
  deliveryMethod,
  benefits,
  boxWarning,
  warning,
  sideEffects,
  drugInteractions,
  imageUrl,
}: MedicationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-card-hover">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Medication Image */}
          <div className="w-full md:w-48 h-48 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl flex items-center justify-center overflow-hidden">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={`${name} medication`}
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/30">{name.charAt(0)}</span>
              </div>
            )}
          </div>

          {/* Medication Info */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{name}</h3>
            <p className="text-muted-foreground mb-4">
              <span className="text-primary font-medium">{type}</span> · {activeIngredient} · {deliveryMethod}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-3 mb-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {benefitIcons[benefit] || <Activity className="w-5 h-5" />}
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold hover:shadow-primary-glow transition-all duration-300 hover:-translate-y-0.5">
                Get Started
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/20 text-primary font-semibold hover:bg-primary/5 hover:border-primary transition-all duration-300"
              >
                Learn More
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isExpanded && "rotate-180"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Content with Tabs */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500",
          isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 md:px-8 pb-8 pt-2 border-t border-border/50">
          <Tabs defaultValue="box-warning" className="w-full">
            <TabsList className="w-full flex flex-wrap gap-2 bg-muted/50 p-2 rounded-2xl mb-6 h-auto">
              <TabsTrigger
                value="box-warning"
                className="flex-1 min-w-[120px] rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
              >
                Box Warning
              </TabsTrigger>
              <TabsTrigger
                value="warning"
                className="flex-1 min-w-[120px] rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
              >
                Warning
              </TabsTrigger>
              <TabsTrigger
                value="side-effects"
                className="flex-1 min-w-[120px] rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
              >
                Side Effects
              </TabsTrigger>
              <TabsTrigger
                value="interactions"
                className="flex-1 min-w-[120px] rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
              >
                Drug Interactions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="box-warning" className="animate-fade-in-up">
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-destructive mb-3">BLACK BOX WARNING</h4>
                <p className="text-foreground/80 leading-relaxed">{boxWarning}</p>
              </div>
            </TabsContent>

            <TabsContent value="warning" className="animate-fade-in-up">
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-amber-600 mb-3">Warning</h4>
                <p className="text-foreground/80 leading-relaxed">{warning}</p>
              </div>
            </TabsContent>

            <TabsContent value="side-effects" className="animate-fade-in-up">
              <div className="bg-muted rounded-2xl p-6">
                <h4 className="text-lg font-bold text-foreground mb-3">Common Side Effects</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sideEffects.map((effect, index) => (
                    <li key={index} className="flex items-center gap-2 text-foreground/80">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {effect}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="interactions" className="animate-fade-in-up">
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-foreground mb-3">Drug Interactions</h4>
                <p className="text-foreground/80 leading-relaxed">{drugInteractions}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
