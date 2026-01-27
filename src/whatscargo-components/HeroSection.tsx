import { Button } from "@/components/ui/button";
import { Download, Crown } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block px-4 py-2 bg-secondary border-2 border-border shadow-sm">
              <span className="text-sm font-mono text-secondary-foreground">🚀 WhatsApp Automation Made Simple</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Automate Your{" "}
              <span className="text-primary">WhatsApp</span>{" "}
              Replies Instantly
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Detect keywords, trigger smart plugins, and auto-reply in any language. 
              Save hours every day with intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-foreground">
                <Crown className="mr-2 h-5 w-5" />
                Go Premium
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Messages Automated</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.8★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-90" />
              <img
                src={heroImage}
                alt="WhatsCargo App Preview"
                className="relative z-10 w-full max-w-lg border-4 border-border shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
