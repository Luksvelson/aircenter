import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import pistonImage from "@assets/generated_images/piston_compressor_produto.png";
import rotaryImage from "@assets/generated_images/rotary_screw_compressor.png";
import portableImage from "@assets/generated_images/portable_air_compressor.png";
import silentImage from "@assets/generated_images/silent_air_compressor.png";
import highPressureImage from "@assets/generated_images/high-pressure_compressor.png";

const categories = [
  {
    id: "piston",
    name: "Compressores a Pistão",
    description: "Design alternativo tradicional para aplicações versáteis",
    image: pistonImage,
    href: "/produtos?type=piston",
  },
  {
    id: "rotary",
    name: "Parafuso Rotativo",
    description: "Operação contínua para uso industrial de alta demanda",
    image: rotaryImage,
    href: "/produtos?type=rotary",
  },
  {
    id: "portable",
    name: "Unidades Portáteis",
    description: "Soluções móveis para canteiros de obras e trabalho de campo",
    image: portableImage,
    href: "/produtos?type=portable",
  },
  {
    id: "silent",
    name: "Compressores Silenciosos",
    description: "Operação com baixo ruído para ambientes sensíveis",
    image: silentImage,
    href: "/produtos?type=silent",
  },
  {
    id: "high-pressure",
    name: "Alta Pressão",
    description: "Unidades especializadas para aplicações exigentes",
    image: highPressureImage,
    href: "/produtos?type=high-pressure",
  },
];

export default function CategorySection() {
  return (
    <section id="category" className="py-16 md:py-24" data-testid="category-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-category-title">
            Navegue por Categoria
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre o compressor perfeito para suas necessidades. De pequenas unidades 
            portáteis a equipamentos de nível industrial.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <Card
                className="group overflow-visible hover-elevate h-full"
                data-testid={`card-category-${category.id}`}
              >
                <CardContent className="p-4 text-center">
                  <div className="aspect-square bg-white dark:bg-muted/50 rounded-md overflow-hidden mb-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground hidden md:block mb-2">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-xs text-primary font-medium">
                    Ver
                    <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
