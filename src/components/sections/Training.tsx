import { motion } from "motion/react";
import { Clock, MapPin } from "lucide-react";
import { Badge } from "../ui/Badge";
import { BlurText } from "../ui/BlurText";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";

const schedule = [
  {
    day: "Poniedziałek",
    time: "19:00-21:00",
    location: "Hala sportowa",
    shortDay: "Pon",
  },
  {
    day: "Środa",
    time: "19:00-21:00",
    location: "Hala sportowa",
    shortDay: "Śro",
  },
  {
    day: "Sobota",
    time: "10:00-12:00",
    location: "Park Południowy (outdoor)",
    shortDay: "Sob",
  },
];

export function Training() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <Badge>TRENINGI</Badge>
        </motion.div>

        <BlurText
          text="TRENUJ Z NAMI"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-foreground"
          delay={0.1}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Info Text */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Zapraszamy do dołączenia do naszych treningów. Trenujemy
                regularnie, aby rozwijać umiejętności i budować silną drużynę.
              </p>
              <p className="text-base text-foreground/80">
                Pierwszych treningów nie musisz się bać — nie wymaga
                doświadczenia! Serdecznie zapraszamy wszystkich zainteresowanych
                ultimate frisbee.
              </p>
              <Button className="mt-8">Przyjdź na trening</Button>
            </div>
          </motion.div>

          {/* Right Column - Schedule Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {schedule.map((session, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <GlassCard hover className="h-full p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground uppercase mb-1">
                        {session.day}
                      </h3>
                      <p className="text-xs text-primary font-semibold">
                        {session.shortDay}
                      </p>
                    </div>

                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">
                          {session.time}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-foreground">
                          {session.location}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-foreground/10">
                      <p className="text-xs text-foreground/60 uppercase tracking-wider">
                        Zapraszamy
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
