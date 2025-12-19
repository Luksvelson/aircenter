import ProdutoCard, { type Produto } from "./ProdutoCard";

interface ProdutoGridProps {
  produtos: Produto[];
  onViewDetails?: (produto: Produto) => void;
}

export default function ProdutoGrid({ produtos, onViewDetails }: ProdutoGridProps) {
  if (produtos.length === 0) {
    return (
      <div className="text-center py-16" data-testid="empty-produtos">
        <p className="text-muted-foreground">Nenhum produto encontrado com os critérios selecionados.</p>
      </div>
    );
  }

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      data-testid="produto-grid"
    >
      {produtos.map((produto) => (
        <ProdutoCard
          key={produto.id}
          produto={produto}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
