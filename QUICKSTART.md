# Quick Start Guide

Get your portfolio running in 5 minutes!

## Prerequisites

- Node.js installed (v14+)
- MongoDB Atlas account (free) OR local MongoDB

## Step 1: Install Dependencies (2 minutes)

Open two terminal windows in the portfolio folder.

**Terminal 1 - Backend:**
```bash
cd backend
npm install
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
```

## Step 2: Configure Environment (2 minutes)

### Backend Setup

1. Copy `.env.example` to `.env` in the `backend` folder:
```bash
cd backend
copy .env.example .env
```

2. Edit `backend/.env` and update:
```env
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**Quick MongoDB Setup:**
- Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Create free account → Create cluster → Get connection string

**Quick Gmail Setup:**
- Enable 2FA on Gmail
- Generate App Password: Google Account → Security → App passwords
- Copy 16-character password

### Frontend Setup

1. Copy `.env.example` to `.env` in the `frontend` folder:
```bash
cd frontend
copy .env.example .env
```

2. The default settings should work:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Step 3: Start Development Servers (1 minute)

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```

Wait for: `Server running in development mode on port 5000`

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```

Browser should open automatically at `http://localhost:3000`

## Step 4: Add Sample Data (Optional)

In a new terminal:
```bash
cd backend
node scripts/seedData.js
```

This adds sample projects and testimonials.

## That's It! 🎉

Your portfolio is now running at:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## Next Steps

1. **Customize Content:**
   - Update personal info in `frontend/src/components/Hero.jsx`
   - Edit bio in `frontend/src/components/About.jsx`
   - Add your resume as `frontend/public/resume.pdf`

2. **Add Real Projects:**
   - Use Postman to POST to `http://localhost:5000/api/projects`
   - Or edit `backend/scripts/seedData.js` and run it again

3. **Test Contact Form:**
   - Fill out the contact form
   - Check your email for the notification

4. **Deploy:**
   - See `DEPLOYMENT.md` for production deployment

## Troubleshooting

**Backend won't start:**
- Check MongoDB connection string
- Verify all .env variables are set

**Frontend can't connect:**
- Ensure backend is running on port 5000
- Check `REACT_APP_API_URL` in frontend/.env

**Contact form not working:**
- Verify Gmail app password (not regular password)
- Check backend logs for errors

## Common Commands

```bash
# Backend
npm run dev          # Start with auto-reload
npm start            # Start production mode

# Frontend  
npm start            # Start development server
npm run build        # Build for production

# Database
node scripts/seedData.js    # Seed sample data
```

## Need Help?

Check these files:
- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Detailed setup instructions
- `DEPLOYMENT.md` - Deployment guide

---

**Happy coding! 🚀**
