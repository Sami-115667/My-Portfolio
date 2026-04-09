import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, BookOpen } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'University of Dhaka',
      degree: 'B.S.C in Computer Science & Engineering',
      duration: 'Jan 2022 – Feb 2026',
      description: 'Currently pursuing a Bachelor’s degree in Computer Science and Engineering.',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Dhaka_University_logo.svg/960px-Dhaka_University_logo.svg.png',
      gpa: '',
      courses: [
        'Data Structures',
        'Algorithms',
        'Web Development',
        'Database Management Systems',
        'Operating System',
        'Application Development',
        'Software Engineering',
      ],
    },
    {
      institution: 'Brindaban Govt. College, Habiganj',
      degree: 'Higher Secondary Certificate (H.S.C)',
      duration: '2020',
      description: 'Completed H.S.C. in Science with a GPA of 5.00 (without 4th subject score) out of 5.00.',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoq7VrYkLI6SBPdJwCLFSmx5pvZ8Y-xbrXXw&s', // Placeholder, update with real logo if available
      gpa: '5.00 / 5.00',
      courses: [],
    },
    {
      institution: 'Habiganj Govt. High School, Habiganj',
      degree: 'Secondary School Certificate (S.S.C)',
      duration: '2018',
      description:
        'Completed S.S.C. in Science with a GPA of 5.00 out of 5.00. Participated in various academic and extracurricular activities.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Habiganjgovthighschool.jpg', // Placeholder, update with real logo if available
      gpa: '5.00 / 5.00',
      courses: [],
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto mt-16 space-y-12">
          {education.map((edu, index) => (
            <EducationItem key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface EducationItemProps {
  education: {
    institution: string;
    degree: string;
    duration: string;
    description: string;
    logo: string;
    gpa: string;
    courses: string[];
  };
  index: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ education, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white dark:bg-dark-700 rounded-lg shadow-md overflow-hidden"
    >
      <div className="md:flex">
        <div className={`md:w-1/3 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="h-48 md:h-full relative">
            <img
              src={education.logo}
              alt={education.institution}
              className="w-full h-full object-contain p-4 bg-white dark:bg-dark-800"
            />
            <div className="absolute inset-0 bg-primary-900/30 flex items-center justify-center">
              <div className="bg-white/90 dark:bg-dark-800/90 p-3 rounded-lg">
                <Award size={40} className="text-primary-600 dark:text-primary-400" />
              </div>
            </div>
          </div>
        </div>

        <div className={`md:w-2/3 p-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <div className="flex items-center mb-2">
            <Calendar size={18} className="text-primary-600 dark:text-primary-400 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">{education.duration}</span>
          </div>

          <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-1">
            {education.degree}
          </h3>
          <h4 className="text-lg font-semibold mb-3">{education.institution}</h4>

          <p className="text-gray-700 dark:text-gray-300 mb-4">{education.description}</p>

          {education.gpa && (
            <div className="flex items-center mb-4">
              <BookOpen size={18} className="text-primary-600 dark:text-primary-400 mr-2" />
              <span className="font-medium">GPA: {education.gpa}</span>
            </div>
          )}

          {education.courses.length > 0 && (
            <div>
              <h5 className="font-medium mb-2">Relevant Coursework:</h5>
              <div className="flex flex-wrap gap-2">
                {education.courses.map((course, courseIndex) => (
                  <span
                    key={courseIndex}
                    className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
