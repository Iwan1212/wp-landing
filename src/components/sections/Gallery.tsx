import { motion } from "motion/react";
import { Badge } from "../ui/Badge";
import { BlurText } from "../ui/BlurText";

const tournaments = [
  { name: "Lagoon 2025", src: "/gallery/lagoon-2025.jpg" },
  { name: "HMP 2025", src: "/gallery/hmp-2025.jpg" },
  { name: "W akcji", src: "/gallery/player-action-1.jpg" },
  { name: "W akcji", src: "/gallery/player-action-2.jpg" },
  { name: "Turniej", src: "/gallery/team-outdoor.jpg" },
];

const photoGridLayout = [
  { col: "col-span-2 row-span-2" },
  { col: "col-span-2 row-span-1" },
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
              <div className="w-full h-full rounded-xl overflow-hidden relative group">
                <img
                  src={tournament.src}
                  alt={tournament.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {tournament.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
