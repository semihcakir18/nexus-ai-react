import { MessageSquare, Search, Zap, Globe } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Detect Messages",
    description: "WhatsCargo monitors incoming WhatsApp messages in real-time, ready to process any conversation.",
  },
  {
    icon: Search,
    step: "02",
    title: "Match Keywords",
    description: "Our smart system scans messages for your predefined keywords to identify relevant conversations.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Trigger Plugins",
    description: "Active plugins automatically execute based on matched keywords, handling responses instantly.",
  },
  {
    icon: Globe,
    step: "04",
    title: "Auto-Reply",
    description: "AI-powered translation sends replies in the user's preferred language, ensuring clear communication.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-background border-2 border-border shadow-xs text-sm font-mono text-foreground mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Automation in 4 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From message detection to intelligent replies, WhatsCargo handles everything automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rotate-45" />
                </div>
              )}

              <div className="relative bg-card border-2 border-border p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-2 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold text-sm border-2 border-border shadow-xs">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6 border-2 border-border">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
