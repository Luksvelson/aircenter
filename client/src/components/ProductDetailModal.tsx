import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, FileText, Download } from "lucide-react";
import type { Product } from "./ProductCard";

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProductDetailModal({
  product,
  open,
  onOpenChange,
}: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-product-detail">
        <DialogHeader>
          <div className="flex items-start gap-2 flex-wrap">
            <DialogTitle className="text-2xl">{product.name}</DialogTitle>
            {product.featured && <Badge>Featured</Badge>}
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <div className="aspect-square bg-white dark:bg-muted/50 rounded-md overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8"
                data-testid="img-modal-product"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" data-testid="button-spec-sheet">
                <FileText className="h-4 w-4 mr-2" />
                Spec Sheet
              </Button>
              <Button variant="outline" size="sm" className="flex-1" data-testid="button-manual">
                <Download className="h-4 w-4 mr-2" />
                Manual
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
              {product.category}
            </p>
            <p className="text-muted-foreground mb-4">Model: {product.model}</p>

            <p className="text-3xl font-bold text-primary mb-6" data-testid="text-modal-price">
              ${product.price.toLocaleString()}
            </p>

            <Separator className="mb-6" />

            <h3 className="font-semibold mb-4">Specifications</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 bg-muted/50 rounded-md">
                <p className="text-xs text-muted-foreground uppercase">CFM Rating</p>
                <p className="font-semibold">{product.specs.cfm} CFM</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-md">
                <p className="text-xs text-muted-foreground uppercase">Max PSI</p>
                <p className="font-semibold">{product.specs.psi} PSI</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-md">
                <p className="text-xs text-muted-foreground uppercase">Horsepower</p>
                <p className="font-semibold">{product.specs.hp} HP</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-md">
                <p className="text-xs text-muted-foreground uppercase">Tank Size</p>
                <p className="font-semibold">{product.specs.tank}</p>
              </div>
            </div>

            <h3 className="font-semibold mb-3">Features</h3>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>Heavy-duty cast iron construction</li>
              <li>Oil-lubricated pump for extended life</li>
              <li>Thermal overload protection</li>
              <li>Large capacity air filter</li>
              <li>Easy-read pressure gauges</li>
            </ul>

            <div className="space-y-3">
              <Button
                className="w-full"
                size="lg"
                onClick={() => console.log("Request quote for:", product.name)}
                data-testid="button-modal-quote"
              >
                <Phone className="h-4 w-4 mr-2" />
                Request a Quote
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Our team will respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
