import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 border-t-2 border-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-6xl md:text-8xl uppercase mb-12">
          Projects
        </h2>
        <div className="border-t-2 border-foreground">
          {projects.map((project) => (
            <details
              key={project.id}
              id={project.id}
              name="projects"
              className="project-row border-b-2 border-foreground"
            >
              <summary className="project-summary">
                <h3 className="font-display text-4xl md:text-6xl uppercase">
                  {project.title}
                </h3>
                <span className="project-meta">
                  <span>{project.category}</span>
                  {project.date && <span>{project.date}</span>}
                  <ArrowUpRight
                    className="project-arrow"
                    size={28}
                    aria-hidden="true"
                  />
                </span>
              </summary>
              <div className="project-content">
                <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 border-l-2 border-foreground pl-5">
                  <div>
                    <h4 className="text-xl font-bold mb-3">
                      {project.headline}
                    </h4>
                    <p className="text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-base leading-relaxed">
                    <h4 className="font-bold uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <p>{project.tech.join(", ")}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 font-bold uppercase underline underline-offset-4"
                    >
                      View Project <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mt-8 border-y border-foreground py-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong className="font-display text-3xl uppercase">
                        {metric.value}
                      </strong>
                      <p className="text-base mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  {project.architecture.map((item) => (
                    <div key={item.label}>
                      <h4 className="text-base font-bold uppercase tracking-wider mb-2">
                        {item.label}
                      </h4>
                      <p className="text-lg leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
                {project.footnote && (
                  <p className="text-base leading-relaxed mt-8 opacity-70">
                    {project.footnote}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
