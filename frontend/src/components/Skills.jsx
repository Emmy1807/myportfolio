import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs, FaGitAlt,
  FaNpm, FaDatabase, FaDocker, FaAws
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTailwindcss, SiRedux,
  SiPostgresql, SiFirebase, SiVercel, SiPostman
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: FaNode, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'Database', icon: FaDatabase, color: '#00d9ff' },
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'NPM', icon: FaNpm, color: '#CB3837' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="section-line"></div>
            <p className="section-description">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                className="skill-category"
                variants={itemVariants}
              >
                <h3 className="category-title">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-card"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <skill.icon
                        className="skill-icon"
                        style={{ color: skill.color }}
                        size={40}
                      />
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
