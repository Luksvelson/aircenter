import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

export interface Product {
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

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <Card
      className="group overflow-visible hover-elevate"
      data-testid={`card-product-${product.id}`}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square bg-white dark:bg-muted/50 rounded-t-md overflow-hidden">
          <img
            src={product.image}
            alt={`${product.name} - ${product.model}`}
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-product-${product.id}`}
          />
          {product.featured && (
            <Badge
              className="absolute top-3 left-3"
              data-testid={`badge-featured-${product.id}`}
            >
              Destaque
            </Badge>
          )}
        </div>
        
        <div className="p-4 md:p-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold text-lg mb-1" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">Modelo: {product.model}</p>
          
          <ul className="text-sm space-y-1 mb-4 text-muted-foreground">
            <li className="flex justify-between">
              <span>CFM:</span>
              <span className="text-foreground">{product.specs.cfm}</span>
            </li>
            <li className="flex justify-between">
              <span>PSI:</span>
              <span className="text-foreground">{product.specs.psi}</span>
            </li>
            <li className="flex justify-between">
              <span>CV:</span>
              <span className="text-foreground">{product.specs.hp}</span>
            </li>
            <li className="flex justify-between">
              <span>Reservatório:</span>
              <span className="text-foreground">{product.specs.tank}</span>
            </li>
          </ul>
          
          <div className="flex items-center justify-between gap-4">
            <p className="text-xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
              R$ {product.price.toLocaleString('pt-BR')}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onViewDetails?.(product);
                console.log("View details:", product.name);
              }}
              data-testid={`button-view-${product.id}`}
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
