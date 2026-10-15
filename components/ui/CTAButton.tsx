"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonHover } from "@/lib/motionConfig";
import React from "react";

interface CTAButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}

export function CTAButton({
  variant = "primary",
  children,
  className,
  ...props
}: CTAButtonProps) {
  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      variants={buttonHover}
      className={cn(
        "px-6 py-3 rounded-full font-sans font-medium text-[var(--text-body)] transition-colors duration-300",
        variant === "primary"
          ? "bg-[var(--color-accent-primary)] text-[var(--color-bg-main)] hover:bg-[var(--color-text-primary)]"
          : "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-text-primary)] hover:bg-[var(--color-glass-bg)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
