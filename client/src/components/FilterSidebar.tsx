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
  { id: "piston", label: "Piston Compressors" },
  { id: "rotary", label: "Rotary Screw" },
  { id: "portable", label: "Portable Units" },
  { id: "silent", label: "Silent Compressors" },
  { id: "high-pressure", label: "High Pressure" },
];

const tankSizes = [
  { id: "small", label: "Under 30 gal" },
  { id: "medium", label: "30-60 gal" },
  { id: "large", label: "60-100 gal" },
  { id: "xlarge", label: "Over 100 gal" },
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
      priceRange: [0, 10000],
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
      priceRange: [0, 10000],
      cfmRange: [0, 100],
    };
    setLocalFilters(defaultFilters);
    onFiltersChange?.(defaultFilters);
    console.log("Filters reset");
  };

  return (
    <aside className="w-full lg:w-64 space-y-6" data-testid="filter-sidebar">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-semibold text-lg">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetFilters}
          className="text-muted-foreground"
          data-testid="button-reset-filters"
        >
          <RotateCcw className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between gap-2 w-full py-2 font-medium" data-testid="trigger-type">
          Compressor Type
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
          Tank Size
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
          Price Range
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 pb-2">
          <Slider
            value={localFilters.priceRange}
            min={0}
            max={10000}
            step={100}
            onValueChange={(value) =>
              updateFilters({ priceRange: value as [number, number] })
            }
            data-testid="slider-price"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>${localFilters.priceRange[0].toLocaleString()}</span>
            <span>${localFilters.priceRange[1].toLocaleString()}</span>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between gap-2 w-full py-2 font-medium" data-testid="trigger-cfm">
          CFM Rating
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
