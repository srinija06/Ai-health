import Onboarding from "@/components/Onboarding";
import Chatbot from "@/components/Chatbot";
import TherapistList from "@/components/TherapistList";
import CommunityHub from "@/components/CommunityHub";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

const Index = () => {
  // Main "tab" navigation: 0 = Home/Chatbot, 1 = Counsel, 2 = Community, 3 = Profile
  const [tab, setTab] = useState(0);
  const [onboarding, setOnboarding] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <div className="bg-calm-gradient min-h-screen flex flex-col items-center justify-between">
      {onboarding ? (
        <Onboarding
          onFinish={(lang) => {
            setLanguage(lang);
            setOnboarding(false);
          }}
        />
      ) : (
        <>
          {/* Tabs */}
          <main className="w-full flex-1 flex flex-col pt-2 pb-20 animate-fade-in max-w-xl mx-auto min-h-[60vh]">
            {tab === 0 && (
              <Chatbot language={language} />
            )}
            {tab === 1 && (
              <TherapistList language={language} />
            )}
            {tab === 2 && (
              <CommunityHub language={language} />
            )}
            {tab === 3 && (
              // Simple profile mock (can be replaced)
              <div className="flex flex-col items-center justify-center h-full gap-3 py-12">
                <img src="https://api.dicebear.com/8.x/fun-emoji/svg?seed=smile" alt="avatar" className="rounded-full w-20 h-20" />
                <h2 className="font-bold text-xl text-teal-600">Profile</h2>
                <p className="text-gray-700 text-sm">Language: {language === "en" ? "English" : language}</p>
                <button
                  className="bg-teal text-white px-4 py-2 rounded-full font-semibold mt-2 hover:bg-teal-600"
                  onClick={() => setOnboarding(true)}
                >
                  Change Language
                </button>
              </div>
            )}
          </main>
          <BottomNav tab={tab} setTab={setTab} />
        </>
      )}
    </div>
  );
};

export default Index;
