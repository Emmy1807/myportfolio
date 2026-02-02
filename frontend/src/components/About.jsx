import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <p className="about-paragraph">
                Hello! I'm <span className="gradient-text">Onuh Emmanuel</span>, a passionate
                Full-Stack Developer with a love for creating innovative and efficient web solutions.
                My journey in web development started with curiosity and has evolved into a
                professional career focused on building impactful digital experiences.
              </p>
              <p className="about-paragraph">
                I specialize in modern JavaScript frameworks and libraries, with expertise in
                <strong> React.js</strong> for building dynamic user interfaces and
                <strong> Node.js</strong> for creating robust backend systems. I'm committed to
                writing clean, maintainable code and following best practices in software development.
              </p>
              <p className="about-paragraph">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community. I believe
                in continuous learning and staying updated with the latest industry trends.
              </p>
              <p className="about-paragraph">
                I'm always excited to take on new challenges and collaborate on projects that make
                a difference. Let's build something amazing together!
              </p>
            </motion.div>

            <motion.div className="about-stats" variants={itemVariants}>
              <div className="stat-card">
                <div className="stat-number gradient-text">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number gradient-text">15+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number gradient-text">10+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number gradient-text">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
