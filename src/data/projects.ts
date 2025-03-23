import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Rexerra",
    description: "Built the complete website using React and TypeScript from scratch.Implemented optimized state management, API integration, and performance enhancements.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "http://www.rexerra.com/",
    demo: "http://www.rexerra.com/",
    featured: true
  },
  {
    id: 2,
    title: "WealthWise",
    description: "A comprehensive financial management application for tracking expenses, managing budgets, and visualizing spending patterns.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "D3.js"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://wealthwisse.netlify.app/",
    demo: "https://wealthwisse.netlify.app/",
    featured: true
  },
  {
    id: 3,
    title: "Node Hotels",
    description: "A hotel management system with room booking, staff management, and customer service features.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/aryant0/node_hotels",
    demo: "https://github.com/aryant0/node_hotels",
    featured: true
  },
  {
    id: 4,
    title: "Voting System",
    description: "A secure online voting platform with user authentication and real-time vote counting.",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/aryant0/Voting_Node",
    demo: "https://github.com/aryant0/Voting_Node",
    featured: false
  }
];