import brassTableLamp from "@/assets/brass-table-lamp.jpg";
import woodenPendant from "@/assets/wooden-pendant.jpg";
import copperFloorLamp from "@/assets/copper-floor-lamp.jpg";
import ceramicWallSconce from "@/assets/ceramic-wall-sconce.jpg";
import bambooDeskLamp from "@/assets/bamboo-desk-lamp.jpg";
import bronzeChandelier from "@/assets/bronze-chandelier.jpg";
import rattanTableLamp from "@/assets/rattan-table-lamp.jpg";
import ironJutePendant from "@/assets/iron-jute-pendant.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
  materials?: string[];
  dimensions?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Handcrafted Brass Table Lamp",
    price: 8999,
    originalPrice: 12999,
    image: brassTableLamp,
    category: "Table Lamps",
    description: "Elegant brass table lamp with intricate traditional patterns, handcrafted by skilled artisans.",
    isNew: true,
    isFeatured: true,
    materials: ["Brass", "Cotton Shade"],
    dimensions: "12\" H x 8\" W"
  },
  {
    id: "2",
    name: "Wooden Pendant Light with Jute Shade",
    price: 6499,
    originalPrice: 8999,
    image: woodenPendant,
    category: "Pendant Lights",
    description: "Natural wooden pendant light featuring a handwoven jute shade for warm ambient lighting.",
    materials: ["Teak Wood", "Jute"],
    dimensions: "10\" H x 14\" W"
  },
  {
    id: "3",
    name: "Copper Floor Lamp with Fabric Shade",
    price: 15999,
    image: copperFloorLamp,
    category: "Floor Lamps",
    description: "Stunning copper floor lamp with handcrafted base and premium fabric shade.",
    isFeatured: true,
    materials: ["Copper", "Linen Fabric"],
    dimensions: "58\" H x 16\" W"
  },
  {
    id: "4",
    name: "Traditional Ceramic Wall Sconce",
    price: 4999,
    originalPrice: 6999,
    image: ceramicWallSconce,
    category: "Wall Sconces",
    description: "Beautiful ceramic wall sconce with traditional motifs and warm light diffusion.",
    materials: ["Ceramic", "Glass"],
    dimensions: "8\" H x 6\" W x 4\" D"
  },
  {
    id: "5",
    name: "Bamboo Desk Lamp",
    price: 3999,
    image: bambooDeskLamp,
    category: "Table Lamps",
    description: "Eco-friendly bamboo desk lamp with adjustable shade for perfect task lighting.",
    isNew: true,
    materials: ["Bamboo", "Paper Shade"],
    dimensions: "16\" H x 8\" W"
  },
  {
    id: "6",
    name: "Antique Bronze Chandelier",
    price: 25999,
    originalPrice: 32999,
    image: bronzeChandelier,
    category: "Chandeliers",
    description: "Magnificent antique bronze chandelier with multiple lamp holders and crystal accents.",
    isFeatured: true,
    materials: ["Bronze", "Crystal", "Glass"],
    dimensions: "24\" H x 28\" W"
  },
  {
    id: "7",
    name: "Handwoven Rattan Table Lamp",
    price: 5999,
    image: rattanTableLamp,
    category: "Table Lamps",
    description: "Charming rattan table lamp with intricate handwoven patterns and soft illumination.",
    materials: ["Rattan", "Cotton"],
    dimensions: "14\" H x 10\" W"
  },
  {
    id: "8",
    name: "Iron and Jute Hanging Light",
    price: 7999,
    originalPrice: 9999,
    image: ironJutePendant,
    category: "Pendant Lights",
    description: "Industrial-style iron frame with natural jute wrapping for rustic charm.",
    materials: ["Iron", "Jute"],
    dimensions: "12\" H x 12\" W"
  }
];