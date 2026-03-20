const fs = require('fs');

const IDCardPath = 'src/app/components/IDCard.tsx';
const AppPath = 'src/app/App.tsx';

let idCardCode = fs.readFileSync(IDCardPath, 'utf8');
let appCode = fs.readFileSync(AppPath, 'utf8');

// 1. Rewrite the roleConfig in IDCard
const newRoleConfig = `export interface IDCardProps {
  role: "Participant" | "Volunteer" | "Organizing Committee" | "Sanchalana Samithi" | "Jury / Judge" | "Guest" | "Speaker / Resource" | "Media / Photography" | "Technical Support";
  organization: string;
  idNumber: string;
  eventDate: string;
}

const roleConfig = {
  "Participant": {
    accent: "#2563eb",
    accentLight: "#dbeafe",
    accentMid: "#60a5fa",
    accentDark: "#1e3a8a",
    label: "PARTICIPANT",
    labelTelugu: "పాల్గొనేవారు", // Palgonevaru
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)",
  },
  "Volunteer": {
    accent: "#65a30d",
    accentLight: "#ecfccb",
    accentMid: "#a3e635",
    accentDark: "#365314",
    label: "VOLUNTEER",
    labelTelugu: "స్వచ్ఛంద సేవకుడు", // Svachhanda Sevakudu
    gradient: "linear-gradient(135deg, #3f6212 0%, #65a30d 50%, #84cc16 100%)",
  },
  "Organizing Committee": {
    accent: "#dc2626",
    accentLight: "#fee2e2",
    accentMid: "#f87171",
    accentDark: "#7f1d1d",
    label: "COMMITTEE",
    labelTelugu: "నిర్వహణ కమిటీ", // Nirvahana Committee
    gradient: "linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #ef4444 100%)",
  },
  "Sanchalana Samithi": {
    accent: "#9333ea",
    accentLight: "#f3e8ff",
    accentMid: "#c084fc",
    accentDark: "#581c87",
    label: "SANCHALANA",
    labelTelugu: "సంచలన సమితి", // Sanchalana Samithi
    gradient: "linear-gradient(135deg, #6b21a8 0%, #9333ea 50%, #a855f7 100%)",
  },
  "Jury / Judge": {
    accent: "#ca8a04",
    accentLight: "#fefce8",
    accentMid: "#facc15",
    accentDark: "#713f12",
    label: "JURY PANNEL",
    labelTelugu: "న్యాయ నిర్ణేత", // Nyaya Nirneta
    gradient: "linear-gradient(135deg, #854d0e 0%, #ca8a04 50%, #eab308 100%)",
  },
  "Guest": {
    accent: "#d97706",
    accentLight: "#fef3c7",
    accentMid: "#fbbf24",
    accentDark: "#78350f",
    label: "GUEST",
    labelTelugu: "అతిథి", // Atidhi
    gradient: "linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)",
  },
  "Speaker / Resource": {
    accent: "#0d9488",
    accentLight: "#ccfbf1",
    accentMid: "#2dd4bf",
    accentDark: "#115e59",
    label: "SPEAKER",
    labelTelugu: "వక్త", // Vakta
    gradient: "linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%)",
  },
  "Media / Photography": {
    accent: "#db2777",
    accentLight: "#fce7f3",
    accentMid: "#f472b6",
    accentDark: "#831843",
    label: "MEDIA TEAM",
    labelTelugu: "మీడియా తీమ్", // Media Team
    gradient: "linear-gradient(135deg, #9d174d 0%, #db2777 50%, #ec4899 100%)",
  },
  "Technical Support": {
    accent: "#4f46e5",
    accentLight: "#e0e7ff",
    accentMid: "#818cf8",
    accentDark: "#312e81",
    label: "TECH SUPPORT",
    labelTelugu: "సాంకేతిక బృందం", // Sanketika Brundam
    gradient: "linear-gradient(135deg, #3730a3 0%, #4f46e5 50%, #6366f1 100%)",
  },
};`;

idCardCode = idCardCode.replace(/export interface IDCardProps \{[\s\S]*?\};/, newRoleConfig);

// 2. Add extra icon imports
const newImports = `import { 
  ClipboardCheck, Users, Headphones, GitMerge, Megaphone, Activity, 
  ListTodo, Network, Share2, Presentation, Lightbulb, Hexagon, 
  Award, Mic, Crown, Sparkles, MapPin, CalendarDays, Tent, Flag, 
  Briefcase, HeartPulse, Zap, Map, Gavel, Camera, ShieldHeart, Wrench, Focus, Handshake, Scale, Cpu
} from "lucide-react";`;
idCardCode = idCardCode.replace(/import \{[\s\S]*?\} from "lucide-react";/, newImports);

