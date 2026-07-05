export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 border-t-2 border-foreground bg-foreground text-background">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="font-display text-6xl md:text-8xl uppercase mb-12">
          Let's Talk
        </h2>
        <a href="mailto:sahusateesh8737@gmail.com" className="block text-xl md:text-3xl font-bold uppercase tracking-widest mb-12 hover:underline underline-offset-8">
          sahusateesh8737@gmail.com
        </a>
        <div className="flex justify-center gap-8 font-bold uppercase tracking-widest text-sm">
          <a href="https://www.linkedin.com/in/satish-sahu-77856428a/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">LinkedIn</a>
          <a href="https://github.com/sahusateesh8737" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">GitHub</a>
        </div>
      </div>
    </section>
  );
}
