import { useState } from "react";
import { ArrowUpRight, MapPin, Minus, Plus, Expand } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Modal from "../Modal";

const jobs = [
  {
    company: "Quail Inc.",
    role: "Software Engineering Intern",
    date: "MAR 2026",
    location: "Kagoshima, Japan",
    link: "https://www.quail.co.jp/",
    description:
      "Contributed to an industrial Flutter application that connects real-time WebSocket communication with RFID systems. Implemented live tracking, improved data synchronization, and supported reliable device connectivity in a production environment.",
    technologies: ["Flutter", "Dart", "WebSocket", "RFID / IoT", "Kotlin"],
    images: ["/q1.png", "/q2.png", "/q3.png"],
    imageLabels: [
      "Quail internship in Kagoshima, Japan — photo 1",
      "Quail internship in Kagoshima, Japan — photo 2",
      "Quail internship in Kagoshima, Japan — photo 3",
    ],
  },
  {
    company: "Genmorphics AI Solutions",
    role: "AI Trainer / Data Annotator",
    date: "OCT 2023 — DEC 2025",
    location: "Remote · Bangladesh",
    description:
      "Worked on IB Coding, Project X, and Project Puzzle. Annotated datasets and evaluated model responses, helping improve the quality and usefulness of AI systems.",
    technologies: [
      "Python",
      "Prompt Engineering",
      "Data Annotation",
      "AI Evaluation",
    ],
    images: ["/genmorphics_work.png"],
    imageLabels: ["Genmorphics AI Solutions work certificate"],
  },
  {
    company: "Independent work",
    role: "Freelance Developer",
    date: "2024 — 2026",
    location: "Clients in Australia & UK",
    description:
      "Developed educational and client-based Android and machine learning projects, translating individual requirements into practical mobile and data-driven solutions.",
    technologies: ["Kotlin", "Android", "Firebase Firestore", "Python"],
    images: [],
    imageLabels: [],
  },
  {
    company: "Academic & personal projects",
    role: "Full Stack App & Web Developer",
    date: "JAN 2022 — FEB 2026",
    location: "Dhaka, Bangladesh",
    description:
      "Built e-commerce apps, healthcare systems, university discovery tools, and machine learning projects while developing a foundation in software engineering.",
    technologies: ["Java", "Flutter", "Firebase", "Spring Boot", "React"],
    images: [],
    imageLabels: [],
  },
];

export default function Experience() {
  const [openJob, setOpenJob] = useState<number | null>(0);
  const [photo, setPhoto] = useState<{ src: string; alt: string } | null>(null);
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="02"
            label="THE JOURNEY SO FAR"
            title={
              <>
                Built through <span className="muted-heading">experience.</span>
              </>
            }
          >
            <p>
              Different teams. Different challenges.
              <br />
              The same drive to build things well.
            </p>
          </SectionHeading>
        </Reveal>
        <div className="experience-layout">
          <Reveal className="experience-aside">
            <div className="experience-symbol" aria-hidden="true">
              ↗
            </div>
            <p>
              From Dhaka
              <br />
              to <span className="accent-text">Kagoshima.</span>
            </p>
            <span>
              Learning by doing.
              <br />
              Growing by collaborating.
            </span>
            <a href="/resume.pdf" download className="text-link">
              The full résumé <ArrowUpRight size={16} />
            </a>
          </Reveal>
          <div className="experience-list">
            {jobs.map((job, index) => (
              <Reveal
                className={
                  "experience-item " + (openJob === index ? "is-open" : "")
                }
                key={job.company}
              >
                <button
                  className="experience-trigger"
                  aria-expanded={openJob === index}
                  aria-controls={"experience-panel-" + index}
                  onClick={() => setOpenJob(openJob === index ? null : index)}
                >
                  <span className="experience-index mono">0{index + 1}</span>
                  <span className="experience-title">
                    <span className="mono job-date">{job.date}</span>
                    <strong>{job.role}</strong>
                    <span>{job.company}</span>
                  </span>
                  <span className="expand-button">
                    {openJob === index ? (
                      <Minus size={19} />
                    ) : (
                      <Plus size={19} />
                    )}
                  </span>
                </button>
                <div
                  id={"experience-panel-" + index}
                  hidden={openJob !== index}
                  className="experience-detail"
                >
                  <span className="job-location">
                    <MapPin size={13} />
                    {job.location}
                    {job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit Quail Inc."
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </span>
                  <p>{job.description}</p>
                  <div className="tags">
                    {job.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  {job.images.length > 0 && (
                    <div
                      className={
                        "experience-gallery " +
                        (job.images.length === 1 ? "single-image" : "")
                      }
                    >
                      {job.images.map((src, i) => (
                        <button
                          key={src}
                          onClick={() =>
                            setPhoto({ src, alt: job.imageLabels[i] })
                          }
                          aria-label={"Enlarge " + job.imageLabels[i]}
                        >
                          <img
                            src={src}
                            alt={job.imageLabels[i]}
                            loading="lazy"
                          />
                          <span>
                            <Expand size={15} />
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        {photo && (
          <Modal
            className="photo-modal"
            titleId="photo-dialog-title"
            onClose={() => setPhoto(null)}
          >
            <h2 id="photo-dialog-title" className="photo-title">
              {photo.alt}
            </h2>
            <img src={photo.src} alt={photo.alt} />
          </Modal>
        )}
      </div>
    </section>
  );
}
