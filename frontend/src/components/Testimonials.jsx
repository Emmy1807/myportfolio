import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { testimonialsAPI } from '../utils/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await testimonialsAPI.getAll();
      const apiTestimonials = response?.data?.data || [];

      if (Array.isArray(apiTestimonials) && apiTestimonials.length > 0) {
        setTestimonials(apiTestimonials);
      } else {
        // Use demo testimonials when the database is empty
        setTestimonials(getDemoTestimonials());
      }
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      // Fallback to demo testimonials
      setTestimonials(getDemoTestimonials());
    } finally {
      setLoading(false);
    }
  };

  const getDemoTestimonials = () => [
    {
      _id: '1',
      name: 'Mr Victor Chukwu',
      position: 'Founder',
      company: 'Peace Of God Ministry',
      message: 'Emmanuel is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are outstanding.',
      rating: 5,
      imageUrl: '/images/dr.ch.jpeg',
    },
    {
      _id: '2',
      name: 'Williams Godstime',
      position: 'CEO',
      company: 'D-Williams Fashion Hub',
      message: 'Working with Emmanuel was a pleasure. He captured the essence of our brand and delivered a seamless, quality and creativity we stand for at D-Williams Fashion Hub.',
      rating: 5,
      imageUrl: '/images/williams.jpeg',
    },
    // {
    //   _id: '3',
    //   name: 'Emily Rodriguez',
    //   position: 'Founder',
    //   company: 'StartupHub',
    //   message: 'Emmanuel transformed our vision into reality with his excellent coding skills and creative approach. Highly recommended for any web development project!',
    //   rating: 5,
    //   imageUrl: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=00ff88&color=000&size=200',
    // },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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

  if (loading || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <motion.div
          ref={ref}
          className="testimonials-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Client Testimonials</h2>
            <div className="section-line"></div>
            <p className="section-description">
              What clients say about working with me
            </p>
          </motion.div>

          <motion.div className="testimonial-slider" variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-header">
                  <img
                    src={currentTestimonial.imageUrl}
                    alt={currentTestimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{currentTestimonial.name}</h3>
                    <p className="testimonial-position">
                      {currentTestimonial.position}
                      {currentTestimonial.company && ` at ${currentTestimonial.company}`}
                    </p>
                    <div className="testimonial-rating">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <FiStar key={i} className="star-icon filled" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-message">"{currentTestimonial.message}"</p>
              </motion.div>
            </AnimatePresence>

            {testimonials.length > 1 && (
              <div className="testimonial-controls">
                <motion.button
                  className="control-btn"
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous testimonial"
                >
                  <FiChevronLeft size={24} />
                </motion.button>
                <div className="testimonial-dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <motion.button
                  className="control-btn"
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next testimonial"
                >
                  <FiChevronRight size={24} />
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
