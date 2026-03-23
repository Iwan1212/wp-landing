import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-3 rounded-full font-heading uppercase tracking-wider transition-all duration-300 font-medium";

  const sizeClasses =
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";

  const variantStyles =
    variant === "primary"
      ? {
          backgroundColor: "var(--accent)",
          color: "var(--accent-foreground)",
        }
      : {
          border: "1.5px solid var(--foreground)",
          color: "var(--foreground)",
        };

  const content = (
    <>
      <span>{children}</span>
      {variant === "primary" ? (
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "var(--foreground)", color: "var(--accent)" }}
        >
          <ArrowUpRight className="w-4 h-4" />
        </span>
      ) : (
        <ArrowRight className="w-4 h-4" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="inline-block"
      >
        <a
          href={href}
          className={`${baseClasses} ${sizeClasses} ${className}`}
          style={variantStyles}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-block"
    >
      <button
        onClick={onClick}
        className={`${baseClasses} ${sizeClasses} ${className}`}
        style={variantStyles}
      >
        {content}
      </button>
    </motion.div>
  );
}
