import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Code2, Award, GraduationCap, HeartHandshake } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Activity {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

const ExtraCurricular: React.FC = () => {
  const activities: Activity[] = [
    {
      icon: <GraduationCap size={32} />,
      title: 'Workshop Participation',
      description: 'Completed technical workshops and received certificates, including one from the Vice Chancellor of Delhi University.',
      color: 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400',
    },
    {
      icon: <Award size={32} />,
      title: 'Academic Scholarship',
      description: 'Awarded a scholarship for excellent academic performance in Class 5.',
      color: 'bg-success-100 dark:bg-success-900 text-success-600 dark:text-success-400',
    },
    {
      icon: <Code2 size={32} />,
      title: 'Coding Enthusiast',
      description: 'Enjoy solving problems and building projects using Java, Kotlin, Spring Boot, and Firebase.',
      color: 'bg-warning-100 dark:bg-warning-900 text-warning-600 dark:text-warning-400',
    },
    {
      icon: <Users size={32} />,
      title: 'Tech Community Involvement',
      description: 'Actively involved in coding communities, collaborating on open-source and student-led projects.',
      color: 'bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400',
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Lifelong Learner',
      description: 'Always exploring new technologies, frameworks, and tools to expand my skill set.',
      color: 'bg-error-100 dark:bg-error-900 text-error-600 dark:text-error-400',
    },
    {
      icon: <HeartHandshake size={32} />,
      title: 'Peer Mentor',
      description: 'Help friends and juniors understand programming concepts and debug their code.',
      color: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="extracurricular" className="py-20">
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Extra-Curricular
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              activity={activity}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ActivityCardProps {
  activity: Activity;
  variants: any;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className={`w-16 h-16 rounded-full ${activity.color} flex items-center justify-center mb-4`}>
        {activity.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{activity.description}</p>
    </motion.div>
  );
};

export default ExtraCurricular;
