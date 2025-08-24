export const ClientTestimonial = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center animate-slide-up">
          <div className="mb-12">
            <div className="w-20 h-1 gradient-accent mx-auto rounded-full mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-12">
              Client Testimonial
            </h2>
          </div>
          
          <div className="bg-card rounded-3xl p-12 soft-shadow hover:luxury-shadow transition-luxury">
            <blockquote className="text-2xl md:text-3xl font-light text-card-foreground leading-relaxed mb-12 italic">
              "The transformation has been remarkable. Our customers now have a 
              seamless experience whether they're shopping in-store or online. 
              The AR preview feature has become a game-changer for our sales team."
            </blockquote>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center">
                <span className="text-xl font-semibold text-accent-foreground">SL</span>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="text-lg font-semibold text-card-foreground">
                  Sarah Lancaster
                </div>
                <div className="text-muted-foreground">
                  CEO, LuxHome Furnishings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};