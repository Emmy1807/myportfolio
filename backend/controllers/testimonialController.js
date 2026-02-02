const { prisma } = require('../config/database');

// Get all approved testimonials
exports.getAllTestimonials = async (req, res) => {
  try {
    console.log('Fetching all testimonials...');
    const testimonials = await prisma.testimonial.findMany({
      where: { approved: true },
      orderBy: { createdAt: 'desc' }
    });
    console.log(`Found ${testimonials.length} testimonials`);
    res.json({ success: true, data: testimonials });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Get single testimonial
exports.getTestimonialById = async (req, res) => {
  try {
    const testimonial = await prisma.testimonial.findUnique({
      where: { id: req.params.id }
    });
    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }
    res.json({ success: true, data: testimonial });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Create testimonial
exports.createTestimonial = async (req, res) => {
  try {
    const testimonial = await prisma.testimonial.create({
      data: req.body
    });
    res.status(201).json({ success: true, data: testimonial });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to create testimonial', error: error.message });
  }
};

// Update testimonial (for admin use)
exports.updateTestimonial = async (req, res) => {
  try {
    const testimonial = await prisma.testimonial.update({
      where: { id: req.params.id },
      data: req.body
    });
    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }
    res.json({ success: true, data: testimonial });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }
    res.status(400).json({ success: false, message: 'Failed to update testimonial', error: error.message });
  }
};

// Delete testimonial (for admin use)
exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await prisma.testimonial.delete({
      where: { id: req.params.id }
    });
    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }
    res.json({ success: true, message: 'Testimonial deleted successfully' });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
