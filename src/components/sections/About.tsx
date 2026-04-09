import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Lightbulb, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Technical Skills',
      description: 'Proficient in multiple programming languages and frameworks with a focus on creating efficient, scalable solutions.',
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Professional',
      description: 'Experienced in agile methodologies, with a track record of delivering high-quality projects on schedule.',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Problem Solver',
      description: 'Analytical thinker with a knack for finding innovative solutions to complex technical challenges.',
    },
    {
      icon: <Users size={24} />,
      title: 'Team Player',
      description: 'Collaborative communicator who thrives in diverse teams and adapts quickly to new environments.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-4">
                I'm a passionate software developer with over 3 years of experience creating web and mobile applications. My journey began with a curiosity about how digital experiences are built, which inspired me to pursue a degree in Computer Science and explore the world of technology.
              </p>
              <p className="text-lg mb-4">
                Over the years, I've worked with a wide range of technologies and frameworks, focusing on building scalable, maintainable, and high-performance applications. I thrive on solving complex problems and continuously learning new tools and techniques to stay at the forefront of software development.
              </p>
              <p className="text-lg">
                Beyond coding, I enjoy hiking, diving into science fiction novels, and experimenting with creative recipes in the kitchen. I believe that exploring diverse interests fuels creativity, strengthens problem-solving skills, and brings fresh perspectives to my work.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;