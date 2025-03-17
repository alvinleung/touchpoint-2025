import QUOTES from "@/data/quotes";
import React, { useEffect, useState } from "react";
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

const RandomFooter = () => {
  const [footerQuote, setFooterQuote] = useState("Give a shit.");
  useEffect(() => {
    const quote = QUOTES[Math.round(Math.random() * (QUOTES.length - 1))];
    setFooterQuote(quote.quote);
  }, []);
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
          {footerQuote}
        </motion.div>
      </div>
    </footer>
  );
};

export default RandomFooter;
