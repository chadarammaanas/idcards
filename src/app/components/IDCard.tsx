import React from "react";
import { 
  ClipboardCheck, Users, Headphones, GitMerge, Megaphone, Activity, 
  ListTodo, Network, Share2, Presentation, Lightbulb, Hexagon, 
  Award, Mic, Crown, Sparkles, MapPin, CalendarDays, Tent, Flag, 
  Briefcase, HeartPulse, Zap, Map
} from "lucide-react";
import srujanLogo from "../../../logo/Screenshot 2026-03-20 at 10-39-21 (104) WhatsApp.png";
import apLogo from "../../../logo/WhatsApp Image 2026-03-20 at 10.35.58 AM.jpeg";

export interface IDCardProps {
  role: "Coordinators" | "Organiser" | "delegate" | "Guest";
  organization: string;
  idNumber: string;
  eventDate: string;
}

const roleConfig = {
  Coordinators: {
    accent: "#16a34a",
    accentLight: "#dcfce7",
    accentMid: "#4ade80",
    accentDark: "#14532d",
    label: "COORDINATOR",
    labelTelugu: "సమన్వయకర్త",
    gradient: "linear-gradient(135deg, #15803d 0%, #16a34a 50%, #22c55e 100%)",
  },
  Organiser: {
    accent: "#b91c1c",
    accentLight: "#fee2e2",
    accentMid: "#f87171",
    accentDark: "#7f1d1d",
    label: "ORGANISER",
    labelTelugu: "నిర్వాహకుడు",
    gradient: "linear-gradient(135deg, #991b1b 0%, #b91c1c 50%, #dc2626 100%)",
  },
  delegate: {
    accent: "#1B4B8C",
    accentLight: "#dbeafe",
    accentMid: "#60a5fa",
    accentDark: "#1e3a8a",
    label: "DELEGATE",
    labelTelugu: "ప్రతినిధి",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #1B4B8C 50%, #2563eb 100%)",
  },
  Guest: {
    accent: "#b45309",
    accentLight: "#fef3c7",
    accentMid: "#fbbf24",
    accentDark: "#78350f",
    label: "GUEST",
    labelTelugu: "అతిథి",
    gradient: "linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%)",
  },
};

const AP_TEAL = "#00B4CC";
const AP_SAFFRON = "#E8902A";
const AP_NAVY = "#1B4B8C";

