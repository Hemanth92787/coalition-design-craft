import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-hero py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                Welcome to Coalition
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Professional Solutions for Your Business Success
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We deliver innovative solutions tailored to your unique needs. Our team of experts is committed to helping your business thrive in today's competitive market.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary border-0 shadow-medium">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-primary opacity-10 absolute inset-0 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop"
              alt="Professional team collaboration"
              className="relative rounded-2xl shadow-large w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
