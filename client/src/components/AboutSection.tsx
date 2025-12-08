import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, History, Award } from "lucide-react";

const milestones = [
  { year: "1985", event: "Founded in Chicago" },
  { year: "1995", event: "Expanded to national distribution" },
  { year: "2005", event: "Launched service division" },
  { year: "2015", event: "ISO 9001 certification achieved" },
  { year: "2024", event: "Serving 500+ business partners" },
];

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We source only the highest quality equipment from trusted manufacturers worldwide.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We provide personalized solutions for every client.",
  },
  {
    icon: Award,
    title: "Expert Support",
    description: "Our certified technicians bring decades of combined experience to every project.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-title">
              About AirPro
            </h2>
            <p className="text-muted-foreground mb-4">
              For nearly four decades, AirPro has been a trusted partner for businesses 
              seeking reliable compressed air solutions. What started as a small family 
              operation in Chicago has grown into a leading supplier of industrial air 
              compressors across the nation.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team of engineers and technicians understands that every business has 
              unique requirements. Whether you're running a small auto shop or managing 
              a large manufacturing facility, we have the expertise and inventory to 
              meet your needs.
            </p>
            <p className="text-muted-foreground">
              We don't just sell equipment — we build lasting relationships. Our commitment 
              to after-sales support, maintenance services, and technical guidance sets us 
              apart in the industry.
            </p>
          </div>

          <div className="bg-muted/30 rounded-md p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <History className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Our Journey</h3>
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
          <h3 className="text-2xl font-bold mb-2">Our Values</h3>
          <p className="text-muted-foreground">The principles that guide everything we do</p>
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
