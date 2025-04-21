import React, { useEffect, useState } from "react";
import "./Typewriter.css";

const texts = [
  "Full Stack Developer",
  "Web Enthusiast",
  "Work in Progress",
  "Problem Solver",
  "Lifelong Learner",
  "Book Lover",
  "Aniaml Lover",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!deleting) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 150);
      if (charIndex === currentText.length) {
        setDeleting(true);
        timeout = setTimeout(() => {}, 2000); // pausa prima di cancellare
      }
    } else {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 100);
      if (charIndex === 0) {
        setDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex]);

  return (
    <div className="typewriter">
      <p>
        I'm a <span className="typed-text">{text}</span>
        <span className="cursor">|</span>
      </p>
    </div>
  );
}
