import { useState } from "react";
import { legalContent, type LegalSection } from "@/data/legal-content";
import { Globe, ArrowLeft } from "lucide-react";
import Header from "@/whatscargo-components/Header";
import Footer from "@/whatscargo-components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function WhatsCargoTerms() {
  const [language, setLanguage] = useState<"en" | "tr">("en");
  const content = legalContent.terms[language];

  const renderSectionContent = (items: LegalSection["content"]) => {
    return items.map((item, index) => {
      switch (item.type) {
        case "paragraph":
          return (
            <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
              {item.text}
            </p>
          );
        case "list":
          return (
            <ul key={index} className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
              {item.items.map((li, i) => (
                <li key={i}>
                  {li}
                </li>
              ))}
            </ul>
          );
        case "warning":
        case "danger":
        case "highlight":
          const styles = {
            warning: "bg-orange-50 border-orange-500 text-orange-900",
            danger: "bg-red-50 border-red-500 text-red-900",
            highlight: "bg-blue-50 border-blue-500 text-blue-900",
          };
          return (
            <div
              key={index}
              className={`p-4 border-l-4 rounded mb-4 text-sm font-medium ${styles[item.type]}`}
            >
              {item.text}
            </div>
          );
        case "sub-section":
          return (
            <div key={index} className="mt-6 mb-3">
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              {item.content.map((subItem, subIndex) => {
                if (typeof subItem === "string") {
                  return (
                    <p key={subIndex} className="mb-4 text-muted-foreground leading-relaxed">
                      {subItem}
                    </p>
                  );
                } else if (subItem.type === "list") {
                  return (
                    <ul key={subIndex} className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                      {subItem.items.map((li, i) => (
                        <li key={i}>
                          {li}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Navigation & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <Link to="/whatscargo">
              <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all text-green-600 hover:text-green-700 hover:bg-green-50">
                <ArrowLeft className="h-4 w-4" />
                {language === "en" ? "Back to Home" : "Ana Sayfaya Dön"}
              </Button>
            </Link>

            <div className="flex items-center gap-1 bg-muted p-1 rounded-lg self-start sm:self-auto">
              <Globe className="h-4 w-4 mx-2 text-muted-foreground" />
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === "en" 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("tr")}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === "tr" 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Türkçe
              </button>
            </div>
          </div>

          {/* Header Section */}
          <div className="mb-10 pb-8 border-b border-border">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground">
              {content.title}
            </h1>
            <p className="text-muted-foreground">
              {language === "en" ? "Last updated: " : "Son Güncelleme: "}
              {content.lastUpdated}
            </p>
          </div>

          {/* Intro */}
          {content.intro && content.intro.length > 0 && (
            <div className="mb-8">
              {content.intro.map((text, i) => (
                <p key={i} className="mb-4 text-lg text-muted-foreground leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          )}

          {/* Sections */}
          <div className="space-y-10">
            {content.sections.map((section, idx) => (
              <section key={idx}>
                {section.title && (
                  <h2 className="text-2xl font-bold mb-4 text-foreground tracking-tight">
                    {section.title}
                  </h2>
                )}
                {renderSectionContent(section.content)}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
