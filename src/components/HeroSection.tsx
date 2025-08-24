import { Button } from "@/components/ui/button";
import heroImage from "@/assets/luxhome-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-8 leading-tight">
            LuxHome: From Brick-and-Mortar to
            <span className="block gradient-accent bg-clip-text text-transparent">
              Omnichannel Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Transforming retail with Shopify Plus and immersive digital experiences.
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            className="animate-scale-in animation-delay-300"
          >
            Explore the Case Study
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm font-body mb-2">Scroll to explore</span>
          <div className="w-px h-8 bg-primary-foreground/30"></div>
        </div>
      </div>
    </section>
  );
};