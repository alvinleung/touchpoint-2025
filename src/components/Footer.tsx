import React from "react";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    },
  },
};

interface Props {
  quote: string;
}
const Footer = ({ quote }: Props) => {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-footer-bg)",
        color: "var(--color-footer-text)",
      }}
      className="pt-1 w-full text-xs text-center uppercase tracking-wide"
    >
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="inline-block"
          variants={variants}
          animate="animate"
        >
          {quote}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
