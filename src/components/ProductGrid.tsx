import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { Filter, Grid3X3, List } from "lucide-react";

interface ProductGridProps {
  onAddToCart?: (productId: string) => void;
  onToggleFavorite?: (productId: string) => void;
}

export const ProductGrid = ({ onAddToCart, onToggleFavorite }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-[var(--gradient-vibrant)] bg-clip-text text-transparent">Handcrafted</span> Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each lamp is carefully crafted by skilled artisans, combining traditional techniques 
            with contemporary design to illuminate your space with warmth and elegance.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "vibrant" : "glow"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                {category !== "All" && (
                  <Badge className="ml-2 bg-background/20 text-foreground">
                    {products.filter(p => p.category === category).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-accent" : ""}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-accent" : ""}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
        <Button variant="vibrant" size="lg">
          Load More Products
        </Button>
        </div>
      </div>
    </section>
  );
};