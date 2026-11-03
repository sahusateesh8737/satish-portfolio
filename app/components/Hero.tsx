import Image from "next/image";
import BinaryBackground from "./BinaryBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-[calc(100svh-4rem)] flex items-center px-4 py-16 md:py-24"
    >
      <BinaryBackground />
      <div className="relative z-10 pointer-events-none grid w-full max-w-6xl mx-auto items-center gap-12 md:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div className="min-w-0 text-left bg-background pointer-events-auto">
          <h1 className="font-display text-[clamp(5rem,12vw,11rem)] leading-[0.9] uppercase tracking-tighter mb-8 animate-fade-in-up">
            Satish
          </h1>
          <h2 className="text-xl lg:text-3xl font-bold uppercase tracking-wider border-y-2 border-foreground py-4 animate-fade-in-up [animation-delay:200ms]">
            Full-Stack Developer
          </h2>
          <p className="mt-8 max-w-lg text-lg md:text-xl font-medium leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            Building scalable digital solutions and high-performance applications.
          </p>
        </div>
        <div className="w-full max-w-md justify-self-center md:justify-self-end overflow-hidden rounded-3xl pointer-events-auto">
          <Image
            src="/images/satish-pixel-portrait.png"
            alt="Black-and-white pixel-art portrait of Satish Sahu"
            width={1254}
            height={1254}
            sizes="(max-width: 479px) calc(100vw - 32px), (max-width: 767px) 448px, (max-width: 1199px) 43vw, 448px"
            loading="eager"
            fetchPriority="high"
            className="hero-portrait block w-full h-auto grayscale [image-rendering:pixelated]"
          />
        </div>
      </div>
    </section>
  );
}
