import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo } from "react";

export const PillNav = ({
  children,
  isVisible,
}: {
  children: React.ReactNode;
  isVisible: boolean;
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto mb-10 z-20 flex justify-center flex-wrap max-w-[540px]">
      <AnimatePresence>{isVisible && <>{children}</>}</AnimatePresence>
    </div>
  );
};

export const PillNavItem = ({
  children,
  outline,
  isInitial,
}: React.PropsWithChildren & { outline?: boolean; isInitial?: boolean }) => {
  const redStyle = "bg-good-red text-wallet-green";
  const outlineStyle = "border-2 border-black text-black bg-wallet-green";

  const rand = useMemo(() => Math.random(), []);

  return (
    <motion.a
      initial={{
        y: rand * 100 + 200,
        scale: 1.5,
        opacity: 0,
        filter: "blur(80px)",
      }}
      animate={{
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        opacity: 1,
        transition: {
          duration: isInitial ? 1 : 0.6,
          delay: rand * 0.2,
          ease: [0.22, 0.3, 0.11, 0.99],
        },
      }}
      exit={{
        y: rand * 100 + 200,
        scale: 1.5,
        opacity: 0,
        filter: "blur(80px)",
        transition: {
          duration: 0.3,
          delay: rand * 0.1,
          ease: [0.72, 0.03, 0.67, 0.39],
        },
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          type: "spring",
          stiffness: 1200,
          damping: 20,
        },
      }}
      whileTap={{
        scale: 0.97,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 20,
        },
      }}
      className={cn(
        `cursor-pointer text-smol-sans inline-block px-4 py-1 rounded-full w-fit`,
        outline ? outlineStyle : redStyle,
      )}
    >
      {children}
    </motion.a>
  );
};
