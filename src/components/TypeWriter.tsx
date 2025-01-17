"use client";

import { useState, useEffect } from "react";

const TypewriterText: React.FC = () => {
  const fullText: string = `
    I am a passionate and dedicated individual with a love for coding,
    problem-solving, and crafting innovative machine learning models.
    Proficient in the MERN (MongoDB, Express.js, React, Node.js) stack, I
    also have a keen interest in web development.
  `;

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
    <p className="text-lg font-light text-slate-300 mt-5">{displayedText}</p>
  );
};

export default TypewriterText;
