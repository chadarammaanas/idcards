  import { useState, useRef, useCallback } from "react";
import * as htmlToImage from "html-to-image";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { IDCard, IDCardBack, type IDCardField } from "./components/IDCard";
import apLogo from "../../logo/WhatsApp Image 2026-03-20 at 10.35.58 AM.jpeg";

type CardSpec = {
  key: string;
  role: string;
  organization: string;
  eventDate: string;
  displayRoleLabel?: string;
  fields?: IDCardField[];
  showLeadersImage?: boolean;
};

const DEFAULT_ROLES_LIST = [
  "Participant",
  "Volunteer",
  "Organizing Committee",
  "Sanchalana Samithi",
  "Jury / Judge",
  "Guest",
  "Speaker / Resource",
  "Media / Photography",
  "Technical Support",
] as const;

const defaultCards: CardSpec[] = DEFAULT_ROLES_LIST.map((role) => ({
  key: role,
  role,
  organization: "Organisation Name",
  eventDate: "3-5 Apr 2026",
}));

const specialCards: CardSpec[] = [
  {
    key: "Delegate",
    role: "Delegate",
    organization: "Institute Name",
    eventDate: "3-5 Apr 2026",
    displayRoleLabel: "DELEGATE",
    showLeadersImage: true,
    fields: [
      { label: "NAME" },
      { label: "INSTITUTE" },
      { label: "PLACE" },
      { label: "MOBILE NUMBER" },
      { label: "EVENT" },
    ],
  },
  {
    key: "Volunteer",
    role: "Volunteer",
    organization: "Institute Name",
    eventDate: "3-5 Apr 2026",
    showLeadersImage: true,
    fields: [
      { label: "NAME" },
      { label: "INSTITUTE" },
      { label: "MOBILE NUMBER" },
      { label: "EVENT" },
    ],
  },
  {
    key: "Organizing Committee",
    role: "Organizing Committee",
    organization: "Committee Name",
    eventDate: "3-5 Apr 2026",
    displayRoleLabel: "ORGANISATION COMMITTEE",
    showLeadersImage: true,
    fields: [
      { label: "NAME" },
      { label: "ORGANISATION" },
      { label: "MOBILE NUMBER" },
    ],
  },
  {
    key: "Jury",
    role: "Jury / Judge",
    organization: "Institute Name",
    eventDate: "3-5 Apr 2026",
    displayRoleLabel: "JURY",
    showLeadersImage: true,
    fields: [
      { label: "NAME" },
      { label: "INSTITUTE" },
      { label: "MOBILE NUMBER" },
      { label: "EVENT" },
    ],
  },
  {
    key: "Guest",
    role: "Guest",
    organization: "Guest Organisation",
    eventDate: "3-5 Apr 2026",
    displayRoleLabel: "GUEST OF HONOUR",
    showLeadersImage: true,
    fields: [
      { label: "NAME" },
      { label: "DESIGNATION" },
      { label: "ORGANISATION" },
      { label: "MOBILE NUMBER" },
    ],
  },
];

const roleAccents: Record<string, string> = {
  Delegate: "#2563eb",
  Participant: "#2563eb",
  Volunteer: "#65a30d",
  "Organizing Committee": "#7c3aed",
  "Sanchalana Samithi": "#9333ea",
  Jury: "#ca8a04",
  "Jury / Judge": "#ca8a04",
  Guest: "#d97706",
  "Speaker / Resource": "#0d9488",
  "Media / Photography": "#db2777",
  "Technical Support": "#4f46e5",
};

const roleLightBg: Record<string, string> = {
  Delegate: "#dbeafe",
  Participant: "#dbeafe",
  Volunteer: "#ecfccb",
  "Organizing Committee": "#ede9fe",
  "Sanchalana Samithi": "#f3e8ff",
  Jury: "#fefce8",
  "Jury / Judge": "#fefce8",
  Guest: "#fef3c7",
  "Speaker / Resource": "#ccfbf1",
  "Media / Photography": "#fce7f3",
  "Technical Support": "#e0e7ff",
};

const toSafeFilePart = (value: string) =>
  value.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");

