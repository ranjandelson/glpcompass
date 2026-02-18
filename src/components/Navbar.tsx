import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Stethoscope,
  Users,
  Star,
  FlaskConical,
  FileText,
  Info,
  Newspaper,
  Calendar,
  HelpCircle,
  ChevronDown,
  Menu,
  X,
  Pill,
  HeartPulse,
} from "lucide-react";

// Navigation configuration - easily updatable
const NAV_CONFIG = [
  {
    label: "Program",
    items: [
      {
        label: "GI Health",
        href: "https://digestive.digbihealth.ai/",
        icon: HeartPulse,
      },
    ],
  },
  {
    label: "Partner",
    items: [
      {
        label: "Employers & Payers",
        href: "https://employer.digbihealth.ai/",
        icon: Briefcase,
      },
      {
        label: "Health Care Providers",
        href: "https://digbihealth.com/pages/health-care-providers",
        icon: Stethoscope,
      },
    ],
  },
  {
    label: "Humans of Digbi",
    items: [
      {
        label: "Humans of Digbi",
        href: "https://digbihealth.com/blogs/humans-of-digbi",
        icon: Users,
      },
      {
        label: "Member Reviews",
        href: "https://digbihealth.com/pages/reviews",
        icon: Star,
      },
    ],
  },
  {
    label: "The Science",
    items: [
      {
        label: "Blog: Pharma & Science",
        href: "https://digbihealth.com/blogs/science-talk",
        icon: FlaskConical,
      },
      {
        label: "Published Research",
        href: "https://digbihealth.com/blogs/published-research",
        icon: FileText,
      },
      {
        label: "The Medication Toolkit",
        href: "https://glpcompass.digbihealth.ai/",
        icon: Pill,
      },
    ],
  },
  {
    label: "About Us",
    items: [
      {
        label: "About Us",
        href: "https://digbihealth.com/pages/about-us",
        icon: Info,
      },
      {
        label: "Press Releases",
        href: "https://digbihealth.com/blogs/press-release",
        icon: Newspaper,
      },
      {
        label: "Careers",
        href: "https://digbihealth.com/a/careers",
        icon: Briefcase,
      },
      {
        label: "Events",
        href: "https://digbihealth.com/pages/digbi-live",
        icon: Calendar,
      },
      {
        label: "Help",
        href: "https://digbihealth.com/pages/help",
        icon: HelpCircle,
      },
    ],
  },
];

// Desktop Dropdown Component
interface DropdownProps {
  item: (typeof NAV_CONFIG)[0];
}

function DesktopDropdown({ item }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms delay
  }, []);

  const handleFocus = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsOpen(true);
  }, []);

  const handleBlur = useCallback((e: React.FocusEvent) => {
    // Check if focus is moving within the container
    if (containerRef.current?.contains(e.relatedTarget as Node)) {
      return;
    }
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  }, []);

  const handleItemClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const dropdownId = `dropdown-${item.label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        type="button"
        className={cn(
          "flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-150",
          "text-foreground hover:text-primary focus:text-primary",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md",
          isOpen && "text-primary"
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={dropdownId}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-150",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Panel */}
      <div
        id={dropdownId}
        role="menu"
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50",
          "transition-all duration-150",
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1"
        )}
      >
        {/* Invisible hover bridge */}
        <div className="absolute -top-2 left-0 right-0 h-2" />
        
        <div
          className="bg-popover border border-border rounded-lg shadow-lg min-w-[220px] py-2 overflow-hidden"
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {item.items.map((subItem, idx) => {
            const Icon = subItem.icon;
            return (
              <a
                key={idx}
                href={subItem.href}
                role="menuitem"
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150",
                  "text-muted-foreground hover:text-primary hover:bg-secondary",
                  "focus:outline-none focus-visible:bg-secondary focus-visible:text-primary"
                )}
                onClick={handleItemClick}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <Icon className="w-[18px] h-[18px] flex-shrink-0" />
                <span>{subItem.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Mobile Accordion Item
interface MobileAccordionProps {
  item: (typeof NAV_CONFIG)[0];
  onItemClick: () => void;
}

function MobileAccordion({ item, onItemClick }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        className={cn(
          "w-full flex items-center justify-between px-4 py-4 text-base font-medium",
          "text-foreground hover:text-primary focus:text-primary",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
          isOpen && "text-primary"
        )}
        aria-expanded={isOpen}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="pb-4 px-4 space-y-1">
          {item.items.map((subItem, idx) => {
            const Icon = subItem.icon;
            return (
              <a
                key={idx}
                href={subItem.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors duration-150",
                  "text-muted-foreground hover:text-primary hover:bg-secondary",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                )}
                onClick={onItemClick}
              >
                <Icon className="w-[18px] h-[18px] flex-shrink-0" />
                <span>{subItem.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Main Navbar Component
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center h-16 lg:h-20">
          {/* Logo - flex: 0 0 auto */}
          <div className="flex-shrink-0">
            <a
              href="https://digbihealth.ai/"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/2078/0145/files/digbi_logo.svg"
                alt="Digbi Health"
                className="h-8 lg:h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - flex: 1 */}
          <div className="hidden lg:flex flex-1">
            <ul className="flex justify-evenly w-full gap-4" role="menubar">
              {NAV_CONFIG.map((item, idx) => (
                <li key={idx} role="none">
                  <DesktopDropdown item={item} />
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden ml-auto">
            <button
              type="button"
              className={cn(
                "p-2 rounded-md transition-colors duration-150",
                "text-foreground hover:text-primary hover:bg-secondary",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              )}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          isMobileMenuOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-foreground/20 transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-full max-w-sm bg-background shadow-xl",
            "transform transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-border">
            <a href="https://digbihealth.ai/" onClick={closeMobileMenu}>
              <img
                src="https://cdn.shopify.com/s/files/1/2078/0145/files/digbi_logo.svg"
                alt="Digbi Health"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              className={cn(
                "p-2 rounded-md transition-colors duration-150",
                "text-foreground hover:text-primary hover:bg-secondary",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              )}
              aria-label="Close menu"
              onClick={closeMobileMenu}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            <nav role="navigation" aria-label="Mobile navigation">
              {NAV_CONFIG.map((item, idx) => (
                <MobileAccordion
                  key={idx}
                  item={item}
                  onItemClick={closeMobileMenu}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
