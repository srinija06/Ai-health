import { useState } from "react";
import MoodCheckin from "./MoodCheckin";
import { Heart } from "lucide-react";

// Simple language list for demo
const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "ta", label: "தமிழ்" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "mr", label: "मराठी" },
  { code: "bn", label: "বাংলা" },
  { code: "te", label: "తెలుగు" }, // Added Telugu
];

const Onboarding = ({ onFinish }: { onFinish: (lang: string) => void }) => {
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState("en");

  return (
    <div className="flex flex-col items-center min-h-[80vh] w-full justify-center px-4 bg-[#F6F8FA] bg-gradient-to-br from-[#E3F0FF] via-[#F6F8FA] to-[#D6F5E3]">
      {step === 0 && (
        <>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="rounded-full bg-white/60 p-3">
                <Heart color="#48BFB6" size={36} />
              </span>
            </div>
            <h1 className="text-3xl font-bold text-teal-700 mb-1 font-sans tracking-tight drop-shadow-sm">
              ManoMitra
            </h1>
            <div className="text-base text-gray-600 mb-2 font-medium italic">
              A friend for your feelings
            </div>
          </div>
          <div className="max-w-md mx-auto w-full">
            <div className="mb-5">
              <label
                htmlFor="language"
                className="block text-gray-600 mb-2 font-semibold"
              >
                Choose your language:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {LANGUAGES.map((l) => (
                  <button
                    className={`rounded-full px-4 py-2 text-lg border font-medium bg-white/80 transition hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 shadow-sm
                      ${
                        lang === l.code
                          ? "border-teal-500 bg-teal-400/80 text-white"
                          : "border-gray-200 text-teal-800"
                      }`}
                    key={l.code}
                    onClick={() => setLang(l.code)}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
            <button
              className="w-full bg-teal-500 text-white py-2 rounded-full font-semibold hover:bg-teal-600 transition active:scale-95 shadow-md"
              onClick={() => setStep(1)}
            >
              Get Started
            </button>
          </div>
        </>
      )}
      {step === 1 && <MoodCheckin onDone={() => onFinish(lang)} lang={lang} />}
    </div>
  );
};

export default Onboarding;
