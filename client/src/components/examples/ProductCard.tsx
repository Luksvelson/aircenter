import ProductCard, { type Product } from "../ProductCard";
import productImage from "@assets/generated_images/air_compressor_product_shot.png";

// todo: remove mock functionality
const mockProduct: Product = {
  id: "1",
  name: "ProAir 5000",
  model: "PA-5000-V",
  image: productImage,
  category: "Piston Compressor",
  price: 2499,
  specs: {
    cfm: "18.5",
    psi: "175",
    hp: "5.0",
    tank: "80 gal",
  },
  featured: true,
};

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard product={mockProduct} />
    </div>
  );
}
