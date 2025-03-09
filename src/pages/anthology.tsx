import QUOTES from "@/data/quotes";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

function toggleColorScheme() {
  if (document.body.classList.contains("color-scheme-red")) {
    document.body.classList.remove("color-scheme-red");
    document.body.classList.add("color-scheme-green");
  } else {
    document.body.classList.remove("color-scheme-green");
    document.body.classList.add("color-scheme-red");
  }
}

function getCurrentColorScheme() {
  return document.body.classList.contains("color-scheme-red") ? "red" : "green";
}

export const getServerSideProps = getPageColorSchemeProps("red");

const Application = () => {
  return (
    <div className="">
      <div className="px-body justify-center flex flex-col gap-[1em] h-screen text-more-big-sans text-justify">
        <p>
          A collection of words by Russell Taylor, and by those who inspired
          him, with which he used to inspire us.
        </p>
      </div>
      {QUOTES.map(({ quote, author }, index) => (
        <QuoteCard
          key={index}
          colorScheme={index % 2 === 0 ? "green" : "red"}
          quote={quote}
          author={author}
        />
      ))}
    </div>
  );
};

const QuoteCard = ({
  quote,
  author,
  colorScheme,
}: {
  colorScheme: "green" | "red";
  quote: string;
  author: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["30vw", "0vw", "0vw", "30vw"],
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.0 && getCurrentColorScheme() === colorScheme) {
      toggleColorScheme();
    }
  });

  return (
    <div
      ref={ref}
      className={
        colorScheme === "red"
          ? "bg-black color-scheme-red"
          : "bg-black color-scheme-green"
      }
    >
      <motion.div
        initial={{
          borderRadius: "30vw",
        }}
        style={{
          borderRadius,
        }}
        className={`bg-main text-inverted px-body justify-center flex flex-col min-h-screen py-32`}
      >
        <div className={`flex flex-col sm:flex-row gap-4 items-start`}>
          <p className="text-label sm:min-w-[20vw] mt-[.1em]">{author}</p>
          <p
            className={`${colorScheme === "red" ? "text-big-sans" : "text-big-serif"}`}
          >
            {quote}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Application;
