# Onuh Emmanuel - Portfolio Website

A modern, interactive full-stack portfolio website showcasing projects, skills, and professional experience.

## Overview

This portfolio features a React frontend with 3D animations and a Node.js backend with MongoDB for dynamic content management.

## Features

### Frontend
- 🎨 Modern, responsive design with dark theme
- 🌐 3D interactive elements using Three.js
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-first responsive layout
- 🚀 Fast performance and optimized loading
- ♿ Accessible and SEO-friendly

### Backend
- 🔧 RESTful API with Express.js
- 💾 MongoDB database for data persistence
- 📧 Email notifications via Nodemailer
- 🔒 Secure environment configuration
- 📊 CRUD operations for projects and testimonials

## Tech Stack

**Frontend:**
- React.js
- React Three Fiber (@react-three/fiber, @react-three/drei)
- Framer Motion
- Axios
- React Router DOM
- React Icons

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer
- CORS
- dotenv

## Project Structure

```
portfolio/
│
├── frontend/                 # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── utils/           # API utilities
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.jsx
│   │   └── index.css
│   ├── package.json
│   └── README.md
│
└── backend/                  # Node.js backend
    ├── config/              # Database config
    ├── controllers/         # Route controllers
    ├── models/              # Mongoose models
    ├── routes/              # API routes
    ├── server.js            # Entry point
    ├── package.json
    └── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/onuhemmanuel/portfolio.git
cd portfolio
```

2. **Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

3. **Setup Frontend** (in a new terminal)
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your API URL
npm start
```

### Environment Variables

**Backend (.env):**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

**Frontend (.env):**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Create testimonial
- `PUT /api/testimonials/:id` - Update testimonial
- `DELETE /api/testimonials/:id` - Delete testimonial

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)

## Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Backend (Render/Railway)

1. Create new web service
2. Connect repository
3. Set environment variables
4. Deploy

## Customization Guide

1. **Personal Information**: Update name, bio, and contact details in components
2. **Colors**: Modify CSS variables in `frontend/src/index.css`
3. **Projects**: Add projects via API or directly in MongoDB
4. **Skills**: Edit skills array in `frontend/src/components/Skills.jsx`
5. **Resume**: Add your CV PDF to `frontend/public/resume.pdf`

## Performance

- Lazy loading for 3D components
- Code splitting
- Image optimization
- Minified production builds
- CDN deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## License

MIT License - feel free to use this as a template for your own portfolio.

## Contact

**Onuh Emmanuel**
- Email: onuhemmanuel@example.com
- GitHub: [@onuhemmanuel](https://github.com/onuhemmanuel)
- LinkedIn: [onuhemmanuel](https://linkedin.com/in/onuhemmanuel)

---

Made with ❤️ using React and Node.js