// ── FLUID MESH & ILLUSTRATION BACKGROUND ──
const RichBackground = ({ role, color, lightColor }: { role: string; color: string; lightColor: string }) => {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* Dynamic Mesh Gradients */}
      <div style={{
        position: "absolute", top: "-10%", left: "-20%", width: "70%", height: "50%",
        background: `radial-gradient(ellipse at center, ${lightColor} 0%, transparent 70%)`,
        opacity: 0.8, filter: "blur(30px)", mixBlendMode: "multiply"
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", right: "-20%", width: "80%", height: "60%",
        background: `radial-gradient(circle at center, ${color}33 0%, transparent 60%)`,
        opacity: 0.9, filter: "blur(40px)"
      }} />
      <div style={{
        position: "absolute", top: "30%", left: "40%", width: "60%", height: "60%",
        background: `radial-gradient(circle at center, ${AP_TEAL}15 0%, transparent 60%)`,
        opacity: 0.6, filter: "blur(40px)"
      }} />

      {/* Abstract Waves/Shapes based on role */}
      <svg width="100%" height="100%" viewBox="0 0 300 480" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0 }}>
        {role === "Coordinators" && (
          <>
            <path d="M0,480 L0,350 Q75,300 150,380 T300,320 L300,480 Z" fill={`${color}1A`} />
            <path d="M0,480 L0,400 Q100,370 200,430 T300,390 L300,480 Z" fill={`${color}2A`} />
            <circle cx="250" cy="150" r="80" fill="none" stroke={`${color}22`} strokeWidth="40" opacity="0.5" />
            <circle cx="50" cy="350" r="40" fill="none" stroke={`${AP_TEAL}22`} strokeWidth="15" />
          </>
        )}
        {role === "Organiser" && (
          <>
            <polygon points="0,480 0,350 150,420 300,300 300,480" fill={`${color}1A`} />
            <polygon points="0,480 0,420 180,480" fill={`${color}33`} />
            <polygon points="300,480 300,380 200,480" fill={`${AP_SAFFRON}22`} />
            {/* Action slashes */}
            <path d="M-50,200 L150,0 M-50,230 L180,0 M200,480 L400,280" stroke={`${color}15`} strokeWidth="20" opacity="0.6" />
          </>
        )}
        {role === "delegate" && (
          <>
            <path d="M0,480 L0,300 Q150,450 300,250 L300,480 Z" fill={`${color}1A`} />
            {/* Tech grid / circuits */}
            <path d="M0,100 L100,100 L150,50 M100,100 L100,200 L50,250 M300,300 L250,300 L200,350 L200,480" fill="none" stroke={`${color}22`} strokeWidth="3" />
            <rect x="140" y="40" width="20" height="20" rx="4" fill={`${color}22`} />
            <rect x="40" y="240" width="20" height="20" rx="4" fill={`${color}22`} />
            <circle cx="250" cy="300" r="10" fill={`${AP_TEAL}33`} />
          </>
        )}
        {role === "Guest" && (
          <>
            {/* Elegant overlapping circles */}
            <circle cx="0" cy="480" r="200" fill={`${color}11`} />
            <circle cx="0" cy="480" r="140" fill={`${color}1A`} />
            <circle cx="300" cy="0" r="150" fill={`${color}0A`} />
            <circle cx="300" cy="0" r="100" fill={`${AP_SAFFRON}15`} />
            <path d="M0,480 Q150,350 300,480 Z" fill={`${color}22`} />
          </>
        )}
      </svg>
    </div>
  );
};

// ── DECORATIVE BACKGROUNDS BY ROLE ──
const RoleBackground = ({ role, color, side }: { role: string; color: string; side: "front" | "back" }) => {
  const isFront = side === "front";
  const opac = isFront ? 0.25 : 0.15; // Increased visibility of icons
  
  if (role === "Coordinators") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(240px, ${isFront ? 320 : 100}px)`, display: 'block', position: 'absolute' }}>
          <ClipboardCheck size={100} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: `translate(-10px, ${isFront ? 260 : 350}px)`, display: 'block', position: 'absolute' }}>
          <Users size={140} color={color} strokeWidth={1} />
        </g>
        <g style={{ transform: `translate(150px, ${isFront ? 50 : 380}px)`, display: 'block', position: 'absolute' }}>
          <Zap size={80} color={color} strokeWidth={1.5} />
        </g>
      </div>
    );
  }

  if (role === "Organiser") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(210px, ${isFront ? 330 : 80}px)`, display: 'block', position: 'absolute' }}>
          <Megaphone size={110} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: `translate(-30px, ${isFront ? 280 : 370}px)`, display: 'block', position: 'absolute' }}>
          <Tent size={140} color={color} strokeWidth={1} />
        </g>
        <g style={{ transform: `translate(160px, ${isFront ? 80 : 380}px)`, display: 'block', position: 'absolute' }}>
          <Activity size={100} color={color} strokeWidth={1.5} />
        </g>
      </div>
    );
  }

  if (role === "delegate") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(210px, ${isFront ? 300 : 100}px)`, display: 'block', position: 'absolute' }}>
          <Hexagon size={120} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: `translate(-10px, ${isFront ? 260 : 360}px)`, display: 'block', position: 'absolute' }}>
          <Network size={130} color={color} strokeWidth={1} />
        </g>
        <g style={{ transform: `translate(160px, ${isFront ? 280 : 380}px)`, display: 'block', position: 'absolute' }}>
          <Lightbulb size={90} color={color} strokeWidth={1.5} />
        </g>
      </div>
    );
  }

  if (role === "Guest") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(210px, ${isFront ? 320 : 60}px)`, display: 'block', position: 'absolute' }}>
          <Crown size={100} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: `translate(10px, ${isFront ? 280 : 360}px)`, display: 'block', position: 'absolute' }}>
          <Award size={120} color={color} strokeWidth={1} />
        </g>
        <g style={{ transform: `translate(130px, ${isFront ? 50 : 380}px)`, display: 'block', position: 'absolute' }}>
          <Sparkles size={100} color={color} strokeWidth={1.5} />
        </g>
      </div>
    );
  }
  return null;
};

