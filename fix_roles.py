import re

with open("src/app/components/IDCard.tsx", "r", encoding="utf-8") as f:
    text = f.read()

new_config = """export interface IDCardProps {
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

const AP_TEAL"""

pattern = re.compile(r'export interface IDCardProps \{[\s\S]*?const AP_TEAL', re.MULTILINE)
new_text = pattern.sub(new_config, text)

with open("src/app/components/IDCard.tsx", "w", encoding="utf-8") as f:
    f.write(new_text)

print("Replaced!")
