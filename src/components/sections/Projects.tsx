import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  //live: string;
  fullDescription: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
 const projects: Project[] = [
  {
    id: 1,
    title: 'Swapno An Commerce App',
    description: 'A full-featured online shopping app with cart, payment, and admin panel built in Flutter.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Flutter', 'Firebase'],
    github: 'https://github.com/Sami-115667/Swapno-An-Ecommerce-App',
    fullDescription: 'This e-commerce platform is built with Flutter and Firebase. It features product listings, shopping cart, order management, Stripe payment integration, user authentication, and an admin panel to manage inventory. The UI is responsive and optimized for both Android and iOS devices.',
  },
  {
    id: 2,
    title: 'HealthCare Solution',
    description: 'A healthcare management web app built with Spring Boot and React for managing patients and appointments.',
    image: 'https://www.revalton.com/wp-content/uploads/2016/05/vaccination-management-syst-960x750.png',
    technologies: ['TypeScript', 'Spring Boot', 'SQL', 'React'],
    github: 'https://github.com/Sami-115667/HealthCare',
    fullDescription: 'HealthCare is a Spring Boot + React application for managing patient data, appointments, and doctor schedules. It includes secure authentication, role-based access control, and a dashboard for managing records. SQL is used for relational data storage and TypeScript ensures strong typing on the frontend.',
  },
  {
    id: 3,
    title: 'Networking Project',
    description: 'A socket programming project built in Python simulating basic network communication.',
    image: 'https://files.realpython.com/media/Python-Sockets-Tutorial_Watermarked.aebb960a567a.jpg',
    technologies: ['Python'],
    github: 'https://github.com/Sami-115667/Networking-Project',
    fullDescription: 'This project implements core networking concepts such as client-server architecture, socket programming, and data transfer protocols using Python. It simulates reliable communication and includes features like data validation and connection status handling.',
  },
  {
    id: 4,
    title: 'Current-University BD',
    description: 'An Android app displaying university information, built using Java and Firebase.',
    image: 'https://students.carleton.ca/wp-content/uploads/2025/04/Campus-From-River.png',
    technologies: ['Java', 'Firebase', 'XML'],
    github: 'https://github.com/Sami-115667/Current-UniversityBD',
    fullDescription: 'Current-University BD is an Android app that displays information about universities in Bangladesh. Built using Java and Firebase Realtime Database, it allows users to search, filter, and view university details with a clean XML-based UI.',
  },
  {
    id: 5,
    title: 'The Aeroplane Game',
    description: 'A 2D shooting game built using the SDL library with a MIG-29 fighter jet theme.',
    image: 'https://media.pocketgamer.com/artwork/na-32252-1606418749/flight-simulator-2d-ios-android-header.jpg',
    technologies: ['C++', 'SDL Library'],
    github: 'https://github.com/Sami-115667/The_Aeroplane_Game-MIG-29',
    fullDescription: 'The Aeroplane Game is a C++ 2D shooting game developed using the SDL library. Players control a MIG-29 fighter jet, navigating through enemy territory and dodging obstacles. The game features sprite animations, sound effects, scoring system, and a responsive game loop.',
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  variants: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
      whileHover={{ y: -5 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <button
          onClick={onClick}
          className="w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-300"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-white dark:bg-dark-700 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{project.fullDescription}</p>
          
          <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-colors duration-300"
            >
              <Github className="mr-2" size={18} />
              GitHub Repository
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-300"
            >
              <ExternalLink className="mr-2" size={18} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;