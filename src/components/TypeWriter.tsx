"use client";

import { useState, useEffect } from "react";

const TypewriterText: React.FC = () => {
  const fullText: string = `
    a passionate and dedicated web developer who loves
    coding and problem-solving. Proficient in Next.js,
    Express.js, React, and Node.js, I enjoy building 
    efficient and scalable web applications`;

  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;

    const typeEffect = () => {
      typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50); // Typing speed (adjust as needed)
    };

    setDisplayedText(""); // Reset text on remount
    typeEffect();

    // Cleanup interval on component unmount
    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <p className="text sm:text-lg font-light text-slate-300 mt-5 ">
      {displayedText}
    </p>
  );
};

export default TypewriterText;
