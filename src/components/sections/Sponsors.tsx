import { motion } from "motion/react";
import { Badge } from "../ui/Badge";
import { BlurText } from "../ui/BlurText";
import { GlassCard } from "../ui/GlassCard";

const sponsors = [
  { name: "Sponsor 1", id: 1 },
  { name: "Sponsor 2", id: 2 },
  { name: "Sponsor 3", id: 3 },
  { name: "Sponsor 4", id: 4 },
  { name: "Sponsor 5", id: 5 },
  { name: "Sponsor 6", id: 6 },
];

export function Sponsors() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <Badge>PARTNERZY</Badge>
        </motion.div>

        <BlurText
          text="WSPIERAJĄ NAS"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-foreground"
          delay={0.1}
        />

        {/* Replace with actual sponsor logos - infinite marquee */}
        <div className="mb-12 overflow-hidden">
          <GlassCard className="p-8 relative">
            <div className="flex gap-8 animate-marquee">
              {[...sponsors, ...sponsors].map((sponsor, idx) => (
                <motion.div
                  key={idx}
                  className="flex-shrink-0 w-48 h-24 rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,132,145,0.2) 0%, rgba(55,31,125,0.2) 100%)`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-sm font-bold text-center text-foreground/70">
                    {sponsor.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="mailto:contact@wroclawpolubnie.pl"
            className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors duration-300 font-semibold uppercase tracking-wider"
          >
            Zostań partnerem
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
