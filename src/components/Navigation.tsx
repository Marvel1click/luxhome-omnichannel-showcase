import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const sections = [
    { id: "hero", label: "Hero" },
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Process" },
    { id: "visual", label: "Experience" },
    { id: "metrics", label: "Results" },
    { id: "testimonial", label: "Testimonial" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 100;
      
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id") || "";
        
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after navigation
  };

  if (isMobile) {
    return (
      <nav className="fixed top-6 right-6 z-50 animate-fade-in">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="bg-card/90 backdrop-blur-sm rounded-full p-3 soft-shadow border border-border/50 hover:bg-accent hover:text-accent-foreground transition-luxury">
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-6 mt-12">
              <h3 className="text-lg font-semibold text-foreground mb-4">Navigation</h3>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left text-base font-medium transition-luxury hover:text-accent py-2 ${
                    activeSection === section.id 
                      ? "text-accent border-l-2 border-accent pl-4" 
                      : "text-muted-foreground pl-4"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    );
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-card/90 backdrop-blur-sm rounded-full px-6 py-3 soft-shadow border border-border/50">
        <div className="flex items-center space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-sm font-medium transition-luxury hover:text-accent ${
                activeSection === section.id 
                  ? "text-accent" 
                  : "text-muted-foreground"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
