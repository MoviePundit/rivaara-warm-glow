import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onToggleFavorite?: (productId: string) => void;
}

export const ProductCard = ({ product, onAddToCart, onToggleFavorite }: ProductCardProps) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden bg-card border-border hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-lamp-glow text-foreground">
            New
          </Badge>
        )}
        {discountPercentage > 0 && (
          <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
            -{discountPercentage}%
          </Badge>
        )}
        <Button
          variant="glow"
          size="icon"
          className="absolute top-2 right-12 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => onToggleFavorite?.(product.id)}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h3 className="font-semibold text-base leading-tight">{product.name}</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        
          <Button
            variant="vibrant"
            className="w-full"
            onClick={() => onAddToCart?.(product.id)}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
      </CardContent>
    </Card>
  );
};