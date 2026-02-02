# Customization Guide

Complete guide to customize the portfolio for your personal brand.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Colors & Theme](#colors--theme)
3. [Content](#content)
4. [Images & Assets](#images--assets)
5. [Features](#features)

---

## Personal Information

### Update Name & Title

**File**: `frontend/src/components/Hero.jsx`

```jsx
<h1 className="hero-title">
  Your Name Here
</h1>
<h2 className="hero-subtitle gradient-text">
  Your Title Here
</h2>
<p className="hero-description">
  Your personal tagline or description here...
</p>
```

### Update Social Links

**File**: `frontend/src/components/Hero.jsx` (lines ~50-54)

```jsx
const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
];
```

Also update in:
- `frontend/src/components/Footer.jsx`

### Update Contact Information

**File**: `frontend/src/components/Contact.jsx` (lines ~35-50)

```jsx
const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+1 XXX XXX XXXX',
    href: 'tel:+1XXXXXXXXXX',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Your City, Country',
    href: null,
  },
];
```

### Update About Section

**File**: `frontend/src/components/About.jsx` (lines ~40-70)

```jsx
<p className="about-paragraph">
  Your introduction paragraph here...
</p>
<p className="about-paragraph">
  Your skills and expertise...
</p>
```

**Update Statistics:**

```jsx
<div className="stat-card">
  <div className="stat-number gradient-text">5+</div>
  <div className="stat-label">Years Experience</div>
</div>
```

---

## Colors & Theme

### Primary Colors

**File**: `frontend/src/index.css` (lines 9-20)

```css
:root {
  --bg-primary: #0a0a0a;           /* Main background */
  --bg-secondary: #111111;         /* Section backgrounds */
  --bg-tertiary: #1a1a1a;          /* Card backgrounds */
  --text-primary: #ffffff;         /* Main text */
  --text-secondary: #b0b0b0;       /* Secondary text */
  --accent-primary: #00d9ff;       /* Primary accent (cyan) */
  --accent-secondary: #7b2cbf;     /* Secondary accent (purple) */
  --accent-gradient: linear-gradient(135deg, #00d9ff 0%, #7b2cbf 100%);
}
```

### Popular Color Schemes

**Blue & Purple (Default):**
```css
--accent-primary: #00d9ff;
--accent-secondary: #7b2cbf;
```

**Green & Teal:**
```css
--accent-primary: #00ff88;
--accent-secondary: #00d9d9;
```

**Orange & Pink:**
```css
--accent-primary: #ff6c37;
--accent-secondary: #ff006e;
```

**Gold & Blue:**
```css
--accent-primary: #ffd700;
--accent-secondary: #1e90ff;
```

### Light Theme

To switch to light theme:

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-tertiary: #e8e8e8;
  --text-primary: #0a0a0a;
  --text-secondary: #4a4a4a;
  --text-tertiary: #808080;
  --border-color: #d0d0d0;
}
```

---

## Content

### Add/Edit Skills

**File**: `frontend/src/components/Skills.jsx` (lines ~30-70)

```jsx
const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Vue', icon: FaVuejs, color: '#42b883' },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

**Available Icons:**
- Import from `react-icons/fa` (Font Awesome)
- Import from `react-icons/si` (Simple Icons)
- Import from `react-icons/fi` (Feather Icons)

### Update Resume/CV

1. Add your PDF resume to: `frontend/public/resume.pdf`
2. Update download link in `Hero.jsx`:

```jsx
<a
  href="/resume.pdf"
  download="YourName-Resume.pdf"
  className="btn btn-secondary"
>
  Download CV
</a>
```

### Modify Navigation

**File**: `frontend/src/components/Navbar.jsx` (lines ~20-30)

```jsx
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },        // Add new section
  { name: 'Contact', href: '#contact' },
];
```

---

## Images & Assets

### Logo/Favicon

1. **Create Favicon:**
   - Use [favicon.io](https://favicon.io/) to generate
   - Replace `frontend/public/favicon.ico`

2. **Update Logo:**
   - Edit `frontend/src/components/Navbar.jsx`:
   ```jsx
   <a href="#home" className="logo">
     <img src="/logo.png" alt="Logo" />
   </a>
   ```

### Project Images

**Option 1: Use Placeholder Service**
```
https://via.placeholder.com/600x400/1a1a1a/00d9ff?text=Project+Name
```

**Option 2: Upload to Cloud**
- Use Cloudinary, Imgur, or AWS S3
- Update `imageUrl` in project data

**Option 3: Local Images**
1. Add images to `frontend/public/images/`
2. Reference as `/images/project1.jpg`

### Background Effects

**File**: `frontend/src/components/Hero.jsx` (3D Sphere)

Change sphere color:
```jsx
<MeshDistortMaterial
  color="#00d9ff"  // Change this color
  distort={0.5}
  speed={2}
/>
```

Adjust sphere size:
```jsx
<Sphere visible args={[1, 100, 200]} scale={2.5}>  // Change scale
```

---

## Features

### Add New Section

1. **Create Component:**

`frontend/src/components/Blog.jsx`:
```jsx
import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog section">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default Blog;
```

2. **Create Styles:**

`frontend/src/components/Blog.css`:
```css
.blog {
  background: var(--bg-secondary);
}
```

3. **Import in App:**

`frontend/src/App.jsx`:
```jsx
import Blog from './components/Blog';

// Add to JSX:
<Blog />
```

### Disable 3D Effects

If 3D effects cause performance issues:

**File**: `frontend/src/components/Hero.jsx`

Comment out or remove:
```jsx
{/* <div className="hero-background">
  <Canvas>...</Canvas>
</div> */}
```

### Change Fonts

**File**: `frontend/public/index.html`

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**File**: `frontend/src/index.css`

```css
body {
  font-family: 'Poppins', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
}
```

### Add Analytics

**Google Analytics:**

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Add to `frontend/public/index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add More Animations

**File**: Any component

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
>
  Your content
</motion.div>
```

---

## Advanced Customization

### Change Layout

**Two Column Layout:**
```css
.projects-grid {
  grid-template-columns: repeat(2, 1fr);
}
```

**Three Column Layout:**
```css
.projects-grid {
  grid-template-columns: repeat(3, 1fr);
}
```

### Add Dark/Light Mode Toggle

1. Create toggle component
2. Use React Context for theme state
3. Update CSS variables dynamically

### Add Blog Section

1. Create blog component
2. Add blog API endpoints in backend
3. Create blog model in MongoDB
4. Fetch and display blog posts

### Multilingual Support

1. Install `react-i18next`
2. Create translation files
3. Wrap text in translation function
4. Add language switcher

---

## Tips

- **Test Responsiveness**: Check on mobile, tablet, and desktop
- **Optimize Images**: Compress images before uploading
- **Keep It Simple**: Don't overcomplicate the design
- **Be Consistent**: Use consistent spacing and colors
- **Get Feedback**: Ask others to review your portfolio

---

## Resources

- **Icons**: [react-icons.github.io](https://react-icons.github.io/)
- **Colors**: [coolors.co](https://coolors.co/)
- **Fonts**: [fonts.google.com](https://fonts.google.com/)
- **Images**: [unsplash.com](https://unsplash.com/)
- **Gradients**: [cssgradient.io](https://cssgradient.io/)

---

**Make it yours! 🎨**
