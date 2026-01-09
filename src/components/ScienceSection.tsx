import { Dna, Brain, Flame, TestTube } from "lucide-react";

const biomarkers = [
  {
    icon: Dna,
    title: "Genetics",
    description: "Your genes influence how your body metabolizes food and responds to medications.",
  },
  {
    icon: Brain,
    title: "Hormonal Balance",
    description: "Hormones like leptin and ghrelin regulate hunger signals and satiety.",
  },
  {
    icon: Flame,
    title: "Glucose Control",
    description: "Understanding your metabolic profile helps personalize treatment.",
  },
  {
    icon: TestTube,
    title: "Gut Microbiome",
    description: "Your gut bacteria play a crucial role in weight management and overall health.",
  },
];

export function ScienceSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-accent/20 bg-accent/5 text-accent font-semibold text-sm mb-6">
            <TestTube className="w-4 h-4" />
            Precision Biology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Understanding </span>
            <span className="gradient-text">Your Biology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Weight management isn't just about willpower. It's about understanding the complex biological factors that influence your body.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {biomarkers.map((marker, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:shadow-primary-glow transition-shadow duration-300">
                <marker.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{marker.title}</h3>
              <p className="text-muted-foreground">{marker.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
