import { useEffect, useState } from "react";

const ReminderModal = () => {
  const [show, setShow] = useState(false);
  const messages = [
    "Remember: You’re training for real-world response. Stay sharp.",
    "CyberWarriors don’t skip days. Keep the streak alive.",
    "One breach can collapse a system. Your training matters.",
    "You’ve got this. Analyze, respond, protect."
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-cyber-bg border border-cyber-neon text-white p-6 rounded-md text-center max-w-md">
        <p>{messages[Math.floor(Math.random() * messages.length)]}</p>
        <button
          className="mt-4 px-4 py-2 bg-cyber-neon text-black rounded hover:bg-white"
          onClick={() => setShow(false)}
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default ReminderModal;