// 3. Rewrite the RichBackground Role Background
const richBackgroundStr = `const RichBackground = ({ role, color, lightColor }: { role: string; color: string; lightColor: string }) => {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div style={{
        position: "absolute", top: "-10%", left: "-20%", width: "70%", height: "50%",
        background: \`radial-gradient(ellipse at center, \${lightColor} 0%, transparent 70%)\`,
        opacity: 0.8, filter: "blur(30px)", mixBlendMode: "multiply"
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", right: "-20%", width: "80%", height: "60%",
        background: \`radial-gradient(circle at center, \${color}33 0%, transparent 60%)\`,
        opacity: 0.9, filter: "blur(40px)"
      }} />
      <div style={{
        position: "absolute", top: "30%", left: "40%", width: "60%", height: "60%",
        background: \`radial-gradient(circle at center, \${AP_TEAL}15 0%, transparent 60%)\`,
        opacity: 0.6, filter: "blur(40px)"
      }} />

      <svg width="100%" height="100%" viewBox="0 0 300 480" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0 }}>
        {["Volunteer", "Organizing Committee", "Sanchalana Samithi"].includes(role) && (
          <>
            <polygon points="0,480 0,350 150,420 300,300 300,480" fill={\`\${color}1A\`} />
            <polygon points="0,480 0,420 180,480" fill={\`\${color}33\`} />
            <polygon points="300,480 300,380 200,480" fill={\`\${AP_SAFFRON}22\`} />
            <path d="M-50,200 L150,0 M-50,230 L180,0 M200,480 L400,280" stroke={\`\${color}15\`} strokeWidth="20" opacity="0.6" />
          </>
        )}
        {["Participant", "Technical Support"].includes(role) && (
          <>
            <path d="M0,480 L0,300 Q150,450 300,250 L300,480 Z" fill={\`\${color}1A\`} />
            <path d="M0,100 L100,100 L150,50 M100,100 L100,200 L50,250 M300,300 L250,300 L200,350 L200,480" fill="none" stroke={\`\${color}22\`} strokeWidth="3" />
            <rect x="140" y="40" width="20" height="20" rx="4" fill={\`\${color}22\`} />
            <rect x="40" y="240" width="20" height="20" rx="4" fill={\`\${color}22\`} />
            <circle cx="250" cy="300" r="10" fill={\`\${color}33\`} />
          </>
        )}
        {["Guest", "Jury / Judge", "Speaker / Resource", "Media / Photography"].includes(role) && (
          <>
            <circle cx="0" cy="480" r="200" fill={\`\${color}11\`} />
            <circle cx="0" cy="480" r="140" fill={\`\${color}1A\`} />
            <circle cx="300" cy="0" r="150" fill={\`\${color}0A\`} />
            <circle cx="300" cy="0" r="100" fill={\`\${AP_SAFFRON}15\`} />
            <path d="M0,480 Q150,350 300,480 Z" fill={\`\${color}22\`} />
          </>
        )}
      </svg>
    </div>
  );
};`;
idCardCode = idCardCode.replace(/const RichBackground = \(\{ role, color, lightColor \}[\s\S]*?<\/div>\s*\);\s*};/, richBackgroundStr);

