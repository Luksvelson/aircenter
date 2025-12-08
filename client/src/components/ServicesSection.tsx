import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gauge, Wrench, PipetteIcon, ArrowRight } from "lucide-react";

const services = [
  {
    id: "hydrostatic-test",
    icon: Gauge,
    title: "Hydrostatic Test",
    description:
      "Comprehensive pressure testing to verify the integrity and safety of your air compressor tanks and vessels. Our certified technicians perform thorough inspections following industry standards and regulations.",
    features: [
      "Certified pressure testing",
      "Safety compliance verification",
      "Detailed inspection reports",
      "Tank integrity assessment",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Preventive and Corrective Maintenance",
    description:
      "Keep your air compressors running at peak performance with our expert maintenance services. We offer scheduled preventive care and rapid corrective repairs to minimize downtime.",
    features: [
      "Scheduled maintenance plans",
      "Emergency repair services",
      "Component replacement",
      "Performance optimization",
    ],
  },
  {
    id: "piping",
    icon: PipetteIcon,
    title: "Air Piping Networks Installation",
    description:
      "Professional design and installation of compressed air distribution systems. We create efficient piping networks tailored to your facility's specific requirements and future expansion needs.",
    features: [
      "Custom system design",
      "Professional installation",
      "Leak-free connections",
      "Capacity planning",
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
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond equipment sales, we provide comprehensive services to keep your 
            compressed air systems running safely and efficiently.
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
                  Request Service
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
