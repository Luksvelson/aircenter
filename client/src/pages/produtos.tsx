import { useState, useEffect } from "react";
import { useLocation, useSearch } from "wouter";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import ProdutoGrid from "@/components/ProdutoGrid";
import ProdutoDetailModal from "@/components/ProdutoDetailModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, SlidersHorizontal } from "lucide-react";
import type { Produto } from "@/components/ProdutoCard";

import produtoImage1 from "@assets/generated_images/air_compressor_produto_shot.png";
import produtoImage2 from "@assets/generated_images/piston_compressor_produto.png";
import produtoImage3 from "@assets/generated_images/rotary_screw_compressor.png";
import produtoImage4 from "@assets/generated_images/portable_air_compressor.png";
import produtoImage5 from "@assets/generated_images/silent_air_compressor.png";
import produtoImage6 from "@assets/generated_images/high-pressure_compressor.png";

// todo: remove mock functionality
const allProdutos: Produto[] = [
  {
    id: "1",
    name: "ProAir 5000",
    model: "PA-5000-V",
    image: produtoImage1,
    category: "Compressor a Pistão",
    price: 12499,
    specs: { cfm: "18.5", psi: "175", hp: "5.0", tank: "300L" },
    featured: true,
  },
  {
    id: "2",
    name: "SilentPro 3000",
    model: "SP-3000-Q",
    image: produtoImage5,
    category: "Compressor Silencioso",
    price: 9499,
    specs: { cfm: "12.0", psi: "150", hp: "3.0", tank: "230L" },
  },
  {
    id: "3",
    name: "RotaryMax 7500",
    model: "RM-7500-RS",
    image: produtoImage3,
    category: "Parafuso Rotativo",
    price: 27499,
    specs: { cfm: "28.0", psi: "175", hp: "7.5", tank: "450L" },
    featured: true,
  },
  {
    id: "4",
    name: "PortaMaster 2000",
    model: "PM-2000-P",
    image: produtoImage4,
    category: "Portátil",
    price: 4499,
    specs: { cfm: "6.5", psi: "135", hp: "2.0", tank: "75L" },
  },
  {
    id: "5",
    name: "HighForce 10K",
    model: "HF-10K-HP",
    image: produtoImage6,
    category: "Alta Pressão",
    price: 39999,
    specs: { cfm: "35.0", psi: "250", hp: "10.0", tank: "750L" },
    featured: true,
  },
  {
    id: "6",
    name: "IndustrialPro 6000",
    model: "IP-6000-I",
    image: produtoImage2,
    category: "Compressor a Pistão",
    price: 16499,
    specs: { cfm: "22.0", psi: "175", hp: "6.0", tank: "380L" },
  },
  {
    id: "7",
    name: "QuietAir 4000",
    model: "QA-4000-S",
    image: produtoImage5,
    category: "Compressor Silencioso",
    price: 10999,
    specs: { cfm: "15.0", psi: "165", hp: "4.0", tank: "265L" },
  },
  {
    id: "8",
    name: "MobilePro 1500",
    model: "MP-1500-M",
    image: produtoImage4,
    category: "Portátil",
    price: 3249,
    specs: { cfm: "4.5", psi: "125", hp: "1.5", tank: "40L" },
  },
  {
    id: "9",
    name: "RotaryElite 5000",
    model: "RE-5000-RS",
    image: produtoImage3,
    category: "Parafuso Rotativo",
    price: 21499,
    specs: { cfm: "20.0", psi: "175", hp: "5.0", tank: "300L" },
  },
];

export default function ProdutosPage() {
  const [scrolled, setScrolled] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const searchString = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleViewDetails = (produto: Produto) => {
    setSelectedProduto(produto);
    setModalOpen(true);
  };

  const filteredProdutos = allProdutos
    .filter((produto) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          produto.name.toLowerCase().includes(query) ||
          produto.model.toLowerCase().includes(query) ||
          produto.category.toLowerCase().includes(query)
        );
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

  return (
    <div className="min-h-screen bg-background" data-testid="page-produtos">
      <Header scrolled={scrolled} />

      <main className="pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-produtos-title">
              Todos os Produtos
            </h1>
            <p className="text-muted-foreground">
              {filteredProdutos.length} produtos disponíveis
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="hidden lg:block lg:w-64 shrink-0">
              <div className="sticky top-24">
                <FilterSidebar />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar produtos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                    data-testid="input-search-produtos"
                  />
                </div>

                <div className="flex gap-2">
                  <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                    <SheetTrigger asChild className="lg:hidden">
                      <Button variant="outline" data-testid="button-mobile-filters">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        Filtros
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80 overflow-y-auto">
                      <div className="mt-6">
                        <FilterSidebar />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]" data-testid="select-sort">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Em Destaque</SelectItem>
                      <SelectItem value="price-low">Preço: Menor para Maior</SelectItem>
                      <SelectItem value="price-high">Preço: Maior para Menor</SelectItem>
                      <SelectItem value="name">Nome</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <ProdutoGrid produtos={filteredProdutos} onViewDetails={handleViewDetails} />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <ProdutoDetailModal
        produto={selectedProduto}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
