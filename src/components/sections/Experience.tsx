import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Quail inc.',
      companyLink: 'https://www.quail.co.jp/',
      position: 'Software Engineering Intern',
      duration: 'March 4 – March 18, 2026',
      location: 'Kagoshima, Japan',
      description:
          'Contributed to a real-world industrial Flutter application integrating WebSocket-based real-time communication with RFID systems. Implemented live tracking features, improved data synchronization, and ensured reliable device connectivity in a production environment.',
      technologies: ['Flutter', 'Dart', 'WebSocket', 'RFID', 'IoT', 'Kotlin'],
    },
    {
      company: 'Genmorphics AI Solutions',
      companyLink: 'https://209.74.89.56/',
      position: 'AI Trainer / Data Annotator',
      duration: 'Oct 2023 – Dec 2025',
      location: 'Remote (Bangladesh)',
      description:
        'Worked on multiple AI projects like IB Coding, Project X, and Project Puzzle. Annotated data and evaluated AI model responses to improve performance in tasks such as reasoning, coding, and image-based Q&A.',
      technologies: ['Python', 'Prompt Engineering', 'Data Annotation', 'AI Evaluation'],
    },
    {
      company: 'Academic & Personal Projects',
      position: 'Full Stack App & Web Developer',
      duration: 'Jan 2022 – Feb 2026',
      location: 'Dhaka, Bangladesh',
      description:
        'Developed multiple web and mobile applications including an e-commerce platform (Swapno), a university management app (Current - University BD), and a healthcare system using Spring Boot and React. Built embedded systems projects including STM32 bootloader implementations, and developed machine learning models using Python for real-world problem solving, including chest X-ray analysis.',
      technologies: ['Kotlin', 'Java', 'Flutter', 'Firebase', 'Spring Boot', 'React', 'FastAPI', 'STM32', 'Scikit-learn'],
    },
    {
      company: 'Clients from Australia & UK',
      position: 'Freelance Developer',
      duration: '2021 – 2025',
      location: 'Dhaka, Bangladesh',
      description:
        'Developed educational and client-based projects including Android applications and machine learning solutions using Python.',
      technologies: ['Kotlin', 'Android', 'Firebase Firestore', 'Python', 'Scikit-learn'],
    }
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
  };
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ job, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="timeline-item"
    >
      <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md mb-8 ml-6">
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
                  className="text-inherit hover:text-primary-700 dark:hover:text-primary-300"
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

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {job.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
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
