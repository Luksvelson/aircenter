import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wind, Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { useState } from "react";

const productLinks = [
  { name: "Piston Compressors", href: "/products?type=piston" },
  { name: "Rotary Screw", href: "/products?type=rotary" },
  { name: "Portable Units", href: "/products?type=portable" },
  { name: "Silent Compressors", href: "/products?type=silent" },
  { name: "High Pressure", href: "/products?type=high-pressure" },
];

const supportLinks = [
  { name: "Product Manuals", href: "/support/manuals" },
  { name: "Spec Sheets", href: "/support/specs" },
  { name: "Warranty Info", href: "/support/warranty" },
  { name: "Service Centers", href: "/support/service" },
  { name: "FAQs", href: "/support/faq" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <Wind className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">AirPro</span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Leading provider of industrial air compressor solutions since 1985. 
              Quality equipment backed by expert support.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10" data-testid="button-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10" data-testid="button-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10" data-testid="button-linkedin">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10" data-testid="button-instagram">
                <SiInstagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10" data-testid="button-youtube">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background text-sm transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s/g, "-")}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background text-sm transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s/g, "-")}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact & Newsletter</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Industrial Blvd, Chicago, IL 60601</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 shrink-0" />
                <span>1-800-AIR-COMP</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@airpro.com</span>
              </li>
            </ul>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" data-testid="button-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p data-testid="text-copyright">2024 AirPro Compressors. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link href="/privacy" className="hover:text-background transition-colors" data-testid="link-privacy">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-background transition-colors" data-testid="link-terms">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-background transition-colors" data-testid="link-cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
