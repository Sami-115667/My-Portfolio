import { GraduationCap, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="04"
            label="THE FOUNDATION"
            title={
              <>
                Always a <span className="accent-text">student.</span>
              </>
            }
          >
            <p>
              A strong foundation.
              <br />
              An appetite to keep learning.
            </p>
          </SectionHeading>
        </Reveal>
        <div className="education-grid">
          <Reveal className="university-card">
            <div className="university-card-top">
              <span className="education-icon">
                <GraduationCap size={30} strokeWidth={1.5} />
              </span>
              <span className="mono">2022 — 2026</span>
            </div>
            <p className="eyebrow">UNIVERSITY OF DHAKA</p>
            <h3>
              Computer Science
              <br />& Engineering
            </h3>
            <p>Bachelor of Science</p>
            <div className="course-list">
              {[
                "Data Structures & Algorithms",
                "Software Engineering",
                "Database Management",
                "Operating Systems",
                "Web & App Development",
              ].map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
            <span className="university-card-mark" aria-hidden="true">
              &lt;/&gt;
            </span>
          </Reveal>
          <div className="education-secondary">
            <Reveal className="school-card">
              <div className="school-meta">
                <span className="mono">2020 / HIGHER SECONDARY</span>
                <span className="grade">GPA 5.00 / 5.00</span>
              </div>
              <h3>Brindaban Govt. College</h3>
              <p>Science · Habiganj, Bangladesh</p>
            </Reveal>
            <Reveal className="school-card">
              <div className="school-meta">
                <span className="mono">2018 / SECONDARY</span>
                <span className="grade">GPA 5.00 / 5.00</span>
              </div>
              <h3>Habiganj Govt. High School</h3>
              <p>Science · Habiganj, Bangladesh</p>
            </Reveal>
            <a href="#achievements" className="education-note">
              <span>Learning goes beyond the classroom.</span>
              <ArrowUpRight size={21} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
