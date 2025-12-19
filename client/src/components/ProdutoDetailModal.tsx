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
import type { Produto } from "./ProdutoCard";

interface ProdutoDetailModalProps {
  produto: Produto | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProdutoDetailModal({
  produto,
  open,
  onOpenChange,
}: ProdutoDetailModalProps) {
  if (!produto) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-produto-detail">
        <DialogHeader>
          <div className="flex items-start gap-2 flex-wrap">
            <DialogTitle className="text-2xl">{produto.name}</DialogTitle>
            {produto.featured && <Badge>Destaque</Badge>}
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <div className="aspect-square bg-white dark:bg-muted/50 rounded-md overflow-hidden mb-4">
              <img
                src={produto.image}
                alt={produto.name}
                className="w-full h-full object-contain p-8"
                data-testid="img-modal-produto"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" data-testid="button-spec-sheet">
                <FileText className="h-4 w-4 mr-2" />
                Ficha Técnica
              </Button>
              <Button variant="outline" size="sm" className="flex-1" data-testid="button-manual">
                <Download className="h-4 w-4 mr-2" />
                Manual
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
              {produto.category}
            </p>
            <p className="text-muted-foreground mb-4">Modelo: {produto.model}</p>

            <p className="text-3xl font-bold text-primary mb-6" data-testid="text-modal-price">
              R$ {produto.price.toLocaleString('pt-BR')}
            </p>

            <Separator className="mb-6" />

            <h3 className="font-semibold mb-4">Especificações</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 bg-muted/50 rounded-md">
                <p className="text-xs text-muted-foreground uppercase">Vazão CFM</p>
                <p className="font-semibold">{produto.specs.cfm} CFM</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-md">
                <p className="text-xs text-muted-foreground uppercase">Pressão Máx PSI</p>
                <p className="font-semibold">{produto.specs.psi} PSI</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-md">
                <p className="text-xs text-muted-foreground uppercase">Potência</p>
                <p className="font-semibold">{produto.specs.hp} CV</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-md">
                <p className="text-xs text-muted-foreground uppercase">Reservatório</p>
                <p className="font-semibold">{produto.specs.tank}</p>
              </div>
            </div>

            <h3 className="font-semibold mb-3">Características</h3>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>Construção robusta em ferro fundido</li>
              <li>Bomba lubrificada a óleo para maior vida útil</li>
              <li>Proteção térmica contra sobrecarga</li>
              <li>Filtro de ar de alta capacidade</li>
              <li>Manômetros de fácil leitura</li>
            </ul>

            <div className="space-y-3">
              <Button
                className="w-full"
                size="lg"
                onClick={() => console.log("Request quote for:", produto.name)}
                data-testid="button-modal-quote"
              >
                <Phone className="h-4 w-4 mr-2" />
                Solicitar Orçamento
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Nossa equipe responderá em até 24 horas
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
