import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Quail inc.',
      companyLink: 'https://www.quail.co.jp/',
      position: 'Software Engineering Intern',
      duration: 'March 2 – March 19, 2026',
      location: 'Kagoshima, Japan',
      description:
        'Contributed to a real-world industrial Flutter application integrating WebSocket-based real-time communication with RFID systems. Implemented live tracking features, improved data synchronization, and ensured reliable device connectivity in a production environment.',
      technologies: ['Flutter', 'Dart', 'WebSocket', 'RFID', 'IoT', 'Kotlin'],
      images: ['/q1.png', '/q2.png', '/q3.png'],
    },
    {
      company: 'Genmorphics AI Solutions',
      companyLink: 'https://209.74.89.56/',
      position: 'AI Trainer / Data Annotator',
      duration: 'Oct 2023 – Dec 2025',
      location: 'Remote (Bangladesh)',
      description:
        'Worked on multiple AI projects like IB Coding, Project X, and Project Puzzle. Annotated data and evaluated AI model responses.',
      technologies: ['Python', 'Prompt Engineering', 'Data Annotation', 'AI Evaluation'],
    },
    {
      company: 'Academic & Personal Projects',
      position: 'Full Stack App & Web Developer',
      duration: 'Jan 2022 – Feb 2026',
      location: 'Dhaka, Bangladesh',
      description:
        'Developed multiple web and mobile applications including e-commerce, university apps, healthcare systems, and ML projects.',
      technologies: ['Kotlin', 'Java', 'Flutter', 'Firebase', 'Spring Boot', 'React'],
    },
    {
      company: 'Clients from Australia & UK',
      position: 'Freelance Developer',
      duration: '2021 – 2025',
      location: 'Dhaka, Bangladesh',
      description:
        'Developed educational and client-based Android and ML projects and assignments.',
      technologies: ['Kotlin', 'Android', 'Firebase Firestore', 'Python'],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          {experiences.map((job, index) => (
            <ExperienceItem key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  job: {
    company: string;
    companyLink?: string;
    position: string;
    duration: string;
    location: string;
    description: string;
    technologies: string[];
    images?: string[];
  };
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ job, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 🔥 slider state (ONLY first job uses it)
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!job.images || job.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === job.images!.length - 1 ? 0 : prev + 1
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [job.images]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="timeline-item"
    >
      <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md mb-8 ml-6">

        {/* 🔥 IMAGE SLIDER (ONLY FOR QUAIL INTERN) */}
        {job.images && (
          <div className="mb-4 w-full overflow-hidden rounded-lg">
            <img
              src={job.images[currentImage]}
              alt="experience"
              className="w-full h-56 sm:h-64 md:h-72 object-cover transition-all duration-500"
            />
          </div>
        )}

        {/* HEADER */}
        <div className="flex flex-wrap justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-1">
              {job.position}
            </h3>

            <h4 className="text-lg font-semibold mb-2">
              {job.companyLink ? (
                <a
                  href={job.companyLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-primary-600"
                >
                  {job.company}
                </a>
              ) : (
                job.company
              )}
            </h4>
          </div>

          <div className="flex flex-col items-end text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center mb-1">
              <Calendar size={16} className="mr-1" />
              <span>{job.duration}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {job.description}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2">
          {job.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;