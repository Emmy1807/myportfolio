# Portfolio Setup Guide

Complete step-by-step guide to set up and deploy your portfolio website.

## Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [MongoDB Setup](#mongodb-setup)
3. [Email Configuration](#email-configuration)
4. [Adding Content](#adding-content)
5. [Deployment](#deployment)

---

## Local Development Setup

### Step 1: Install Node.js
Download and install Node.js from [nodejs.org](https://nodejs.org/) (v14 or higher)

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Clone/Download Project
Navigate to the portfolio folder:
```bash
cd c:/Users/USER/Desktop/portfolio
```

### Step 3: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 4: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

---

## MongoDB Setup

### Option 1: MongoDB Atlas (Cloud - Recommended)

1. **Create Account**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free account

2. **Create Cluster**
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select region closest to you
   - Click "Create Cluster"

3. **Create Database User**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Set username and password (save these!)
   - Set role to "Read and write to any database"

4. **Whitelist IP Address**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Confirm

5. **Get Connection String**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `portfolio`

### Option 2: Local MongoDB

1. Download from [mongodb.com/download-center/community](https://www.mongodb.com/try/download/community)
2. Install and start MongoDB service
3. Connection string: `mongodb://localhost:27017/portfolio`

---

## Email Configuration

### Gmail Setup for Contact Form

1. **Enable 2-Factor Authentication**
   - Go to Google Account settings
   - Security → 2-Step Verification
   - Enable it

2. **Generate App Password**
   - Go to Google Account → Security
   - 2-Step Verification → App passwords
   - Select app: "Mail"
   - Select device: "Other" (enter "Portfolio")
   - Click "Generate"
   - Copy the 16-character password

3. **Update Backend .env**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-char-app-password
   ```

---

## Adding Content

### Backend Configuration

1. **Create .env file** in `backend/` folder:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

2. **Start Backend Server**:
```bash
cd backend
npm run dev
```

Server should start at `http://localhost:5000`

### Frontend Configuration

1. **Create .env file** in `frontend/` folder:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

2. **Start Frontend**:
```bash
cd frontend
npm start
```

App should open at `http://localhost:3000`

### Add Projects (Using API)

Use Postman or any API client:

**POST** `http://localhost:5000/api/projects`

Body (JSON):
```json
{
  "title": "E-Commerce Platform",
  "description": "Full-featured online shopping platform",
  "techStack": ["React", "Node.js", "MongoDB", "Stripe"],
  "githubUrl": "https://github.com/yourusername/project",
  "liveUrl": "https://yourproject.com",
  "imageUrl": "https://via.placeholder.com/600x400",
  "featured": true,
  "order": 1
}
```

### Add Testimonials

**POST** `http://localhost:5000/api/testimonials`

Body (JSON):
```json
{
  "name": "John Doe",
  "position": "CEO",
  "company": "Tech Company",
  "message": "Great work! Highly recommended.",
  "rating": 5,
  "imageUrl": "https://ui-avatars.com/api/?name=John+Doe",
  "approved": true
}
```

### Update Personal Information

1. **Hero Section**: Edit `frontend/src/components/Hero.jsx`
   - Update name, title, description
   - Change social media links

2. **About Section**: Edit `frontend/src/components/About.jsx`
   - Update bio
   - Change statistics

3. **Contact Info**: Edit `frontend/src/components/Contact.jsx`
   - Update email, phone, location

4. **Footer**: Edit `frontend/src/components/Footer.jsx`
   - Update social links

5. **Resume**: Add your CV as `frontend/public/resume.pdf`

---

## Deployment

### Deploy Backend (Render)

1. **Create Account** at [render.com](https://render.com)

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect GitHub repository (or use manual deploy)
   - Settings:
     - Name: `portfolio-backend`
     - Environment: `Node`
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Instance Type: Free

3. **Add Environment Variables**
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   FRONTEND_URL=https://your-frontend-url.vercel.app
   NODE_ENV=production
   PORT=5000
   ```

4. **Deploy** and copy the service URL

### Deploy Frontend (Vercel)

1. **Create Account** at [vercel.com](https://vercel.com)

2. **Import Project**
   - Click "Add New" → "Project"
   - Import from GitHub or upload folder
   - Root Directory: `frontend`
   - Framework: Create React App

3. **Configure**
   - Build Command: `npm run build`
   - Output Directory: `build`

4. **Add Environment Variable**
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com/api
   ```

5. **Deploy**

### Update Backend FRONTEND_URL

After frontend is deployed, update backend environment variable:
```
FRONTEND_URL=https://your-portfolio.vercel.app
```

Redeploy backend for changes to take effect.

---

## Testing

1. **Test Backend**:
   - Visit `https://your-backend-url.onrender.com/api/health`
   - Should return: `{"success": true, "message": "Portfolio API is running"}`

2. **Test Frontend**:
   - Visit your Vercel URL
   - Check all sections load
   - Test contact form
   - Verify projects display

---

## Troubleshooting

### Backend won't start
- Check MongoDB connection string
- Verify all environment variables are set
- Check logs for errors

### Frontend can't connect to backend
- Verify `REACT_APP_API_URL` is correct
- Check CORS settings in backend
- Ensure backend is running

### Contact form not sending emails
- Verify Gmail app password is correct
- Check email credentials in backend .env
- Look at backend logs for email errors

### Projects not showing
- Check backend API is accessible
- Verify projects exist in database
- Check browser console for errors

---

## Next Steps

1. ✅ Customize content and styling
2. ✅ Add your real projects
3. ✅ Upload your resume PDF
4. ✅ Test all features
5. ✅ Deploy to production
6. ✅ Share your portfolio!

---

## Support

For issues or questions:
- Check the README.md files
- Review error logs
- Test API endpoints with Postman

Good luck with your portfolio! 🚀
