import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projects';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(0);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  const nextProject = () => {
    setDirection(1);
    setActiveProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setActiveProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

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
      transition: { duration: 0.6 }
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="projects" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.span 
              className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
              whileHover={{ scale: 1.05 }}
            >
              My Work
            </motion.span>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
              Featured Projects
            </motion.h2>
            <motion.div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto mb-6"></motion.div>
            <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore a selection of my recent projects showcasing my skills and expertise in full-stack development.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all' 
                    ? 'bg-white dark:bg-gray-800 text-primary-light dark:text-primary-dark shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'featured' 
                    ? 'bg-white dark:bg-gray-800 text-primary-light dark:text-primary-dark shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark'
                }`}
              >
                Featured
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeProject}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                      <img 
                        src={filteredProjects[activeProject].image} 
                        alt={filteredProjects[activeProject].title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        <div className="flex space-x-4">
                          {filteredProjects[activeProject].github && (
                            <motion.a 
                              href={filteredProjects[activeProject].github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2 bg-white rounded-full text-gray-800 hover:text-primary-light transition-colors"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github size={20} />
                            </motion.a>
                          )}
                          {filteredProjects[activeProject].demo && (
                            <motion.a 
                              href={filteredProjects[activeProject].demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2 bg-white rounded-full text-gray-800 hover:text-primary-light transition-colors"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink size={20} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-text-light dark:text-text-dark">
                      {filteredProjects[activeProject].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {filteredProjects[activeProject].description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {filteredProjects[activeProject].technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      {filteredProjects[activeProject].github && (
                        <a 
                          href={filteredProjects[activeProject].github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center"
                        >
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                      )}
                      {filteredProjects[activeProject].demo && (
                        <a 
                          href={filteredProjects[activeProject].demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full bg-primary-light dark:bg-primary-dark text-white font-medium hover:bg-primary-dark dark:hover:bg-opacity-90 transition-colors flex items-center"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeProject ? 1 : -1);
                    setActiveProject(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeProject 
                      ? 'bg-primary-light dark:bg-primary-dark' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2">
              <motion.button
                onClick={prevProject}
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-text-light dark:text-text-dark shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2">
              <motion.button
                onClick={nextProject}
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-text-light dark:text-text-dark shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex space-x-3">
                      {project.github && (
                        <motion.a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full text-gray-800 hover:text-primary-light transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full text-gray-800 hover:text-primary-light transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-text-light dark:text-text-dark">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;