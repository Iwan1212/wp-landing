import { motion } from "motion/react";
import { Heart, TrendingUp, Users } from "lucide-react";
import { BlurText } from "../ui/BlurText";
import { Badge } from "../ui/Badge";
import { GlassCard } from "../ui/GlassCard";

const stats = [
  {
    icon: Heart,
    label: "Duch drużyny",
    description:
      "Nasze wartości to zespołowość, szacunek i wsparcie dla każdego gracza.",
    iconColor: "#FF7D00",
    bgColor: "rgba(255,125,0,0.15)",
  },
  {
    icon: TrendingUp,
    label: "Rozwój",
    description:
      "Ciągle się ulepszamy, uczestnicząc w turniejach i dzieląc się doświadczeniem.",
    iconColor: "#008491",
    bgColor: "rgba(0,132,145,0.15)",
  },
  {
    icon: Users,
    label: "Społeczność",
    description:
      "Budujemy silną społeczność graczy ultimate frisbee w Wrocławiu i regionie.",
    iconColor: "#8B6FD0",
    bgColor: "rgba(55,31,125,0.2)",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-secondary/5 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Badge className="mb-6" variant="orange">O NAS</Badge>
          <BlurText
            text="WIĘCEJ NIŻ SPORT"
            as="h2"
            className="text-5xl md:text-6xl font-heading font-black leading-tight mb-8 text-foreground"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              Wrocław Południe powstała z pasji do ultimate frisbee i pragnienia
              stworzenia miejsca, gdzie gracze mogą się rozwijać zarówno sportowo,
              jak i jako społeczność. Wszystko zaczęło się od nieformalnych spotkań
              w Park Południowy w 2014 roku, gdzie grupa entuzjastów grała dla
              przyjemności. Co tydzień było nas coraz więcej.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Dziś jesteśmy jednym z czołowych klubów ultimate frisbee w Polsce.
              Reprezentujemy Wrocław w turniejach krajowych i europejskich.
              Wierzymy, że sport zmienia ludzi - rozwija charaktery, buduje
              przyjaźnie i uczy współpracy. Każdy gracz to część naszej rodziny,
              niezależnie od poziomu umiejętności.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-sm text-primary/80 font-heading uppercase tracking-wider">
                Od szaleństwa parkowych do elity
              </p>
            </motion.div>
          </motion.div>

          {/* Right column - Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <GlassCard key={i} className="p-6 md:p-8 hover:bg-secondary/5">
                  <div className="flex gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0"
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: stat.bgColor,
                        }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: stat.iconColor }}
                        />
                      </div>
                    </motion.div>

                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-2 uppercase tracking-wide">
                        {stat.label}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
