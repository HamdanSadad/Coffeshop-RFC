import { Variants } from "framer-motion";

export const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1]; // "Premium" ease out

export const motionConfig = {
  transition: {
    duration: 0.8,
    ease: EASING,
  },
  hoverTransition: {
    duration: 0.25,
    ease: EASING,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: EASING } 
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const cardHover = {
  hover: {
    scale: 1.05,
    boxShadow: "var(--shadow-card)",
    transition: {
      duration: 0.3,
      ease: EASING,
    },
  },
};

export const buttonHover = {
  hover: {
    scale: 1.03,
    y: -2,
    transition: {
      duration: 0.2,
      ease: EASING,
    },
  },
  tap: {
    scale: 0.98,
  },
};
