import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, History, Award } from "lucide-react";

const milestones = [
  { year: "1985", event: "Fundada em São Paulo" },
  { year: "1995", event: "Expansão para distribuição nacional" },
  { year: "2005", event: "Lançamento da divisão de serviços" },
  { year: "2015", event: "Certificação ISO 9001 conquistada" },
  { year: "2024", event: "Atendendo mais de 500 parceiros comerciais" },
];

const values = [
  {
    icon: Target,
    title: "Qualidade em Primeiro Lugar",
    description: "Trabalhamos apenas com equipamentos de alta qualidade de fabricantes confiáveis em todo o mundo.",
  },
  {
    icon: Users,
    title: "Foco no Cliente",
    description: "Seu sucesso é nossa prioridade. Oferecemos soluções personalizadas para cada cliente.",
  },
  {
    icon: Award,
    title: "Suporte Especializado",
    description: "Nossos técnicos certificados trazem décadas de experiência combinada para cada projeto.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-title">
              Sobre a AirCenter
            </h2>
            <p className="text-muted-foreground mb-4">
              Por quase quatro décadas, a AirCenter tem sido uma parceira de confiança para empresas 
              que buscam soluções confiáveis em ar comprimido. O que começou como uma pequena 
              operação familiar em São Paulo cresceu para se tornar uma fornecedora líder de 
              compressores de ar industriais em todo o país.
            </p>
            <p className="text-muted-foreground mb-4">
              Nossa equipe de engenheiros e técnicos entende que cada empresa tem requisitos 
              únicos. Seja você gerenciando uma pequena oficina mecânica ou uma grande 
              instalação industrial, temos a expertise e o estoque para atender suas necessidades.
            </p>
            <p className="text-muted-foreground">
              Não vendemos apenas equipamentos — construímos relacionamentos duradouros. Nosso 
              compromisso com suporte pós-venda, serviços de manutenção e orientação técnica 
              nos diferencia no setor.
            </p>
          </div>

          <div className="bg-muted/30 rounded-md p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <History className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Nossa Trajetória</h3>
            </div>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="font-semibold text-primary">{milestone.year}</p>
                    <p className="text-sm text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Nossos Valores</h3>
          <p className="text-muted-foreground">Os princípios que guiam tudo o que fazemos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value) => (
            <Card key={value.title} data-testid={`card-value-${value.title.toLowerCase().replace(/\s/g, "-")}`}>
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-md bg-primary/10 w-fit mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
