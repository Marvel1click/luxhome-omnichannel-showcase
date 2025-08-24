import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-foreground mb-8">
            Let's Build Your Next
            <span className="block gradient-accent bg-clip-text text-transparent">
              Success Story
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with premium digital experiences? 
            Let's discuss how we can elevate your brand to new heights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.digitalmarvels.tech" target="_blank" rel="noopener noreferrer">
              <Button variant="premium" size="xl">
              Work With Us
            </Button>
            </a>
           <a href="https://www.digitalmarvels.tech/portfolio" target="_blank" rel="noopener noreferrer">
             <Button variant="outline" size="xl">
              View More Cases
            </Button>
           </a>
          </div>
        </div>
      </div>
    </section>
  );
};