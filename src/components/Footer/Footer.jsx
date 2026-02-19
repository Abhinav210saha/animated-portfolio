import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Abhinav</h3>
        <p>Building modern & scalable web experiences.</p>

        <div className="footer-actions">
          <a
            href="/Abhinav_Resume.pdf"
            download
            className="resume-btn"
          >
            📄 Download Resume
          </a>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
          <a href="mailto:yourmail@gmail.com">Email</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Abhinav. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
