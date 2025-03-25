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
                    src="data:image/jpeg;base64,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"
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
