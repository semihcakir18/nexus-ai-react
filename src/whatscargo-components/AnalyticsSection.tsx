import { Eye, Send, Target, Activity } from "lucide-react";

const stats = [
  {
    icon: Eye,
    value: "1,234",
    label: "Messages Detected",
    change: "+12%",
  },
  {
    icon: Send,
    value: "856",
    label: "Auto-Replies Sent",
    change: "+8%",
  },
  {
    icon: Target,
    value: "423",
    label: "Keywords Matched",
    change: "+15%",
  },
  {
    icon: Activity,
    value: "98.5%",
    label: "Success Rate",
    change: "+2%",
  },
];

const AnalyticsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-background border-2 border-border shadow-xs text-sm font-mono text-foreground mb-4">
            ANALYTICS & CONTROL
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Track Everything in Real-Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your automation performance with detailed analytics and insights.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-accent flex items-center justify-center border-2 border-border">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-1">
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Activity Preview */}
        <div className="bg-card border-2 border-border p-8 shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-6">Recent Activity</h3>
          
          <div className="space-y-4">
            {[
              { time: "2 min ago", action: "Auto-reply sent", keyword: "price", language: "Spanish" },
              { time: "5 min ago", action: "Keyword detected", keyword: "shipping", language: "English" },
              { time: "8 min ago", action: "Auto-reply sent", keyword: "availability", language: "Portuguese" },
              { time: "12 min ago", action: "Plugin triggered", keyword: "order", language: "Arabic" },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-secondary border-2 border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div>
                    <span className="font-medium text-foreground">{activity.action}</span>
                    <span className="text-muted-foreground"> • Keyword: </span>
                    <span className="font-mono text-primary">"{activity.keyword}"</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{activity.language}</span>
                  <span className="text-sm font-mono text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
