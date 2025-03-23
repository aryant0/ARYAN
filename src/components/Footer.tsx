import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-surface-light dark:bg-surface-dark py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <motion.div 
            className="flex items-center mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="text-primary-light dark:text-primary-dark mr-2"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Code size={28} />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
              Aryan<span className="font-extrabold">Thakur</span>
            </span>
          </motion.div>
          
          <div className="flex space-x-8 mb-8">
            <motion.a 
              href="#home" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              whileHover={{ y: -2 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#about" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#skills" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              whileHover={{ y: -2 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              whileHover={{ y: -2 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </div>
          
          <div className="w-full max-w-4xl h-px bg-gray-200 dark:bg-gray-700 mb-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl">
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0 flex items-center">
              Made with 
              <motion.span 
                className="mx-1 text-red-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.span> 
              by Aryan Narayan Thakur © {new Date().getFullYear()}
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary-light dark:bg-primary-dark text-white hover:bg-primary-dark dark:hover:bg-opacity-90 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;