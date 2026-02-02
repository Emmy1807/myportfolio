# Portfolio Backend API

Backend API for Onuh Emmanuel's Portfolio Website built with Node.js, Express, and MongoDB.

## Features

- **Projects API**: Manage and display portfolio projects
- **Testimonials API**: Handle client testimonials
- **Contact API**: Process contact form submissions with email notifications
- **MongoDB Integration**: Persistent data storage
- **Email Notifications**: Nodemailer integration for contact form

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
   - `MONGODB_URI`: Your MongoDB connection string
   - `EMAIL_USER`: Gmail address for sending emails
   - `EMAIL_PASS`: Gmail app password (not regular password)
   - `FRONTEND_URL`: Your frontend URL
   - `PORT`: Server port (default: 5000)

4. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Testimonials
- `GET /api/testimonials` - Get all approved testimonials
- `GET /api/testimonials/:id` - Get single testimonial
- `POST /api/testimonials` - Create testimonial
- `PUT /api/testimonials/:id` - Update testimonial (admin)
- `DELETE /api/testimonials/:id` - Delete testimonial (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PATCH /api/contact/:id/read` - Mark as read (admin)
- `DELETE /api/contact/:id` - Delete contact (admin)

### Health Check
- `GET /api/health` - Check API status

## Gmail Setup for Nodemailer

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `EMAIL_PASS` environment variable

## Deployment

### Render
1. Create new Web Service
2. Connect your repository
3. Set environment variables
4. Deploy

### Railway
1. Create new project
2. Add MongoDB plugin
3. Set environment variables
4. Deploy

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables
