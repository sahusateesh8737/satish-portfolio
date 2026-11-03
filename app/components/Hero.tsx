export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      <h1 className="font-display text-[15vw] leading-[0.8] uppercase tracking-tighter mb-6 animate-fade-in-up">
        Satish
      </h1>
      <h2 className="text-xl md:text-3xl font-bold uppercase tracking-widest border-y-2 border-foreground py-4 w-full max-w-4xl mx-auto animate-fade-in-up [animation-delay:200ms]">
        Full-Stack Developer
      </h2>
      <p className="mt-8 max-w-2xl text-lg md:text-xl font-medium animate-fade-in-up [animation-delay:400ms]">
        Building scalable digital solutions and high-performance applications.
      </p>
     
    </section>
  );
}
