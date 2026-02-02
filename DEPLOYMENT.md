# Deployment Guide

Complete guide for deploying your portfolio to production.

## Quick Deploy Checklist

- [ ] MongoDB Atlas database created
- [ ] Backend deployed to Render/Railway
- [ ] Frontend deployed to Vercel
- [ ] Environment variables configured
- [ ] Email notifications working
- [ ] Custom domain configured (optional)

---

## Backend Deployment (Render)

### Step 1: Prepare Backend

1. Ensure `package.json` has start script:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

2. Create `render.yaml` (optional):
```yaml
services:
  - type: web
    name: portfolio-backend
    env: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
```

### Step 2: Deploy to Render

1. Go to [render.com](https://render.com) and sign up
2. Click **New +** → **Web Service**
3. Connect your GitHub repository or use manual deploy
4. Configure:
   - **Name**: `portfolio-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

5. Add Environment Variables:
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=https://your-portfolio.vercel.app
NODE_ENV=production
```

6. Click **Create Web Service**
7. Wait for deployment (5-10 minutes)
8. Copy your service URL: `https://portfolio-backend-xxxx.onrender.com`

### Step 3: Test Backend

Visit: `https://your-backend-url.onrender.com/api/health`

Should return:
```json
{
  "success": true,
  "message": "Portfolio API is running",
  "timestamp": "2024-..."
}
```

---

## Frontend Deployment (Vercel)

### Step 1: Prepare Frontend

1. Ensure build works locally:
```bash
cd frontend
npm run build
```

2. Create `vercel.json` (optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "devCommand": "npm start",
  "installCommand": "npm install"
}
```

### Step 2: Deploy to Vercel

#### Option A: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Navigate to frontend folder:
```bash
cd frontend
```

3. Deploy:
```bash
vercel
```

4. Follow prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? `portfolio`
   - In which directory? `./`
   - Override settings? **N**

5. Production deployment:
```bash
vercel --prod
```

#### Option B: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click **Add New** → **Project**
3. Import from GitHub or upload `frontend` folder
4. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend` (if deploying whole repo) or `./` (if deploying frontend folder only)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

5. Add Environment Variable:
```
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
```

6. Click **Deploy**
7. Wait for deployment (2-5 minutes)
8. Copy your deployment URL: `https://your-portfolio.vercel.app`

### Step 3: Update Backend CORS

Go back to Render and update `FRONTEND_URL`:
```
FRONTEND_URL=https://your-portfolio.vercel.app
```

Redeploy backend for changes to take effect.

---

## Alternative Deployment Options

### Backend Alternatives

#### Railway

1. Go to [railway.app](https://railway.app)
2. Create new project
3. Deploy from GitHub
4. Add environment variables
5. Deploy

#### Heroku

1. Install Heroku CLI
2. Create new app: `heroku create portfolio-backend`
3. Set environment variables: `heroku config:set KEY=VALUE`
4. Deploy: `git push heroku main`

### Frontend Alternatives

#### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop `build` folder
3. Or connect GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
5. Add environment variables
6. Deploy

#### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

---

## Custom Domain Setup

### Vercel Custom Domain

1. Go to your project in Vercel
2. Click **Settings** → **Domains**
3. Add your domain (e.g., `emmanuelonuh.com`)
4. Follow DNS configuration instructions
5. Add DNS records at your domain registrar:
   - **Type**: A
   - **Name**: @
   - **Value**: 76.76.21.21
   
   OR
   
   - **Type**: CNAME
   - **Name**: www
   - **Value**: cname.vercel-dns.com

6. Wait for DNS propagation (up to 48 hours)

### Render Custom Domain

1. Go to your service in Render
2. Click **Settings** → **Custom Domain**
3. Add your domain (e.g., `api.emmanuelonuh.com`)
4. Add CNAME record at your domain registrar:
   - **Type**: CNAME
   - **Name**: api
   - **Value**: your-service.onrender.com

---

## Environment Variables Reference

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
FRONTEND_URL=https://your-portfolio.vercel.app
NODE_ENV=production
```

### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend.onrender.com/api
```

---

## Post-Deployment

### 1. Test All Features

- [ ] Homepage loads correctly
- [ ] All sections display properly
- [ ] Projects load from API
- [ ] Testimonials display
- [ ] Contact form works
- [ ] Email notifications received
- [ ] Mobile responsive
- [ ] 3D animations work

### 2. Performance Optimization

- Enable Vercel Analytics
- Check Lighthouse scores
- Optimize images
- Enable caching

### 3. SEO Setup

- Add meta tags
- Create sitemap.xml
- Submit to Google Search Console
- Add Google Analytics (optional)

### 4. Monitoring

- Set up error tracking (Sentry)
- Monitor API usage
- Check email delivery
- Monitor uptime

---

## Troubleshooting

### Build Fails

**Frontend:**
- Check for TypeScript errors
- Verify all dependencies installed
- Check environment variables
- Review build logs

**Backend:**
- Verify Node version compatibility
- Check MongoDB connection
- Review environment variables
- Check server logs

### CORS Errors

Update backend CORS configuration:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
```

### API Not Connecting

1. Verify backend URL in frontend .env
2. Check backend is running
3. Test API endpoints directly
4. Check CORS settings
5. Review network tab in browser

### Email Not Sending

1. Verify Gmail app password
2. Check email credentials
3. Review backend logs
4. Test with different email
5. Check spam folder

---

## Continuous Deployment

### Auto-Deploy on Git Push

**Vercel:**
- Automatically deploys on push to main branch
- Preview deployments for pull requests

**Render:**
- Enable auto-deploy in settings
- Deploys on push to main branch

### Manual Deployment

**Vercel:**
```bash
vercel --prod
```

**Render:**
- Click "Manual Deploy" in dashboard
- Or push to connected branch

---

## Maintenance

### Update Dependencies

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update to latest
npm install package@latest
```

### Backup Database

```bash
# MongoDB Atlas
# Use built-in backup feature in Atlas dashboard

# Local backup
mongodump --uri="mongodb+srv://..." --out=./backup
```

### Monitor Costs

- Render Free tier: 750 hours/month
- Vercel Free tier: 100GB bandwidth
- MongoDB Atlas Free tier: 512MB storage

---

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [React Documentation](https://react.dev/)
- [Express Documentation](https://expressjs.com/)

---

**Congratulations! Your portfolio is now live! 🎉**

Share it with the world:
- Add to LinkedIn
- Share on Twitter
- Include in resume
- Add to GitHub profile
