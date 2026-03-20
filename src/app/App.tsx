import { useState, useRef, useCallback } from "react";
import * as htmlToImage from "html-to-image";
import { IDCard, IDCardBack } from "./components/IDCard";
import srujanLogo from "../../logo/Screenshot 2026-03-20 at 10-39-21 (104) WhatsApp.png";
import apLogo from "../../logo/WhatsApp Image 2026-03-20 at 10.35.58 AM.jpeg";

const cards = [
  {
    role: "Coordinators" as const,
    organization: "College Name",
    eventDate: "25 March 2026",
  },
  {
    role: "Organiser" as const,
    organization: "College Name",
    eventDate: "25 March 2026",
  },
  {
    role: "delegate" as const,
    organization: "College Name",
    eventDate: "25 March 2026",
  },
  {
    role: "Guest" as const,
    organization: "College Name",
    eventDate: "25 March 2026",
  },
];

const roleAccents: Record<string, string> = {
  Coordinators: "#16a34a",
  Organiser: "#b91c1c",
  delegate: "#1B4B8C",
  Guest: "#b45309",
};

const roleLightBg: Record<string, string> = {
  Coordinators: "#dcfce7",
  Organiser: "#fee2e2",
  delegate: "#dbeafe",
  Guest: "#fef3c7",
};

const filters = ["All", "Coordinators", "Organiser", "delegate", "Guest"];

