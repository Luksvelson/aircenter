import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProdutos from "@/components/FeaturedProdutos";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ProdutoDetailModal from "@/components/ProdutoDetailModal";
import type { Produto } from "@/components/ProdutoCard";

import produtoImage1 from "@assets/generated_images/air_compressor_produto_shot.png";
import produtoImage2 from "@assets/generated_images/piston_compressor_produto.png";
import produtoImage3 from "@assets/generated_images/rotary_screw_compressor.png";
import produtoImage4 from "@assets/generated_images/portable_air_compressor.png";
import produtoImage5 from "@assets/generated_images/silent_air_compressor.png";
import produtoImage6 from "@assets/generated_images/high-pressure_compressor.png";

// todo: remove mock functionality
const featuredProdutos: Produto[] = [
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
];

export default function HomePage() {
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleViewDetails = (produto: Produto) => {
    setSelectedProduto(produto);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Header scrolled={scrolled} />
      
      <main>
        <Hero
          onBrowseProdutos={() => setLocation("/produtos")}
          onRequestQuote={() => {
            const contactSection = document.getElementById("contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        
        <CategorySection />
        
        <FeaturedProdutos
          produtos={featuredProdutos}
          onViewAll={() => setLocation("/produtos")}
          onViewDetails={handleViewDetails}
        />
        
        <TrustSection />
        
        <ServicesSection />
        
        <AboutSection />
        
        <LocationSection />
        
        <div id="contact">
          <ContactSection />
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
