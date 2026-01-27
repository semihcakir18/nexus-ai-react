import { useState } from "react";
import { legalContent, type LegalSection } from "@/data/legal-content";
import { Globe, ArrowLeft } from "lucide-react";
import WhatsCargoFooter from "@/whatscargo-components/Footer";
import { Link } from "react-router-dom";

export function WhatsCargoTerms() {
  const [language, setLanguage] = useState<"en" | "tr">("en");
  const content = legalContent.terms[language];

  const renderSectionContent = (items: LegalSection["content"]) => {
    return items.map((item, index) => {
      switch (item.type) {
        case "paragraph":
          return (
            <p key={index} style={{ marginBottom: "var(--spacing-sm)" }}>
              {item.text}
            </p>
          );
        case "list":
          return (
            <ul key={index} style={{ listStyle: "disc", paddingLeft: "2rem", marginBottom: "var(--spacing-sm)" }}>
              {item.items.map((li, i) => (
                <li key={i} style={{ marginBottom: "0.5rem" }}>
                  {li}
                </li>
              ))}
            </ul>
          );
        case "warning":
        case "danger":
        case "highlight":
          const colors = {
            warning: { bg: "#fff3e0", border: "#ff9800" },
            danger: { bg: "#ffebee", border: "#f44336" },
            highlight: { bg: "#e3f2fd", border: "#1976d2" },
          };
          const style = colors[item.type];
          return (
            <div
              key={index}
              style={{
                background: style.bg,
                padding: "12px",
                borderLeft: `3px solid ${style.border}`,
                margin: "12px 0",
                borderRadius: "4px",
                marginBottom: "var(--spacing-sm)",
                color: "#1f2937", // Fixed text contrast
              }}
            >
              {item.text}
            </div>
          );
        case "sub-section":
          return (
            <div key={index} style={{ marginTop: "16px", marginBottom: "8px" }}>
              <h3 style={{ fontSize: "1.1em", fontWeight: "600", marginBottom: "8px", color: "var(--color-primary)" }}>
                {item.title}
              </h3>
              {item.content.map((subItem, subIndex) => {
                if (typeof subItem === "string") {
                  return (
                    <p key={subIndex} style={{ marginBottom: "var(--spacing-sm)" }}>
                      {subItem}
                    </p>
                  );
                } else if (subItem.type === "list") {
                  return (
                    <ul key={subIndex} style={{ listStyle: "disc", paddingLeft: "2rem", marginBottom: "var(--spacing-sm)" }}>
                      {subItem.items.map((li, i) => (
                        <li key={i} style={{ marginBottom: "0.5rem" }}>
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
    <>
      <div className="content" style={{ marginTop: "4rem" }}>
        <div className="content-container">
          <div className="mb-8">
            <Link to="/whatscargo" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              {language === "en" ? "Back to Home" : "Ana Sayfaya Dön"}
            </Link>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--spacing-md)" }}>
            <h1 className="page-title" style={{ marginBottom: 0 }}>
              {content.title}
            </h1>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", background: "rgba(0,0,0,0.05)", padding: "4px", borderRadius: "8px" }}>
              <Globe className="h-4 w-4" style={{ margin: "0 4px" }} />
              <button
                onClick={() => setLanguage("en")}
                style={{
                  padding: "4px 12px",
                  borderRadius: "6px",
                  border: "none",
                  background: language === "en" ? "var(--color-primary, #000)" : "transparent",
                  color: language === "en" ? "#fff" : "inherit",
                  cursor: "pointer",
                  fontWeight: language === "en" ? "600" : "normal",
                  transition: "all 0.2s",
                }}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("tr")}
                style={{
                  padding: "4px 12px",
                  borderRadius: "6px",
                  border: "none",
                  background: language === "tr" ? "var(--color-primary, #000)" : "transparent",
                  color: language === "tr" ? "#fff" : "inherit",
                  cursor: "pointer",
                  fontWeight: language === "tr" ? "600" : "normal",
                  transition: "all 0.2s",
                }}
              >
                Türkçe
              </button>
            </div>
          </div>

          <p style={{ opacity: 0.7, marginBottom: "var(--spacing-lg)", fontSize: "0.95rem" }}>
            {language === "en" ? "Last updated: " : "Son Güncelleme: "}
            {content.lastUpdated}
          </p>

          {/* Intro */}
          {content.intro && content.intro.length > 0 && (
            <div className="section">
              <div className="section-content">
                {content.intro.map((text, i) => (
                  <p key={i} style={{ marginBottom: "var(--spacing-sm)" }}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Sections */}
          {content.sections.map((section, idx) => (
            <div key={idx} className="section">
              {section.title && <h2 className="section-title">{section.title}</h2>}
              <div className="section-content">{renderSectionContent(section.content)}</div>
            </div>
          ))}
        </div>
      </div>
      <WhatsCargoFooter />
    </>
  );
}
