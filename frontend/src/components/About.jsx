import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (certificate) => {
    setModalContent(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

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

          <motion.div className="certificates-section" variants={itemVariants}>
            <h3 className="certificates-title">Certifications</h3>
            <div className="certificates-grid">
              <div className="certificate-card">
                <div className="certificate-info">
                  <h4 className="certificate-name">Full Stack Web Development Professional Certificate</h4>
                  <p className="certificate-issuer">Issued by Loctech</p>
                  <p className="certificate-date">Completed: May 2025</p>
                  <button 
                    className="view-certificate-btn" 
                    onClick={() => openModal({
                      name: 'Full Stack Web Development Professional Certificate',
                      image: '/images/IMG_0246.jpg', // Replace with actual image URL
                 // Replace with actual verification link
                    })}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
              {/* Add more certificate cards here if needed */}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h3>{modalContent?.name}</h3>
            <img src={modalContent?.image} alt={modalContent?.name} className="certificate-image" />
            <a 
              href={modalContent?.verificationLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="verification-link"
            >
              Verify Certificate
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
