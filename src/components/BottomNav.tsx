
import { Heart, Calendar, User, Book } from "lucide-react";

const NAVS = [
  { name: "Home", icon: Heart },
  { name: "Counsel", icon: Book },
  { name: "Community", icon: Calendar },
  { name: "Profile", icon: User }
];

const BottomNav = ({ tab, setTab }: { tab: number; setTab: (t: number) => void }) => (
  <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow z-20 flex justify-center border-t border-gray-200">
    <div className="flex w-full max-w-xl mx-auto">
      {NAVS.map((n, i) => {
        const Active = i === tab;
        const Icon = n.icon;
        return (
          <button
            className={`flex-1 flex flex-col items-center py-2 transition ${Active ? "text-teal font-semibold" : "text-gray-500"}`}
            key={n.name}
            onClick={() => setTab(i)}
          >
            <span className={`mb-0.5 ${Active ? "scale-125" : ""}`}>
              <Icon size={24} color={Active ? "#48BFB6" : "#888"} />
            </span>
            <span className="text-xs">{n.name}</span>
          </button>
        );
      })}
    </div>
  </nav>
);

export default BottomNav;
