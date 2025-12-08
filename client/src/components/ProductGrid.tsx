import ProductCard, { type Product } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onViewDetails?: (product: Product) => void;
}

export default function ProductGrid({ products, onViewDetails }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16" data-testid="empty-products">
        <p className="text-muted-foreground">No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      data-testid="product-grid"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
