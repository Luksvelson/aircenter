import ProdutoCard, { type Produto } from "../ProdutoCard";
import produtoImage from "@assets/generated_images/air_compressor_produto_shot.png";

// todo: remove mock functionality
const mockProduto: Produto = {
  id: "1",
  name: "ProAir 5000",
  model: "PA-5000-V",
  image: produtoImage,
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

export default function ProdutoCardExample() {
  return (
    <div className="max-w-sm">
      <ProdutoCard produto={mockProduto} />
    </div>
  );
}
