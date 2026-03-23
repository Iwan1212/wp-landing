# Wrocław Południe Ultimate Frisbee Club - Landing Page

## Project Overview
A bold, energetic, and cinematic landing page for the Wrocław Południe ultimate frisbee team, built with modern web technologies.

## Technology Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 + PostCSS
- **Animation**: Motion library
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Oswald for headings, Inter for body)

## Brand Colors
- **Dark Blue**: #030340 (Primary background)
- **Violet**: #371F7D (Depth, secondary color)
- **Teal**: #008491 (Primary accent color)
- **Sand**: #FFECD1 (Light text, primary foreground)
- **Deep Umber**: #78290F (Secondary accent)
- **Orange**: #FF7D00 (Call-to-action, highlights)

## Project Structure
```
wp-landing/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   └── sections/        # Page section components
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   └── utils.ts        # Utility functions (cn for className merging)
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Root App component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles + Tailwind imports
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.cjs      # PostCSS configuration
└── package.json            # Dependencies
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at http://localhost:5173

### Build
```bash
npm run build
```
Creates a production build in the `dist` folder. Includes TypeScript compilation and optimized Vite build.

### Preview
```bash
npm run preview
```
Preview the production build locally before deployment

### Lint
```bash
npm run lint
```
Run ESLint to check code quality

## Getting Started

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Key Features Ready for Implementation

### UI Components (`src/components/ui/`)
Create reusable components here:
- Button variants
- Navigation bar
- Cards
- Modals
- Forms
- etc.

### Section Components (`src/components/sections/`)
Create major page sections here:
- Hero section
- About section
- Team section
- Events section
- Contact section
- etc.

### Custom Hooks (`src/hooks/`)
Create reusable React hooks:
- useMediaQuery (for responsive design)
- useScrollPosition
- useIntersectionObserver (for scroll animations)
- etc.

### Type Definitions (`src/types/`)
Define TypeScript interfaces and types:
- Team member types
- Event types
- Schedule types
- etc.

## Styling Notes

### Tailwind Configuration
Custom color variables are configured to use CSS custom properties:
- `bg-background` - Dark blue background
- `text-foreground` - Sand/cream text
- `bg-primary` - Teal accent
- `bg-accent` - Orange for CTAs
- `font-heading` - Oswald font
- `font-body` - Inter font

### CSS Classes
- `.liquid-glass` - Frosted glass effect component
- `.diagonal-cut` - Diagonal clipping path
- `.diagonal-cut-reverse` - Reverse diagonal clipping path

### Animation Keyframes
- `@keyframes gradient-shift` - Animated gradient position shifts
- `@keyframes float` - Floating animation

## Dependencies

### Production
- **react** (19.2.4) - UI library
- **react-dom** (19.2.4) - DOM rendering
- **motion** (12.38.0) - Animation library
- **lucide-react** (1.0.1) - Icon library
- **clsx** (2.1.1) - Utility for conditional className merging

### Development
- **tailwindcss** (4.2.2) - CSS framework
- **vite** (8.0.1) - Build tool
- **typescript** (5.9.3) - Type safety
- **@vitejs/plugin-react** (6.0.1) - React plugin
- **postcss** & **autoprefixer** - CSS processing
- **eslint** - Code quality

## Notes for Development

1. **Tailwind CSS v4**: Uses new `@import "tailwindcss"` syntax with PostCSS plugin
2. **TypeScript**: Strict mode enabled for better type safety
3. **React 19**: Latest features available, use new JSX transform
4. **Colors**: All brand colors are available as Tailwind classes via CSS variables
5. **Google Fonts**: Oswald and Inter fonts loaded from CDN in index.html

## Build Status
✓ Project successfully builds with `npm run build`
✓ All TypeScript types validated
✓ Tailwind CSS properly configured
✓ Ready for feature development

## Next Steps
1. Create reusable UI components in `src/components/ui/`
2. Build major page sections in `src/components/sections/`
3. Implement hero animation using Motion library
4. Add page routing if needed
5. Create custom hooks for animations and responsiveness
6. Define TypeScript types for your domain models
7. Build out the landing page with sections and content
