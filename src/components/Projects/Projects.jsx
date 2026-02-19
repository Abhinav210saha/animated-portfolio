import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Animated Portfolio",
    description:
      "A modern animated portfolio website built using React and Framer Motion.",
    github: "https://github.com/yourusername/animated-portfolio",
    live: "https://your-portfolio.netlify.app",
  },
  {
    title: "E-Commerce Clothing App",
    description:
      "An online clothing shopping platform with product listing, cart, and authentication.",
    github: "https://github.com/yourusername/ecommerce-app",
    live: "#",
  },
  {
    title: "AI Crop Advisory System",
    description:
      "AI-powered crop advisory website providing smart farming recommendations.",
    github: "https://github.com/yourusername/ai-crop-advisory",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="live"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
