import { motion } from "motion/react";
import { BlurText } from "../ui/BlurText";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { BackgroundBeams } from "../ui/BackgroundBeams";


const stats = [
  { label: "lat doświadczenia", value: "10+", color: "#FF7D00" },
  { label: "zawodników", value: "50+", color: "#008491" },
  { label: "sekcje", value: "3", color: "#8B6FD0" },
  { label: "turniejów", value: "100+", color: "#FF7D00" },
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
        <div className="max-w-2xl">
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
                style={{ color: stat.color }}
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
