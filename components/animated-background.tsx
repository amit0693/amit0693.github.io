"use client";

import { useEffect } from "react";
import "../styles/animated-background.css";

export function AnimatedBackground({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add font to document head
    const fontFaceStyle = document.createElement("style");
    fontFaceStyle.textContent = `
      @font-face {
        font-family: "Geist";
        src: url("https://assets.codepen.io/605876/GeistVF.ttf") format("truetype");
      }
    `;
    document.head.appendChild(fontFaceStyle);

    return () => {
      document.head.removeChild(fontFaceStyle);
    };
  }, []);

  return (
    <>
      <div className="animated-background-container">
        <div className="animated-background-element"></div>
      </div>
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </>
  );
}
