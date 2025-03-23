import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Code, Database, Server } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
                whileHover={{ scale: 1.05 }}
              >
                Full-Stack Developer
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-text-light dark:text-text-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">Aryan Narayan Thakur</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A passionate full-stack developer and B.Tech Computer Science student, crafting innovative digital experiences with modern technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.a 
                href="#contact" 
                className="px-6 py-3 rounded-full bg-primary-light dark:bg-primary-dark text-white font-medium hover:bg-primary-dark dark:hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="#projects" 
                className="px-6 py-3 rounded-full border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark font-medium hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex mt-8 space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a 
                href="https://github.com/aryant0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/aryan-narayan-thakur-94106a252/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="mailto:aryannarayanthakur@gmail.com" 
                className="p-2 rounded-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full h-80 md:h-96">
              {/* Abstract background shapes */}
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-light/30 to-secondary-light/30 dark:from-primary-dark/30 dark:to-secondary-dark/30 rounded-full filter blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary-light/20 to-primary-light/20 dark:from-secondary-dark/20 dark:to-primary-dark/20 rounded-full filter blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 0],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Floating tech icons */}
              <motion.div 
                className="absolute top-10 left-10 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Code className="text-primary-light dark:text-primary-dark" size={28} />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-20 left-20 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                animate={{ y: [0, 15, 0] }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              >
                <Server className="text-secondary-light dark:text-secondary-dark" size={28} />
              </motion.div>
              
              <motion.div 
                className="absolute top-20 right-20 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                animate={{ y: [0, 15, 0] }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }}
              >
                <Database className="text-primary-light dark:text-primary-dark" size={28} />
              </motion.div>
              
              {/* Profile image */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img 
                    src="dist/assets/aryan_passportsize-removebg-preview.png"
                    alt="Developer Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <ArrowDown className="text-primary-light dark:text-primary-dark" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