// ── REUSABLE ASSETS ──
const DiamondPattern = ({ color }: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="20" viewBox="0 0 300 20" preserveAspectRatio="none" style={{ display: "block" }}>
    <defs>
      <pattern id={`diamond-${color.replace("#", "")}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <polygon points="10,2 18,10 10,18 2,10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="10" cy="10" r="1.5" fill="rgba(255,255,255,0.3)" />
      </pattern>
    </defs>
    <rect width="300" height="20" fill={`url(#diamond-${color.replace("#", "")})`} />
  </svg>
);

const QRCode = ({ accent }: { accent: string }) => {
  const cells = [
    [1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0],
    [0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1],
    [1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0],
    [0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0],
    [1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1],
    [0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0],
    [1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0],
    [1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0],
    [1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0],
    [1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1],
  ];
  const size = 21;
  const cell = 3.5;
  const total = size * cell;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={total} height={total} viewBox={`0 0 ${total} ${total}`} style={{ display: "block" }}>
      {cells.map((row, y) => row.map((v, x) => v ? <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell + 0.2} height={cell + 0.2} fill={accent} /> : null))}
    </svg>
  );
};

// ── FRONT OF CARD ──
export const IDCard: React.FC<IDCardProps> = ({ role, idNumber }) => {
  const cfg = roleConfig[role];

  return (
    <div
      style={{
        width: 300, height: 480, background: "#fafafa", borderRadius: 16, // Change from plain white to slightly tinted off-white base
        boxShadow: "0 24px 64px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.1)",
        overflow: "hidden", display: "flex", flexDirection: "column" as const,
        fontFamily: 'system-ui, -apple-system, sans-serif', position: "relative" as const,
      }}
    >
      <RichBackground role={role} color={cfg.accent} lightColor={cfg.accentLight} />
      
      {/* Texture Overlay */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none", zIndex: 0, mixBlendMode: "overlay",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      {/* TOP HEADER */}
      <div style={{ background: cfg.gradient, position: "relative", zIndex: 3, paddingTop: 12 }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.4 }}>
          <DiamondPattern color={cfg.accent} />
        </div>
        {/* Lanyard punch hole */}
        <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
          <div style={{ width: 44, height: 12, borderRadius: 20, background: "rgba(255,255,255,0.9)", border: "2px solid rgba(255,255,255,0.5)", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)" }} />
        </div>
        <div style={{ textAlign: "center", padding: "10px 16px 14px", position: "relative", zIndex: 2 }}>
          <div style={{ color: "#ffffff", fontSize: 20, fontWeight: 900, letterSpacing: "0.25em", textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
            {cfg.label}
          </div>
          <div style={{ color: "rgba(255,255,255,0.9)", fontSize: 11, fontWeight: 500, marginTop: 2, letterSpacing: "0.05em" }}>
            {cfg.labelTelugu}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", height: 5, zIndex: 3, position: "relative", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <div style={{ flex: 1, background: AP_SAFFRON }} />
        <div style={{ flex: 1, background: "#ffffff" }} />
        <div style={{ flex: 1, background: AP_TEAL }} />
      </div>

      {/* BODY */}
      <div style={{ flex: 1, padding: "12px 18px", display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>
        <RoleBackground role={role} color={cfg.accent} side="front" />

        {/* Logos & Event Theme */}
        <div style={{ 
            background: "rgba(255,255,255,0.6)", padding: "6px", borderRadius: 12, backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2, marginBottom: 8 
        }}>
          <div style={{ padding: 2, background: "#fff", borderRadius: 8, boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
            <img src={apLogo} alt="AP Saviskar" style={{ width: 38, height: 38, objectFit: "contain", mixBlendMode: "multiply" }} />
          </div>
          <div style={{ flex: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: 7, fontWeight: 800, color: "#475569", letterSpacing: "0.15em" }}>NATIONAL LEVEL</div>
            <div style={{ fontSize: 7, fontWeight: 800, color: "#475569", letterSpacing: "0.15em", marginBottom: 2 }}>TECH FEST</div>
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: AP_SAFFRON }}/>
              <div style={{ width: 12, height: 1.5, background: "#cbd5e1" }}/>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: AP_TEAL }}/>
            </div>
          </div>
          <div style={{ padding: 2, background: "#fff", borderRadius: 8, boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
            <img src={srujanLogo} alt="Srujana" style={{ width: 38, height: 38, objectFit: "contain" }} />
          </div>
        </div>

        {/* Huge Title */}
        <div style={{ textAlign: "center", marginBottom: 10, position: "relative", zIndex: 2 }}>
          <div style={{ 
            fontSize: 32, fontWeight: 900, letterSpacing: "0.08em", 
            background: `linear-gradient(135deg, ${AP_NAVY} 0%, ${cfg.accentDark} 100%)`, 
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", 
            lineHeight: 1, fontFamily: 'system-ui, -apple-system, sans-serif',
            
          }}>
            SRUJANA
          </div>
          <div style={{ fontSize: 8.5, fontWeight: 800, color: "#1e293b", letterSpacing: "0.12em", marginTop: 4, display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}>
            <span style={{ background: "rgba(255,255,255,0.7)", padding: "2px 6px", borderRadius: 4 }}>INNOVATION</span>
            <span style={{ color: AP_SAFFRON, fontWeight: 900 }}>→</span>
            <span style={{ background: "rgba(255,255,255,0.7)", padding: "2px 6px", borderRadius: 4 }}>IMPACT</span>
            <span style={{ color: AP_TEAL, fontWeight: 900 }}>→</span>
            <span style={{ background: "rgba(255,255,255,0.7)", padding: "2px 6px", borderRadius: 4 }}>NATION</span>
          </div>
        </div>

        {/* Info Strip */}
        <div style={{
          background: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,1)", borderRadius: 12, padding: "6px 10px",
          display: "flex", alignItems: "center", gap: 6, boxShadow: "0 4px 12px rgba(0,0,0,0.06)", position: "relative", zIndex: 3, 
          backdropFilter: "blur(12px)", marginBottom: 8
        }}>
          <div style={{ background: `linear-gradient(135deg, ${AP_NAVY}, ${cfg.accentDark})`, borderRadius: 8, padding: "5px 10px", color: "white", textAlign: "center", boxShadow: `0 4px 8px ${cfg.accent}40` }}>
            <div style={{ fontSize: 6, fontWeight: 700, opacity: 0.9, letterSpacing: "0.1em" }}>DATE</div>
            <div style={{ fontSize: 8, fontWeight: 800, whiteSpace: "nowrap" }}>3–5 Apr</div>
          </div>
          <div style={{ width: 1, height: 24, background: "rgba(0,0,0,0.1)" }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 7, fontWeight: 800, color: AP_SAFFRON, letterSpacing: "0.1em" }}>VENUE</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>SVPEC, Visakhapatnam</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, background: `${AP_TEAL}15`, borderRadius: "50%" }}>
            <MapPin size={12} color={AP_TEAL} strokeWidth={2.5}/>
          </div>
        </div>

        {/* Name & College Area */}
        <div style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ 
            background: "rgba(255,255,255,0.9)", borderRadius: 12, padding: "18px 14px", 
            border: "1px solid rgba(255,255,255,1)", boxShadow: "0 8px 24px rgba(0,0,0,0.06)", backdropFilter: "blur(12px)"
          }}>
            <div style={{ borderBottom: `2px solid ${cfg.accentLight}`, paddingBottom: 6, marginBottom: 8, display: "flex" }}>
              <span style={{ fontSize: 8, fontWeight: 800, color: cfg.accentDark, width: 60, alignSelf:"flex-end" }}>NAME</span>
              <span style={{ flex: 1, height:14 }}></span>
            </div>
            <div style={{ borderBottom: `2px solid ${cfg.accentLight}`, paddingBottom: 6, display: "flex" }}>
              <span style={{ fontSize: 8, fontWeight: 800, color: cfg.accentDark, width: 60, alignSelf:"flex-end" }}>COLLEGE</span>
              <span style={{ flex: 1, height:14 }}></span>
            </div>
          </div>
        </div>

        {/* Website Line */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8, position: "relative", zIndex: 3, justifyContent: "center", background: "rgba(248, 250, 252, 0.9)", padding: "8px", borderRadius: 10, border: "1px solid rgba(255,255,255,1)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", alignItems:"center", justifyContent: "center", background: AP_NAVY, padding: "3px", borderRadius: 4 }}>
            <Map size={10} color="#fff" />
          </div>
          <span style={{ fontSize: 9.5, fontWeight: 800, color: AP_NAVY, letterSpacing: "0.1em" }}>SRUJANA2026.IN</span>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: cfg.accent, boxShadow: `0 0 6px ${cfg.accent}` }} />
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div style={{ height: 12, background: cfg.gradient, position: "relative", zIndex: 3 }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
          <DiamondPattern color={cfg.accent} />
        </div>
      </div>
    </div>
  );
};

