"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Braces,
  Check,
  FileText,
  Monitor,
  Play,
  Radio,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
const demos = {
  pdf: {
    title: "Your files. Your browser.",
    subtitle: "A small illustration of local PDF processing.",
    input: "Two documents",
    process: "Browser engine",
    output: "Merged PDF",
    idle: "Ready to merge sample documents",
    steps: [
      "Reading two sample documents…",
      "Combining pages inside the browser…",
      "Merged. No upload needed for this operation.",
    ],
    action: "Merge sample files",
  },
  exam: {
    title: "Every event, in sync.",
    subtitle: "A simulated event from student to instructor.",
    input: "Student portal",
    process: "Socket.io",
    output: "Live monitor",
    idle: "Ready to send a sample activity event",
    steps: [
      "Sample student switched tabs…",
      "Sending activity through a WebSocket…",
      "Instructor monitor updated. Event logged.",
    ],
    action: "Send sample event",
  },
};
export default function SystemDemo() {
  const [mode, setMode] = useState<"pdf" | "exam">("pdf");
  const [step, setStep] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reducedMotion = useReducedMotion();
  const demo = demos[mode];
  const running = step > 0 && step < 3;
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const select = (next: "pdf" | "exam") => {
    clearTimers();
    setMode(next);
    setStep(0);
  };
  const run = () => {
    clearTimers();
    setStep(1);
    timers.current = [
      setTimeout(() => setStep(2), reducedMotion ? 200 : 850),
      setTimeout(() => setStep(3), reducedMotion ? 450 : 1900),
    ];
  };
  return (
    <div className="system-demo">
      <div className="demo-toolbar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="mono">THE BUILD LAB</span>
        <Braces size={15} />
      </div>
      <div
        className="demo-switch"
        role="group"
        aria-label="Choose an interactive project demo"
      >
        <button aria-pressed={mode === "pdf"} onClick={() => select("pdf")}>
          <FileText size={14} /> SnapPDF
        </button>
        <button aria-pressed={mode === "exam"} onClick={() => select("exam")}>
          <ShieldCheck size={14} /> FairPlay
        </button>
      </div>
      <div className="demo-content">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
          >
            <div className="demo-title">
              <h2>{demo.title}</h2>
              <p>{demo.subtitle}</p>
            </div>
            <div
              className={`system-diagram stage-${step}`}
              role="img"
              aria-label={`${demo.input} to ${demo.process} to ${demo.output}`}
            >
              <div className="diagram-orbit orbit-one" />
              <div className="diagram-orbit orbit-two" />
              <svg
                className="diagram-lines"
                viewBox="0 0 400 230"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="diagram-track"
                  d="M65 150 H115 Q130 150 130 130 V95 Q130 80 145 80 H200 M200 80 H255 Q270 80 270 95 V130 Q270 150 285 150 H335"
                />
                <path
                  className="diagram-signal"
                  d="M65 150 H115 Q130 150 130 130 V95 Q130 80 145 80 H200 M200 80 H255 Q270 80 270 95 V130 Q270 150 285 150 H335"
                />
              </svg>
              <div
                className={`diagram-node input-node ${step >= 1 ? "node-active" : ""}`}
              >
                <div>
                  {mode === "pdf" ? (
                    <FileText size={25} />
                  ) : (
                    <Monitor size={25} />
                  )}
                </div>
                <span>{demo.input}</span>
                <small>
                  {mode === "pdf" ? "01.pdf + 02.pdf" : "tab_switch"}
                </small>
              </div>
              <div
                className={`diagram-node engine-node ${step === 2 ? "node-processing" : ""}`}
              >
                <div>
                  {mode === "pdf" ? <Braces size={32} /> : <Radio size={32} />}
                </div>
                <span>{demo.process}</span>
                <small>
                  {mode === "pdf" ? "LOCAL PROCESSING" : "EVENT STREAM"}
                </small>
              </div>
              <div
                className={`diagram-node output-node ${step === 3 ? "node-active" : ""}`}
              >
                <div>
                  {step === 3 ? (
                    <Check size={25} />
                  ) : mode === "pdf" ? (
                    <FileText size={25} />
                  ) : (
                    <ShieldCheck size={25} />
                  )}
                </div>
                <span>{demo.output}</span>
                <small>{step === 3 ? "COMPLETE" : "WAITING"}</small>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="demo-log" role="status" aria-live="polite">
          <span className={running ? "status-dot running" : "log-dot"} />
          <span>{step === 0 ? demo.idle : demo.steps[step - 1]}</span>
        </div>
        <button className="demo-run" disabled={running} onClick={run}>
          {step === 3 ? (
            <RotateCcw size={14} />
          ) : (
            <Play size={13} fill="currentColor" />
          )}
          <span>
            {running
              ? "Running simulation…"
              : step === 3
                ? "Run it again"
                : demo.action}
          </span>
          <ArrowRight size={15} />
        </button>
      </div>
      <div className="demo-footer mono">
        <span>INTERACTIVE DEMO</span>
        <span>
          SIMULATED DATA <span className="tiny-cross">+</span>
        </span>
      </div>
    </div>
  );
}
