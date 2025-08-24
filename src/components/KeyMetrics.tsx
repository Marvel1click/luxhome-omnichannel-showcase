export const KeyMetrics = () => {
  const metrics = [
    {
      value: "150%",
      label: "Online Sales Growth",
      description: "First quarter after launch"
    },
    {
      value: "100%",
      label: "Unified Inventory",
      description: "Across all store locations"
    },
    {
      value: "300%",
      label: "Customer Engagement", 
      description: "With AR preview feature"
    },
    {
      value: "95%",
      label: "Customer Satisfaction",
      description: "Post-implementation surveys"
    }
  ];

  return (
    <section className="py-24 gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-8">
            Measurable Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The results speak for themselves - transforming LuxHome's business 
            with quantifiable improvements across all key metrics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className={`text-center p-8 rounded-2xl bg-card soft-shadow hover:luxury-shadow transition-luxury group animate-scale-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="text-5xl md:text-6xl font-display font-bold gradient-accent bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent transition-luxury">
                  {metric.label}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};