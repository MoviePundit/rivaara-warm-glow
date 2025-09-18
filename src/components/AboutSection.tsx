import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Leaf, Heart } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Master Craftsmen",
      description: "Our skilled artisans have generations of experience in traditional lamp making techniques."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Materials",
      description: "We use sustainable materials like bamboo, reclaimed wood, and natural fibers in our creations."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Each lamp is carefully handcrafted with attention to detail and passion for the craft."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Supporting local artisan communities and preserving traditional craftsmanship for future generations."
    }
  ];

  return (
    <section className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Preserving <span className="text-primary">Traditional</span> Craftsmanship
              </h2>
              <p className="text-lg text-muted-foreground">
                At Rivaara, we believe in the beauty of handmade craftsmanship. Our collection 
                represents centuries-old techniques passed down through generations of skilled artisans.
              </p>
              <p className="text-muted-foreground">
                Every lamp tells a story of dedication, skill, and cultural heritage. From the 
                initial design to the final finishing touches, each piece is created with 
                meticulous attention to detail and a deep respect for traditional methods.
              </p>
            </div>

            <Button variant="lamp" size="lg">
              Our Story
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};