import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Navigation, Car } from "lucide-react";

const businessHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function LocationSection() {
  const address = "123 Industrial Boulevard, Chicago, IL 60601";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-16 md:py-24" data-testid="location-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-location-title">
            Visit Our Showroom
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Come see our full range of air compressors in person. Our showroom features 
            working demonstrations and our team is ready to help you find the perfect solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="aspect-video lg:aspect-auto lg:min-h-[400px] bg-muted rounded-md overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.123456789!2d-87.6298!3d41.8781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUyJzQxLjIiTiA4N8KwMzcnNDcuMyJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AirPro Location Map"
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
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground mb-3" data-testid="text-address">
                      123 Industrial Boulevard<br />
                      Chicago, IL 60601<br />
                      United States
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(googleMapsUrl, "_blank")}
                        data-testid="button-get-directions"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigator.clipboard.writeText(address)}
                        data-testid="button-copy-address"
                      >
                        Copy Address
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
                    <h3 className="font-semibold mb-3">Business Hours</h3>
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
                    <h3 className="font-semibold mb-1">Parking</h3>
                    <p className="text-sm text-muted-foreground">
                      Free customer parking available on-site. Loading dock access 
                      for equipment pickup and delivery.
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
                      <p className="text-xs text-muted-foreground">Call Us</p>
                      <p className="font-medium text-sm">1-800-AIR-COMP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-medium text-sm">visit@airpro.com</p>
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
