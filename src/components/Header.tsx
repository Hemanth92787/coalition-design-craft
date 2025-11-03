import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-card border-b border-border shadow-soft">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:555-0123" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
                <Phone className="h-4 w-4" />
                <span>(555) 012-3456</span>
              </a>
              <a href="mailto:info@coalition.com" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
                <Mail className="h-4 w-4" />
                <span>info@coalition.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Business Ave, Suite 100, City, ST 12345</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              C
            </div>
            <span className="text-2xl font-bold text-foreground">Coalition</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </nav>

          <Button className="gradient-primary border-0">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
