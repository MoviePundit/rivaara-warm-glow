import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-lamps.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--gradient-hero)]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-muted-foreground">Trusted by 10,000+ customers</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Illuminate Your Space with{" "}
                <span className="bg-[var(--gradient-vibrant)] bg-clip-text text-transparent">Handcrafted</span>{" "}
                Traditional Lamps
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Discover our exquisite collection of handmade lamps, crafted by skilled artisans 
                using time-honored techniques. Each piece tells a unique story of tradition and elegance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="vibrant" size="lg" className="text-base">
                Shop Collection
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="heritage" size="lg" className="text-base">
                View Catalog
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Handcrafted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Unique Designs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-warm)]">
              <img
                src={heroImage}
                alt="Beautiful collection of handmade traditional lamps"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm p-4 rounded-xl shadow-[var(--shadow-heritage)] border border-emerald-heritage/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--gradient-heritage)] rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold">Premium Quality</div>
                  <div className="text-sm text-muted-foreground">Certified Artisans</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm p-4 rounded-xl shadow-[var(--shadow-warm)] border border-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold bg-[var(--gradient-vibrant)] bg-clip-text text-transparent">₹2,999</div>
                <div className="text-sm text-muted-foreground">Starting From</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};