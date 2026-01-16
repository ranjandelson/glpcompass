import { ArrowRight, Shield, Clock, Users } from "lucide-react";
export function CTASection() {
  return <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            
            
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-3xl text-[#4d4d4d]">
            Get personalized care based on your unique biology. Our clinicians will work with you to find the right treatment plan.
          </p>

          

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8">
          {[{
            icon: Shield,
            text: "24X7 Nutrition and Lifestyle Support"
          }, {
            icon: Clock,
            text: "Fast Consultations"
          }, {
            icon: Users,
            text: "Expert Clinicians"
          }].map((item, index) => <div key={index} className="flex items-center gap-3 text-muted-foreground">
                <item.icon className="w-5 h-5 text-[#4f1dcd] bg-white/0" />
                <span className="font-medium">{item.text}</span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}