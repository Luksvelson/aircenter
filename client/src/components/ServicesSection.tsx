import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gauge, Wrench, PipetteIcon, ArrowRight } from "lucide-react";

const services = [
  {
    id: "hydrostatic-test",
    icon: Gauge,
    title: "Teste Hidrostático",
    description:
      "Teste de pressão abrangente para verificar a integridade e segurança dos tanques e vasos de pressão do seu compressor de ar. Nossos técnicos certificados realizam inspeções completas seguindo normas e regulamentações do setor.",
    features: [
      "Teste de pressão certificado",
      "Verificação de conformidade de segurança",
      "Relatórios detalhados de inspeção",
      "Avaliação de integridade do tanque",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Manutenção Preventiva e Corretiva",
    description:
      "Mantenha seus compressores de ar funcionando com desempenho máximo com nossos serviços especializados de manutenção. Oferecemos cuidados preventivos programados e reparos corretivos rápidos para minimizar o tempo de inatividade.",
    features: [
      "Planos de manutenção programada",
      "Serviços de reparo de emergência",
      "Substituição de componentes",
      "Otimização de desempenho",
    ],
  },
  {
    id: "piping",
    icon: PipetteIcon,
    title: "Instalação de Redes de Tubulação de Ar",
    description:
      "Projeto e instalação profissional de sistemas de distribuição de ar comprimido. Criamos redes de tubulação eficientes adaptadas às necessidades específicas da sua instalação e possibilidades de expansão futura.",
    features: [
      "Projeto de sistema personalizado",
      "Instalação profissional",
      "Conexões sem vazamentos",
      "Planejamento de capacidade",
    ],
  },
];

interface ServicesSectionProps {
  onRequestService?: (serviceId: string) => void;
}

export default function ServicesSection({ onRequestService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-services-title">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Além da venda de equipamentos, oferecemos serviços completos para manter seus 
            sistemas de ar comprimido funcionando com segurança e eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="h-full"
              data-testid={`card-service-${service.id}`}
            >
              <CardContent className="p-6 md:p-8 flex flex-col h-full">
                <div className="p-3 rounded-md bg-primary/10 w-fit mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-service-title-${service.id}`}>
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="outline"
                  className="w-full mt-auto"
                  onClick={() => {
                    onRequestService?.(service.id);
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-testid={`button-request-${service.id}`}
                >
                  Solicitar Serviço
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
