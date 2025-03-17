import QUOTES from "@/data/quotes";
import { cn } from "@/utils/cn";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import { getCurrentColorScheme, toggleColorScheme } from "@/utils/theme";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { useDocumentTitle } from "usehooks-ts";

export const getServerSideProps = getPageColorSchemeProps("green");

const Application = () => {
  useDocumentTitle("Touchpoint 2025");
  return (
    <div className="relative">
      <div className="px-body justify-center flex flex-col gap-[1em] h-screen text-more-big-sans text-justify">
        <p>
          A collection of words by Russell Taylor, and by those who inspired
          him, with which he used to inspire us.
        </p>
      </div>
      {QUOTES.map(({ quote, author }, index) => (
        <QuoteCard
          key={index}
          colorScheme={index % 2 === 0 ? "red" : "green"}
          quote={quote}
          author={author}
          cardIndex={index}
        />
      ))}
    </div>
  );
};

const QuoteCard = ({
  quote,
  author,
  colorScheme,
  cardIndex,
}: {
  colorScheme: "green" | "red";
  quote: string;
  author: string;
  cardIndex: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // const borderRadius = useTransform(
  //   scrollYProgress,
  //   [0, 0.4, 0.6, 1],
  //   ["50vw", "0vw", "0vw", "50vw"]
  // );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.0 && getCurrentColorScheme() === colorScheme) {
      toggleColorScheme();
    }
  });

  return (
    <div
      ref={ref}
      className={cn(
        colorScheme === "red" ? "color-scheme-red" : "color-scheme-green",
        "sticky top-0 h-fit"
      )}
      style={{
        zIndex: cardIndex,
      }}
    >
      <motion.div
        // initial={{
        //   borderRadius: "30vw",
        // }}
        // style={{
        //   borderRadius,
        // }}
        className={`bg-main text-inverted px-body justify-center flex flex-col min-h-screen py-32`}
      >
        <div className={`flex flex-col sm:flex-row gap-4 items-start`}>
          <p className="text-label sm:min-w-[20vw] mt-[.1em]">{author}</p>
          <p
            className={`${
              colorScheme === "red" ? "text-big-sans" : "text-big-serif"
            }`}
          >
            {quote}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Application;
