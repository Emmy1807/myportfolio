-- Clear existing data
DELETE FROM "Contact";
DELETE FROM "Testimonial";
DELETE FROM "Project";

-- Insert sample projects
INSERT INTO "Project" (id, title, description, "techStack", "githubUrl", "liveUrl", "imageUrl", featured, "order") VALUES
('1', 'E-Commerce Platform', 'A full-featured e-commerce platform with shopping cart, payment integration using Stripe, user authentication, and an admin dashboard for managing products and orders.', ARRAY['React','Node.js','MongoDB','Stripe','Express'], 'https://github.com/onuhemmanuel/ecommerce-platform', 'https://ecommerce-demo.vercel.app', 'https://via.placeholder.com/600x400/1a1a1a/00d9ff?text=E-Commerce+Platform', true, 1);

INSERT INTO "Project" (id, title, description, "techStack", "githubUrl", "liveUrl", "imageUrl", featured, "order") VALUES
('2', 'Task Management App', 'Collaborative task management tool with real-time updates, team features, drag-and-drop functionality, and progress tracking.', ARRAY['React','Firebase','Tailwind CSS','React DnD'], 'https://github.com/onuhemmanuel/task-manager', 'https://task-manager-demo.vercel.app', 'https://via.placeholder.com/600x400/1a1a1a/7b2cbf?text=Task+Manager', true, 2);

INSERT INTO "Project" (id, title, description, "techStack", "githubUrl", "liveUrl", "imageUrl", featured, "order") VALUES
('3', 'Social Media Dashboard', 'Analytics dashboard for social media metrics with beautiful data visualizations, real-time updates, and comprehensive reporting features.', ARRAY['React','Chart.js','Express','PostgreSQL'], 'https://github.com/onuhemmanuel/social-dashboard', 'https://social-dashboard-demo.vercel.app', 'https://via.placeholder.com/600x400/1a1a1a/00ff88?text=Analytics+Dashboard', true, 3);

INSERT INTO "Project" (id, title, description, "techStack", "githubUrl", "liveUrl", "imageUrl", featured, "order") VALUES
('4', 'Weather Forecast App', 'Real-time weather application with location-based forecasts, 7-day predictions, and beautiful animated UI showing current conditions.', ARRAY['React','OpenWeather API','CSS3','Geolocation'], 'https://github.com/onuhemmanuel/weather-app', 'https://weather-app-demo.vercel.app', 'https://via.placeholder.com/600x400/1a1a1a/ff6c37?text=Weather+App', true, 4);

INSERT INTO "Project" (id, title, description, "techStack", "githubUrl", "liveUrl", "imageUrl", featured, "order") VALUES
('5', 'Blog Platform', 'Full-featured blogging platform with rich text editor, comment system, tags, categories, and SEO optimization.', ARRAY['Next.js','TypeScript','Prisma','PostgreSQL'], 'https://github.com/onuhemmanuel/blog-platform', 'https://blog-demo.vercel.app', 'https://via.placeholder.com/600x400/1a1a1a/9d4edd?text=Blog+Platform', true, 5);

INSERT INTO "Project" (id, title, description, "techStack", "githubUrl", "liveUrl", "imageUrl", featured, "order") VALUES
('6', 'Portfolio Website', 'Personal portfolio website showcasing projects, skills, and testimonials with smooth animations and responsive design.', ARRAY['React','Tailwind CSS','Framer Motion','Next.js'], 'https://github.com/onuhemmanuel/portfolio', 'https://portfolio-demo.vercel.app', 'https://via.placeholder.com/600x400/1a1a1a/ff006e?text=Portfolio', true, 6);

-- Insert sample testimonials
INSERT INTO "Testimonial" (id, name, position, company, message, "imageUrl", rating, approved) VALUES
('1', 'Sarah Johnson', 'Product Manager', 'Tech Innovations Inc', 'Amazing developer! Delivered the project ahead of schedule with excellent code quality.', 'https://via.placeholder.com/150x150/1a1a1a/00d9ff?text=Sarah', 5, true);

INSERT INTO "Testimonial" (id, name, position, company, message, "imageUrl", rating, approved) VALUES
('2', 'Michael Chen', 'CTO', 'Digital Solutions Ltd', 'Highly professional and communicative throughout the project. Would definitely work with them again.', 'https://via.placeholder.com/150x150/1a1a1a/7b2cbf?text=Michael', 5, true);

INSERT INTO "Testimonial" (id, name, position, company, message, "imageUrl", rating, approved) VALUES
('3', 'Emily Rodriguez', 'CEO', 'StartUp Ventures', 'Exceptional problem-solving skills and great attention to detail. Highly recommended!', 'https://via.placeholder.com/150x150/1a1a1a/00ff88?text=Emily', 5, true);
