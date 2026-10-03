import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  HeartPulse,
  Network,
  Plane,
  GraduationCap,
  ShoppingBag,
  Search,
  Heart,
  Plus,
  Activity,
} from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Modal from "../Modal";

type Category = "All work" | "Mobile" | "Web" | "Systems";
type Project = {
  id: string;
  title: string;
  category: Category;
  type: string;
  description: string;
  detail: string;
  technologies: string[];
  github?: string;
  live?: string;
  preview?: string;
  period?: string;
  featured?: boolean;
  features: string[];
};
const projects: Project[] = [
  {
    id: "zariban",
    title: "ZARIBAN",
    category: "Web",
    type: "E-COMMERCE WEBSITE",
    description:
      "An online clothing store with curated collections, product discovery, and a dedicated shopping experience.",
    detail:
      "Built ZARIBAN, an e-commerce website for clothing and everyday essentials. The storefront brings together product categories, new arrivals, best sellers, shopping cart access, and customer accounts.",
    technologies: ["E-commerce", "Web Application"],
    live: "https://zariban.zariban-support.workers.dev/",
    preview: "/zariban-preview.jpg",
    period: "September – October 2026",
    featured: true,
    features: [
      "Product catalog with categories and curated collections",
      "New arrivals, featured products, and best sellers",
      "Shopping cart and customer login / registration",
    ],
  },
  {
    id: "infinity",
    title: "Infinity Edu-care",
    category: "Web",
    type: "COACHING CENTER WEBSITE",
    description:
      "A coaching center’s online home, connecting students with programs, batches, teachers, and admission information.",
    detail:
      "Built the website for Infinity Edu-care, a coaching center in Chunarughat, Habiganj. It presents academic care for Classes 5–12 and job preparation, with clear access to active batches, faculty profiles, notices, and admission information.",
    technologies: ["Education", "Web Application"],
    live: "https://infinity-edu-care.shamsurrahman07052001.workers.dev/",
    preview: "/infinity-edu-care-preview.jpg",
    period: "September – October 2026",
    featured: true,
    features: [
      "Academic programs, active batches, and weekly routines",
      "Faculty profiles, notices, and a campus gallery",
      "Admission information and direct contact options",
    ],
  },
  {
    id: "swapno",
    featured: true,
    title: "Swapno",
    category: "Mobile",
    type: "MOBILE COMMERCE",
    description:
      "A complete shopping experience, from the first browse to the final checkout.",
    detail:
      "An e-commerce application built with Flutter and Firebase, bringing product discovery, shopping, and order management into one mobile experience for Android and iOS.",
    technologies: ["Flutter", "Firebase", "Stripe"],
    github: "Swapno-An-Ecommerce-App",
    features: [
      "Product listings and a persistent shopping cart",
      "User authentication and payment integration",
      "Order management and an admin inventory panel",
    ],
  },
  {
    id: "healthcare",
    featured: true,
    title: "HealthCare",
    category: "Web",
    type: "FULL-STACK PLATFORM",
    description:
      "Connecting patients, appointments, and care in one organized workspace.",
    detail:
      "A healthcare management platform built with Spring Boot and React. A typed frontend and relational database support the workflows of patients, doctors, and administrators.",
    technologies: ["React", "Spring Boot", "TypeScript", "SQL"],
    github: "HealthCare",
    features: [
      "Patient records and appointment management",
      "Doctor schedules and administrative dashboards",
      "Secure authentication with role-based access",
    ],
  },
  {
    id: "network",
    title: "Networking Project",
    category: "Systems",
    type: "CLIENT–SERVER SYSTEM",
    description:
      "Exploring reliable communication through Python sockets and network protocols.",
    detail:
      "A Python implementation of core networking concepts, including client-server communication and data transfer protocols.",
    technologies: ["Python", "Sockets"],
    github: "Networking-Project",
    features: [
      "Socket-based client-server architecture",
      "Data transfer and validation",
      "Connection status handling",
    ],
  },
  {
    id: "university",
    title: "Current-University BD",
    category: "Mobile",
    type: "ANDROID APPLICATION",
    description:
      "Helping students discover and explore universities across Bangladesh.",
    detail:
      "An Android application that makes university information easier to find. Java powers the application, with Firebase Realtime Database for university records and XML-based interfaces.",
    technologies: ["Java", "Firebase", "XML"],
    github: "Current-UniversityBD",
    features: [
      "Searchable university information",
      "Filters and detailed university profiles",
      "Firebase Realtime Database integration",
    ],
  },
  {
    id: "aeroplane",
    title: "The Aeroplane Game",
    category: "Systems",
    type: "2D GAME DEVELOPMENT",
    description:
      "A MIG-29 arcade game built around a responsive C++ game loop.",
    detail:
      "A 2D shooting game built with C++ and SDL. Players pilot a MIG-29, navigate enemy territory, and dodge obstacles.",
    technologies: ["C++", "SDL"],
    github: "The_Aeroplane_Game-MIG-29",
    features: [
      "Responsive controls and a real-time game loop",
      "Sprite animation and sound effects",
      "Obstacle avoidance and score tracking",
    ],
  },
];
const filters: Category[] = ["All work", "Mobile", "Web", "Systems"];

