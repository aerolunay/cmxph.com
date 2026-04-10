import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! 👋 I'm Callie, your CMX Hiring Assistant. How can I help you today?",
      sender: "bot"
    }
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  const QUICK_OPTIONS = [
    "View Jobs",
    "Hiring Process",
    "Location",
    "Salary"
  ];

  /*
  ========================
  AUTO SCROLL
  ========================
  */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /*
  ========================
  CLOSE WITH ANIMATION
  ========================
  */
  const closeChat = () => {
    setIsClosing(true);

    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 250); // match animation duration
  };

  /*
  ========================
  UTILS
  ========================
  */
  const normalizeText = (text) => text?.toLowerCase().trim() || "";

  const hasKeyword = (text, keywords) => {
    return keywords.some((k) => text.includes(k));
  };

  /*
  ========================
  UNIQUE POSITIONS
  ========================
  */
  const getUniquePositions = (jobs) => {
    const map = new Map();

    jobs.forEach((job) => {
      if (!job?.position_title) return;

      const key = job.position_title.trim().toLowerCase();

      if (!map.has(key)) {
        map.set(key, job.position_title.trim());
      }
    });

    return Array.from(map.values());
  };

  /*
  ========================
  FORMAT JOB LIST
  ========================
  */
  const formatJobList = (positions) => {
    return positions
      .map((title, i) => `${i + 1}. ${title}`)
      .join("\n\n");
  };

  /*
  ========================
  FETCH JOBS
  ========================
  */
  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/recruitment/jobs");
      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      return data?.data || [];
    } catch (err) {
      console.error("❌ Job fetch error:", err);
      return null;
    }
  };

  /*
  ========================
  TEXT RENDER
  ========================
  */
  const renderMessageText = (text) => {
    return text.split("\n").map((line, i) => (
      <div key={i}>{line}</div>
    ));
  };

  /*
  ========================
  BOT LOGIC
  ========================
  */
  const getBotReply = async (msg) => {
    const text = normalizeText(msg);

    const JOB_KEYWORDS = [
      "job",
      "jobs",
      "opening",
      "open",
      "position",
      "positions",
      "role",
      "roles"
    ];

    if (hasKeyword(text, JOB_KEYWORDS)) {
      const jobs = await fetchJobs();

      if (!jobs) {
        return { text: "⚠️ Unable to load jobs right now." };
      }

      if (!jobs.length) {
        return { text: "No open positions at the moment." };
      }

      const uniquePositions = getUniquePositions(jobs);
      const jobList = formatJobList(uniquePositions);

      return {
        text: `Here are our open positions 👇\n\n${jobList}`,
        button: {
          label: "Apply Now",
          url: "https://quickapply.cmxph.com"
        }
      };
    }

    if (hasKeyword(text, ["apply"])) {
      return {
        text: "Ready to apply?",
        button: {
          label: "Apply Now",
          url: "https://quickapply.cmxph.com"
        }
      };
    }

    if (hasKeyword(text, ["location", "address", "located"])) {
      return {
        text: "We are located at Imus, Cavite 🇵🇭",
        button: {
          label: "View on Google Maps",
          url: "https://maps.app.goo.gl/itRGpmVQ8o3qJKnr7"
        }
      };
    }

    if (hasKeyword(text, ["process", "hiring"])) {
      return {
        text: "We offer a fast hiring process including 1-day hiring ⚡"
      };
    }

    if (hasKeyword(text, ["salary", "pay"])) {
      return {
        text: "Salary depends on the role and experience 😊"
      };
    }

    return {
      text: "I can help with the following 👇",
      options: QUICK_OPTIONS
    };
  };

  /*
  ========================
  SEND MESSAGE
  ========================
  */
  const sendMessage = (customText = null) => {
    const messageText = customText || input;
    if (!messageText.trim()) return;

    setMessages((prev) => [...prev, { text: messageText, sender: "user" }]);
    setInput("");

    setMessages((prev) => [...prev, { sender: "bot", typing: true }]);

    setTimeout(async () => {
      const reply = await getBotReply(messageText);

      setMessages((prev) => {
        const cleaned = prev.filter((m) => !m.typing);
        return [...cleaned, { ...reply, sender: "bot" }];
      });
    }, 700);
  };

  /*
  ========================
  UI
  ========================
  */
  return (
    <>
      {/* CHAT BUTTON */}
      <div
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full cursor-pointer shadow-lg hover:bg-blue-700 transition"
      >
        💬 Chat
      </div>

      {open && (
        <div
          className={`fixed bottom-20 right-6 w-[90vw] sm:w-80 max-h-[70vh] bg-white shadow-xl rounded-xl flex flex-col overflow-hidden transform transition-all duration-300
          ${isClosing ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"}
          `}
        >
          {/* HEADER */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center text-sm font-semibold">
            <span>Callie • CMX Assistant</span>

            <button
              onClick={closeChat}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-blue-700 transition"
            >
              ✕
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div key={i}>
                <div
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-100 ml-auto"
                      : "bg-gray-100"
                  }`}
                >
                  {msg.typing ? (
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  ) : (
                    renderMessageText(msg.text)
                  )}
                </div>

                {/* BUTTON */}
                {msg.button && (
                  <div className="mt-2">
                    <a
                      href={msg.button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                    >
                      {msg.button.label}
                    </a>
                  </div>
                )}

                {/* OPTIONS */}
                {msg.options && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => sendMessage(opt)}
                        className="text-xs bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-full"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 p-2 text-sm outline-none"
              placeholder="Ask Callie anything..."
            />
            <button
              onClick={() => sendMessage()}
              className="px-4 bg-blue-600 text-white hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}