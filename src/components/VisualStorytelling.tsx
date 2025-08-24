import devicesImage from "@/assets/luxhome-devices.jpg";
import iconsImage from "@/assets/luxhome-icons.jpg";

export const VisualStorytelling = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Device Mockups Section */}
        <div className="mb-24 animate-slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-8">
              Digital Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamless AR preview technology allows customers to visualize premium furniture 
              in their own spaces before making a purchase.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={devicesImage}
              alt="LuxHome AR preview on mobile and tablet devices"
              className="w-full rounded-3xl luxury-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="animate-slide-up animation-delay-300">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-8">
              Technology Integration
            </h3>
            <div className="w-16 h-1 gradient-accent mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Inventory Sync",
                description: "Real-time synchronization between physical stores and online platform"
              },
              {
                title: "AR Technology", 
                description: "Advanced augmented reality for immersive furniture preview experiences"
              },
              {
                title: "Premium UX",
                description: "Luxury-focused user interface design that matches brand sophistication"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-card soft-shadow hover:luxury-shadow transition-luxury group"
              >
                <div className="w-16 h-16 rounded-full gradient-accent mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-accent-foreground rounded-full"></div>
                </div>
                <h4 className="text-xl font-display font-semibold text-card-foreground mb-4 group-hover:text-accent transition-luxury">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};