const { prisma } = require('../config/database');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
    });
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Get featured projects
exports.getFeaturedProjects = async (req, res) => {
  try {
    console.log('Fetching featured projects...');
    const projects = await prisma.project.findMany({
      where: { featured: true },
      orderBy: { order: 'asc' },
      take: 6
    });
    console.log(`Found ${projects.length} featured projects`);
    res.json({ success: true, data: projects });
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Get single project
exports.getProjectById = async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: req.params.id }
    });
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Create project (for admin use)
exports.createProject = async (req, res) => {
  try {
    const project = await prisma.project.create({
      data: req.body
    });
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to create project', error: error.message });
  }
};

// Update project (for admin use)
exports.updateProject = async (req, res) => {
  try {
    const project = await prisma.project.update({
      where: { id: req.params.id },
      data: req.body
    });
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, data: project });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.status(400).json({ success: false, message: 'Failed to update project', error: error.message });
  }
};

// Delete project (for admin use)
exports.deleteProject = async (req, res) => {
  try {
    const project = await prisma.project.delete({
      where: { id: req.params.id }
    });
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
