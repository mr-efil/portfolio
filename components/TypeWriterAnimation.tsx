import React, { useState, useEffect } from "react";

const TypewriterAnimation = ({
  textArray,
  speed,
}: {
  textArray: string[];
  speed: number;
}) => {
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentString, setCurrentString] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (charIndex < textArray[stringIndex].length) {
          setCurrentString(
            (prevString) =>
              prevString + textArray[stringIndex].charAt(charIndex)
          );
          setCharIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (charIndex > 0) {
          setCurrentString((prevString) => prevString.slice(0, -1));
          setCharIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsTyping(true);
          setStringIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          setCurrentString("");
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [charIndex, isTyping, speed, stringIndex, textArray]);

  return <p className="animatedText text-3xl text-red-500">{currentString}</p>;
};

export default TypewriterAnimation;
