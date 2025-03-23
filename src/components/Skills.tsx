import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  const categories = [
    { id: 'frontend', name: 'Frontend', color: 'from-blue-400 to-indigo-500' },
    { id: 'backend', name: 'Backend', color: 'from-green-400 to-teal-500' },
    { id: 'database', name: 'Database', color: 'from-yellow-400 to-orange-500' },
    { id: 'tools', name: 'Tools & DevOps', color: 'from-purple-400 to-pink-500' },
  ];

  // Function to get the icon component
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return Icon ? <Icon size={24} /> : <LucideIcons.Code size={24} />;
  };

  return (
    <section id="skills" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span 
              className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
              whileHover={{ scale: 1.05 }}
            >
              My Skills
            </motion.span>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
              Technical Expertise
            </motion.h2>
            <motion.div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto mb-6"></motion.div>
            <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across different domains of software development.
            </motion.p>
          </motion.div>

          <div className="space-y-12">
            {categories.map((category) => (
              <motion.div 
                key={category.id}
                variants={itemVariants}
                className="mb-10"
              >
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent inline-block`}>
                  {category.name}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills
                    .filter(skill => skill.category === category.id)
                    .map((skill, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ 
                          y: -5,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          transition: { duration: 0.2 }
                        }}
                        className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center"
                      >
                        <div className={`p-3 rounded-full mb-3 bg-gradient-to-r ${category.color} text-white`}>
                          {getIcon(skill.icon)}
                        </div>
                        <h4 className="text-lg font-medium text-text-light dark:text-text-dark mb-2">{skill.name}</h4>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                          <motion.div 
                            className={`h-2.5 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level * 20}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          ></motion.div>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {skill.level === 5 ? 'Expert' : 
                           skill.level === 4 ? 'Advanced' : 
                           skill.level === 3 ? 'Intermediate' : 
                           skill.level === 2 ? 'Basic' : 'Beginner'}
                        </span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;