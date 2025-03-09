import { motion } from "framer-motion";
import React from "react";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        transition: {
          duration: 2,
          delay: 0.1,
          ease: [0.09, 0.59, 0.21, 1],
        },
      }}
      className="fixed z-30 top-0 left-0 right-0 backdrop-blur-lg"
    >
      <div
        className="flex items-baseline mx-body py-3 border-b-[0.5px] border-b-inverted"
        style={{
          transition: "all .15s linear",
        }}
      >
        <div className="text-sm sm:w-52">Since 2012</div>
        <div className="mx-auto text-lg font-serif">Touchpoint 2025</div>
        <div className="text-sm sm:w-52 text-right">
          <span className="max-sm:hidden">An anthology of</span> quotations
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
