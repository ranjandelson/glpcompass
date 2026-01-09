
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Digbi<span className="text-primary">Health</span>
            </span>
          </a>

          {/* CTA Button */}
          <button className="px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold hover:shadow-primary-glow transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
