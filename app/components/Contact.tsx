"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDownToLine, ArrowUp, Check, Copy } from "lucide-react";
const email = "sahusateesh8737@gmail.com";
export default function Contact() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timeout.current), []);
  const copy = async () => {
    clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timeout.current = setTimeout(() => setStatus("idle"), 4000);
  };
  return (
    <section
      id="contact"
      className="py-24 px-4 border-t-2 border-foreground bg-foreground text-background"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="font-display text-6xl md:text-8xl uppercase mb-12">
          Let’s Talk
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="contact-email text-lg md:text-3xl font-bold uppercase tracking-wider hover:underline underline-offset-8"
          >
            {email}
          </a>
          <button
            className="p-3 border border-current"
            onClick={copy}
            aria-label="Copy email address"
          >
            {status === "copied" ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>
        <p role="status" className="min-h-8 text-base mt-3">
          {status === "copied"
            ? "Email copied."
            : status === "error"
              ? "Couldn’t copy. Select the email above or click it to get in touch."
              : " "}
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-6 font-bold uppercase tracking-wider text-base">
          <a
            href="https://www.linkedin.com/in/satish-sahu-77856428a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sahusateesh8737"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="/Satish_Sahu_resume.pdf"
            download
            className="inline-flex items-center gap-2 hover:underline underline-offset-4"
          >
            Resume <ArrowDownToLine size={18} />
          </a>
        </div>
        <footer className="flex flex-wrap justify-between gap-5 border-t border-current mt-16 pt-6 text-sm uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Satish Sahu</p>
          <a href="#home" className="inline-flex items-center gap-2">
            Back to top <ArrowUp size={16} />
          </a>
        </footer>
      </div>
    </section>
  );
}