// ── BACK OF CARD ──
export const IDCardBack: React.FC<IDCardProps> = ({ role, idNumber }) => {
  const cfg = roleConfig[role];

  return (
    <div
      style={{
        width: 300, height: 480, background: "#fafafa", borderRadius: 16,
        boxShadow: "0 24px 64px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.1)",
        overflow: "hidden", display: "flex", flexDirection: "column" as const,
        fontFamily: 'system-ui, -apple-system, sans-serif', position: "relative" as const,
      }}
    >
      <RichBackground role={role} color={cfg.accent} lightColor={cfg.accentLight} />
      
      {/* Texture Overlay */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none", zIndex: 0, mixBlendMode: "overlay",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
      
      {/* Lanyard punch hole match on back (visually helpful) */}
      <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 3, paddingTop: 12, height: 24 }}>
        <div style={{ width: 44, height: 12, borderRadius: 20, background: "rgba(255,255,255,0.7)", border: "1px solid rgba(0,0,0,0.1)", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }} />
      </div>

      <div style={{ flex: 1, padding: "10px 18px 14px", display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>
        <RoleBackground role={role} color={cfg.accent} side="back" />
        
        {/* Info Box */}
        <div style={{ 
          textAlign: "center", position: "relative", zIndex: 3, 
          background: "rgba(255,255,255,0.85)", padding: "16px", borderRadius: 16, 
          border: "1px solid rgba(255,255,255,1)", boxShadow: "0 8px 24px rgba(0,0,0,0.06)", 
          backdropFilter: "blur(12px)", marginBottom: 16 
        }}>
          <div style={{ display:"inline-flex", alignItems: "center", gap: 6, background: `linear-gradient(135deg, ${AP_SAFFRON}, #d97706)`, color: "#fff", padding: "5px 12px", borderRadius: 20, fontSize: 8, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 10, boxShadow: "0 4px 12px rgba(232, 144, 42, 0.3)" }}>
            <Award size={10} strokeWidth={3} /> PRIZE POOL: ₹2 LAKHS
          </div>
          <div style={{ fontSize: 13, fontWeight: 900, color: AP_NAVY, letterSpacing: "0.05em", marginBottom: 6, lineHeight: 1.1 }}>
            ABOUT THE FEST
          </div>
          <div style={{ fontSize: 9.5, color: "#334155", lineHeight: 1.5, fontWeight: 500 }}>
            A State-Level Innovation & Technical Fest hosted at SVPEC. Guided by the vision: 
            <br/><br/>
            <strong style={{ color: cfg.accentDark, background: cfg.accentLight, padding: "2px 6px", borderRadius: 4, display: "inline-block" }}>
              "From Innovation to Nation Building <br/> Towards Viksit Bharat 2047"
            </strong>
          </div>
        </div>

        {/* QR Section */}
        <div style={{ 
          flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", 
          position: "relative", zIndex: 3, background: `linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.8) 100%)`, 
          borderRadius: 16, border: `1px solid rgba(255,255,255,0.8)`, boxShadow: `0 4px 16px ${cfg.accent}15`,
          backdropFilter: "blur(8px)"
        }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: cfg.accentDark, letterSpacing: "0.15em", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 8, height: 2, background: cfg.accentDark, borderRadius: 2 }} />
            EVENT ACCESS 
            <div style={{ width: 8, height: 2, background: cfg.accentDark, borderRadius: 2 }} />
          </div>

          <div style={{ background: "#ffffff", padding: 12, borderRadius: 14, boxShadow: `0 12px 32px ${cfg.accent}30`, border: `2px solid ${cfg.accent}30` }}>
            <QRCode accent={AP_NAVY} />
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 14, background: "#ffffff", padding: "6px 14px", borderRadius: 12, border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            <Share2 size={12} color={AP_TEAL} strokeWidth={2.5} />
            <span style={{ fontSize: 8, fontWeight: 800, color: "#475569", letterSpacing: "0.08em" }}>SCAN FOR SCHEDULE</span>
          </div>
        </div>

        {/* Emergency/Contact Grid */}
        <div style={{ marginTop: 16, position: "relative", zIndex: 3, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ background: "rgba(255,255,255,0.9)", border: "1px solid #e2e8f0", padding: "10px", borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <div style={{ background: "#ffe4e6", padding: 4, borderRadius: 6 }}>
                <HeartPulse size={12} color="#e11d48" strokeWidth={2.5} />
              </div>
              <div style={{ fontSize: 8, fontWeight: 900, color: "#e11d48", letterSpacing: "0.05em" }}>EMERGENCY</div>
            </div>
            <div style={{ borderBottom: "2px solid #f1f5f9", height: 16, marginBottom: 4 }}><span style={{ fontSize: 7, color:"#64748b", fontWeight: 700 }}>Blood Gp.</span></div>
            <div style={{ borderBottom: "2px solid #f1f5f9", height: 16 }}><span style={{ fontSize: 7, color:"#64748b", fontWeight: 700 }}>Contact Ph.</span></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.9)", border: "1px solid #e2e8f0", padding: "10px", borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <div style={{ background: `${AP_NAVY}20`, padding: 4, borderRadius: 6 }}>
                <Briefcase size={12} color={AP_NAVY} strokeWidth={2.5} />
              </div>
              <div style={{ fontSize: 8, fontWeight: 900, color: AP_NAVY, letterSpacing: "0.05em" }}>SUPPORT</div>
            </div>
            <div style={{ fontSize: 8, color: "#334155", fontWeight: 700, lineHeight: 1.5, marginTop: 4 }}>
              +91 93919 05274<br/>
              savishkarandhrapradesh<br/>@gmail.com
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div style={{ height: 12, background: cfg.gradient, position: "relative", zIndex: 3 }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
          <DiamondPattern color={cfg.accent} />
        </div>
      </div>
    </div>
  );
};
