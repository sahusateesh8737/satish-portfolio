const CERTIFICATES = [
  {
    id: 1,
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Nov 2025",
    link: "https://www.hackerrank.com/certificates/f581447a167a",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "Nov 2025",
    link: "https://www.hackerrank.com/certificates/88b561944130",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    issuer: "CipherSchools",
    date: "Jul 2025",
    link: "https://www.cipherschools.com/certificate/preview?id=687e463c7efd6d5090703e24",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-4 border-t-2 border-foreground"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-6xl md:text-8xl uppercase mb-12">
          Certificates
        </h2>
        <div className="flex flex-col border-t-2 border-foreground">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col py-8 border-b-2 border-foreground hover:bg-foreground hover:text-background transition-colors px-4"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
                <div className="flex flex-col">
                  <h3 className="font-display text-3xl md:text-5xl uppercase group-hover:pl-4 transition-all duration-300">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-lg font-bold uppercase tracking-widest group-hover:pl-4 transition-all duration-300 delay-75">
                    {cert.issuer}
                  </p>
                </div>
                <div className="flex flex-col md:items-end mt-4 md:mt-0 font-bold uppercase tracking-widest text-base opacity-80 gap-1">
                  <span>{cert.date}</span>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 hover:underline underline-offset-4"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
