const EDUCATION = [
  {
    id: 1,
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Aug 2023 - Present"
  },
  {
    id: 2,
    school: "Shiva ji Inter College",
    location: "Keshav Nagar, Kanpur",
    degree: "Intermediate (12th Grade)",
    period: "Apr 2020 - Jul 2021"
  },
  {
    id: 3,
    school: "Rahul Memorial Inter College",
    location: "Yashoda Nagar, Kanpur",
    degree: "Matriculation (10th Grade)",
    period: "Apr 2018 - Mar 2019"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 border-t-2 border-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-6xl md:text-8xl uppercase mb-12">
          Education
        </h2>
        <div className="flex flex-col border-t-2 border-foreground">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="group flex flex-col py-8 border-b-2 border-foreground hover:bg-foreground hover:text-background transition-colors px-4"
            >
              <div className="flex flex-col md:flex-row justify-between w-full">
                <div className="flex flex-col">
                  <h3 className="font-display text-3xl md:text-5xl uppercase group-hover:pl-4 transition-all duration-300">
                    {edu.school}
                  </h3>
                  <p className="mt-2 text-lg font-bold uppercase tracking-widest group-hover:pl-4 transition-all duration-300 delay-75">
                    {edu.degree}
                  </p>
                </div>
                <div className="flex flex-col md:items-end mt-4 md:mt-0 font-bold uppercase tracking-widest text-sm opacity-80 gap-1">
                  <span>{edu.period}</span>
                  <span className="opacity-60">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
