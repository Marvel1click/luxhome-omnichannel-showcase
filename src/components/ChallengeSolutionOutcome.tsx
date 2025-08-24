export const ChallengeSolutionOutcome = () => {
  const sections = [
    {
      title: "Challenge",
      content: "Limited to physical retail with no digital presence, LuxHome was missing out on the growing online luxury market and couldn't offer customers the convenience of browsing their premium collection remotely.",
      accent: "border-t-red-400"
    },
    {
      title: "Solution", 
      content: "Custom Shopify Plus implementation with premium UX design, AR furniture preview technology, real-time inventory synchronization, and seamless omnichannel customer experience.",
      accent: "border-t-accent"
    },
    {
      title: "Outcome",
      content: "A seamless omnichannel shopping experience that elevated LuxHome's brand presence, increased customer engagement, and successfully bridged their physical and digital retail channels.",
      accent: "border-t-green-400"
    }
  ];

  return (
    <section className="py-24 gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {sections.map((section, index) => (
            <div 
              key={section.title}
              className={`animate-slide-up bg-card rounded-2xl p-8 soft-shadow hover:luxury-shadow transition-luxury group`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-full h-1 ${section.accent} rounded-full mb-6`}></div>
              
              <h3 className="text-2xl font-display font-semibold text-card-foreground mb-6 group-hover:text-accent transition-luxury">
                {section.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed font-light">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};