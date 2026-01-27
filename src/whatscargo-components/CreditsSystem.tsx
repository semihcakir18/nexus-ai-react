import { Play, Coins, Clock } from "lucide-react";

const CreditsSystem = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-secondary border-2 border-border shadow-xs text-sm font-mono text-secondary-foreground mb-6">
              CREDITS & ADS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Earn Credits by Watching Ads
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Not ready for Premium? No problem! Earn free credits by watching short ads 
              and keep automating your WhatsApp replies.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center border-2 border-border flex-shrink-0">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Watch Short Ads</h3>
                  <p className="text-muted-foreground">Quick video ads that take just seconds to complete.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center border-2 border-border flex-shrink-0">
                  <Coins className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Earn 2 Credits Per Ad</h3>
                  <p className="text-muted-foreground">Each completed ad adds 2 credits to your account instantly.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center border-2 border-border flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Max 3 Ads Every 12 Hours</h3>
                  <p className="text-muted-foreground">Fair limits ensure a balanced experience for all users.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-card border-2 border-border p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-primary mb-2">+6</div>
                <div className="text-lg text-muted-foreground">Credits every 12 hours</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary border-2 border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                      <Play className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">Ad #1</span>
                  </div>
                  <span className="font-mono text-primary font-bold">+2 credits</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary border-2 border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                      <Play className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">Ad #2</span>
                  </div>
                  <span className="font-mono text-primary font-bold">+2 credits</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary border-2 border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                      <Play className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">Ad #3</span>
                  </div>
                  <span className="font-mono text-primary font-bold">+2 credits</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/50 border-2 border-border text-center">
                <span className="text-sm text-muted-foreground">Next ads available in: </span>
                <span className="font-mono font-bold text-foreground">12:00:00</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditsSystem;
