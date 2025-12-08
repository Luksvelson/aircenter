import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProductDetailModal from "@/components/ProductDetailModal";
import type { Product } from "@/components/ProductCard";

import productImage1 from "@assets/generated_images/air_compressor_product_shot.png";
import productImage2 from "@assets/generated_images/piston_compressor_product.png";
import productImage3 from "@assets/generated_images/rotary_screw_compressor.png";
import productImage4 from "@assets/generated_images/portable_air_compressor.png";
import productImage5 from "@assets/generated_images/silent_air_compressor.png";
import productImage6 from "@assets/generated_images/high-pressure_compressor.png";

// todo: remove mock functionality
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "ProAir 5000",
    model: "PA-5000-V",
    image: productImage1,
    category: "Piston Compressor",
    price: 2499,
    specs: { cfm: "18.5", psi: "175", hp: "5.0", tank: "80 gal" },
    featured: true,
  },
  {
    id: "2",
    name: "SilentPro 3000",
    model: "SP-3000-Q",
    image: productImage5,
    category: "Silent Compressor",
    price: 1899,
    specs: { cfm: "12.0", psi: "150", hp: "3.0", tank: "60 gal" },
  },
  {
    id: "3",
    name: "RotaryMax 7500",
    model: "RM-7500-RS",
    image: productImage3,
    category: "Rotary Screw",
    price: 5499,
    specs: { cfm: "28.0", psi: "175", hp: "7.5", tank: "120 gal" },
    featured: true,
  },
  {
    id: "4",
    name: "PortaMaster 2000",
    model: "PM-2000-P",
    image: productImage4,
    category: "Portable",
    price: 899,
    specs: { cfm: "6.5", psi: "135", hp: "2.0", tank: "20 gal" },
  },
  {
    id: "5",
    name: "HighForce 10K",
    model: "HF-10K-HP",
    image: productImage6,
    category: "High Pressure",
    price: 7999,
    specs: { cfm: "35.0", psi: "250", hp: "10.0", tank: "200 gal" },
    featured: true,
  },
  {
    id: "6",
    name: "IndustrialPro 6000",
    model: "IP-6000-I",
    image: productImage2,
    category: "Piston Compressor",
    price: 3299,
    specs: { cfm: "22.0", psi: "175", hp: "6.0", tank: "100 gal" },
  },
];

export default function HomePage() {
  const [, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Header scrolled={scrolled} />
      
      <main>
        <Hero
          onBrowseProducts={() => setLocation("/products")}
          onRequestQuote={() => {
            const contactSection = document.getElementById("contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        
        <CategorySection />
        
        <FeaturedProducts
          products={featuredProducts}
          onViewAll={() => setLocation("/products")}
          onViewDetails={handleViewDetails}
        />
        
        <TrustSection />
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />

      <ProductDetailModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
