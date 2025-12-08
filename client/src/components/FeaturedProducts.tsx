import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductGrid from "./ProductGrid";
import type { Product } from "./ProductCard";

interface FeaturedProductsProps {
  products: Product[];
  onViewAll?: () => void;
  onViewDetails?: (product: Product) => void;
}

export default function FeaturedProducts({ products, onViewAll, onViewDetails }: FeaturedProductsProps) {
  return (
    <section className="py-16 md:py-24" data-testid="featured-products-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-featured-title">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Discover our most popular air compressors, trusted by professionals worldwide.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              onViewAll?.();
              console.log("View all products clicked");
            }}
            data-testid="button-view-all-products"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <ProductGrid products={products} onViewDetails={onViewDetails} />
      </div>
    </section>
  );
}
