"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    let frame = 0;
    let resizeFrame = 0;
    function configure() {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = undefined;
      if (preference.matches) return;
      lenis = new Lenis({
        duration: 1,
        smoothWheel: true,
        // The root has h-full; its box stays viewport-sized when details expand.
        // Observe the growing body so Lenis updates the full scrollable height.
        content: document.body,
      });
      const tick = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }
    const handleToggle = (event: Event) => {
      if (!(event.target instanceof HTMLDetailsElement)) return;
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        // Refresh before the next wheel gesture, without the observer's debounce.
        lenis?.resize();
        // Discard an in-flight target that may lie beyond the collapsed page.
        lenis?.scrollTo(window.scrollY, { immediate: true });
      });
    };
    // Native anchors retain their URL, history, and keyboard-focus behavior.
    configure();
    // Disclosure transitions change page height every frame. Lenis's default
    // debounced observer can otherwise clamp wheel gestures to an older height.
    const projects = document.getElementById("projects");
    const projectResizeObserver = new ResizeObserver(() => lenis?.resize());
    if (projects) projectResizeObserver.observe(projects);
    preference.addEventListener("change", configure);
    // Native details toggle events do not bubble.
    document.addEventListener("toggle", handleToggle, true);
    return () => {
      preference.removeEventListener("change", configure);
      document.removeEventListener("toggle", handleToggle, true);
      projectResizeObserver.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeFrame);
      lenis?.destroy();
    };
  }, []);
  return children;
}
