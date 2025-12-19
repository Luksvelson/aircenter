import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProdutoGrid from "./ProdutoGrid";
import type { Produto } from "./ProdutoCard";

interface FeaturedProdutosProps {
  produtos: Produto[];
  onViewAll?: () => void;
  onViewDetails?: (produto: Produto) => void;
}

export default function FeaturedProdutos({ produtos, onViewAll, onViewDetails }: FeaturedProdutosProps) {
  return (
    <section className="py-16 md:py-24" data-testid="featured-produtos-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-featured-title">
              Produtos em Destaque
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Descubra nossos compressores de ar mais populares, confiados por profissionais em todo o mundo.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              onViewAll?.();
              console.log("View all produtos clicked");
            }}
            data-testid="button-view-all-produtos"
          >
            Ver Todos os Produtos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <ProdutoGrid produtos={produtos} onViewDetails={onViewDetails} />
      </div>
    </section>
  );
}
