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
  role: "Participant" | "Volunteer" | "Organizing Committee" | "Sanchalana Samithi" | "Jury / Judge" | "Guest" | "Speaker / Resource" | "Media / Photography" | "Technical Support" | string;
  organization: string;
  idNumber: string;
  eventDate: string;
}

const roleConfig: Record<string, any> = {
  "Participant": {
    accent: "#2563eb",
    accentLight: "#dbeafe",
    accentMid: "#60a5fa",
    accentDark: "#1e3a8a",
    label: "PARTICIPANT",
    labelTelugu: "పాల్గొనేవారు",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)",
  },
  "Volunteer": {
    accent: "#65a30d",
    accentLight: "#ecfccb",
    accentMid: "#a3e635",
    accentDark: "#365314",
    label: "VOLUNTEER",
    labelTelugu: "స్వచ్ఛంద సేవకుడు",
    gradient: "linear-gradient(135deg, #3f6212 0%, #65a30d 50%, #84cc16 100%)",
  },
  "Organizing Committee": {
    accent: "#dc2626",
    accentLight: "#fee2e2",
    accentMid: "#f87171",
    accentDark: "#7f1d1d",
    label: "COMMITTEE",
    labelTelugu: "నిర్వహణ కమిటీ",
    gradient: "linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #ef4444 100%)",
  },
  "Sanchalana Samithi": {
    accent: "#9333ea",
    accentLight: "#f3e8ff",
    accentMid: "#c084fc",
    accentDark: "#581c87",
    label: "SANCHALANA",
    labelTelugu: "సంచలన సమితి",
    gradient: "linear-gradient(135deg, #6b21a8 0%, #9333ea 50%, #a855f7 100%)",
  },
  "Jury / Judge": {
    accent: "#ca8a04",
    accentLight: "#fefce8",
    accentMid: "#facc15",
    accentDark: "#713f12",
    label: "JURY PANEL",
    labelTelugu: "న్యాయ నిర్ణేత",
    gradient: "linear-gradient(135deg, #854d0e 0%, #ca8a04 50%, #eab308 100%)",
  },
  "Guest": {
    accent: "#d97706",
    accentLight: "#fef3c7",
    accentMid: "#fbbf24",
    accentDark: "#78350f",
    label: "GUEST",
    labelTelugu: "అతిథి",
    gradient: "linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)",
  },
  "Speaker / Resource": {
    accent: "#0d9488",
    accentLight: "#ccfbf1",
    accentMid: "#2dd4bf",
    accentDark: "#115e59",
    label: "SPEAKER",
    labelTelugu: "వక్త",
    gradient: "linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%)",
  },
  "Media / Photography": {
    accent: "#db2777",
    accentLight: "#fce7f3",
    accentMid: "#f472b6",
    accentDark: "#831843",
    label: "MEDIA TEAM",
    labelTelugu: "మీడియా తీమ్",
    gradient: "linear-gradient(135deg, #9d174d 0%, #db2777 50%, #ec4899 100%)",
  },
  "Technical Support": {
    accent: "#4f46e5",
    accentLight: "#e0e7ff",
    accentMid: "#818cf8",
    accentDark: "#312e81",
    label: "TECH SUPPORT",
    labelTelugu: "సాంకేతిక బృందం",
    gradient: "linear-gradient(135deg, #3730a3 0%, #4f46e5 50%, #6366f1 100%)",
  }
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

      {/* Indian-inspired motif layer + role surface */}
      <svg width="100%" height="100%" viewBox="0 0 300 480" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0 }}>
        <defs>
          <pattern id="jaali-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke={`${color}22`} strokeWidth="1" />
            <circle cx="12" cy="12" r="1.8" fill={`${color}33`} />
          </pattern>
        </defs>

        {/* Temple-jaali strip */}
        <rect x="0" y="0" width="300" height="32" fill="url(#jaali-pattern)" opacity="0.55" />

        {/* Rangoli corner arcs */}
        <circle cx="20" cy="460" r="46" fill="none" stroke={`${color}2a`} strokeWidth="10" />
        <circle cx="30" cy="458" r="22" fill="none" stroke={`${AP_SAFFRON}33`} strokeWidth="6" />
        <circle cx="282" cy="24" r="36" fill="none" stroke={`${color}1f`} strokeWidth="8" />

        {/* Lotus petal hints */}
        <path d="M140 448 Q150 424 160 448 Q150 438 140 448 Z" fill={`${color}28`} />
        <path d="M126 452 Q138 428 150 452 Q138 444 126 452 Z" fill={`${AP_SAFFRON}20`} />
        <path d="M150 452 Q162 428 174 452 Q162 444 150 452 Z" fill={`${AP_SAFFRON}20`} />

        {/* Role-specific base forms */}
        {(role === "Volunteer" || role === "Organizing Committee" || role === "Sanchalana Samithi") && (
          <>
            <polygon points="0,480 0,350 150,422 300,300 300,480" fill={`${color}18`} />
            <polygon points="0,480 0,420 180,480" fill={`${color}2a`} />
            <path d="M-40,210 L160,0 M-30,238 L188,0 M208,480 L400,286" stroke={`${color}16`} strokeWidth="16" opacity="0.65" />
          </>
        )}

        {(role === "Participant" || role === "Technical Support") && (
          <>
            <path d="M0,480 L0,304 Q150,452 300,252 L300,480 Z" fill={`${color}18`} />
            <path d="M0,102 L100,102 L150,52 M100,102 L100,202 L50,252 M300,302 L250,302 L200,352 L200,480" fill="none" stroke={`${color}24`} strokeWidth="2.5" />
            <rect x="140" y="40" width="18" height="18" rx="4" fill={`${color}20`} />
            <rect x="42" y="242" width="18" height="18" rx="4" fill={`${color}20`} />
          </>
        )}

        {(role === "Guest" || role === "Jury / Judge" || role === "Speaker / Resource" || role === "Media / Photography") && (
          <>
            <circle cx="0" cy="480" r="194" fill={`${color}10`} />
            <circle cx="0" cy="480" r="138" fill={`${color}1a`} />
            <circle cx="300" cy="0" r="148" fill={`${color}0a`} />
            <circle cx="300" cy="0" r="96" fill={`${AP_SAFFRON}13`} />
            <path d="M0,480 Q150,352 300,480 Z" fill={`${color}21`} />
          </>
        )}
      </svg>
    </div>
  );
};

