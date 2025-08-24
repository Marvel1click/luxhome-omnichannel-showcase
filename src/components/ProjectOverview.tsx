export const ProjectOverview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-8">
              Project Overview
            </h2>
            <div className="w-20 h-1 gradient-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light text-center">
              LuxHome needed to transition from a brick-and-mortar only model to an omnichannel approach 
              with a premium online shopping experience. We developed a custom Shopify Plus solution with 
              high-quality imagery, AR furniture preview, and seamless inventory sync across physical 
              and online stores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};