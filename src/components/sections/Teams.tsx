import { motion } from "motion/react";
import { Disc3, Users, Zap } from "lucide-react";
import { BlurText } from "../ui/BlurText";
import { Badge } from "../ui/Badge";
import { GlassCard } from "../ui/GlassCard";

const teams = [
  {
    name: "MIXED",
    description:
      "Nasza główna drużyna grająca na najwyższym poziomie. Reprezentujemy Wrocław i Polskę na arenie międzynarodowej.",
    icon: Disc3,
    color: "bg-secondary/30",
    accentColor: "var(--primary)",
    featured: true,
  },
  {
    name: "OPEN",
    description:
      "Sekcja męska, gdzie panowie rozwijają swoje umiejętności i rywalizują w krajowych turniejach.",
    icon: Users,
    color: "bg-accent/20",
    accentColor: "var(--accent)",
    featured: false,
  },
  {
    name: "JUNIORZY",
    description:
      "Przyszłość frisbee - młodsi gracze uczą się pasji i ducha ultimate frisbee od naszych doświadczonych graczy.",
    icon: Zap,
    color: "bg-primary/20",
    accentColor: "var(--primary)",
    featured: false,
  },
];

export function Teams() {
  return (
    <section
      id="teams"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, transparent, rgba(55,31,125,0.08) 50%, transparent)" }}
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Badge className="mb-6" variant="violet">DRUŻYNY</Badge>
          <BlurText
            text="NASZE SEKCJE"
            as="h2"
            className="text-5xl md:text-6xl font-heading font-black leading-tight text-foreground"
          />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {/* Featured card - spans 2 columns and 2 rows on larger screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <GlassCard className="h-full p-8 md:p-10 relative overflow-hidden group">
              {/* Diagonal cut accent */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10 -mr-20 -mt-20 diagonal-cut">
                <div
                  className="w-full h-full"
                  style={{ backgroundColor: teams[0].accentColor }}
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-6"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: teams[0].color }}
                  >
                    <Disc3
                      className="w-8 h-8"
                      style={{ color: teams[0].accentColor }}
                    />
                  </div>
                </motion.div>

                <h3 className="text-5xl font-heading font-black mb-4 text-foreground">
                  {teams[0].name}
                </h3>

                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  {teams[0].description}
                </p>

                <motion.a
                  href="#"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
                >
                  Dowiedz się więcej
                  <span>→</span>
                </motion.a>
              </div>
            </GlassCard>
          </motion.div>

          {/* OPEN Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <GlassCard className="h-full p-6 md:p-8 relative overflow-hidden group">
              {/* Diagonal accent */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 -mr-16 -mt-16 diagonal-cut">
                <div
                  className="w-full h-full"
                  style={{ backgroundColor: teams[1].accentColor }}
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: teams[1].color }}
                  >
                    <Users
                      className="w-6 h-6"
                      style={{ color: teams[1].accentColor }}
                    />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">
                  {teams[1].name}
                </h3>

                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  {teams[1].description}
                </p>

                <motion.a
                  href="#"
                  whileHover={{ x: 2 }}
                  className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:text-primary transition-colors"
                >
                  Dowiedz się więcej
                  <span>→</span>
                </motion.a>
              </div>
            </GlassCard>
          </motion.div>

          {/* JUNIORZY Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <GlassCard className="h-full p-6 md:p-8 relative overflow-hidden group">
              {/* Diagonal accent */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 -mr-16 -mt-16 diagonal-cut">
                <div
                  className="w-full h-full"
                  style={{ backgroundColor: teams[2].accentColor }}
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: teams[2].color }}
                  >
                    <Zap
                      className="w-6 h-6"
                      style={{ color: teams[2].accentColor }}
                    />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">
                  {teams[2].name}
                </h3>

                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  {teams[2].description}
                </p>

                <motion.a
                  href="#"
                  whileHover={{ x: 2 }}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-accent transition-colors"
                >
                  Dowiedz się więcej
                  <span>→</span>
                </motion.a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
