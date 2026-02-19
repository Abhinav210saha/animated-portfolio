import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Feel free to reach out for opportunities, collaborations, or just a chat.
      </motion.p>

      <div className="contact-container">
        {/* Contact Form */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Connect with me</h3>
          <a href="https://github.com/yourusername" target="_blank">🐙 GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">💼 LinkedIn</a>
          <a href="mailto:yourmail@gmail.com">✉️ Email</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
