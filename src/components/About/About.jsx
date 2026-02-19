import { motion } from "framer-motion";
import "./About.css";

const cards = [
  {
    title: "Who I Am",
    text: "I am a passionate MERN Stack Developer who enjoys building modern, scalable, and user-friendly web applications.",
  },
  {
    title: "What I Do",
    text: "I work with React, Node.js, Express, and MongoDB to develop full-stack applications with clean UI and smooth UX.",
  },
  {
    title: "My Goal",
    text: "To grow as a software engineer, contribute to impactful projects, and continuously improve my problem-solving skills.",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="about-cards">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
