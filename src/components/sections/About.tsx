import { ArrowUpRight, Braces, BrainCircuit, Smartphone } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const capabilities = [
  {
    icon: Braces,
    title: "Full-stack development",
    text: "Thoughtful interfaces, reliable APIs, and the systems that connect them.",
    skills: ["React", "TypeScript", "Spring Boot", "SQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile experiences",
    text: "From everyday apps to real-time industrial tools. Built to feel right.",
    skills: ["Flutter", "Dart", "Kotlin", "Firebase"],
  },
  {
    icon: BrainCircuit,
    title: "AI & machine learning",
    text: "Exploring intelligent solutions through data, evaluation, and experimentation.",
    skills: ["Python", "Machine Learning", "AI Evaluation"],
  },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="01"
            label="A LITTLE ABOUT ME"
            title={
              <>
                Curiosity is the start.
                <br />
                <span className="muted-heading">Craft is the difference.</span>
              </>
            }
          >
            <p>
              I care about how software works.
              <br />
              And just as much about how it feels.
            </p>
          </SectionHeading>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-story">
            <p>
              I’m <strong>Md Shamsur Rahman Sami</strong>, a software engineer
              based in Dhaka with a background in Computer Science & Engineering
              at the <strong>University of Dhaka.</strong>
            </p>
            <p>
              My work spans web applications, mobile products, and AI projects.
              From connecting RFID systems in Japan to building apps for clients
              in Australia and the UK, I enjoy turning a challenging idea into
              something people can use.
            </p>
            <p className="about-personal">
              Away from the keyboard? You’ll find me hiking, reading science
              fiction, or trying a new recipe.
            </p>
            <a className="text-link" href="#experience">
              Get to know my journey <ArrowUpRight size={17} />
            </a>
          </Reveal>
          <Reveal className="about-facts" delay={0.1}>
            <div>
              <span className="fact-number">
                3<span>+</span>
              </span>
              <p>
                Years of building
                <br />
                and learning
              </p>
            </div>
            <div>
              <span className="fact-number">
                30<span>+</span>
              </span>
              <p>
                Projects built
                <br />
                across platforms
              </p>
            </div>
            <div className="fact-wide">
              <span className="mini-label mono">THE WAY I WORK</span>
              <p>
                Curiosity. Ownership.
                <br />
                <span className="accent-text">Attention to detail.</span>
              </p>
            </div>
          </Reveal>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <Reveal
              className="capability"
              delay={index * 0.07}
              key={item.title}
            >
              <div className="capability-top">
                <item.icon size={25} strokeWidth={1.5} />
                <span className="mono">0{index + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="tags">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
