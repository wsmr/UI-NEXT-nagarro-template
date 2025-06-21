# Nagarro Website Replica - Project Structure Plan

## Project Overview
This document outlines the structure and strategy for creating a visual replica of the Nagarro website, focusing solely on frontend appearance and layout without implementing backend functionality.

## Technology Stack Selection

Based on the analysis of the Nagarro website and the requirements in Outline.txt, we'll use:

### Core Technologies
- **HTML5**: For semantic markup structure
- **CSS3/SCSS**: For styling and animations
- **JavaScript**: For interactive elements and animations
- **TypeScript**: For type safety and better code organization

### Frameworks & Libraries
- **React**: For component-based architecture (matches modern development practices)
- **Next.js**: For easy routing and project structure
- **Framer Motion**: For animations similar to those on the Nagarro site
- **Slick Carousel**: For matching the exact slider behavior

### Build Tools
- **Vite**: For fast development and optimized builds
- **ESLint/Prettier**: For code quality and formatting

## Project Structure

```
nagarro-replica/
├── public/
│   ├── fonts/
│   │   ├── Equip/
│   │   └── EquipExtended/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-backgrounds/
│   │   ├── featured-stories/
│   │   └── icons/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── navigation/
│   │   │   ├── MainNav.tsx
│   │   │   ├── LanguageSelector.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── home/
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── FeaturedStory.tsx
│   │   │   ├── IndustriesSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   └── WhatsHotSection.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Slider.tsx
│   │       └── TabPanel.tsx
│   ├── styles/
│   │   ├── globals.scss
│   │   ├── variables.scss
│   │   ├── typography.scss
│   │   ├── animations.scss
│   │   └── components/
│   │       ├── header.scss
│   │       ├── footer.scss
│   │       └── [other component styles]
│   ├── utils/
│   │   ├── animations.ts
│   │   └── responsive.ts
│   ├── hooks/
│   │   └── useMediaQuery.ts
│   ├── types/
│   │   └── index.ts
│   ├── pages/
│   │   ├── index.tsx
│   │   └── _app.tsx
│   └── App.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.js
├── .prettierrc
└── README.md
```

## Asset Handling Strategy

### Fonts
- Create a custom font face for Equip and EquipExtended
- If the exact fonts are not available, use close alternatives:
  - For Equip: Inter or Roboto
  - For EquipExtended: Inter Extended or Roboto Condensed with letter-spacing adjustments

### Images
- Replace original images with placeholder images of the same dimensions
- Add detailed comments in the code about the original image characteristics
- Use modern image formats (WebP) with appropriate fallbacks
- Implement lazy loading for images below the fold

### Icons
- Use SVG icons where possible for scalability
- Create custom SVG icons to match the Nagarro design
- Implement as React components for easy styling and animation

### Colors
- Create a comprehensive color system using CSS variables
- Match the exact RGB values identified in the analysis
- Implement a consistent naming convention for colors

### Animations
- Recreate all transitions and animations using Framer Motion
- Match timing and easing functions from the original site
- Ensure animations are performant and don't cause layout shifts

## Responsive Design Strategy

### Breakpoints
Based on the analysis, implement these breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1440px

### Approach
- Mobile-first CSS
- Fluid typography using clamp() for smooth scaling
- Flexible layouts using CSS Grid and Flexbox
- Component-specific media queries where needed

## Code Organization

### Component Structure
Each component will follow this pattern:
```tsx
// Component.tsx
import React from 'react';
import { motion } from 'framer-motion';
import './Component.scss';

interface ComponentProps {
  // Props definition
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic
  
  return (
    <motion.div 
      className="component"
      // Animation properties
    >
      {/* Component content */}
      {/* Non-included assets will have detailed comments */}
    </motion.div>
  );
};

export default Component;
```

### Style Organization
- Global styles for typography, colors, and base elements
- Component-specific styles in separate files
- CSS variables for consistent theming
- BEM naming convention for class names

## Development Workflow

1. Set up project structure and install dependencies
2. Create global styles and typography
3. Develop layout components (Header, Footer)
4. Build UI component library (buttons, cards, etc.)
5. Implement home page sections
6. Add animations and interactions
7. Ensure responsive behavior
8. Optimize for performance
9. Add detailed comments for non-included assets
10. Validate visual fidelity against original site

## Performance Considerations

- Code splitting for better load times
- Lazy loading for below-the-fold content
- Image optimization
- Minimal use of third-party libraries
- Efficient CSS with minimal specificity conflicts

## Accessibility Considerations

- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigation support
- Sufficient color contrast
- Focus states for interactive elements
