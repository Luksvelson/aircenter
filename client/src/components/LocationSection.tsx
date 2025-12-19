import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Navigation, Car } from "lucide-react";

const businessHours = [
  { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
  { day: "Sábado", hours: "09:00 - 14:00" },
  { day: "Domingo", hours: "Fechado" },
];

export default function LocationSection() {
  const address = "Av. Industrial, 1234 - Distrito Industrial, São Paulo - SP, 04001-000";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-16 md:py-24" data-testid="location-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-location-title">
            Visite Nosso Showroom
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Venha conhecer nossa linha completa de compressores de ar pessoalmente. Nosso showroom 
            possui demonstrações em funcionamento e nossa equipe está pronta para ajudá-lo a encontrar 
            a solução perfeita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="aspect-video lg:aspect-auto lg:min-h-[400px] bg-muted rounded-md overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.35091354582!2d-43.21936132387573!3d-22.900424179259506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ee309408c45%3A0x56f35704ec112346!2zUi4gU8OjbyBDcmlzdMOzdsOjbywgNzkzIC0gSW1wZXJpYWwgZGUgU8OjbyBDcmlzdMOzdsOjbywgUmlvIGRlIEphbmVpcm8gLSBSSiwgMjA5NDAtMDAx!5e0!3m2!1spt-BR!2sbr!4v1765220086307!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização AirCenter"
              data-testid="map-embed"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10 shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-muted-foreground mb-3" data-testid="text-address">
                      Rua São Cristóvão, 793<br />
                      São Cristóvão<br />
                      Rio de Janeiro - RJ
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(googleMapsUrl, "_blank")}
                        data-testid="button-get-directions"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Como Chegar
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigator.clipboard.writeText(address)}
                        data-testid="button-copy-address"
                      >
                        Copiar Endereço
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10 shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-3">Horário de Funcionamento</h3>
                    <ul className="space-y-2">
                      {businessHours.map((schedule) => (
                        <li key={schedule.day} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10 shrink-0">
                    <Car className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Estacionamento</h3>
                    <p className="text-sm text-muted-foreground">
                      Estacionamento gratuito para clientes disponível no local. Acesso à doca de 
                      carga para retirada e entrega de equipamentos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Telefone</p>
                      <p className="font-medium text-sm">(21) 3000-0000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">E-mail</p>
                      <p className="font-medium text-sm">contato@aircenter.com.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
