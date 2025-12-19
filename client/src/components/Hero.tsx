import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Truck } from "lucide-react";
import heroImage from "@assets/generated_images/industrial_air_compressor_hero.png";

interface HeroProps {
  onBrowseProdutos?: () => void;
  onRequestQuote?: () => void;
}

export default function Hero({ onBrowseProdutos, onRequestQuote }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center" data-testid="hero-section">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            Soluções Industriais em Ar Comprimido
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8" data-testid="text-hero-subtitle">
            Compressores de ar de alta qualidade projetados para desempenho, confiabilidade e eficiência. 
            De pequenas oficinas a grandes instalações industriais.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => {
                onBrowseProdutos?.();
                console.log("Browse produtos clicked");
              }}
              data-testid="button-browse-produtos"
            >
              Ver Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm"
              onClick={() => {
                onRequestQuote?.();
                console.log("Request quote clicked");
              }}
              data-testid="button-hero-quote"
            >
              Solicitar Orçamento
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8">
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">Garantia de 5 Anos</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm">Certificado ISO</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-sm">Frete Grátis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
