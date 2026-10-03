import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import Reveal from "../Reveal";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-topline">
          <span className="availability">
            <span className="status-dot" />
            Open to opportunities
          </span>
          <span className="mono hero-location">
            <MapPin size={13} /> DHAKA, BANGLADESH
          </span>
        </div>
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <p className="hero-intro">
              Hi, I’m Sami{" "}
              <span className="little-spark" aria-hidden="true">
                ✳
              </span>
            </p>
            <h1>
              Thoughtful code.
              <br />
              Meaningful
              <br />
              <span className="accent-text">experiences.</span>
            </h1>
            <p className="hero-description">
              A software engineer turning complex problems into intuitive web,
              mobile, and AI-powered experiences.
            </p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={19} />
              </a>
              <a
                className="button button-secondary"
                href="/resume.pdf"
                download="Sami-Resume.pdf"
              >
                <Download size={17} /> Download résumé
              </a>
            </div>
            <div className="hero-socials">
              <span className="mono">FIND ME ON</span>
              <a
                href="https://github.com/Sami-115667"
                target="_blank"
                rel="noreferrer"
                aria-label="Sami on GitHub"
              >
                <Github size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-shamsur-rahman-sami-0a677b246/"
                target="_blank"
                rel="noreferrer"
                aria-label="Sami on LinkedIn"
              >
                <Linkedin size={19} />
              </a>
              <span className="social-divider" />
              <span className="hero-social-note">
                Always curious. Always building.
              </span>
            </div>
          </Reveal>
          <Reveal className="hero-visual" delay={0.15}>
            <div className="portrait-frame">
              <div className="portrait-top">
                <span className="mono">THE HUMAN BEHIND THE CODE</span>
                <ArrowUpRight size={17} />
              </div>
              <div className="portrait-image">
                <img
                  src="/mypic.jpg"
                  alt="Md Shamsur Rahman Sami, software engineer"
                  width="1008"
                  height="1008"
                  fetchPriority="high"
                />
                <div className="portrait-caption">
                  <span>Md Shamsur Rahman Sami</span>
                  <span className="mono">SOFTWARE ENGINEER</span>
                </div>
              </div>
              <div className="portrait-bottom">
                <span className="status-dot" />
                <span>Building with purpose.</span>
                <span className="mono">&lt;/&gt;</span>
              </div>
            </div>
            <div className="hero-sticker">
              <span aria-hidden="true">✳</span>
              <div>
                Engineer by craft.
                <br />
                <strong>Problem solver at heart.</strong>
              </div>
            </div>
            <div className="hero-coordinate mono" aria-hidden="true">
              23.8103° N &nbsp; 90.4125° E
            </div>
            <ArrowDownRight
              className="hero-doodle"
              size={66}
              strokeWidth={1}
              aria-hidden="true"
            />
          </Reveal>
        </div>
        <div className="hero-bottom">
          <a href="#about" className="scroll-cue">
            <span className="scroll-icon">
              <ArrowDown size={16} />
            </span>
            <span className="mono">A LITTLE MORE ABOUT ME</span>
          </a>
          <span className="hero-bottom-note">
            From the first idea to the final detail <ArrowRight size={16} />
          </span>
        </div>
      </div>
      <div className="tech-strip">
        <div className="container tech-strip-inner">
          <span className="mono tech-label">MY EVERYDAY TOOLKIT</span>
          <div className="tech-list">
            {[
              "Flutter",
              "React",
              "Python",
              "Spring Boot",
              "Kotlin",
              "Firebase",
            ].map((tech) => (
              <span key={tech}>
                <span className="tech-dot" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
