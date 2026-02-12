import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

const VoiceAssistant: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [status, setStatus] = useState("Disabled");

  useEffect(() => {
    if (!enabled) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setStatus("Voice not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-IN";

    recognition.onresult = (event: any) => {
      const command = event.results[event.results.length - 1][0].transcript
        .toLowerCase()
        .trim();

      console.log("Voice Command:", command);

      if (command.includes("accept")) {
        alert("Order Accepted via Voice");
      }

      if (command.includes("reject")) {
        alert("Order Rejected via Voice");
      }
    };

    recognition.start();
    setStatus("Listening...");

    return () => recognition.stop();
  }, [enabled]);

  return (
    <div className="card">
      <h3>🎙 Voice Assistant</h3>
      <p>{enabled ? "Hands-free order control enabled" : "Voice disabled"}</p>

      <button
        className={enabled ? "btn-danger" : "btn-primary"}
        onClick={() => setEnabled(!enabled)}
      >
        {enabled ? "Disable Voice" : "Enable Voice"}
      </button>

      <p className="muted">{status}</p>
    </div>
  );
};

export default VoiceAssistant;