function ProjectArtwork({ project }: { project: Project }) {
  if (project.preview) {
    return (
      <div className={"project-art live-project-art art-" + project.id}>
        <div className="live-preview-bar" aria-hidden="true">
          <span className="preview-dots">
            <i />
            <i />
            <i />
          </span>
          <span>{project.title}</span>
          <span className="live-preview-status">
            <span /> Live
          </span>
        </div>
        <img
          src={project.preview}
          alt={project.title + " live website homepage"}
          width={1360}
          height={920}
          loading="lazy"
        />
      </div>
    );
  }
  if (project.id === "swapno")
    return (
      <div className="project-art art-commerce" aria-hidden="true">
        <div className="art-grid" />
        <div className="art-wordmark">
          swapno<span>®</span>
        </div>
        <span className="art-caption mono">A LITTLE JOY. DELIVERED.</span>
        <div className="commerce-orbit" />
        <div className="phone phone-back">
          <div className="phone-notch" />
          <div className="phone-title">
            Good finds.
            <br />
            Great days.
          </div>
          <div className="product-shape">
            <ShoppingBag size={56} strokeWidth={1} />
          </div>
          <div className="phone-line" />
          <div className="phone-line short" />
          <div className="phone-cta">
            Add to bag <Plus size={11} />
          </div>
        </div>
        <div className="phone phone-front">
          <div className="phone-notch" />
          <div className="phone-nav">
            <strong>swapno.</strong>
            <ShoppingBag size={12} />
          </div>
          <div className="phone-search">
            <Search size={10} /> Find something you love
          </div>
          <div className="phone-banner">
            <small>MADE FOR EVERY DAY</small>
            <strong>
              Less ordinary.
              <br />
              More you.
            </strong>
            <span>Explore collection →</span>
          </div>
          <div className="phone-section-title">
            The good stuff <ArrowRight size={10} />
          </div>
          <div className="phone-products">
            <div>
              <div className="product-icon">
                <ShoppingBag size={25} />
              </div>
              <span>Everyday essentials</span>
              <b>Discover more</b>
            </div>
            <div>
              <div className="product-icon alt">
                <Heart size={25} />
              </div>
              <span>Your next favorite</span>
              <b>Made for you</b>
            </div>
          </div>
        </div>
        <span className="art-footnote mono">INTERFACE CONCEPT</span>
      </div>
    );
  return (
    <div className="project-art art-health" aria-hidden="true">
      <div className="art-grid" />
      <div className="art-wordmark">
        <HeartPulse size={23} /> healthcare<span>+</span>
      </div>
      <span className="art-caption mono">BETTER SYSTEMS. BETTER CARE.</span>
      <div className="dashboard-preview">
        <div className="dashboard-sidebar">
          <HeartPulse size={19} />
          <span className="sidebar-line selected" />
          <span className="sidebar-line" />
          <span className="sidebar-line" />
          <span className="sidebar-line" />
        </div>
        <div className="dashboard-main">
          <div className="dashboard-top">
            <span>Care overview</span>
            <div className="dashboard-avatar">S</div>
          </div>
          <p>Welcome back, Doctor.</p>
          <span className="dashboard-subtitle">
            A clear view of the day ahead.
          </span>
          <div className="dashboard-stats">
            <div>
              <span>Patients</span>
              <strong>128</strong>
              <small>↑ This month</small>
            </div>
            <div>
              <span>Appointments</span>
              <strong>24</strong>
              <small>Today’s schedule</small>
            </div>
            <div>
              <span>Care teams</span>
              <strong>08</strong>
              <small>Working together</small>
            </div>
          </div>
          <div className="dashboard-chart">
            <div>
              <strong>Patient overview</strong>
              <span>This week</span>
            </div>
            <div className="chart-bars">
              {[35, 60, 45, 80, 57, 92, 70, 100, 78, 88, 64, 85].map(
                (height, i) => (
                  <i key={i} style={{ height: height + "%" }} />
                ),
              )}
            </div>
          </div>
          <div className="dashboard-appointment">
            <span>
              <Activity size={13} /> Upcoming appointments
            </span>
            <span className="appointment-status">On schedule</span>
          </div>
        </div>
      </div>
      <span className="art-footnote mono">INTERFACE CONCEPT · SAMPLE DATA</span>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All work");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  const featured = visible.filter((project) => project.featured);
  const others = visible.filter((project) => !project.featured);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="03"
            label="SELECTED WORK"
            title={
              <>
                Ideas made <span className="accent-text">real.</span>
              </>
            }
          >
            <a
              href="https://github.com/Sami-115667"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              More on GitHub <ArrowUpRight size={17} />
            </a>
          </SectionHeading>
        </Reveal>
        <p className="projects-intro">
          30+ projects built. A selection of websites, mobile apps, and systems.
        </p>
        <div className="project-toolbar">
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                className={filter === item ? "selected" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
                {item === "All work" && (
                  <span>{String(projects.length).padStart(2, "0")}</span>
                )}
              </button>
            ))}
          </div>
          <span className="mono project-count" aria-live="polite">
            {String(visible.length).padStart(2, "0")} SELECTED PROJECTS
          </span>
        </div>
        {featured.length > 0 && (
          <div className="featured-projects">
            {featured.map((project) => (
              <article className="project-card" key={project.id}>
                <button
                  className="project-art-button"
                  onClick={() => setSelected(project)}
                  aria-label={"View " + project.title + " project details"}
                >
                  <ProjectArtwork project={project} />
                  <span className="project-art-arrow">
                    <ArrowUpRight size={23} />
                  </span>
                </button>
                <div className="project-card-content">
                  <div className="project-meta">
                    <p className="eyebrow">{project.type}</p>
                    {project.live && (
                      <span className="recent-project-badge">Latest work</span>
                    )}
                  </div>
                  <div className="project-title-row">
                    <h3>
                      <button onClick={() => setSelected(project)}>
                        {project.title}
                      </button>
                    </h3>
                    <button
                      className="icon-button"
                      aria-label={"View " + project.title + " details"}
                      onClick={() => setSelected(project)}
                    >
                      <ArrowUpRight size={23} />
                    </button>
                  </div>
                  <p>{project.description}</p>
                  {project.period && (
                    <p className="project-period">{project.period}</p>
                  )}
                  <div className="tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  {project.live && (
                    <div className="project-card-actions">
                      <a
                        className="button button-primary"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={"Visit " + project.title + " live website"}
                      >
                        Visit live site <ArrowUpRight size={18} />
                      </a>
                      <button
                        className="text-link"
                        onClick={() => setSelected(project)}
                      >
                        Project details <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
        <div className="other-projects">
          {others.map((project) => {
            const Icon =
              project.id === "network"
                ? Network
                : project.id === "university"
                  ? GraduationCap
                  : Plane;
            return (
              <article className="small-project" key={project.id}>
                <div className="small-project-top">
                  <Icon size={25} strokeWidth={1.5} />
                  {project.github && (
                    <a
                      className="icon-button"
                      href={"https://github.com/Sami-115667/" + project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={project.title + " source code on GitHub"}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
                <p className="eyebrow">{project.type}</p>
                <h3>
                  <button onClick={() => setSelected(project)}>
                    {project.title}
                    <ArrowUpRight size={17} />
                  </button>
                </h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        {selected && (
          <Modal
            titleId="project-dialog-title"
            onClose={() => setSelected(null)}
          >
            <p className="eyebrow">PROJECT OVERVIEW / {selected.type}</p>
            <h2 id="project-dialog-title">{selected.title}</h2>
            {selected.period && (
              <p className="project-period">{selected.period}</p>
            )}
            <p className="modal-description">{selected.detail}</p>
            <h3 className="modal-subtitle">What’s inside</h3>
            <ul className="feature-list">
              {selected.features.map((feature) => (
                <li key={feature}>
                  <ArrowRight size={15} />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="tags">
              {selected.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {(selected.live || selected.github) && (
              <a
                className="button button-primary modal-action"
                href={
                  selected.live ||
                  "https://github.com/Sami-115667/" + selected.github
                }
                target="_blank"
                rel="noreferrer"
              >
                {!selected.live && <Github size={18} />}
                {selected.live ? "Visit live site" : "Explore the source"}{" "}
                <ArrowUpRight size={17} />
              </a>
            )}
          </Modal>
        )}
      </div>
    </section>
  );
}
