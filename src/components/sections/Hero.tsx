import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FileDown, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const skills = [
    'Kotlin',
    1000,
    'Python',
    1000,
    'Firebase',
    1000,
    'Spring Boot',
    1000,
    'Fastapi',
    1000,
    'Flutter',
    1000,
    'React',
    1000,
    'Machine Learning',
    1000,
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur opacity-75"></div>
              <div className="relative max-w-xs sm:max-w-sm rounded-full overflow-hidden border-4 border-white dark:border-dark-800">
                <img 
                        src="/mypic.jpg" 
                        alt="Profile" 
                        className="w-full h-auto"
/>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hello, I'm 
            </motion.p>
            
            <motion.h1 
              className="font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
            Md Shamsur Rahman Sami
            </motion.h1>
            
            <motion.div 
              className="mb-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="inline-block mr-2">Software Developer | AI Enthusiast | Machine Learning | Full Stack App and Web Developer | AI Trainer</span>
              <div className="h-0.5 w-16 bg-primary-600 dark:bg-primary-400 my-4 mx-auto lg:mx-0"></div>
              <div className="flex items-center h-8 text-primary-600 dark:text-primary-400 font-medium justify-center lg:justify-start">
                <span className="mr-2">I work with</span>
                <TypeAnimation
                  sequence={skills}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-semibold"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a 
                href="/resume.pdf" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileDown className="mr-2" size={20} />
                Download CV
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="mr-2" size={20} />
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;