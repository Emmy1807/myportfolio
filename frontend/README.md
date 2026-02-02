# Portfolio Frontend

Modern, interactive portfolio website for Onuh Emmanuel built with React, Three.js, and Framer Motion.

## Features

- **3D Animations**: Interactive 3D elements using React Three Fiber
- **Smooth Animations**: Page transitions and scroll animations with Framer Motion
- **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- **Dynamic Content**: Projects and testimonials fetched from backend API
- **Contact Form**: Integrated contact form with email notifications
- **Modern UI**: Dark theme with gradient accents and glassmorphism effects

## Tech Stack

- **React** - UI library
- **React Three Fiber** - 3D graphics
- **Framer Motion** - Animations
- **Axios** - HTTP client
- **React Router** - Navigation
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/        # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── utils/            # Utility functions
│   └── api.js        # API client
├── App.jsx           # Main app component
├── App.css           # App styles
├── index.jsx         # Entry point
└── index.css         # Global styles
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Change social media links

2. **About Section** (`src/components/About.jsx`):
   - Modify bio text
   - Update statistics

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Change skill categories

4. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Change email and phone

### Styling

- **Colors**: Edit CSS variables in `src/index.css`
- **Fonts**: Update Google Fonts in `public/index.html`
- **Theme**: Modify color scheme in CSS variables

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to Netlify

### Environment Variables

Make sure to set `REACT_APP_API_URL` in your deployment platform's environment variables.

## Performance Optimization

- Lazy loading for 3D components
- Image optimization
- Code splitting
- Minification and compression

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your own portfolio!
