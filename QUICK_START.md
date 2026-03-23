# Quick Start Guide - Wrocław Południe Landing Page

## Setup Complete ✓

Your Vite + React + TypeScript landing page project is ready to go!

### Start Development
```bash
cd /sessions/laughing-magical-knuth/wp-landing
npm run dev
```
The dev server will start at `http://localhost:5173`

### Project is Ready With:
✓ React 19 + TypeScript
✓ Tailwind CSS v4 configured
✓ Lucide Icons ready to use
✓ Motion animation library installed
✓ Brand color scheme set up
✓ Google Fonts (Oswald + Inter) loaded
✓ Project structure organized
✓ All dependencies installed

### Key Files
- **src/App.tsx** - Main app component (placeholder)
- **src/index.css** - Global styles with Tailwind
- **src/lib/utils.ts** - Utility functions (cn for className merging)
- **tailwind.config.ts** - Tailwind theme configuration
- **index.html** - HTML entry point with Google Fonts

### Folder Structure
```
src/
├── components/
│   ├── ui/         ← Reusable UI components
│   └── sections/   ← Page sections (Hero, About, etc.)
├── hooks/          ← Custom React hooks
├── lib/            ← Utilities
├── types/          ← TypeScript definitions
├── App.tsx         ← Root component
├── main.tsx        ← Entry point
└── index.css       ← Global styles
```

### Brand Colors (CSS Variables)
All colors configured and ready to use:
```css
--background: #030340      /* Dark Blue */
--foreground: #FFECD1      /* Sand */
--primary: #008491         /* Teal */
--accent: #FF7D00          /* Orange */
--secondary: #371F7D       /* Violet */
--deep-umber: #78290F      /* Deep Umber */
```

### Using Colors in Tailwind
```jsx
<div className="bg-background text-foreground">
  <h1 className="text-accent font-heading">Wrocław Południe</h1>
  <button className="bg-accent hover:bg-primary">CTA Button</button>
</div>
```

### Available Commands
```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Next: Build Your Landing Page

1. **Update App.tsx** with your main content structure
2. **Create UI components** in `src/components/ui/` (Button, Card, Nav, etc.)
3. **Build sections** in `src/components/sections/` (Hero, About, Team, etc.)
4. **Add animations** using the Motion library
5. **Deploy** your production build

### Example: Add a Button Component

Create `src/components/ui/Button.tsx`:
```tsx
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "accent";
}

export function Button({
  children,
  className,
  variant = "primary"
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded font-heading uppercase";
  const variants = {
    primary: "bg-primary text-foreground hover:bg-primary/80",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)}>
      {children}
    </button>
  );
}
```

### Example: Use Motion for Animations
```tsx
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-6xl font-heading text-accent">
        Wrocław Południe
      </h1>
    </motion.div>
  );
}
```

### TypeScript Types

Create `src/types/index.ts`:
```tsx
export interface Player {
  id: string;
  name: string;
  position: string;
  number: number;
}

export interface Team {
  name: string;
  city: string;
  founded: number;
  players: Player[];
}
```

## Happy coding! 🎉

For more info, check PROJECT_SETUP.md
