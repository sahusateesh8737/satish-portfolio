import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
