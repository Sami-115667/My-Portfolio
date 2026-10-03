import { BookOpen, Users, HeartHandshake, Award } from "lucide-react";
import Reveal from "../Reveal";

const activities = [
  {
    icon: Users,
    title: "Community",
    text: "Collaborating on open-source and student-led projects.",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship",
    text: "Helping peers understand concepts and find their own solutions.",
  },
  {
    icon: BookOpen,
    title: "Exploration",
    text: "Learning new tools, reading science fiction, and staying curious.",
  },
  {
    icon: Award,
    title: "Early curiosity",
    text: "An academic scholarship in Class 5 sparked a lasting love of learning.",
  },
];

export default function ExtraCurricular() {
  return (
    <section id="extracurricular" className="community-section">
      <div className="container">
        <p className="eyebrow">BEYOND THE COMMIT HISTORY</p>
        <div className="community-grid">
          {activities.map((item) => (
            <Reveal className="community-item" key={item.title}>
              <item.icon size={21} strokeWidth={1.5} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
