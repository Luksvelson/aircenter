import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Truck, Headphones, CheckCircle2, Factory } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Garantia de 5 Anos", description: "Cobertura total em todas as unidades" },
  { icon: Award, label: "Certificado ISO 9001", description: "Gestão de qualidade assegurada" },
  { icon: Truck, label: "Frete Grátis", description: "Em pedidos acima de R$ 5.000" },
  { icon: Headphones, label: "Suporte 24/7", description: "Técnicos especializados de plantão" },
];

// todo: remove mock functionality
const stats = [
  { value: "50.000+", label: "Unidades Vendidas" },
  { value: "35+", label: "Anos de Experiência" },
  { value: "98%", label: "Satisfação do Cliente" },
  { value: "500+", label: "Parceiros Comerciais" },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="trust-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-trust-title">
            Confiança dos Líderes da Indústria
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Com décadas de experiência e compromisso com a qualidade, 
            entregamos soluções confiáveis em ar comprimido.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {trustBadges.map((badge) => (
            <Card key={badge.label} className="text-center">
              <CardContent className="p-6">
                <badge.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-sm md:text-base mb-1">{badge.label}</h3>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Por Que Escolher a AirPro?</h3>
            <ul className="space-y-3">
              {[
                "Índices de eficiência líderes do mercado",
                "Disponibilidade abrangente de peças",
                "Serviços de instalação no local",
                "Opções flexíveis de financiamento",
                "Programas de treinamento e certificação",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <Factory className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Soluções Industriais</h3>
              <p className="text-primary-foreground/90 mb-4">
                Precisa de uma solução personalizada para sua instalação? Nossa equipe de engenharia 
                projeta sistemas completos de ar comprimido sob medida para suas necessidades.
              </p>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Projeto de sistemas personalizados</li>
                <li>Auditorias de eficiência energética</li>
                <li>Instalação e comissionamento</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
