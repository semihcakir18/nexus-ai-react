import { MessageCircle, Puzzle, Languages, Coins, Cloud, BarChart3 } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Keyword Smart Replies",
    description: "Define custom keywords and trigger automatic responses when they're detected in incoming messages.",
  },
  {
    icon: Puzzle,
    title: "Plugin System",
    description: "Enable or disable response plugins based on your needs. Full control over your automation workflow.",
  },
  {
    icon: Languages,
    title: "Multilingual AI",
    description: "AI-powered translation automatically responds in the sender's language for seamless communication.",
  },
  {
    icon: Coins,
    title: "Credit System",
    description: "Flexible credit-based usage lets you control costs and scale automation as your business grows.",
  },
  {
    icon: Cloud,
    title: "Cloud Powered",
    description: "Firebase and cloud infrastructure ensures reliability, speed, and real-time synchronization.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track message activity, keyword matches, and automation performance in real-time.",
  },
];

const KeyFeatures = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary border-2 border-border shadow-xs text-sm font-mono text-secondary-foreground mb-4">
            KEY FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Automate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for businesses that rely on WhatsApp communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent flex items-center justify-center mb-6 border-2 border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
