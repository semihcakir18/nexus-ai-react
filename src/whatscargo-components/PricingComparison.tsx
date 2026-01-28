import { Button } from "@/components/ui/button";
import { Check, X, Crown, Download } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Get started with basic automation",
    price: "0",
    icon: Download,
    featured: false,
    features: [
      { text: "5 Credits", included: true },
      { text: "1 Active Plugin", included: true },
      { text: "Basic Keyword Detection", included: true },
      { text: "Limited Auto-Replies", included: true },
      { text: "Multilingual AI", included: false },
      { text: "Priority Support", included: false },
      { text: "Advanced Analytics", included: false },
    ],
    cta: "Download Free",
  },
  {
    name: "Premium",
    description: "Full power for serious businesses",
    price: "2.50",
    icon: Crown,
    featured: true,
    features: [
      { text: "400 Credits", included: true },
      { text: "2 Active Plugins", included: true },
      { text: "Advanced Keyword Detection", included: true },
      { text: "Unlimited Auto-Replies", included: true },
      { text: "Multilingual AI Translation", included: true },
      { text: "Priority Support", included: true },
      { text: "Full Analytics Dashboard", included: true },
    ],
    cta: "Go Premium",
  },
];

const PricingComparison = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-background border-2 border-border shadow-xs text-sm font-mono text-foreground mb-4">
            PRICING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Free vs Premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs. Upgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border-2 p-8 transition-all hover:-translate-y-2 ${
                plan.featured
                  ? "border-primary shadow-lg"
                  : "border-border shadow-sm hover:shadow-md"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold border-2 border-border shadow-xs">
                  RECOMMENDED
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-border ${plan.featured ? "bg-primary text-primary-foreground" : "bg-accent"}`}>
                  <plan.icon className={`w-8 h-8 ${plan.featured ? "" : "text-primary"}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-6 h-6 bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-muted flex items-center justify-center">
                        <X className="w-4 h-4 text-muted-foreground" />
                      </div>
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full py-6 text-lg shadow-sm hover:shadow-md transition-all ${
                  plan.featured ? "" : "text-foreground"
                }`}
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
