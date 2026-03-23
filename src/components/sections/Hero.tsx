import { motion } from "motion/react";
import { BlurText } from "../ui/BlurText";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { BackgroundBeams } from "../ui/BackgroundBeams";

function CompassLogo() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-64 h-64 opacity-20"
      style={{ color: "var(--primary)" }}
    >
      <g stroke="currentColor" strokeWidth="2" fill="none">
        {/* Outer circle */}
        <circle cx="100" cy="100" r="95" />

        {/* Cardinal points */}
        <line x1="100" y1="10" x2="100" y2="40" strokeWidth="3" />
        <line x1="100" y1="160" x2="100" y2="190" strokeWidth="3" />
        <line x1="10" y1="100" x2="40" y2="100" strokeWidth="3" />
        <line x1="160" y1="100" x2="190" y2="100" strokeWidth="3" />

        {/* Intercardinal points */}
        <line x1="135" y1="35" x2="150" y2="20" strokeWidth="2" />
        <line x1="65" y1="165" x2="50" y2="180" strokeWidth="2" />
        <line x1="35" y1="135" x2="20" y2="150" strokeWidth="2" />
        <line x1="165" y1="65" x2="180" y2="50" strokeWidth="2" />

        {/* Inner decoration */}
        <circle cx="100" cy="100" r="25" />
        <path d="M 100 75 L 110 90 L 100 100 L 90 90 Z" fill="currentColor" />
      </g>
    </svg>
  );
}

const stats = [
  { label: "lat doświadczenia", value: "10+" },
  { label: "zawodników", value: "50+" },
  { label: "sekcje", value: "3" },
  { label: "turniejów", value: "100+" },
];

export function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-20 overflow-hidden flex items-center justify-center">
      {/* Gradient background with blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full mix-blend-screen filter blur-3xl" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Background beams */}
      <BackgroundBeams />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10"
          >
            <Badge className="mb-6">ULTIMATE FRISBEE TEAM</Badge>

            <BlurText
              text="WROCŁAW POŁUDNIE"
              as="h1"
              delay={0.2}
              className="text-6xl md:text-7xl lg:text-8xl font-heading font-black leading-[0.85] tracking-tight mb-6 text-foreground"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg leading-relaxed"
            >
              Gramy razem od 2014 roku. Energia, duch zespołu i pasja do dysku to
              nasze fundamenty. Dołącz do społeczności frisbee w Wrocławiu.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg">
                Dołącz do nas
              </Button>
              <Button variant="outline" size="lg">
                Poznaj drużynę
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Compass logo (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <CompassLogo />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 pt-12 border-t border-primary/20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <div
                className="text-3xl md:text-4xl font-heading font-black mb-2"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
