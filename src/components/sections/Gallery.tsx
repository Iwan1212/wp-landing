import { motion } from "motion/react";
import { Camera } from "lucide-react";
import { Badge } from "../ui/Badge";
import { BlurText } from "../ui/BlurText";
import { GlassCard } from "../ui/GlassCard";

const tournaments = [
  { name: "Lagoon 2025", icon: "📸" },
  { name: "HMP 2025", icon: "📷" },
  { name: "PMP 2024", icon: "📹" },
  { name: "MPX 2023", icon: "🎥" },
  { name: "Pomeranian Cup", icon: "📸" },
  { name: "Wrocław Hat", icon: "📷" },
];

const photoGridLayout = [
  { col: "col-span-2 row-span-2" },
  { col: "col-span-1 row-span-1" },
  { col: "col-span-1 row-span-1" },
  { col: "col-span-1 row-span-1" },
  { col: "col-span-1 row-span-1" },
  { col: "col-span-2 row-span-1" },
];

export function Gallery() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <Badge>GALERIA</Badge>
        </motion.div>

        <BlurText
          text="W AKCJI"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-foreground"
          delay={0.1}
        />

        {/* Replace gradient placeholders with actual team photos */}
        <div className="grid grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {tournaments.map((tournament, idx) => (
            <motion.div
              key={idx}
              className={`${photoGridLayout[idx].col}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlassCard
                hover
                className="w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden group"
              >
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,132,145,0.4) 0%, rgba(55,31,125,0.3) 100%)`,
                  }}
                />
                <motion.div
                  className="relative z-10 flex flex-col items-center gap-3 text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Camera className="w-8 h-8 text-primary" />
                  <p className="text-sm md:text-base font-medium">
                    Zdjęcie z turnieju
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-primary">
                    {tournament.name}
                  </p>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