const DownloadableCard = ({ card, index }: { card: CardSpec; index: number }) => {
  const cardRefFront = useRef<HTMLDivElement>(null);
  const cardRefBack = useRef<HTMLDivElement>(null);

  const downloadImage = useCallback(
    async (ref: React.RefObject<HTMLDivElement | null>, side: string) => {
      if (!ref.current) return;

      htmlToImage
        .toPng(ref.current, {
          pixelRatio: 4,
          cacheBust: false,
          fontEmbedCSS: "",
          style: {
            transform: "scale(1)",
            transformOrigin: "top left",
          },
        })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `Srujana-ID-${card.key.replace(/[^a-zA-Z0-9]/g, "_")}-${side}.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error(`Failed to download ${side} image`, err);
          alert(`Failed to download ${side} image. Check console for details.`);
        });
    },
    [card.key],
  );

  const exportPrefix = `${toSafeFilePart(card.key)}-${index}`;

  return (
    <div className="flex flex-col gap-6 items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="flex flex-col gap-3">
          <div className="relative group">
            <div
              ref={cardRefFront}
              className="bg-white rounded-2xl p-0 shadow-lg"
              data-export-id={`${exportPrefix}-front`}
            >
              <IDCard
                role={card.role}
                organization={card.organization}
                idNumber={Math.floor(100000 + Math.random() * 900000).toString()}
                eventDate={card.eventDate}
                displayRoleLabel={card.displayRoleLabel}
                fields={card.fields}
                showLeadersImage={card.showLeadersImage}
              />
            </div>
          </div>
          <button
            onClick={() => downloadImage(cardRefFront, "Front")}
            className="flex items-center justify-center gap-2 py-2 px-4 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Download Front PNG
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="relative group">
            <div
              ref={cardRefBack}
              className="bg-white rounded-2xl p-0 shadow-lg"
              data-export-id={`${exportPrefix}-back`}
            >
              <IDCardBack
                role={card.role}
                organization={card.organization}
                idNumber={Math.floor(100000 + Math.random() * 900000).toString()}
                eventDate={card.eventDate}
                displayRoleLabel={card.displayRoleLabel}
                fields={card.fields}
                showLeadersImage={card.showLeadersImage}
              />
            </div>
          </div>
          <button
            onClick={() => downloadImage(cardRefBack, "Back")}
            className="flex items-center justify-center gap-2 py-2 px-4 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Download Back PNG
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activePage, setActivePage] = useState<"special" | "default">("special");
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [isExportingAll, setIsExportingAll] = useState(false);

  const cardsForPage = activePage === "special" ? specialCards : defaultCards;
  const filters = ["All", ...cardsForPage.map((card) => card.key)];

  const filteredCards =
    activeFilter === "All"
      ? cardsForPage
      : cardsForPage.filter((card) => card.key === activeFilter);

  const downloadAllFiltered = async () => {
    if (isExportingAll) return;

    try {
      setIsExportingAll(true);
      const zip = new JSZip();
      let fileCount = 0;

      for (let i = 0; i < filteredCards.length; i += 1) {
        const card = filteredCards[i];
        const cardSafe = toSafeFilePart(card.key);

        for (const side of ["front", "back"] as const) {
          const node = document.querySelector(
            `[data-export-id="${cardSafe}-${i}-${side}"]`,
          ) as HTMLElement | null;

          if (!node) continue;

          const dataUrl = await htmlToImage.toPng(node, {
            pixelRatio: 4,
            cacheBust: false,
            fontEmbedCSS: "",
            style: {
              transform: "scale(1)",
              transformOrigin: "top left",
            },
          });

          const base64 = dataUrl.split(",")[1];
          zip.file(`${cardSafe}_${side}.png`, base64, { base64: true });
          fileCount += 1;
        }
      }

      if (fileCount === 0) {
        alert("No visible cards found to export.");
        return;
      }

      const blob = await zip.generateAsync({ type: "blob" });
      const filterSafe = toSafeFilePart(activeFilter);
      saveAs(blob, `Srujana_ID_Cards_${filterSafe || "All"}.zip`);
    } catch (error) {
      console.error("Failed to export visible cards", error);
      alert("Failed to export cards. Please try again.");
    } finally {
      setIsExportingAll(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img src={apLogo} alt="Srujana" className="h-10 w-10 object-contain rounded" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">SRUJANA '26 Card Studio</h1>
                <p className="text-sm text-slate-500">
                  {activePage === "special"
                    ? "Special Role Page: Delegate, Volunteer, Committee, Jury, Guest"
                    : "Default ID Card Batch Export Generator"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setActivePage("special");
                  setActiveFilter("All");
                }}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold border ${
                  activePage === "special"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-300"
                }`}
              >
                Special Page
              </button>
              <button
                onClick={() => {
                  setActivePage("default");
                  setActiveFilter("All");
                }}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold border ${
                  activePage === "default"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-300"
                }`}
              >
                Default Page
              </button>

              <button
                onClick={downloadAllFiltered}
                disabled={isExportingAll}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
              >
                {isExportingAll ? "Preparing ZIP..." : "Export Visible (ZIP)"}
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const bg = filter !== "All" ? roleLightBg[filter as string] || "#e2e8f0" : "#e2e8f0";
              const color = filter !== "All" ? roleAccents[filter as string] || "#475569" : "#475569";
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    backgroundColor: activeFilter === filter ? color : "transparent",
                    color: activeFilter === filter ? "#fff" : color,
                    borderColor: color,
                  }}
                  className="px-3 py-1.5 rounded-full text-sm font-semibold border-2 transition-all"
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-800">
            {activeFilter === "All" ? "All Previews" : `${activeFilter} Preview`}
          </h2>
          <span className="text-sm font-medium text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
            {filteredCards.length} Cards
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCards.map((card, index) => (
            <DownloadableCard key={`${card.key}-${index}`} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
