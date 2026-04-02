# DataHive - Premium SaaS Landing Page

A stunning, modern, and responsive SaaS landing page for DataHive built with React, TypeScript, Material UI, and Framer Motion.

![DataHive](https://img.shields.io/badge/DataHive-SaaS%20Landing%20Page-7dd3c9?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=for-the-badge&logo=typescript)
![Material UI](https://img.shields.io/badge/Material%20UI-7.3.4-blue?style=for-the-badge&logo=mui)

link: https://data-hive-demo.vercel.app/ 

## 🚀 Features

- **Modern & Responsive Design**: Beautiful, professional landing page optimized for all devices
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Interactive Particles**: Animated background with tsparticles for visual appeal
- **Material UI Components**: Professional UI components with custom theming
- **Modern Typography**: Inter font family for clean, readable text
- **Gradient Theme**: Soft brand gradient with DataHive's signature teal colors
- **Multiple Sections**: Hero, Features, Pricing, Contact, and Footer

## 🎨 Design Highlights

- **Brand Colors**: Teal gradient (#C7F9FF to #D8F8E8) with solid accent (#7dd3c9)
- **Smooth Transitions**: Fade-in and slide-up animations on scroll
- **Interactive Elements**: Hover effects, buttons with animations, and form validation
- **Professional Layout**: Clean sections with proper spacing and typography hierarchy

## 📦 Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Material UI v5** - React component library
- **Emotion** - CSS-in-JS styling
- **Framer Motion** - Production-ready animation library
- **TSParticles** - Interactive particle system
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **Inter Font** - Professional typography

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
datahive/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with mobile menu
│   │   ├── Hero.tsx             # Hero section with CTA
│   │   ├── ParticlesBackground.tsx  # Animated particles
│   │   ├── Features.tsx         # Features showcase
│   │   ├── Pricing.tsx          # Pricing plans
│   │   ├── Contact.tsx          # Contact form
│   │   └── Footer.tsx           # Footer with links
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   ├── theme.ts                 # MUI theme configuration
│   ├── index.css                # Global styles
│   └── App.css                  # App-specific styles
├── index.html                   # HTML template
└── package.json                 # Dependencies
```

## 🎯 Sections

### 1. Navbar
- Fixed navigation bar with smooth scroll
- Mobile-responsive hamburger menu
- Brand logo with gradient text
- CTA button

### 2. Hero Section
- Eye-catching headline with gradient text
- Animated particle background
- Primary and secondary CTAs
- Feature highlights with icons

### 3. Features
- 6 feature cards with icons
- Hover animations
- Grid layout with responsive design
- MUI icons for visual appeal

### 4. Pricing
- 3 pricing tiers (Starter, Professional, Enterprise)
- Popular badge on recommended plan
- Feature lists with checkmarks
- Gradient styling for featured plan

### 5. Contact Form
- Form with validation
- Contact information cards
- Smooth animations
- Alert notifications

### 6. Footer
- Social media links
- Organized link sections
- Brand information
- Copyright notice

## 🎨 Customization

### Colors
Edit `src/theme.ts` to customize brand colors:

```typescript
palette: {
  primary: {
    main: '#7dd3c9',  // Your brand color
  },
  secondary: {
    main: '#C7F9FF',
  },
}
```

### Content
Update component files to change:
- Text content
- Feature descriptions
- Pricing details
- Contact information
- Social media links

### Animations
Modify Framer Motion animations in each component:
- `initial` - Starting animation state
- `animate` - End animation state
- `transition` - Animation timing and easing

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
