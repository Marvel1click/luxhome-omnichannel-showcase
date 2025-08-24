import { useState, useEffect } from "react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  
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
  };

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