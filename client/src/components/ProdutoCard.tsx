import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

export interface Produto {
  id: string;
  name: string;
  model: string;
  image: string;
  category: string;
  price: number;
  specs: {
    cfm: string;
    psi: string;
    hp: string;
    tank: string;
  };
  featured?: boolean;
}

interface ProdutoCardProps {
  produto: Produto;
  onViewDetails?: (produto: Produto) => void;
}

export default function ProdutoCard({ produto, onViewDetails }: ProdutoCardProps) {
  return (
    <Card
      className="group overflow-visible hover-elevate"
      data-testid={`card-produto-${produto.id}`}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square bg-white dark:bg-muted/50 rounded-t-md overflow-hidden">
          <img
            src={produto.image}
            alt={`${produto.name} - ${produto.model}`}
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-produto-${produto.id}`}
          />
          {produto.featured && (
            <Badge
              className="absolute top-3 left-3"
              data-testid={`badge-featured-${produto.id}`}
            >
              Destaque
            </Badge>
          )}
        </div>
        
        <div className="p-4 md:p-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {produto.category}
          </p>
          <h3 className="font-semibold text-lg mb-1" data-testid={`text-produto-name-${produto.id}`}>
            {produto.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">Modelo: {produto.model}</p>
          
          <ul className="text-sm space-y-1 mb-4 text-muted-foreground">
            <li className="flex justify-between">
              <span>CFM:</span>
              <span className="text-foreground">{produto.specs.cfm}</span>
            </li>
            <li className="flex justify-between">
              <span>PSI:</span>
              <span className="text-foreground">{produto.specs.psi}</span>
            </li>
            <li className="flex justify-between">
              <span>CV:</span>
              <span className="text-foreground">{produto.specs.hp}</span>
            </li>
            <li className="flex justify-between">
              <span>Reservatório:</span>
              <span className="text-foreground">{produto.specs.tank}</span>
            </li>
          </ul>
          
          <div className="flex items-center justify-between gap-4">
            <p className="text-xl font-bold text-primary" data-testid={`text-price-${produto.id}`}>
              R$ {produto.price.toLocaleString('pt-BR')}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onViewDetails?.(produto);
                console.log("View details:", produto.name);
              }}
              data-testid={`button-view-${produto.id}`}
            >
              <Eye className="h-4 w-4 mr-2" />
              Detalhes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
