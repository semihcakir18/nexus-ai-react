import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "./whatscargo_logo.jpeg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/whatscargo" className="flex items-center gap-3">
            <img src={logo} alt="WhatsCargo" className="w-9 h-9 object-contain rounded-md" />
            <span className="text-xl font-bold text-foreground">WhatsCargo</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="shadow-2xs hover:shadow-xs transition-all text-foreground">
              Go Premium
            </Button>
            <Button size="sm" className="shadow-xs hover:shadow-sm transition-all">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-border">
            <nav className="flex flex-col gap-4">
              <a 
                href="#how-it-works" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t-2 border-border">
                <Button variant="outline" className="w-full shadow-2xs text-foreground">
                  Go Premium
                </Button>
                <Button className="w-full shadow-xs">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
