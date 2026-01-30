import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

// Footer configuration - easily updatable
const FOOTER_CONFIG = {
  partner: {
    title: "Partner",
    links: [
      {
        label: "Employers & Payers",
        href: "https://digbihealth.com/pages/partner",
      },
      {
        label: "Health Care Providers",
        href: "https://digbihealth.com/pages/health-care-providers",
      },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      {
        label: "Humans of Digbi",
        href: "https://digbihealth.com/blogs/humans-of-digbi",
      },
      {
        label: "Member Reviews",
        href: "https://digbihealth.com/pages/reviews",
      },
      {
        label: "Blog: Pharma & Science",
        href: "https://digbihealth.com/blogs/science-talk",
      },
      {
        label: "Published Research",
        href: "https://digbihealth.com/blogs/published-research",
      },
    ],
  },
  company: {
    title: "Company",
    links: [
      {
        label: "About Us",
        href: "https://digbihealth.com/pages/about-us",
      },
      {
        label: "Press Releases",
        href: "https://digbihealth.com/blogs/press-release",
      },
      {
        label: "Careers",
        href: "https://digbihealth.com/a/careers",
      },
      {
        label: "Events",
        href: "https://digbihealth.com/pages/digbi-live",
      },
      {
        label: "Help",
        href: "https://digbihealth.com/pages/help",
      },
      {
        label: "Contact Us",
        href: "mailto:digbi@digbihealth.com",
      },
    ],
  },
  legal: [
    {
      label: "Cookie Preferences",
      href: "https://cdn.shopify.com/s/files/1/2078/0145/files/Cookie_Policy_-_Digbi_Health.pdf?v=1686228768",
    },
    {
      label: "Privacy",
      href: "https://digbihealth.com/pages/privacy-and-accuracy",
    },
    {
      label: "Terms",
      href: "https://digbihealth.com/pages/terms-conditions",
    },
  ],
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/digbihealth/",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@digbihealth8695",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/digbihealth/",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/digbihealth/",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      ),
    },
  ],
  address: {
    line1: "800 El Camino Real West, Suite 180",
    line2: "Mountain View, CA, United States, 94040",
  },
};

// Footer Link Component
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

function FooterLink({ href, children, external = true }: FooterLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "text-sm text-muted-foreground transition-colors duration-150",
        "hover:text-primary focus:text-primary",
        "focus:outline-none focus-visible:underline"
      )}
      {...(external && !href.startsWith("mailto:")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

// Footer Column Component
interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main Footer Component
export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand, Address & Social */}
          <div className="space-y-6">
            {/* Logo */}
            <a
              href="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/2078/0145/files/digbi_logo.svg"
                alt="Digbi Health"
                className="h-8 w-auto"
              />
            </a>

            {/* Address */}
            <address className="not-italic">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p>{FOOTER_CONFIG.address.line1}</p>
                  <p>{FOOTER_CONFIG.address.line2}</p>
                </div>
              </div>
            </address>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {FOOTER_CONFIG.social.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={cn(
                    "text-muted-foreground transition-colors duration-150",
                    "hover:text-primary focus:text-primary",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
                  )}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Partner */}
          <FooterColumn
            title={FOOTER_CONFIG.partner.title}
            links={FOOTER_CONFIG.partner.links}
          />

          {/* Column 3: Resources */}
          <FooterColumn
            title={FOOTER_CONFIG.resources.title}
            links={FOOTER_CONFIG.resources.links}
          />

          {/* Column 4: Company */}
          <FooterColumn
            title={FOOTER_CONFIG.company.title}
            links={FOOTER_CONFIG.company.links}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © Digbi Health {currentYear}. All rights reserved.
            </p>

            {/* Legal Links */}
            <nav aria-label="Legal">
              <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
                {FOOTER_CONFIG.legal.map((link, idx) => (
                  <li key={idx}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
