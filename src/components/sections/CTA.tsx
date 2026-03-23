import { motion } from "motion/react";
import { BlurText } from "../ui/BlurText";
import { Button } from "../ui/Button";

export function CTA() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-16 lg:p-20"
        >
          {/* Animated Gradient Background */}
          <motion.div
            className="absolute inset-0 opacity-60"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(55,31,125,0.6) 0%, rgba(0,132,145,0.4) 50%, rgba(255,125,0,0.5) 100%)",
                "linear-gradient(180deg, rgba(255,125,0,0.5) 0%, rgba(55,31,125,0.6) 50%, rgba(0,132,145,0.4) 100%)",
                "linear-gradient(-45deg, rgba(0,132,145,0.4) 0%, rgba(255,125,0,0.5) 50%, rgba(55,31,125,0.6) 100%)",
                "linear-gradient(45deg, rgba(55,31,125,0.6) 0%, rgba(0,132,145,0.4) 50%, rgba(255,125,0,0.5) 100%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Glass Overlay */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "rgba(3, 3, 64, 0.85)",
              backdropFilter: "blur(10px)",
            }}
          />

          {/* Diagonal Slash Element */}
          <div
            className="absolute -right-32 top-0 w-96 h-96 opacity-20"
            style={{
              background: "linear-gradient(135deg, var(--accent), transparent)",
              transform: "rotate(-45deg)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <BlurText
              text="GOTOWY NA NOWE WYZWANIE?"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
              delay={0}
            />

            <motion.p
              className="text-lg md:text-xl text-foreground/90 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Dołącz do Wrocław Południe i odkryj ultimate frisbee. Pierwszy
              trening gratis!
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="primary" size="lg">
                Zapisz się na trening
              </Button>
              <Button variant="outline" size="lg">
                Napisz do nas
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
