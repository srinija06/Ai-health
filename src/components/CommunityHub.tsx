
import { Calendar, Heart } from "lucide-react";
import { useState } from "react";

const EVENTS = [
  {
    id: 1,
    title: "Sunrise Yoga (Virtual)",
    time: "6:30 am, Daily",
    desc: "Join from anywhere, all levels welcome!",
    icon: <Heart size={22} color="#48BFB6" />,
    tag: "Wellness"
  },
  {
    id: 2,
    title: "Journaling Circle (English, Hindi)",
    time: "Every Sat, 7 pm",
    desc: "Reflect and share in a safe space.",
    icon: <Calendar size={22} color="#CBA3E3" />,
    tag: "Community"
  },
  {
    id: 3,
    title: "City Support Meetup (Bengaluru)",
    time: "This Sun, 11 am",
    desc: "In-person support group meetup.",
    icon: <Heart size={22} color="#FF977C" />,
    tag: "In-Person"
  }
];

const CommunityHub = ({ language }: { language: string }) => {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <section className="max-w-xl w-full mx-auto mt-3 px-3 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={22} color="#CBA3E3" />
        <h2 className="text-xl font-bold text-teal-800">Community Wellness Hub</h2>
      </div>
      <div className="mb-2 text-gray-600 text-sm">Join an event, or create your own group!</div>
      <button
        onClick={() => setShowCreate(true)}
        className="bg-teal text-white px-4 py-1 rounded-full text-sm font-semibold mb-3 hover:bg-teal-600 transition"
      >
        + Create Group/Event
      </button>
      <div className="flex flex-col gap-4 mt-2">
        {EVENTS.map(ev => (
          <div key={ev.id} className="bg-white/90 rounded-2xl shadow p-4 flex gap-4 items-center">
            <div className="rounded-full bg-lavender/30 p-3">{ev.icon}</div>
            <div>
              <div className="font-bold text-lg text-coral">{ev.title}</div>
              <div className="text-xs text-gray-500 mb-1">{ev.time}</div>
              <div className="text-sm text-teal-900">{ev.desc}</div>
              <div className="mt-2 flex gap-2">
                <span className="bg-coral/30 text-coral px-2 py-0.5 rounded-full text-xs">{ev.tag}</span>
                <button className="bg-teal/10 text-teal-900 font-semibold px-2 py-0.5 rounded-full text-xs hover:bg-teal/30">Join</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Create Event/Group Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white max-w-sm w-full p-6 rounded-lg shadow-lg flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2 text-teal-700">Create a Group/Event</h3>
            <input className="border rounded px-3 py-2 bg-gray-50" placeholder="Title" />
            <input className="border rounded px-3 py-2 bg-gray-50" placeholder="Time" />
            <textarea className="border rounded px-3 py-2 bg-gray-50" placeholder="Description" />
            <div className="flex gap-2 mt-2">
              <button className="bg-teal text-white rounded-full px-4 py-1 text-sm">Create</button>
              <button className="bg-gray-200 rounded-full px-4 py-1 text-sm" onClick={() => setShowCreate(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <div className="text-sm text-gray-400 mt-6 text-center">Local and online groups for your well-being</div>
    </section>
  );
};
export default CommunityHub;