const DownloadableCard = ({ card }: { card: any }) => {
  const cardRefFront = useRef<HTMLDivElement>(null);
  const cardRefBack = useRef<HTMLDivElement>(null);

  const downloadImage = useCallback((ref: React.RefObject<HTMLDivElement | null>, side: string) => {
    if (ref.current === null) return;
    
    // In Vite dev, cacheBust can break asset URLs. 
    // We increase scale/pixelRatio for high quality print.
    htmlToImage.toPng(ref.current, { 
      pixelRatio: 4, // Higher ratio for high-quality print
      cacheBust: false,
      // Pass the fontEmbedCSS directly to bypass the buggy html-to-image CSS parser 
      // which throws "can't access property trim, font is undefined"
      fontEmbedCSS: "",
      style: {
        transform: "scale(1)",
        transformOrigin: "top left",
      }
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `Srujana-ID-${card.role}-${side}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error(`Failed to download ${side} image`, err);
        alert(`Failed to download ${side} image. Check console for details.`);
      });
  }, [card]);

  return (
    <div style={{
      display: "flex", flexDirection: "column" as const,
      alignItems: "center", gap: 14,
      background: "rgba(0,0,0,0.2)", padding: 20, borderRadius: 24, border: "1px solid rgba(255,255,255,0.05)"
    }}>
      {/* Role color pill above card */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        background: `${roleAccents[card.role]}18`,
        border: `1px solid ${roleAccents[card.role]}44`,
        borderRadius: 20, padding: "4px 14px",
      }}>
        <div style={{
          width: 7, height: 7, borderRadius: "50%",
          background: roleAccents[card.role],
          boxShadow: `0 0 8px ${roleAccents[card.role]}`,
        }} />
        <span style={{
          color: roleAccents[card.role], fontSize: 11,
          fontWeight: 800, letterSpacing: "0.16em",
        }}>{card.role.toUpperCase()}</span>
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <span style={{ color: "#94a3b8", fontSize: 10, letterSpacing: "0.1em", fontWeight: 700 }}>FRONT</span>
          <div ref={cardRefFront}>
            <IDCard {...card} />
          </div>
          <button
            onClick={() => downloadImage(cardRefFront, 'front')}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              background: `${roleAccents[card.role]}22`,
              border: `1px solid ${roleAccents[card.role]}44`,
              color: roleAccents[card.role],
              borderRadius: 8, padding: "0 14px",
              height: "32px",
              cursor: "pointer",
              fontWeight: 700, fontSize: 10, letterSpacing: "0.05em",
              transition: "all 0.2s"
            }}
            onMouseOver={(e) => e.currentTarget.style.background = `${roleAccents[card.role]}44`}
            onMouseOut={(e) => e.currentTarget.style.background = `${roleAccents[card.role]}22`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            FRONT
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <span style={{ color: "#94a3b8", fontSize: 10, letterSpacing: "0.1em", fontWeight: 700 }}>BACK</span>
          <div ref={cardRefBack}>
            <IDCardBack {...card} />
          </div>
          <button
            onClick={() => downloadImage(cardRefBack, 'back')}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              background: `${roleAccents[card.role]}22`,
              border: `1px solid ${roleAccents[card.role]}44`,
              color: roleAccents[card.role],
              borderRadius: 8, padding: "0 14px",
              height: "32px",
              cursor: "pointer",
              fontWeight: 700, fontSize: 10, letterSpacing: "0.05em",
              transition: "all 0.2s"
            }}
            onMouseOver={(e) => e.currentTarget.style.background = `${roleAccents[card.role]}44`}
            onMouseOut={(e) => e.currentTarget.style.background = `${roleAccents[card.role]}22`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? cards : cards.filter((c) => c.role === activeFilter);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0f1b35 0%, #1a2e52 40%, #0d1e3a 100%)",
        fontFamily: "'Inter', 'Noto Sans Telugu', sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(0,180,204,0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(232,144,42,0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(27,75,140,0.05) 0%, transparent 70%)`,
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* TOP HEADER */}
      <header style={{
        position: "relative", zIndex: 1,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(10px)",
      }}>
        {/* AP State Tricolor bar */}
        <div style={{ display: "flex", height: 4 }}>
          <div style={{ flex: 1, background: "#E8902A" }} />
          <div style={{ flex: 1, background: "#ffffff" }} />
          <div style={{ flex: 1, background: "#00B4CC" }} />
        </div>

        <div style={{
          maxWidth: 1300,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap" as const,
        }}>
          {/* Left: AP Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src={apLogo} alt="AP Saviṣkār" style={{ width: 48, height: 48, objectFit: "contain" }} />
            <div>
              <div style={{ color: "#00B4CC", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}>
                GOVERNMENT OF ANDHRA PRADESH
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: "0.06em" }}>
                सविष्कार · State Innovation Initiative
              </div>
            </div>
          </div>

          {/* Center: Event title */}
          <div style={{ textAlign: "center" as const, flex: 1, minWidth: 200 }}>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9.5, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, marginBottom: 2 }}>
              NATIONAL LEVEL HACKATHON
            </div>
            <div style={{
              fontSize: "clamp(22px, 4vw, 36px)",
              fontWeight: 900,
              letterSpacing: "0.1em",
              background: "linear-gradient(135deg, #E8902A, #fbbf24, #E8902A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
              fontFamily: "'Montserrat', sans-serif",
            }}>SRUJANA</div>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 9, letterSpacing: "0.15em", marginTop: 2 }}>2026</div>
          </div>

          {/* Right: Srujana logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ textAlign: "right" as const }}>
              <div style={{ color: "#E8902A", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em" }}>
                SRUJANA
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, letterSpacing: "0.04em" }}>
                ID Card Design System
              </div>
            </div>
            <img src={srujanLogo} alt="Srujana" style={{ width: 48, height: 48, objectFit: "contain", borderRadius: 8 }} />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ position: "relative", zIndex: 1, padding: "40px 24px 60px" }}>
        {/* Subtitle */}
        <div style={{ textAlign: "center" as const, marginBottom: 36 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 30,
            padding: "6px 18px",
            marginBottom: 16,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8902A", boxShadow: "0 0 6px #E8902A" }} />
            <span style={{ color: "#94a3b8", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em" }}>
              4-ROLE ID CARD DESIGN SET · PRINT READY
            </span>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00B4CC", boxShadow: "0 0 6px #00B4CC" }} />
          </div>

          <h2 style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: 400,
            color: "#64748b",
            margin: 0,
            letterSpacing: "0.04em",
          }}>
            Andhra Pradesh State Hackathon · Official Badge System
          </h2>
        </div>

        {/* Role Filter Tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap" as const,
          justifyContent: "center", gap: 8, marginBottom: 40,
        }}>
          {filters.map((f) => {
            const isActive = activeFilter === f;
            const color = f === "All" ? "#00B4CC" : roleAccents[f];
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: "8px 22px",
                  borderRadius: 30,
                  border: `1.5px solid ${isActive ? color : "rgba(255,255,255,0.12)"}`,
                  background: isActive ? color : "rgba(255,255,255,0.04)",
                  color: isActive ? "#ffffff" : "#64748b",
                  fontSize: 12.5,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.08em",
                  boxShadow: isActive ? `0 4px 20px ${color}55` : "none",
                  textTransform: "uppercase" as const,
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "flex",
          flexWrap: "wrap" as const,
          justifyContent: "center",
          gap: 40,
          maxWidth: 1400,
          margin: "0 auto",
        }}>
          {filtered.map((card) => (
            <DownloadableCard key={card.role} card={card} />
          ))}
        </div>

        {/* Legend / Color Code Guide */}
        <div style={{
          maxWidth: 720, margin: "56px auto 0",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "24px 28px",
        }}>
          {/* AP colors note */}
          <div style={{
            textAlign: "center" as const,
            fontSize: 10.5, fontWeight: 600, color: "#475569",
            letterSpacing: "0.14em", textTransform: "uppercase" as const,
            marginBottom: 18,
          }}>Color Coding System · Srujana 2026</div>

          <div style={{
            display: "flex", flexWrap: "wrap" as const,
            justifyContent: "center", gap: 24,
          }}>
            {Object.entries(roleAccents).map(([role, color]) => (
              <div key={role} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 28, height: 7, borderRadius: 4,
                  background: color,
                  boxShadow: `0 2px 8px ${color}88`,
                }} />
                <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: 600 }}>{role}</span>
              </div>
            ))}
          </div>

          <div style={{
            display: "flex", justifyContent: "center", gap: 0,
            marginTop: 20, borderRadius: 6, overflow: "hidden",
            height: 4,
          }}>
            <div style={{ flex: 1, background: "#E8902A" }} />
            <div style={{ flex: 1, background: "#ffffff" }} />
            <div style={{ flex: 1, background: "#00B4CC" }} />
          </div>
          <div style={{
            textAlign: "center" as const, marginTop: 8,
            fontSize: 10, color: "#334155", letterSpacing: "0.1em",
          }}>
            Andhra Pradesh State Colors
          </div>
        </div>

        {/* Footer info */}
        <div style={{
          textAlign: "center" as const, marginTop: 40,
          color: "#1e3a5f", fontSize: 11.5, letterSpacing: "0.08em",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" as const }}>
            <span>📐 300 × Badge Format</span>
            <span style={{ color: "#1e2d40" }}>·</span>
            <span>🖨️ Print-Ready Layout</span>
            <span style={{ color: "#1e2d40" }}>·</span>
            <span>🔒 Name via Sticker</span>
            <span style={{ color: "#1e2d40" }}>·</span>
            <span>📍 Andhra Pradesh</span>
          </div>
        </div>
      </main>
    </div>
  );
}
