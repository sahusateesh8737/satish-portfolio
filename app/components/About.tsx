export default function About() {
  return (
    <section id="about" className="py-24 px-4 border-t-2 border-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-6xl md:text-8xl uppercase mb-12">
          About
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-lg md:text-2xl font-medium leading-relaxed">
          <div>
            <p className="mb-6">
              I am a Full-Stack Developer with a passion for problem-solving and building robust web applications. I am currently pursuing my B.Tech in Computer Science and Engineering at Lovely Professional University.
            </p>
            <p>
              I specialize in the MERN stack and modern web technologies, always striving to deliver clean, scalable, and high-performance solutions.
            </p>
          </div>
          <div className="flex flex-col gap-6 font-bold uppercase text-sm tracking-widest">
            <div className="border-b-2 border-foreground pb-4">
              <h3 className="mb-2 opacity-60">Languages</h3>
              <p>C++, JavaScript, C, PHP, Python</p>
            </div>
            <div className="border-b-2 border-foreground pb-4">
              <h3 className="mb-2 opacity-60">Technologies</h3>
              <p>React, Next.js, Node.js, Express, Docker, PostgreSQL, MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
