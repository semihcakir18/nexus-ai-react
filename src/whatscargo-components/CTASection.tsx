import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-primary mx-auto mb-8 flex items-center justify-center border-2 border-border shadow-md">
            <Zap className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Automate Your WhatsApp?
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of businesses saving hours every day with intelligent 
            automation. Download WhatsCargo now and start automating.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-7 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
              Start Automating Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Available on Android • Free to download • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
