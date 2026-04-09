import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Sami-115667', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/md-shamsur-rahman-sami-0a677b246/', label: 'LinkedIn' },
   // { icon: <Twitter size={20} />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:shamsurrahman07052001@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-dark-800 py-8 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-medium text-primary-600 dark:text-primary-400">Md Shamsur Rahman Sami</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Software Developer | AI Enthusiast | Machine Learning | Full Stack Developer | AI Trainer</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="p-2 rounded-full bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Md Shamsur Rahman Sami. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;