// 4. Transform RoleBackground to handle the 9 specific ones
const newRoleBg = `const RoleBackground = ({ role, color, side }: { role: string; color: string; side: "front" | "back" }) => {
  const isFront = side === "front";
  const opac = isFront ? 0.25 : 0.15;
  
  if (role === "Participant") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: \`translate(210px, \${isFront ? 300 : 100}px)\`, display: 'block', position: 'absolute' }}>
          <Hexagon size={120} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: \`translate(-10px, \${isFront ? 260 : 360}px)\`, display: 'block', position: 'absolute' }}>
          <Network size={130} color={color} strokeWidth={1} />
        </g>
      </div>
    );
  }
  if (role === "Volunteer") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: \`translate(220px, \${isFront ? 310 : 80}px)\`, display: 'block', position: 'absolute' }}>
          <ShieldHeart size={110} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: \`translate(-10px, \${isFront ? 280 : 350}px)\`, display: 'block', position: 'absolute' }}>
          <Handshake size={140} color={color} strokeWidth={1} />
        </g>
      </div>
    );
  }
  if (role === "Organizing Committee" || role === "Sanchalana Samithi") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: \`translate(210px, \${isFront ? 330 : 80}px)\`, display: 'block', position: 'absolute' }}>
          <Megaphone size={110} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: \`translate(-20px, \${isFront ? 280 : 370}px)\`, display: 'block', position: 'absolute' }}>
          <Briefcase size={120} color={color} strokeWidth={1} />
        </g>
      </div>
    );
  }
  if (role === "Jury / Judge") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: \`translate(210px, \${isFront ? 310 : 90}px)\`, display: 'block', position: 'absolute' }}>
          <Gavel size={110} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: \`translate(-10px, \${isFront ? 270 : 360}px)\`, display: 'block', position: 'absolute' }}>
          <Scale size={130} color={color} strokeWidth={1} />
        </g>
      </div>
    );
  }
  if (role === "Guest") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: \`translate(210px, \${isFront ? 320 : 60}px)\`, display: 'block', position: 'absolute' }}>
          <Crown size={100} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: \`translate(10px, \${isFront ? 280 : 360}px)\`, display: 'block', position: 'absolute' }}>
          <Award size={120} color={color} strokeWidth={1} />
        </g>
      </div>
    );
  }
  if (role === "Speaker / Resource") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: \`translate(210px, \${isFront ? 320 : 60}px)\`, display: 'block', position: 'absolute' }}>
          <Mic size={100} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: \`translate(-10px, \${isFront ? 280 : 360}px)\`, display: 'block', position: 'absolute' }}>
          <Presentation size={130} color={color} strokeWidth={1} />
        </g>
      </div>
    );
  }
  if (role === "Media / Photography") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: \`translate(210px, \${isFront ? 310 : 80}px)\`, display: 'block', position: 'absolute' }}>
          <Focus size={100} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: \`translate(-10px, \${isFront ? 280 : 360}px)\`, display: 'block', position: 'absolute' }}>
          <Camera size={130} color={color} strokeWidth={1} />
        </g>
      </div>
    );
  }
  if (role === "Technical Support") {
    return (
      <div style={{ position: "absolute", inset: 0, opacity: opac, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <g style={{ transform: \`translate(220px, \${isFront ? 310 : 80}px)\`, display: 'block', position: 'absolute' }}>
          <Wrench size={100} color={color} strokeWidth={1} style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))" }} />
        </g>
        <g style={{ transform: \`translate(-10px, \${isFront ? 280 : 360}px)\`, display: 'block', position: 'absolute' }}>
          <Cpu size={130} color={color} strokeWidth={1} />
        </g>
      </div>
    );
  }
  return null;
};`;
idCardCode = idCardCode.replace(/const RoleBackground = \(\{ role, color, side \}[\s\S]*?return null;\n};/, newRoleBg);

fs.writeFileSync(IDCardPath, idCardCode);

// Modify App.tsx: Update arrays and state
const newAppConsts = `const ROLES_LIST = [
  "Participant", 
  "Volunteer", 
  "Organizing Committee", 
  "Sanchalana Samithi", 
  "Jury / Judge", 
  "Guest", 
  "Speaker / Resource", 
  "Media / Photography", 
  "Technical Support"
] as const;

const cards = ROLES_LIST.map(role => ({
  role,
  organization: "Organisation Name",
  eventDate: "3-5 Apr 2026",
}));

const roleAccents: Record<string, string> = {
  "Participant": "#2563eb",
  "Volunteer": "#65a30d",
  "Organizing Committee": "#dc2626",
  "Sanchalana Samithi": "#9333ea",
  "Jury / Judge": "#ca8a04",
  "Guest": "#d97706",
  "Speaker / Resource": "#0d9488",
  "Media / Photography": "#db2777",
  "Technical Support": "#4f46e5",
};

const roleLightBg: Record<string, string> = {
  "Participant": "#dbeafe",
  "Volunteer": "#ecfccb",
  "Organizing Committee": "#fee2e2",
  "Sanchalana Samithi": "#f3e8ff",
  "Jury / Judge": "#fefce8",
  "Guest": "#fef3c7",
  "Speaker / Resource": "#ccfbf1",
  "Media / Photography": "#fce7f3",
  "Technical Support": "#e0e7ff",
};

const filters = ["All", ...ROLES_LIST];`;

appCode = appCode.replace(/const cards = \([\s\S]*?const filters = \[.*?\];/, newAppConsts);
appCode = appCode.replace(/const cards = \[[\s\S]*?const filters = \[.*?\];/, newAppConsts);
fs.writeFileSync(AppPath, appCode);
console.log("Updated Successfully");
