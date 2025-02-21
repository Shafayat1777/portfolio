"use client";

import { useState, useEffect } from "react";

const TypewriterText: React.FC = () => {
  const fullText: string = `Passionate and dedicated web developer who loves coding and problem-solving. Proficient in Next.js, React.js, Node.js and Express.js, I enjoy building efficient and scalable web applications.`;

  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index)); // use charAt() to get a single character
        index++;
      } else {
        clearInterval(typingInterval); // stop the interval when finished
      }
    }, 50); // Adjust typing speed

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []); // Empty array ensures this effect runs once on mount

  return (
    <p className="text sm:text-lg font-light text-slate-300 mt-5">
      {displayedText}
    </p>
  );
};

export default TypewriterText;
