import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const { toast } = useToast();

  const handleAddToCart = (productId: string) => {
    setCartItems(prev => [...prev, productId]);
    toast({
      title: "Added to Cart",
      description: "Item has been added to your cart successfully.",
      duration: 2000,
    });
  };

  const handleToggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
    
    toast({
      title: favorites.includes(productId) ? "Removed from Favorites" : "Added to Favorites",
      description: favorites.includes(productId) 
        ? "Item removed from your favorites." 
        : "Item added to your favorites.",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={cartItems.length}
        onCartClick={() => toast({ title: "Cart", description: "Cart functionality coming soon!" })}
      />
      
      <main>
        <HeroSection />
        <ProductGrid 
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
        />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
