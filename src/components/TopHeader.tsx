import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const TopHeader = () => {
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
      className="fixed z-30 top-0 left-0 right-0 backdrop-blur"
    >
      <div
        className="flex items-baseline mx-body py-3 border-b-[0.5px] border-b-inverted"
        style={{
          transition: "all .15s linear",
        }}
      >
        <Link
          href="/legacy"
          className="uppercase tracking-widest text-[.65rem] md:w-60"
        >
          Since 2012
        </Link>
        <Link href="/" className="mx-auto text-lg font-serif">
          Touchpoint 2025
        </Link>
        <Link
          href="/anthology"
          className="uppercase tracking-widest text-[.65rem] md:w-60 text-right"
        >
          <span className="max-md:hidden">An anthology of</span> quotations
        </Link>
      </div>
    </motion.nav>
  );
};

export default TopHeader;
