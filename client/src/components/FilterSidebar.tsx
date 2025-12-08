import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, RotateCcw } from "lucide-react";

const compressorTypes = [
  { id: "piston", label: "Compressores a Pistão" },
  { id: "rotary", label: "Parafuso Rotativo" },
  { id: "portable", label: "Unidades Portáteis" },
  { id: "silent", label: "Compressores Silenciosos" },
  { id: "high-pressure", label: "Alta Pressão" },
];

const tankSizes = [
  { id: "small", label: "Menos de 100L" },
  { id: "medium", label: "100-250L" },
  { id: "large", label: "250-400L" },
  { id: "xlarge", label: "Acima de 400L" },
];

interface Filters {
  types: string[];
  tankSizes: string[];
  priceRange: [number, number];
  cfmRange: [number, number];
}

interface FilterSidebarProps {
  filters?: Filters;
  onFiltersChange?: (filters: Filters) => void;
}

export default function FilterSidebar({ filters, onFiltersChange }: FilterSidebarProps) {
  const [localFilters, setLocalFilters] = useState<Filters>(
    filters || {
      types: [],
      tankSizes: [],
      priceRange: [0, 50000],
      cfmRange: [0, 100],
    }
  );

  const updateFilters = (updates: Partial<Filters>) => {
    const newFilters = { ...localFilters, ...updates };
    setLocalFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const toggleArrayItem = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];
  };

  const resetFilters = () => {
    const defaultFilters: Filters = {
      types: [],
      tankSizes: [],
      priceRange: [0, 50000],
      cfmRange: [0, 100],
    };
    setLocalFilters(defaultFilters);
    onFiltersChange?.(defaultFilters);
    console.log("Filters reset");
  };

  return (
    <aside className="w-full lg:w-64 space-y-6" data-testid="filter-sidebar">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-semibold text-lg">Filtros</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetFilters}
          className="text-muted-foreground"
          data-testid="button-reset-filters"
        >
          <RotateCcw className="h-4 w-4 mr-1" />
          Limpar
        </Button>
      </div>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between gap-2 w-full py-2 font-medium" data-testid="trigger-type">
          Tipo de Compressor
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-2">
          {compressorTypes.map((type) => (
            <div key={type.id} className="flex items-center gap-2">
              <Checkbox
                id={type.id}
                checked={localFilters.types.includes(type.id)}
                onCheckedChange={() =>
                  updateFilters({ types: toggleArrayItem(localFilters.types, type.id) })
                }
                data-testid={`checkbox-type-${type.id}`}
              />
              <Label htmlFor={type.id} className="text-sm cursor-pointer">
                {type.label}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between gap-2 w-full py-2 font-medium" data-testid="trigger-tank">
          Tamanho do Reservatório
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-2">
          {tankSizes.map((size) => (
            <div key={size.id} className="flex items-center gap-2">
              <Checkbox
                id={size.id}
                checked={localFilters.tankSizes.includes(size.id)}
                onCheckedChange={() =>
                  updateFilters({ tankSizes: toggleArrayItem(localFilters.tankSizes, size.id) })
                }
                data-testid={`checkbox-tank-${size.id}`}
              />
              <Label htmlFor={size.id} className="text-sm cursor-pointer">
                {size.label}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between gap-2 w-full py-2 font-medium" data-testid="trigger-price">
          Faixa de Preço
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 pb-2">
          <Slider
            value={localFilters.priceRange}
            min={0}
            max={50000}
            step={500}
            onValueChange={(value) =>
              updateFilters({ priceRange: value as [number, number] })
            }
            data-testid="slider-price"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>R$ {localFilters.priceRange[0].toLocaleString('pt-BR')}</span>
            <span>R$ {localFilters.priceRange[1].toLocaleString('pt-BR')}</span>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between gap-2 w-full py-2 font-medium" data-testid="trigger-cfm">
          Classificação CFM
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 pb-2">
          <Slider
            value={localFilters.cfmRange}
            min={0}
            max={100}
            step={5}
            onValueChange={(value) =>
              updateFilters({ cfmRange: value as [number, number] })
            }
            data-testid="slider-cfm"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>{localFilters.cfmRange[0]} CFM</span>
            <span>{localFilters.cfmRange[1]} CFM</span>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </aside>
  );
}
