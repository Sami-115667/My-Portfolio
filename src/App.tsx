import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Achievements from "./components/sections/Achievements";
import ExtraCurricular from "./components/sections/ExtraCurricular";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <ExtraCurricular />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
