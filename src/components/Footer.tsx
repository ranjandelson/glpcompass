import { Dna, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Dna className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Digbi<span className="text-primary">Health</span>
              </span>
            </div>
            <p className="text-background/60 text-sm">
              Precision biology care for obesity and chronic illness management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Medication", "How It Works", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Medications */}
          <div>
            <h4 className="font-bold mb-4">Medications</h4>
            <ul className="space-y-2">
              {["Zepbound®", "Mounjaro®", "Wegovy®", "Ozempic®", "Saxenda®", "Rybelsus®"].map((med) => (
                <li key={med}>
                  <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                    {med}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                support@digbihealth.com
              </li>
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                1-800-DIGBI
              </li>
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Digbi Health. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "HIPAA Notice"].map((link) => (
              <a key={link} href="#" className="text-background/40 hover:text-primary transition-colors text-sm">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
