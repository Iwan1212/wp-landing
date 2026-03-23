# Key Files Reference

## Project Root
```
/sessions/laughing-magical-knuth/wp-landing/
```

## Main Source Files

### Application Entry Point
- `/sessions/laughing-magical-knuth/wp-landing/src/main.tsx` - React app initialization
- `/sessions/laughing-magical-knuth/wp-landing/src/App.tsx` - Root component (placeholder)

### Styling
- `/sessions/laughing-magical-knuth/wp-landing/src/index.css` - Global styles with Tailwind
- `/sessions/laughing-magical-knuth/wp-landing/tailwind.config.ts` - Tailwind configuration
- `/sessions/laughing-magical-knuth/wp-landing/postcss.config.cjs` - PostCSS configuration

### Utilities
- `/sessions/laughing-magical-knuth/wp-landing/src/lib/utils.ts` - Utility functions (cn helper)

### Component Directories (Ready for Development)
- `/sessions/laughing-magical-knuth/wp-landing/src/components/ui/` - Reusable UI components
- `/sessions/laughing-magical-knuth/wp-landing/src/components/sections/` - Page sections
- `/sessions/laughing-magical-knuth/wp-landing/src/hooks/` - Custom React hooks
- `/sessions/laughing-magical-knuth/wp-landing/src/types/` - TypeScript type definitions

## Configuration Files

### Build & Development
- `/sessions/laughing-magical-knuth/wp-landing/vite.config.ts` - Vite configuration
- `/sessions/laughing-magical-knuth/wp-landing/package.json` - Dependencies and scripts
- `/sessions/laughing-magical-knuth/wp-landing/package-lock.json` - Locked dependency versions

### TypeScript
- `/sessions/laughing-magical-knuth/wp-landing/tsconfig.json` - Main TypeScript config
- `/sessions/laughing-magical-knuth/wp-landing/tsconfig.app.json` - App-specific TypeScript config
- `/sessions/laughing-magical-knuth/wp-landing/tsconfig.node.json` - Node/build TypeScript config

### HTML
- `/sessions/laughing-magical-knuth/wp-landing/index.html` - HTML template with Google Fonts

### Linting
- `/sessions/laughing-magical-knuth/wp-landing/eslint.config.js` - ESLint configuration

## Documentation Files

- `/sessions/laughing-magical-knuth/wp-landing/QUICK_START.md` - Quick start guide
- `/sessions/laughing-magical-knuth/wp-landing/PROJECT_SETUP.md` - Detailed setup documentation
- `/sessions/laughing-magical-knuth/wp-landing/IMPLEMENTATION_GUIDE.md` - Code implementation guide
- `/sessions/laughing-magical-knuth/wp-landing/PROJECT_COMPLETE.txt` - Project completion summary
- `/sessions/laughing-magical-knuth/wp-landing/KEY_FILES.md` - This file

## Build Output

### Production Build Directory
- `/sessions/laughing-magical-knuth/wp-landing/dist/` - Production build (created after `npm run build`)

## Important Paths for Development

### Start Dev Server
```bash
cd /sessions/laughing-magical-knuth/wp-landing
npm run dev
```

### Build for Production
```bash
cd /sessions/laughing-magical-knuth/wp-landing
npm run build
```

### Create New UI Component
```
/sessions/laughing-magical-knuth/wp-landing/src/components/ui/YourComponent.tsx
```

### Create New Section
```
/sessions/laughing-magical-knuth/wp-landing/src/components/sections/YourSection.tsx
```

### Create Custom Hook
```
/sessions/laughing-magical-knuth/wp-landing/src/hooks/useYourHook.ts
```

### Add TypeScript Types
```
/sessions/laughing-magical-knuth/wp-landing/src/types/index.ts
```

## Color Configuration Location

All brand colors are configured in:
- `/sessions/laughing-magical-knuth/wp-landing/src/index.css` - CSS variables (--background, --primary, etc.)
- `/sessions/laughing-magical-knuth/wp-landing/tailwind.config.ts` - Tailwind color definitions

## Font Configuration Location

Google Fonts configured in:
- `/sessions/laughing-magical-knuth/wp-landing/index.html` - Font imports from Google Fonts
- `/sessions/laughing-magical-knuth/wp-landing/tailwind.config.ts` - Font family mappings (font-heading, font-body)

## NPM Scripts

Run from `/sessions/laughing-magical-knuth/wp-landing/`:

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Environment Setup

All dependencies are already installed in:
```
/sessions/laughing-magical-knuth/wp-landing/node_modules/
```

Key packages installed:
- react@19.2.4
- react-dom@19.2.4
- vite@8.0.1
- tailwindcss@4.2.2
- @tailwindcss/postcss@4.2.2
- motion@12.38.0
- lucide-react@1.0.1
- typescript@5.9.3
- clsx@2.1.1
- eslint@9.39.4

## Ready to Use

✓ All files configured
✓ All dependencies installed
✓ Project structure created
✓ Build system working
✓ TypeScript configured
✓ Tailwind CSS configured
✓ Google Fonts integrated
✓ Animation library ready
✓ Icon library ready

Start developing now: `npm run dev` from the project root!
