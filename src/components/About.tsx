import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Laptop, Briefcase, GraduationCap, Phone } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
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
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="about" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.span 
              className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.span>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
              Get to Know Me Better
            </motion.h2>
            <motion.div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto mb-6"></motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Full-stack developer with 1 year of experience in backend development, specializing in Node.js, MongoDB, and RESTful APIs. 
              Skilled in building scalable and secure applications with a focus on database design, API integration, and authentication.
              Proficient in React and TypeScript, with a strong understanding of both frontend and backend development.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-4">Education & Experience</h3>
            
            <motion.div variants={itemVariants} className="flex items-start">
              <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 mr-4 mt-1">
                <GraduationCap className="text-primary-light dark:text-primary-dark" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-text-light dark:text-text-dark">B.Tech in Computer Science Engineering</h4>
                <p className="text-gray-500 dark:text-gray-400">Dronacharya College of Engineering, Gurgaon • 2022 - 2026</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Currently pursuing Bachelor's degree with a GPA of 6.0
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start">
              <div className="p-3 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/10 mr-4 mt-1">
                <Briefcase className="text-secondary-light dark:text-secondary-dark" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-text-light dark:text-text-dark">Web Developer</h4>
                <p className="text-gray-500 dark:text-gray-400">Rexerra Consultancy Services • Mar 2025 - Present</p>
                <ul className="text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside">
                  <li>Developing React and TypeScript applications with efficient code optimization</li>
                  <li>Building and deploying landing pages to enhance lead conversion and retention</li>
                  <li>Ensuring seamless feature integration and bug resolution</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start">
              <div className="p-3 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/10 mr-4 mt-1">
                <Briefcase className="text-secondary-light dark:text-secondary-dark" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-text-light dark:text-text-dark">Software Developer</h4>
                <p className="text-gray-500 dark:text-gray-400">Opt2Deal E-commerce • June 2024 - August 2024</p>
                <ul className="text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside">
                  <li>Developed RESTful APIs, boosting system efficiency</li>
                  <li>Built secure backend architecture with Node.js, MongoDB, and JWT</li>
                  <li>Integrated third-party services, improving retention</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start mt-8">
              <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 mr-4 mt-1">
                <Phone className="text-primary-light dark:text-primary-dark" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-text-light dark:text-text-dark">Contact</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <a href="tel:+918287446956" className="hover:text-primary-light dark:hover:text-primary-dark">
                    +91 8287446956
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;