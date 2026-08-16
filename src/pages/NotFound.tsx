import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-shell flex min-h-[70svh] items-center justify-center py-20 text-center">
      <div>
        <p className="eyebrow">404 · Room not found</p>
        <h1 className="mt-5 font-display text-6xl sm:text-8xl">A wrong turn,<br />beautifully made.</h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-muted-foreground">The page you’re looking for has moved, but the collection is just a step away.</p>
        <Button asChild size="xl" className="mt-8 rounded-none"><Link to="/"><ArrowLeft />Return home</Link></Button>
      </div>
    </section>
  );
}
