const TECHNOLOGIES = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
  "Express", "Python", "C++", "PostgreSQL", "MongoDB", 
  "Docker", "AWS", "Git"
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-4 border-t-2 border-foreground overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-6xl md:text-8xl uppercase mb-12">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6">
          {TECHNOLOGIES.map((tech, index) => (
            <span 
              key={index} 
              className="font-display text-3xl md:text-5xl uppercase opacity-80 hover:opacity-100 hover:scale-105 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
