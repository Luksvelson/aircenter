import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Truck, Headphones, CheckCircle2, Factory } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "5-Year Warranty", description: "Full coverage on all units" },
  { icon: Award, label: "ISO 9001 Certified", description: "Quality management assured" },
  { icon: Truck, label: "Free Shipping", description: "On orders over $1,000" },
  { icon: Headphones, label: "24/7 Support", description: "Expert technicians on call" },
];

// todo: remove mock functionality
const stats = [
  { value: "50,000+", label: "Units Sold" },
  { value: "35+", label: "Years Experience" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "500+", label: "Business Partners" },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="trust-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-trust-title">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Backed by decades of experience and a commitment to quality, 
            we deliver reliable air compression solutions.
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
            <h3 className="text-2xl font-bold mb-4">Why Choose AirPro?</h3>
            <ul className="space-y-3">
              {[
                "Industry-leading efficiency ratings",
                "Comprehensive parts availability",
                "On-site installation services",
                "Flexible financing options",
                "Training and certification programs",
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
              <h3 className="text-2xl font-bold mb-2">Industrial Solutions</h3>
              <p className="text-primary-foreground/90 mb-4">
                Need a custom solution for your facility? Our engineering team 
                designs complete compressed air systems tailored to your requirements.
              </p>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Custom system design</li>
                <li>Energy efficiency audits</li>
                <li>Installation & commissioning</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
