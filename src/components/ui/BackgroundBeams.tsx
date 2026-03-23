import { motion } from "motion/react";

export function BackgroundBeams() {
  const beams = [
    { width: "40%", y: "10%", angle: -15, duration: 8, delay: 0 },
    { width: "30%", y: "30%", angle: -20, duration: 12, delay: 2 },
    { width: "50%", y: "60%", angle: -10, duration: 10, delay: 4 },
    { width: "35%", y: "80%", angle: -25, duration: 14, delay: 1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {beams.map((beam, i) => (
        <motion.div
          key={i}
          className="absolute h-px"
          style={{
            width: beam.width,
            top: beam.y,
            left: "-10%",
            rotate: `${beam.angle}deg`,
            background:
              "linear-gradient(90deg, transparent, var(--primary), transparent)",
            opacity: 0.15,
          }}
          animate={{ x: ["-100%", "250%"] }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            delay: beam.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
