import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "case-study", label: "Case Study" },
  { id: "experience", label: "Experience" },
  { id: "results", label: "Results" },
  { id: "testimonial", label: "Testimonial" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observedSections = ["hero", ...sections.map((section) => section.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-18% 0px -60% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-primary-foreground/10 bg-primary/78 px-3 py-3 text-primary-foreground shadow-2xl shadow-primary/20 backdrop-blur-xl sm:px-4">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          aria-label="Go to LuxHome case study hero"
        >
          <span className="flex size-9 items-center justify-center rounded-md border border-accent/50 bg-accent/15 font-display text-lg font-semibold text-accent transition-luxury group-hover:bg-accent group-hover:text-accent-foreground">
            DM
          </span>
          <span className="hidden text-sm font-semibold sm:inline">Digital Marvels</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-luxury hover:bg-primary-foreground/10 hover:text-accent ${
                activeSection === section.id
                  ? "bg-primary-foreground/10 text-accent"
                  : "text-primary-foreground/78"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="premium" size="lg">
            <a href="https://www.digitalmarvels.tech" target="_blank" rel="noopener noreferrer">
              Let's Talk
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="hero" size="icon" aria-label="Open navigation menu">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-l-border bg-background">
              <SheetTitle className="font-display text-2xl">LuxHome Case Study</SheetTitle>
              <div className="mt-10 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection("hero")}
                  className="rounded-md px-4 py-3 text-left text-sm font-semibold text-muted-foreground transition-luxury hover:bg-secondary hover:text-foreground"
                >
                  Hero
                </button>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`rounded-md px-4 py-3 text-left text-sm font-semibold transition-luxury hover:bg-secondary hover:text-foreground ${
                      activeSection === section.id
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
                <Button asChild variant="premium" size="lg" className="mt-5">
                  <a href="https://www.digitalmarvels.tech" target="_blank" rel="noopener noreferrer">
                    Start a Project
                    <ArrowRight data-icon="inline-end" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
