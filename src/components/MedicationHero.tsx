import { Dna, FlaskConical, Heart } from "lucide-react";
export function MedicationHero() {
  return <section className="relative min-h-[60vh] flex items-center justify-center hero-gradient overflow-hidden py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <svg className="absolute top-1/4 right-1/4 text-primary/20 float-animation" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="20" r="10" fill="currentColor" opacity="0.5" />
          <circle cx="25" cy="50" r="8" fill="currentColor" opacity="0.3" />
          <circle cx="75" cy="60" r="12" fill="currentColor" opacity="0.4" />
          <circle cx="50" cy="80" r="6" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up stagger-1">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary/20 bg-primary/5 text-primary font-semibold text-sm mb-8">
            <FlaskConical className="w-4 h-4" />
            Precision-Biology Backed Treatment
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up stagger-2">
          <span className="text-foreground">Weight loss medication</span>
          <br />
          <span className="text-foreground/80">isn't cheating. </span>
          <span className="gradient-text">It's science.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-3">
          Precision biology care powered by your{" "}
          <span className="text-primary font-semibold">Gut Microbiome</span>,{" "}
          <span className="text-primary font-semibold">Genetics</span>, and{" "}
          <span className="text-primary font-semibold">Blood Markers</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up stagger-4">
          <button className="px-8 py-4 rounded-full gradient-primary text-primary-foreground font-semibold text-lg hover:shadow-primary-glow transition-all duration-300 hover:-translate-y-1">
            Start Your Journey
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-primary/30 text-primary font-semibold text-lg hover:bg-primary/5 hover:border-primary transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 animate-fade-in-up" style={{
        animationDelay: '0.5s'
      }}>
          {[{
          icon: Dna,
          text: "Genetics-Based Care"
        }, {
          icon: FlaskConical,
          text: "FDA-Approved Medications"
        }, {
          icon: Heart,
          text: "Personalized Treatment"
        }].map((badge, index) => <div key={index} className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-foreground/70">
              <badge.icon className="w-5 h-5 text-accent" />
              <span className="font-medium text-sm">{badge.text}</span>
            </div>)}
        </div>
      </div>
    </section>;
}