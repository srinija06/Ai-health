import { useState, useRef, useEffect } from "react";
import { User, Heart, Send, Circle } from "lucide-react";

// Mocked responses for now (no real AI yet)
const BOT_RESPONSES: Record<string, string[]> = {
  en: [
    "I'm here for you. How are you feeling today?",
    "Would you like to try a deep breathing exercise?",
    "Remember, your thoughts are valid.",
    "Want to check your mood or talk to someone?"
  ],
  hi: [
    "मैं आपकी मदद के लिए हूँ। आप आज कैसे महसूस कर रहे हैं?",
    "क्या आप डीप ब्रीदिंग करना चाहेंगे?",
    "आपके विचार महत्वपूर्ण हैं।",
    "क्या आप किसी से बात करना चाहेंगे?"
  ],
  ta: [
    "நான் உங்களுடன் இருக்கிறேன். இன்று எப்படி உணர்கிறீர்கள்?",
    "நீங்கள் ஆழ்ந்த சுவாச பயிற்சி செய்ய விரும்புகிறீர்களா?",
    "உங்கள் எண்ணங்கள் முக்கியமானவை.",
    "யாராவது பேச விரும்புகிறீர்களா?"
  ]
};

const NAMES: Record<string, string> = {
  en: "Saathi",
  hi: "साथी",
  ta: "நண்பா"
};

const Chatbot = ({ language }: { language: string }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: BOT_RESPONSES[language]?.[0] || BOT_RESPONSES["en"][0] }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  // const { sendMessage, isLoading } = useGeminiChat(); // Example Gemini hook

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Use Gemini for AI response
  async function handleUserSend() {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input.trim() };
    setMessages(msgs => [...msgs, userMsg]);
    setInput("");
    // Gemini API call (pseudo code, replace with real Gemini call)
    try {
      // const aiResponse = await sendMessage(input.trim(), language);
      // setMessages(msgs => [...msgs, { from: "bot", text: aiResponse }]);
      setTimeout(() => {
        setMessages(msgs => [
          ...msgs,
          { from: "bot", text: BOT_RESPONSES[language]?.[Math.floor(Math.random() * BOT_RESPONSES[language].length)] ?? BOT_RESPONSES["en"][0] }
        ]);
      }, 1200); // Placeholder for async Gemini response
    } catch (e) {
      setMessages(msgs => [...msgs, { from: "bot", text: "Sorry, I couldn't process that. Please try again." }]);
    }
  }

  return (
    <section className="max-w-lg w-full mx-auto h-full flex flex-col items-stretch px-0 pb-2 pt-4 font-sans animate-fade-in">
      {/* Chat header */}
      <div className="w-full flex items-center gap-2 mb-3 px-4">
        <div className="bg-lavender/80 p-2 rounded-full">
          <Heart size={22} color="#FF977C" />
        </div>
        <div>
          <div className="font-bold text-lg text-teal-700">{NAMES[language] || NAMES["en"]} <span className="text-xs text-gray-400 font-normal">(AI)</span></div>
          <div className="text-xs text-gray-500">Your well-being companion</div>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-2 px-3 pb-3 scrollbar-thin scrollbar-thumb-lavender scrollbar-track-white">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex w-full items-end gap-2 ${m.from === "user" ? "justify-end" : "justify-start"}`}
          >
            {m.from === "bot" && (
              <div className="rounded-full p-1 bg-white/70">
                <Heart size={18} color="#FF977C" />
              </div>
            )}
            <div
              className={`rounded-2xl px-4 py-2 text-sm shadow
                ${m.from === "user"
                  ? "bg-teal/90 text-white self-end"
                  : "bg-white/90 text-gray-800 self-start"} 
                max-w-[75%] break-words`}
            >
              {m.text}
            </div>
            {m.from === "user" && (
              <div className="rounded-full p-1 bg-white/70">
                <User size={18} color="#48BFB6" />
              </div>
            )}
          </div>
        ))}
        <div ref={endRef} />
      </div>
      {/* Input */}
      <form
        className="flex items-center gap-2 bg-white/80 rounded-full shadow px-3 py-2 mx-3 mt-2"
        onSubmit={e => { e.preventDefault(); handleUserSend(); }}
      >
        <input
          className="flex-1 outline-none bg-transparent text-base pl-1"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your feelings…"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="p-1 rounded-full bg-teal/80 hover:bg-teal transition text-white"
        >
          <Send size={20} />
        </button>
      </form>
      {/* Quick mood/calm CTAs */}
      <div className="flex gap-2 mt-5 px-6 justify-center">
        <button className="bg-lavender text-teal-900 font-semibold rounded-full px-4 py-1 text-xs hover:bg-lavender/90 transition">Track Mood</button>
        <button className="bg-coral text-white font-semibold rounded-full px-4 py-1 text-xs hover:bg-coral/90 transition">Try Breathing</button>
      </div>
      <div className="py-6"></div>
    </section>
  );
};
export default Chatbot;
