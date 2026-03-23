import { motion } from "motion/react";
import { Trophy, Medal, Star } from "lucide-react";
import { BlurText } from "../ui/BlurText";
import { Badge } from "../ui/Badge";
import { GlassCard } from "../ui/GlassCard";
import { BackgroundBeams } from "../ui/BackgroundBeams";

interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: typeof Trophy;
  side: "left" | "right";
  color: string;
}

const achievements: Achievement[] = [
  {
    year: "2024",
    title: "Liga Polskiego Ultimate - Faza finałowa",
    description:
      "Nasze Mixed Team zagrało w finałowych turniejach Ligi Polskiego Ultimate, konkurując z najlepszymi drużynami kraju.",
    icon: Trophy,
    side: "left",
    color: "#FF7D00",
  },
  {
    year: "2023",
    title: "HMP - 2. miejsce",
    description:
      "Solid performance na Hella Mistrzostwa Powiatu potwierdzając naszą pozycję wśród czołowych drużyn regionu.",
    icon: Medal,
    side: "right",
    color: "#008491",
  },
  {
    year: "2022",
    title: "Lagoon Cup - Triumf",
    description:
      "Zwycięstwo w jednym z najbardziej prestiżowych turniejów ultimate frisbee w Polsce.",
    icon: Star,
    side: "left",
    color: "#8B6FD0",
  },
  {
    year: "2021",
    title: "Mistrzostwa Dolnośląskie - Gold",
    description:
      "Dominujące zwycięstwo w Mistrzostwach Dolnośląskiego, udowadniając naszą hegemonię regionalną.",
    icon: Trophy,
    side: "right",
    color: "#FF7D00",
  },
  {
    year: "2020",
    title: "PMP - Finalista",
    description:
      "Mimo wyzwań pandemicznych, dotarliśmy do finału Polskich Mistrzostw Powiatu.",
    icon: Medal,
    side: "left",
    color: "#008491",
  },
  {
    year: "2019",
    title: "European Club Championship - Uczestnictwo",
    description:
      "Reprezentowaliśmy Polskę na europejskich mistrzostwach klubowych ultimate frisbee.",
    icon: Star,
    side: "right",
    color: "#8B6FD0",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      {/* Background beams */}
      <BackgroundBeams />

      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/5 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 inline-block" variant="orange">OSIĄGNIĘCIA</Badge>
          <BlurText
            text="NASZA DROGA"
            as="h2"
            className="text-5xl md:text-6xl font-heading font-black leading-tight text-foreground"
          />
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            Od skromnych początków do konkurencji na arenie krajowej i
            międzynarodowej - nasza podróż pełna jest sukcesów i lekcji.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (visible on desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {achievements.map((achievement, i) => {
              const Icon = achievement.icon;
              const isLeft = achievement.side === "left";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex items-center gap-4 md:gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className="flex-1">
                    <GlassCard className="p-6 md:p-8 hover:bg-primary/5">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: `${achievement.color}20`,
                          }}
                        >
                          <Icon
                            className="w-6 h-6"
                            style={{ color: achievement.color }}
                          />
                        </div>

                        <div>
                          <div
                            className="text-sm font-heading font-bold uppercase tracking-wider"
                            style={{ color: achievement.color }}
                          >
                            {achievement.year}
                          </div>
                          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mt-1">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                        {achievement.description}
                      </p>
                    </GlassCard>
                  </div>

                  {/* Timeline dot (hidden on mobile) */}
                  <motion.div
                    className="hidden md:flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div
                      className="w-5 h-5 rounded-full border-4 absolute z-10"
                      style={{
                        borderColor: achievement.color,
                        backgroundColor: "var(--background)",
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-foreground/60 text-sm">
            Każde osiągnięcie to rezultat pracy zespołu, poświęcenia i pasji
          </p>
        </motion.div>
      </div>
    </section>
  );
}
