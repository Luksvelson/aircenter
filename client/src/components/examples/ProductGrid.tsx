import ProductGrid from "../ProductGrid";
import type { Product } from "../ProductCard";
import productImage1 from "@assets/generated_images/air_compressor_product_shot.png";
import productImage2 from "@assets/generated_images/piston_compressor_product.png";
import productImage3 from "@assets/generated_images/rotary_screw_compressor.png";

// todo: remove mock functionality
const mockProducts: Product[] = [
  {
    id: "1",
    name: "ProAir 5000",
    model: "PA-5000-V",
    image: productImage1,
    category: "Piston Compressor",
    price: 2499,
    specs: { cfm: "18.5", psi: "175", hp: "5.0", tank: "80 gal" },
    featured: true,
  },
  {
    id: "2",
    name: "SilentPro 3000",
    model: "SP-3000-Q",
    image: productImage2,
    category: "Silent Compressor",
    price: 1899,
    specs: { cfm: "12.0", psi: "150", hp: "3.0", tank: "60 gal" },
  },
  {
    id: "3",
    name: "RotaryMax 7500",
    model: "RM-7500-RS",
    image: productImage3,
    category: "Rotary Screw",
    price: 5499,
    specs: { cfm: "28.0", psi: "175", hp: "7.5", tank: "120 gal" },
    featured: true,
  },
];

export default function ProductGridExample() {
  return (
    <div className="p-4">
      <ProductGrid products={mockProducts} />
    </div>
  );
}
