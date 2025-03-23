import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare form data for Netlify
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('form-name', 'contact');

    try {
      // Send form data to Netlify
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      // Handle success
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <section id="contact" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div variants={containerVariants} className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark">
              Get In Touch
            </motion.span>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
              Contact Me
            </motion.h2>
            <motion.div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto mb-6"></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">
                Let's Connect
              </h3>
              
              <div className="space-y-6 mb-8">
                <motion.div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 mr-4">
                    <Mail className="text-primary-light dark:text-primary-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-text-light dark:text-text-dark">Email</h4>
                    <a href="mailto:aryannarayanthakur@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                      aryannarayanthakur@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 mr-4">
                    <Phone className="text-primary-light dark:text-primary-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-text-light dark:text-text-dark">Phone</h4>
                    <a href="tel:+918287446956" className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                      +91 8287446956
                    </a>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 mr-4">
                    <MapPin className="text-primary-light dark:text-primary-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-text-light dark:text-text-dark">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Gurgaon, India
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">
                Follow Me
              </h3>
              
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/aryant0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/aryan-narayan-thakur-94106a252/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">
                Send Me a Message
              </h3>
              
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    placeholder="Your message here..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg bg-primary-light dark:bg-primary-dark text-white font-medium flex items-center justify-center transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark dark:hover:bg-opacity-90'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </motion.button>
                
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-center"
                  >
                    Your message has been sent successfully!
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;