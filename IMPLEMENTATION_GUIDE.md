# Implementation Guide - Wrocław Południe Landing Page

## 1. Color System

All brand colors are configured as CSS variables and Tailwind classes.

### Using Colors in JSX:
```tsx
// Background
<div className="bg-background">  {/* Dark Blue #030340 */}

// Text/Foreground
<h1 className="text-foreground">  {/* Sand #FFECD1 */}

// Primary Color (Teal)
<button className="bg-primary text-foreground">  {/* Teal #008491 */}

// Accent Color (Orange)
<button className="bg-accent text-accent-foreground">  {/* Orange #FF7D00 */}

// Secondary Color (Violet)
<div className="bg-secondary">  {/* Violet #371F7D */}
```

## 2. Typography

Fonts are configured in Tailwind:
- **Oswald** (Headings): Use `font-heading`
- **Inter** (Body): Use `font-body`

```tsx
<h1 className="font-heading text-6xl uppercase text-accent">
  Wrocław Południe
</h1>

<p className="font-body text-lg text-foreground">
  Ultimate frisbee club description...
</p>
```

## 3. Creating Components

### UI Component Example (Button):
```tsx
// src/components/ui/Button.tsx
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles = "font-heading uppercase font-bold rounded transition-colors";
  
  const variants = {
    primary: "bg-primary text-foreground hover:bg-primary/80",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    secondary: "bg-secondary text-foreground hover:bg-secondary/80",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
```

### UI Component Example (Card):
```tsx
// src/components/ui/Card.tsx
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-background border border-secondary/20",
        "p-6 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
```

## 4. Creating Sections

### Section Component Example (Hero):
```tsx
// src/components/sections/Hero.tsx
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background">
      {/* Background gradient or image */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="font-heading text-7xl md:text-8xl font-bold text-accent mb-6">
            Wrocław Południe
          </h1>
          
          <p className="font-body text-xl text-foreground/80 mb-8">
            Ultimate Frisbee Team from Wrocław
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary" size="lg">
              Join Us
            </Button>
            <Button variant="accent" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

## 5. Using Motion Animations

### Basic Fade-In:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Slide In:
```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Content
</motion.div>
```

### Scroll Animation with useViewportScroll:
```tsx
import { motion } from "motion/react";
import { useViewportScroll, useTransform } from "motion/react";

export function ScrollSection() {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.section style={{ opacity }}>
      Content
    </motion.section>
  );
}
```

## 6. Responsive Design with Tailwind

```tsx
<div className="px-4 md:px-8 lg:px-16">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading">
    Title
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item) => (
      <Card key={item.id}>{item.name}</Card>
    ))}
  </div>
</div>
```

## 7. TypeScript Types

### Create types in src/types/index.ts:
```tsx
export interface Player {
  id: string;
  name: string;
  position: "handler" | "cutter" | "deep";
  number: number;
  photo?: string;
}

export interface Team {
  name: string;
  city: string;
  founded: number;
  players: Player[];
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
  description: string;
}
```

## 8. Using Custom Hooks

### Create a useScrollY hook:
```tsx
// src/hooks/useScrollY.ts
import { useViewportScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export function useScrollY() {
  const { scrollY } = useViewportScroll();
  const [y, setY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setY(latest);
  });

  return y;
}
```

### Use in component:
```tsx
function MyComponent() {
  const scrollY = useScrollY();
  
  return (
    <div>
      {scrollY > 100 ? <h1>Scrolled</h1> : <h1>Top</h1>}
    </div>
  );
}
```

## 9. Integrating with Lucide Icons

```tsx
import { Menu, X, Zap, Target } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center gap-4">
      <Zap className="w-6 h-6 text-accent" />
      <span className="font-heading text-xl">Wrocław Południe</span>
      <Menu className="w-6 h-6 text-foreground md:hidden" />
    </header>
  );
}
```

## 10. App Structure Example

```tsx
// src/App.tsx
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { TeamsSection } from "@/components/sections/Teams";
import { EventsSection } from "@/components/sections/Events";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <TeamsSection />
      <EventsSection />
      <Footer />
    </div>
  );
}
```

## 11. CSS Custom Classes

### Available custom CSS classes in index.css:
- `.liquid-glass` - Frosted glass effect
- `.diagonal-cut` - Diagonal clipping
- `.diagonal-cut-reverse` - Reverse diagonal

```tsx
<div className="liquid-glass rounded-lg p-6">
  Glass effect content
</div>

<section className="diagonal-cut bg-accent">
  Diagonal cut section
</section>
```

## 12. Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

### Deployment Options:
- Vercel (Recommended for Vite)
- Netlify
- GitHub Pages
- Any static hosting

## Tips & Best Practices

1. **Use TypeScript**: Leverage type safety throughout your components
2. **Component Reusability**: Keep components small and focused
3. **Color Consistency**: Always use the configured color classes
4. **Responsive First**: Design mobile-first, then add larger breakpoints
5. **Performance**: Use Motion for smooth 60fps animations
6. **Accessibility**: Include alt text, aria labels, and semantic HTML
7. **Code Organization**: Follow the folder structure for maintainability

## Resources

- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion Documentation](https://motion.dev/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/)
