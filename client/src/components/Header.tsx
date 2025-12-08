import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Wind, Menu, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { name: "Piston Compressors", href: "/products?type=piston" },
  { name: "Rotary Screw", href: "/products?type=rotary" },
  { name: "Portable Units", href: "/products?type=portable" },
  { name: "Silent Compressors", href: "/products?type=silent" },
  { name: "High Pressure", href: "/products?type=high-pressure" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

interface HeaderProps {
  scrolled?: boolean;
}

export default function Header({ scrolled = false }: HeaderProps) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <Wind className="h-8 w-8 text-primary" />
            <span className={`font-bold text-xl ${scrolled ? "text-foreground" : "text-white"}`}>
              AirPro
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.name === "Products" ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`gap-1 ${
                        scrolled ? "text-foreground" : "text-white hover:bg-white/10"
                      } ${location.startsWith("/products") ? "bg-white/10" : ""}`}
                      data-testid="button-products-dropdown"
                    >
                      Products
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/products" data-testid="link-all-products">All Products</Link>
                    </DropdownMenuItem>
                    {categories.map((cat) => (
                      <DropdownMenuItem key={cat.name} asChild>
                        <Link href={cat.href} data-testid={`link-category-${cat.name.toLowerCase().replace(/\s/g, "-")}`}>
                          {cat.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={link.name} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`${
                      scrolled ? "text-foreground" : "text-white hover:bg-white/10"
                    } ${location === link.href ? "bg-white/10" : ""}`}
                    data-testid={`link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Button>
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant={scrolled ? "default" : "outline"}
              className={!scrolled ? "border-white text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm" : ""}
              data-testid="button-request-quote"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Request Quote</span>
              <span className="sm:hidden">Quote</span>
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  size="icon"
                  variant="ghost"
                  className={scrolled ? "" : "text-white hover:bg-white/10"}
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setMobileOpen(false)}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${location === link.href ? "bg-accent" : ""}`}
                        data-testid={`mobile-link-${link.name.toLowerCase()}`}
                      >
                        {link.name}
                      </Button>
                    </Link>
                  ))}
                  <div className="border-t my-2 pt-2">
                    <p className="text-sm text-muted-foreground px-4 mb-2">Categories</p>
                    {categories.map((cat) => (
                      <Link key={cat.name} href={cat.href} onClick={() => setMobileOpen(false)}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-muted-foreground"
                          data-testid={`mobile-link-${cat.name.toLowerCase().replace(/\s/g, "-")}`}
                        >
                          {cat.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
