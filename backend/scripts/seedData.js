const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

dotenv.config();

const prisma = new PrismaClient();

const sampleProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, payment integration using Stripe, user authentication, and an admin dashboard for managing products and orders.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
    githubUrl: 'https://github.com/onuhemmanuel/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    imageUrl: 'https://via.placeholder.com/600x400/1a1a1a/00d9ff?text=E-Commerce+Platform',
    featured: true,
    order: 1
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team features, drag-and-drop functionality, and progress tracking.',
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
    githubUrl: 'https://github.com/onuhemmanuel/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
    imageUrl: 'https://via.placeholder.com/600x400/1a1a1a/7b2cbf?text=Task+Manager',
    featured: true,
    order: 2
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with beautiful data visualizations, real-time updates, and comprehensive reporting features.',
    techStack: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/onuhemmanuel/social-dashboard',
    liveUrl: 'https://social-dashboard-demo.vercel.app',
    imageUrl: 'https://via.placeholder.com/600x400/1a1a1a/00ff88?text=Analytics+Dashboard',
    featured: true,
    order: 3
  },
  {
    title: 'Weather Forecast App',
    description: 'Real-time weather application with location-based forecasts, 7-day predictions, and beautiful animated UI showing current conditions.',
    techStack: ['React', 'OpenWeather API', 'CSS3', 'Geolocation'],
    githubUrl: 'https://github.com/onuhemmanuel/weather-app',
    liveUrl: 'https://weather-app-demo.vercel.app',
    imageUrl: 'https://via.placeholder.com/600x400/1a1a1a/ff6c37?text=Weather+App',
    featured: true,
    order: 4
  },
  {
    title: 'Blog Platform',
    description: 'Full-stack blog platform with markdown support, user authentication, comments system, and SEO optimization.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Markdown'],
    githubUrl: 'https://github.com/onuhemmanuel/blog-platform',
    liveUrl: 'https://blog-demo.vercel.app',
    imageUrl: 'https://via.placeholder.com/600x400/1a1a1a/00d9ff?text=Blog+Platform',
    featured: false,
    order: 5
  },
  {
    title: 'Portfolio Generator',
    description: 'SaaS application that helps developers create beautiful portfolio websites with customizable templates and themes.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/onuhemmanuel/portfolio-generator',
    liveUrl: 'https://portfolio-gen-demo.vercel.app',
    imageUrl: 'https://via.placeholder.com/600x400/1a1a1a/7b2cbf?text=Portfolio+Generator',
    featured: false,
    order: 6
  }
];

const sampleTestimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechStart Inc',
    message: 'Emmanuel is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are outstanding. The e-commerce platform he built exceeded all our expectations.',
    rating: 5,
    imageUrl: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=00d9ff&color=fff&size=200',
    approved: true
  },
  {
    name: 'Michael Chen',
    position: 'Product Manager',
    company: 'Digital Solutions',
    message: 'Working with Emmanuel was a pleasure. He understood our requirements perfectly and built a robust, scalable solution that exceeded our expectations. His communication throughout the project was excellent.',
    rating: 5,
    imageUrl: 'https://ui-avatars.com/api/?name=Michael+Chen&background=7b2cbf&color=fff&size=200',
    approved: true
  },
  {
    name: 'Emily Rodriguez',
    position: 'Founder',
    company: 'StartupHub',
    message: 'Emmanuel transformed our vision into reality with his excellent coding skills and creative approach. Highly recommended for any web development project! He is professional, skilled, and delivers quality work.',
    rating: 5,
    imageUrl: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=00ff88&color=000&size=200',
    approved: true
  },
  {
    name: 'David Kim',
    position: 'CTO',
    company: 'InnovateTech',
    message: 'Outstanding work! Emmanuel built our dashboard application with clean, maintainable code. His expertise in both frontend and backend development made the entire process smooth and efficient.',
    rating: 5,
    imageUrl: 'https://ui-avatars.com/api/?name=David+Kim&background=ff6c37&color=fff&size=200',
    approved: true
  }
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to PostgreSQL via Prisma...');

    // Clear existing data
    await prisma.project.deleteMany({});
    await prisma.testimonial.deleteMany({});
    console.log('Cleared existing data');

    // Insert sample projects
    await prisma.project.createMany({
      data: sampleProjects
    });
    console.log(`Inserted ${sampleProjects.length} projects`);

    // Insert sample testimonials
    await prisma.testimonial.createMany({
      data: sampleTestimonials
    });
    console.log(`Inserted ${sampleTestimonials.length} testimonials`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();
