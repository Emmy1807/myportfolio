import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/emmy1807', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/emmanuel-onuh-6b828735b/', label: 'LinkedIn' },
    // { icon: FiTwitter, href: 'https://twitter.com/onuhemmanuel', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:emmanuelonuh141@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <motion.h3
              className="footer-logo gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Onuh Emmanuel
            </motion.h3>
            <p className="footer-description">
              Full-Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="footer-contact">
              <li>
                <a href="mailto:emmanuelonuh141@gmail.com" className="footer-link">
                  emmanuelonuh141@gmail.com
                </a>
              </li>
              <li>
                <span className="footer-text">Lagos, Nigeria</span>
              </li>
              <li>
                <span className="footer-text">Available for freelance work</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Onuh Emmanuel. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <FiHeart className="heart-icon" /> using React & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
