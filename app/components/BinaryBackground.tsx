"use client";

import { useEffect, useRef } from "react";

const binaryPattern = "01001011010110100011010110010101";
const binaryColumns = Array.from({ length: 20 }, (_, column) =>
  Array.from(
    { length: 40 },
    (_, row) => binaryPattern[(row * 7 + column * 11) % binaryPattern.length],
  ).join("\n"),
);

export default function BinaryBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const hero = background?.parentElement;
    if (!background || !hero) return;

    const hideHighlight = () => {
      background.dataset.active = "false";
    };
    const moveHighlight = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        hideHighlight();
        return;
      }
      const bounds = background.getBoundingClientRect();
      background.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
      background.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
      background.dataset.active = "true";
    };

    hero.addEventListener("pointermove", moveHighlight);
    hero.addEventListener("pointerleave", hideHighlight);
    hero.addEventListener("pointercancel", hideHighlight);
    window.addEventListener("scroll", hideHighlight, { passive: true });
    window.addEventListener("blur", hideHighlight);
    return () => {
      hero.removeEventListener("pointermove", moveHighlight);
      hero.removeEventListener("pointerleave", hideHighlight);
      hero.removeEventListener("pointercancel", hideHighlight);
      window.removeEventListener("scroll", hideHighlight);
      window.removeEventListener("blur", hideHighlight);
    };
  }, []);

  return (
    <div className="hero-binary" ref={backgroundRef} aria-hidden="true">
      {["hero-binary-base", "hero-binary-highlight"].map((layer) => (
        <div className={`hero-binary-layer ${layer}`} key={layer}>
          {binaryColumns.map((digits, index) => (
            <span className="hero-binary-column" key={index}>
              {digits}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
