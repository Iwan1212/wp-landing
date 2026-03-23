import { motion } from "motion/react";
import { Badge } from "../ui/Badge";
import { BlurText } from "../ui/BlurText";
import { GlassCard } from "../ui/GlassCard";

const blogPosts = [
  {
    id: 1,
    title: "Sezon 2025/2026 startuje!",
    excerpt:
      "Zapraszamy wszystkich zainteresowanych ultimate frisbee! Rekrutacja do naszej drużyny jest już otwarta. Nie musisz mieć doświadczenia, aby dołączyć.",
    date: "23 marca 2025",
    category: "Rekrutacja",
    color: "from-primary/30 to-secondary/20",
  },
  {
    id: 2,
    title: "Lagoon 2025 — relacja",
    excerpt:
      "Wspaniały turniej, wspaniali gracze! Nasze zespoły pokazały się z najlepszej strony na turnieju Lagoon 2025. Podsumowanie wyników i najlepszych momentów.",
    date: "18 marca 2025",
    category: "Turniej",
    color: "from-accent/30 to-primary/20",
  },
  {
    id: 3,
    title: "Nowe koszulki już dostępne",
    excerpt:
      "Nowe, designerskie koszulki Wrocław Południe są już dostępne do zamawiania! Promujemy się w stylu i wspieramy naszą drużynę.",
    date: "10 marca 2025",
    category: "Merch",
    color: "from-secondary/30 to-accent/20",
  },
];

export function Blog() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <Badge variant="orange">AKTUALNOŚCI</Badge>
        </motion.div>

        <BlurText
          text="CO NOWEGO"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-foreground"
          delay={0.1}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlassCard hover className="h-full flex flex-col overflow-hidden">
                {/* Image Placeholder */}
                <div
                  className={`h-40 bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 opacity-40"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <p className="relative z-10 text-foreground/40 text-sm font-semibold">
                    ZDJĘCIE
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground/50">{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-sm text-foreground/70 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors duration-300 mt-auto"
                    whileHover={{ x: 5 }}
                  >
                    Czytaj więcej
                    <span>→</span>
                  </motion.a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
