
import { useState } from "react";
import { User, Calendar, Heart } from "lucide-react";

const THERAPISTS = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    lang: ["English", "हिन्दी"],
    fee: 600,
    spec: ["Anxiety", "Stress"],
    image: "https://api.dicebear.com/8.x/notionists/svg?seed=doctor",
    mode: ["Chat", "Voice", "Video"]
  },
  {
    id: 2,
    name: "Mr. Arjun Roy",
    lang: ["English", "বাংলা"],
    fee: 450,
    spec: ["Motivation", "Confidence"],
    image: "https://api.dicebear.com/8.x/notionists/svg?seed=arjun",
    mode: ["Chat"]
  },
  {
    id: 3,
    name: "Ms. Divya Iyer",
    lang: ["English", "தமிழ்"],
    fee: 700,
    spec: ["Relationship", "Family"],
    image: "https://api.dicebear.com/8.x/notionists/svg?seed=divya",
    mode: ["Chat", "Voice"]
  }
];

const SPECIALIZATIONS = Array.from(new Set(THERAPISTS.flatMap(t => t.spec)));

const TherapistList = ({ language }: { language: string }) => {
  const [spec, setSpec] = useState<string>("");
  const [feeFilter, setFeeFilter] = useState<number>(0);

  return (
    <section className="max-w-xl w-full mx-auto mt-3 px-3 animate-fade-in">
      <div className="font-bold text-xl text-teal-700 mb-2 flex gap-2 items-center">
        <Heart size={22} color="#FF977C" />
        Find a Counselor
      </div>
      {/* Filters */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <select
          className="border rounded-full py-1 px-4 bg-white/80 shadow"
          value={spec}
          onChange={e => setSpec(e.target.value)}
        >
          <option value="">All Specializations</option>
          {SPECIALIZATIONS.map(s => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <select
          className="border rounded-full py-1 px-4 bg-white/80 shadow"
          value={feeFilter}
          onChange={e => setFeeFilter(Number(e.target.value))}
        >
          <option value={0}>Any Fee</option>
          <option value={500}>₹500 & below</option>
          <option value={600}>Up to ₹600</option>
          <option value={700}>Up to ₹700</option>
        </select>
      </div>
      {/* List */}
      <div className="flex flex-col gap-4">
        {THERAPISTS
          .filter(t =>
            (!spec || t.spec.includes(spec)) &&
            (!feeFilter || t.fee <= feeFilter)
          )
          .map(t => (
            <div key={t.id} className="bg-white/90 rounded-2xl shadow flex items-center px-4 py-3 gap-5">
              <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border shadow" />
              <div className="flex-1">
                <div className="font-bold text-lg text-teal-800">{t.name}</div>
                <div className="text-xs text-gray-500 mb-1">
                  Speaks: {t.lang.join(", ")}
                </div>
                <div className="flex gap-2 flex-wrap text-xs">
                  {t.mode.map(m => (
                    <span key={m} className="bg-lavender text-lavender-900 rounded-full px-2 py-0.5">{m}</span>
                  ))}
                  {t.spec.map(s => (
                    <span key={s} className="bg-teal/10 text-teal-700 rounded-full px-2 py-0.5">{s}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="text-coral font-bold text-base">₹{t.fee}</div>
                <button className="bg-coral text-white px-3 py-1 rounded-full text-xs mt-1 hover:bg-coral/80 transition">Book</button>
              </div>
            </div>
          ))}
      </div>
      <div className="text-sm text-gray-400 mt-6 text-center">Private, affordable chat/video therapy sessions</div>
    </section>
  );
};
export default TherapistList;
