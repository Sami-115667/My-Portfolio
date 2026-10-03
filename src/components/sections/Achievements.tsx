import { ArrowUpRight, Award } from "lucide-react";
import { useState } from "react";
import Reveal from "../Reveal";
import Modal from "../Modal";

const achievements = [
  {
    title: "BD App Ideathon finalist",
    organization: "Robi Axiata Limited",
    date: "2024",
    description:
      "Presented Expense Fusion, an app concept selected as a finalist in the BD App Ideathon.",
    image: "/idea.jpeg",
  },
  {
    title: "Learning, recognized.",
    organization: "University of Dhaka",
    date: "JUNE 2024",
    description:
      "Completed a technical workshop and received a certificate from the Vice Chancellor of the University of Dhaka.",
    image: "/llmworkshop.jpeg",
  },
];

export default function Achievements() {
  const [selected, setSelected] = useState<
    (typeof achievements)[number] | null
  >(null);
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <Reveal>
          <div className="recognition-heading">
            <p className="eyebrow">
              <Award size={15} /> MOMENTS THAT MATTER
            </p>
            <h2>A few milestones along the way.</h2>
          </div>
        </Reveal>
        <div className="achievement-grid">
          {achievements.map((item) => (
            <Reveal className="achievement-card" key={item.title}>
              <button
                className="achievement-image"
                onClick={() => setSelected(item)}
                aria-label={"View " + item.title + " photo"}
              >
                <img
                  src={item.image}
                  alt={item.title + " — " + item.organization}
                  loading="lazy"
                />
                <span className="achievement-image-link">
                  <ArrowUpRight size={21} />
                </span>
              </button>
              <div className="achievement-content">
                <p className="eyebrow">
                  {item.date} / {item.organization}
                </p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {selected && (
          <Modal
            className="photo-modal"
            titleId="achievement-dialog-title"
            onClose={() => setSelected(null)}
          >
            <h2 className="photo-title" id="achievement-dialog-title">
              {selected.title}
            </h2>
            <img src={selected.image} alt={selected.title} />
          </Modal>
        )}
      </div>
    </section>
  );
}
