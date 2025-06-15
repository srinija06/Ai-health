
import { useState } from "react";
import { Smile, Cloud, Heart, ArrowUp, ArrowDown } from "lucide-react";

const MOODS = [
  { key: "happy", label: "Happy", icon: <Smile color="#48BFB6" size={28} /> },
  { key: "calm", label: "Calm", icon: <Heart color="#CBA3E3" size={28} /> },
  { key: "stressed", label: "Stressed", icon: <Cloud color="#FF977C" size={28} /> },
  { key: "meh", label: "Okay", icon: <ArrowUp color="#CBA3E3" size={28} /> },
  { key: "low", label: "Low", icon: <ArrowDown color="#FF977C" size={28} /> }
];

const TEXTS: Record<string, { title: string; prompt: string; cta: string }> = {
  en: {
    title: "How are you feeling today?",
    prompt: "Tap a mood below to check in",
    cta: "Continue"
  },
  hi: {
    title: "आज आप कैसे महसूस कर रहे हैं?",
    prompt: "मूड चुनें",
    cta: "आगे बढ़ें"
  },
  ta: {
    title: "இன்று எப்படி உணர்கிறீர்கள்?",
    prompt: "நிலையைத் தேர்ந்தெடுக்கவும்",
    cta: "தொடரவும்"
  },
  // Fallback:
  default: {
    title: "How are you feeling today?",
    prompt: "Tap a mood below to check in",
    cta: "Continue"
  }
}

const MoodCheckin = ({ onDone, lang }: { onDone: () => void; lang: string }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const t = TEXTS[lang] || TEXTS["default"];

  return (
    <div className="w-full max-w-xs mx-auto bg-white/80 rounded-2xl p-6 shadow-xl flex flex-col items-center gap-4 animate-fade-in">
      <div className="text-xl font-bold text-teal-700 mb-2">{t.title}</div>
      <div className="text-sm text-muted-foreground mb-4">{t.prompt}</div>
      <div className="flex flex-wrap gap-3 items-center justify-center mb-4">
        {MOODS.map(mood => (
          <button
            key={mood.key}
            className={`flex flex-col items-center p-3 rounded-xl border hover:scale-110 transition 
              ${selected === mood.key ? "border-teal bg-teal/30" : "border-gray-200 bg-transparent"}`}
            onClick={() => setSelected(mood.key)}
          >
            {mood.icon}
            <span className="text-xs mt-1">{mood.label}</span>
          </button>
        ))}
      </div>
      <button
        disabled={!selected}
        className="w-full py-2 rounded-full font-semibold transition bg-coral text-white mt-2 disabled:bg-gray-200 disabled:text-gray-400"
        onClick={onDone}
      >
        {t.cta}
      </button>
    </div>
  );
};

export default MoodCheckin;
