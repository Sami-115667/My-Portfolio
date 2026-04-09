import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Completed Workshop & Received Certificate',
    organization: 'Vice Chancellor of Dhaka University',
    date: 'June 2024',
    description:
      'Successfully completed a workshop and received a certificate from the Vice Chancellor of Dhaka University.',
    image:
      'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Scholarship Awarded',
    organization: 'Elementary School',
    date: 'Class 5',
    description: 'Received a scholarship for academic excellence in Class 5.',
    image:
      'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Achievements
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => (
  <div className="w-full px-4">
    <div className="bg-white dark:bg-dark-700 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-2/5 h-64 md:h-auto relative">
        <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-primary-600 text-white p-2 rounded-full">
          <Trophy size={20} />
        </div>
      </div>
      <div className="md:w-3/5 p-6 flex flex-col justify-center">
        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
          {achievement.date}
        </span>
        <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
        <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">{achievement.organization}</h4>
        <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
      </div>
    </div>
  </div>
);

export default Achievements;
