import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projectsAPI } from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const response = await projectsAPI.getFeatured();
      const data = response?.data?.data || [];

      // ✅ fallback if API returns empty array
      if (data.length === 0) {
        setProjects(getDemoProjects());
      } else {
        setProjects(data);
      }

      setError(null);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects');
      setProjects(getDemoProjects()); // ✅ fallback on error
    } finally {
      setLoading(false);
    }
  };

  const getDemoProjects = () => [
    {
      _id: '1',
      title: 'E-Classy Restuarant',
      description:
        'A full-featured e-commerce platform with cart, payment integration, and admin dashboard.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      imageUrl:
        '/images/e-classy.png',
    },
    {
      _id: '2',
      title: 'Peace mentorship',
      description:
        'A mentorship initiative focused on personal growth, leadership development, and fostering meaningful connections through guided support and shared experiences.',
      techStack: ['React', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      imageUrl:
        '/images/Screenshot 2026-01-13 214311.png',
    },
    {
      _id: '3',
      title: 'Dr Victor Chukwu',
      description:
        'A user friendly booking platform for Dr victor chukwu to share his insights and connect with his audience.',
      techStack: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      imageUrl:
        '/images/dr.ch.png',
    },
    {
      _id: '4',
      title: 'Filmfinity',
      description:
        'An immersive movie website that brings films to life, rich visuals, trailers, and detailed movie insights.',
      techStack: ['React', 'OpenWeather API', 'CSS3'],
      githubUrl: 'https://github.com/Emmy1807/Peace-mentorship',
      liveUrl: 'https://peace-mentorship-qgfa.vercel.app/',
      imageUrl: '/images/image.png',
    },
  ];

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
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line"></div>
            <p className="section-description">
              Some of my recent work that I&apos;m proud of
            </p>
          </motion.div>

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading projects...</p>
            </div>
          ) : error ? (
            <div className="error-container">
              <p>{error}</p>
            </div>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <motion.div
                  key={project._id}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="project-image">
                    <img
                      src={project.imageUrl}
                      alt={project.title || 'Project image'}
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="View GitHub repository"
                          >
                            <FiGithub size={24} />
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="View live demo"
                          >
                            <FiExternalLink size={24} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-tech">
                      {project.techStack?.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { FiGithub, FiExternalLink } from 'react-icons/fi';
// import { projectsAPI } from '../utils/api';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       setLoading(true);
//       const response = await projectsAPI.getFeatured();
//       setProjects(response.data.data);
//       setError(null);
//     } catch (err) {
//       console.error('Error fetching projects:', err);
//       setError('Failed to load projects');
//       // Fallback to demo projects if API fails
//       setProjects(getDemoProjects());
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getDemoProjects = () => [
//     {
//       _id: '1',
//       title: '',
//       description: 'A full-featured e-commerce platform with cart, payment integration, and admin dashboard.',
//       techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//       githubUrl: 'https://github.com',
//       liveUrl: 'https://example.com',
//       imageUrl: 'https://via.placeholder.com/600x400/1a1a1a/00d9ff?text=E-Commerce',
//     },
//     {
//       _id: '2',
//       title: 'Task Management App',
//       description: 'Collaborative task management tool with real-time updates and team features.',
//       techStack: ['React', 'Firebase', 'Tailwind CSS'],
//       githubUrl: 'https://github.com',
//       liveUrl: 'https://example.com',
//       imageUrl: 'https://via.placeholder.com/600x400/1a1a1a/7b2cbf?text=Task+Manager',
//     },
//     {
//       _id: '3',
//       title: 'Social Media Dashboard',
//       description: 'Analytics dashboard for social media metrics with beautiful data visualizations.',
//       techStack: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
//       githubUrl: 'https://github.com',
//       liveUrl: 'https://example.com',
//       imageUrl: 'https://via.placeholder.com/600x400/1a1a1a/00ff88?text=Dashboard',
//     },
//     {
//       _id: '4',
//       title: 'Weather Forecast App',
//       description: 'Real-time weather application with location-based forecasts and beautiful UI.',
//       techStack: ['React', 'OpenWeather API', 'CSS3'],
//       githubUrl: 'https://github.com/Emmy1807/Peace-mentorship',
//       liveUrl: 'https://peace-mentorship-qgfa.vercel.app/',
//       imageUrl: '/images/Screenshot 2026-01-13 214311.png',
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     },
//   };

//   return (
//     <section id="projects" className="projects section">
//       <div className="container">
//         <motion.div
//           ref={ref}
//           className="projects-content"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? 'visible' : 'hidden'}
//         >
//           <motion.div className="section-header" variants={itemVariants}>
//             <h2 className="section-title">Featured Projects</h2>
//             <div className="section-line"></div>
//             <p className="section-description">
//               Some of my recent work that I'm proud of
//             </p>
//           </motion.div>

//           {loading ? (
//             <div className="loading-container">
//               <div className="loading-spinner"></div>
//               <p>Loading projects...</p>
//             </div>
//           ) : error ? (
//             <div className="error-container">
//               <p>{error}</p>
//             </div>
//           ) : (
//             <div className="projects-grid">
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={project._id}
//                   className="project-card"
//                   variants={itemVariants}
//                   whileHover={{ y: -10 }}
//                 >
//                   <div className="project-image">
//                     <img src={project.imageUrl} alt={project.title} />
//                     <div className="project-overlay">
//                       <div className="project-links">
//                         {project.githubUrl && (
//                           <motion.a
//                             href={project.githubUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="project-link"
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             aria-label="View GitHub repository"
//                           >
//                             <FiGithub size={24} />
//                           </motion.a>
//                         )}
//                         {project.liveUrl && (
//                           <motion.a
//                             href={project.liveUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="project-link"
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             aria-label="View live demo"
//                           >
//                             <FiExternalLink size={24} />
//                           </motion.a>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="project-info">
//                     <h3 className="project-title">{project.title}</h3>
//                     <p className="project-description">{project.description}</p>
//                     <div className="project-tech">
//                       {project.techStack.map((tech, i) => (
//                         <span key={i} className="tech-tag">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
