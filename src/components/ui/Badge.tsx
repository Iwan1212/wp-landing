import { motion } from "motion/react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`inline-block rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium ${className}`}
      style={{ borderColor: "rgba(0,132,145,0.4)", color: "var(--primary)" }}
    >
      {children}
    </motion.span>
  );
}
