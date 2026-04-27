import { Quote } from "lucide-react";

export const ClientTestimonial = () => {
  return (
    <section id="testimonial" className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <div className="reveal">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="eyebrow">Client Perspective</span>
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Trusted by leaders building modern retail experiences.
            </h2>
          </div>

          <figure className="reveal rounded-lg border border-border bg-card p-7 shadow-sm sm:p-10">
            <Quote className="mb-8 size-10 text-accent" aria-hidden="true" />
            <blockquote className="text-2xl font-light leading-relaxed text-card-foreground sm:text-3xl">
              The transformation has been remarkable. Our customers now have a seamless experience
              whether they are shopping in-store or online. The AR preview feature has become a
              game-changer for our sales team.
            </blockquote>
            <figcaption className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
              <div className="flex size-14 items-center justify-center rounded-md gradient-accent font-semibold text-accent-foreground">
                SL
              </div>
              <div>
                <div className="font-semibold text-card-foreground">Sarah Lancaster</div>
                <div className="text-sm text-muted-foreground">CEO, LuxHome Furnishings</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