// ── DECORATIVE BACKGROUNDS BY ROLE ──
const RoleBackground = ({ role, color, side }: { role: string; color: string; side: "front" | "back" }) => {
  const isFront = side === "front";
  const opac = isFront ? 0.24 : 0.14;

  const iconStyle = {
    filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.08))",
  } as const;

  if (role === "Participant") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(215px, ${isFront ? 304 : 102}px)`, display: "block", position: "absolute" }}><Hexagon size={108} color={color} strokeWidth={1} style={iconStyle} /></g>
        <g style={{ transform: `translate(-6px, ${isFront ? 266 : 358}px)`, display: "block", position: "absolute" }}><Network size={124} color={color} strokeWidth={1} /></g>
        <g style={{ transform: `translate(165px, ${isFront ? 84 : 384}px)`, display: "block", position: "absolute" }}><Lightbulb size={78} color={color} strokeWidth={1.5} /></g>
      </div>
    );
  }

  if (role === "Volunteer") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(210px, ${isFront ? 316 : 88}px)`, display: "block", position: "absolute" }}><Users size={106} color={color} strokeWidth={1} style={iconStyle} /></g>
        <g style={{ transform: `translate(-10px, ${isFront ? 286 : 364}px)`, display: "block", position: "absolute" }}><HeartPulse size={118} color={color} strokeWidth={1} /></g>
        <g style={{ transform: `translate(162px, ${isFront ? 70 : 382}px)`, display: "block", position: "absolute" }}><Flag size={74} color={color} strokeWidth={1.6} /></g>
      </div>
    );
  }

  if (role === "Organizing Committee") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(212px, ${isFront ? 324 : 82}px)`, display: "block", position: "absolute" }}><Megaphone size={102} color={color} strokeWidth={1} style={iconStyle} /></g>
        <g style={{ transform: `translate(-20px, ${isFront ? 286 : 366}px)`, display: "block", position: "absolute" }}><Tent size={118} color={color} strokeWidth={1} /></g>
        <g style={{ transform: `translate(166px, ${isFront ? 72 : 385}px)`, display: "block", position: "absolute" }}><ClipboardCheck size={74} color={color} strokeWidth={1.5} /></g>
      </div>
    );
  }

  if (role === "Sanchalana Samithi") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(212px, ${isFront ? 324 : 82}px)`, display: "block", position: "absolute" }}><Activity size={104} color={color} strokeWidth={1} style={iconStyle} /></g>
        <g style={{ transform: `translate(-20px, ${isFront ? 286 : 366}px)`, display: "block", position: "absolute" }}><GitMerge size={122} color={color} strokeWidth={1} /></g>
        <g style={{ transform: `translate(168px, ${isFront ? 72 : 386}px)`, display: "block", position: "absolute" }}><ListTodo size={72} color={color} strokeWidth={1.6} /></g>
      </div>
    );
  }

  if (role === "Jury / Judge") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(212px, ${isFront ? 320 : 76}px)`, display: "block", position: "absolute" }}><Award size={100} color={color} strokeWidth={1} style={iconStyle} /></g>
        <g style={{ transform: `translate(-10px, ${isFront ? 286 : 365}px)`, display: "block", position: "absolute" }}><Briefcase size={118} color={color} strokeWidth={1} /></g>
        <g style={{ transform: `translate(166px, ${isFront ? 70 : 384}px)`, display: "block", position: "absolute" }}><Sparkles size={74} color={color} strokeWidth={1.6} /></g>
      </div>
    );
  }

  if (role === "Guest") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(212px, ${isFront ? 320 : 66}px)`, display: "block", position: "absolute" }}><Crown size={102} color={color} strokeWidth={1} style={iconStyle} /></g>
        <g style={{ transform: `translate(8px, ${isFront ? 286 : 364}px)`, display: "block", position: "absolute" }}><Award size={114} color={color} strokeWidth={1} /></g>
        <g style={{ transform: `translate(164px, ${isFront ? 66 : 382}px)`, display: "block", position: "absolute" }}><Sparkles size={74} color={color} strokeWidth={1.6} /></g>
      </div>
    );
  }

  if (role === "Speaker / Resource") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(212px, ${isFront ? 320 : 82}px)`, display: "block", position: "absolute" }}><Mic size={98} color={color} strokeWidth={1} style={iconStyle} /></g>
        <g style={{ transform: `translate(-12px, ${isFront ? 286 : 366}px)`, display: "block", position: "absolute" }}><Presentation size={122} color={color} strokeWidth={1} /></g>
        <g style={{ transform: `translate(168px, ${isFront ? 70 : 384}px)`, display: "block", position: "absolute" }}><Headphones size={70} color={color} strokeWidth={1.6} /></g>
      </div>
    );
  }

  if (role === "Media / Photography") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(212px, ${isFront ? 320 : 82}px)`, display: "block", position: "absolute" }}><Activity size={98} color={color} strokeWidth={1} style={iconStyle} /></g>
        <g style={{ transform: `translate(-12px, ${isFront ? 286 : 366}px)`, display: "block", position: "absolute" }}><MapPin size={118} color={color} strokeWidth={1} /></g>
        <g style={{ transform: `translate(164px, ${isFront ? 70 : 384}px)`, display: "block", position: "absolute" }}><Zap size={70} color={color} strokeWidth={1.6} /></g>
      </div>
    );
  }

  if (role === "Technical Support") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: `translate(212px, ${isFront ? 320 : 82}px)`, display: "block", position: "absolute" }}><Map size={96} color={color} strokeWidth={1} style={iconStyle} /></g>
        <g style={{ transform: `translate(-12px, ${isFront ? 286 : 366}px)`, display: "block", position: "absolute" }}><Network size={118} color={color} strokeWidth={1} /></g>
        <g style={{ transform: `translate(164px, ${isFront ? 70 : 384}px)`, display: "block", position: "absolute" }}><Lightbulb size={70} color={color} strokeWidth={1.6} /></g>
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
              <span style={{ fontSize: 8, fontWeight: 800, color: cfg.accentDark, width: 60, alignSelf:"flex-end" }}>ORGANISATION</span>
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

      <div style={{ flex: 1, padding: "8px 16px 10px", display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>
        <RoleBackground role={role} color={cfg.accent} side="back" />
        
        {/* Info Box */}
        <div style={{ 
          textAlign: "center", position: "relative", zIndex: 3, 
          background: "rgba(255,255,255,0.85)", padding: "14px", borderRadius: 16, 
          border: "1px solid rgba(255,255,255,1)", boxShadow: "0 8px 24px rgba(0,0,0,0.06)", 
          backdropFilter: "blur(12px)", marginBottom: 10 
        }}>
          <div style={{ display:"inline-flex", alignItems: "center", gap: 6, background: `linear-gradient(135deg, ${AP_SAFFRON}, #d97706)`, color: "#fff", padding: "4px 10px", borderRadius: 20, fontSize: 7.5, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 8, boxShadow: "0 4px 12px rgba(232, 144, 42, 0.3)" }}>
            <Award size={10} strokeWidth={3} /> PRIZE POOL: ₹2 LAKHS
          </div>
          <div style={{ fontSize: 13, fontWeight: 900, color: AP_NAVY, letterSpacing: "0.05em", marginBottom: 6, lineHeight: 1.1 }}>
            ABOUT THE FEST
          </div>
          <div style={{ fontSize: 9, color: "#334155", lineHeight: 1.4, fontWeight: 500 }}>
            A State-Level Innovation & Technical Fest hosted at SVPEC. Guided by the vision: 
            <br/><br/>
            <strong style={{ color: cfg.accentDark, background: cfg.accentLight, padding: "2px 6px", borderRadius: 4, display: "inline-block" }}>
              "From Innovation to Nation Building <br/> Towards Viksit Bharat 2047"
            </strong>
          </div>
        </div>

        {/* QR Section */}
        <div style={{ 
          flex: "0 0 auto", minHeight: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", 
          position: "relative", zIndex: 3, background: `linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.8) 100%)`, 
          borderRadius: 16, border: `1px solid rgba(255,255,255,0.8)`, boxShadow: `0 4px 16px ${cfg.accent}15`,
          backdropFilter: "blur(8px)", padding: "8px 0"
        }}>
          <div style={{ fontSize: 10.5, fontWeight: 800, color: cfg.accentDark, letterSpacing: "0.15em", marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 8, height: 2, background: cfg.accentDark, borderRadius: 2 }} />
            EVENT ACCESS 
            <div style={{ width: 8, height: 2, background: cfg.accentDark, borderRadius: 2 }} />
          </div>

          <div style={{ background: "#ffffff", padding: 10, borderRadius: 14, boxShadow: `0 12px 32px ${cfg.accent}30`, border: `2px solid ${cfg.accent}30` }}>
            <QRCode accent={AP_NAVY} />
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10, background: "#ffffff", padding: "5px 12px", borderRadius: 12, border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            <Share2 size={12} color={AP_TEAL} strokeWidth={2.5} />
            <span style={{ fontSize: 8, fontWeight: 800, color: "#475569", letterSpacing: "0.08em" }}>SCAN FOR SCHEDULE</span>
          </div>
        </div>

        {/* Emergency/Contact Grid */}
        <div style={{ marginTop: 10, position: "relative", zIndex: 3, display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 8 }}>
          <div
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.88))",
              border: "1px solid #fecdd3",
              padding: "8px 8px 7px",
              borderRadius: 14,
              boxShadow: "0 8px 18px rgba(225,29,72,0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
              <div style={{ background: "#ffe4e6", padding: 4, borderRadius: 7, border: "1px solid #fecdd3" }}>
                <HeartPulse size={12} color="#e11d48" strokeWidth={2.5} />
              </div>
              <div style={{ fontSize: 8, fontWeight: 900, color: "#e11d48", letterSpacing: "0.06em" }}>EMERGENCY</div>
            </div>

            <div style={{ marginBottom: 5, border: "1px dashed #fecdd3", borderRadius: 8, padding: "4px 6px" }}>
              <div style={{ fontSize: 6.8, color: "#be123c", fontWeight: 800, letterSpacing: "0.04em", marginBottom: 2 }}>BLOOD GROUP</div>
              <div
                style={{
                  width: "100%",
                  height: 12,
                  borderBottom: "2px solid #cbd5e1",
                  borderRadius: 1,
                }}
              />
            </div>

            <div style={{ border: "1px dashed #fecdd3", borderRadius: 8, padding: "4px 6px" }}>
              <div style={{ fontSize: 6.8, color: "#be123c", fontWeight: 800, letterSpacing: "0.04em", marginBottom: 2 }}>EMERGENCY PHONE</div>
              <div
                style={{
                  width: "100%",
                  height: 12,
                  borderBottom: "2px solid #cbd5e1",
                  borderRadius: 1,
                }}
              />
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.88))",
              border: `1px solid ${AP_NAVY}33`,
              padding: "9px 10px 8px",
              borderRadius: 14,
              boxShadow: "0 8px 18px rgba(30,58,138,0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
              <div style={{ background: `${AP_NAVY}20`, padding: 4, borderRadius: 7, border: `1px solid ${AP_NAVY}30` }}>
                <Briefcase size={12} color={AP_NAVY} strokeWidth={2.5} />
              </div>
              <div style={{ fontSize: 9, fontWeight: 900, color: AP_NAVY, letterSpacing: "0.06em" }}>HELP DESK</div>
            </div>

            <div style={{ fontSize: 8.8, color: "#1e293b", fontWeight: 800, lineHeight: 1.45 }}>
              +91 93919 05274
            </div>
            <div style={{
              marginTop: 5,
              fontSize: 7.8,
              color: "#334155",
              fontWeight: 700,
              lineHeight: 1.4,
              wordBreak: "break-word",
              overflowWrap: "anywhere",
            }}>
              savishkarandhrapradesh@gmail.com
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
