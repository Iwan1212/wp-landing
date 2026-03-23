import { motion } from "motion/react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "teal" | "orange" | "violet" | "umber";
}

const variants = {
  teal: { borderColor: "rgba(0,132,145,0.4)", color: "#008491" },
  orange: { borderColor: "rgba(255,125,0,0.4)", color: "#FF7D00" },
  violet: { borderColor: "rgba(55,31,125,0.4)", color: "#8B6FD0" },
  umber: { borderColor: "rgba(120,41,15,0.4)", color: "#78290F" },
};

export function Badge({ children, className = "", variant = "teal" }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`inline-block rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium ${className}`}
      style={variants[variant]}
    >
      {children}
    </motion.span>
  );
}
