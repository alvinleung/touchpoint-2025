"use client";

import { cn } from "@/utils/cn";

import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import Logo from "@/assets/logo.svg";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import useDocumentHeight from "@/hooks/useDocumentHeight";
import { useWindowSize } from "usehooks-ts";
import { PillNav, PillNavItem } from "@/components/PillNav";
import { useEffect, useState } from "react";

export const getServerSideProps = getPageColorSchemeProps("green");

export default function Home() {
  const { scrollY } = useScroll();
  const { height } = useWindowSize();
  const docHeight = useDocumentHeight();

  const blurEnterBegin = 0;
  const blurEnterEnd = height * 1.5;
  const blurExitBegin = docHeight - height * 2;
  const blurExitEnd = docHeight - height;

  const blurAmount = useTransform(
    scrollY,
    [blurEnterBegin, blurEnterEnd, blurExitBegin, blurExitEnd],
    [0, 11, 11, 0],
  );
  const scale = useTransform(
    scrollY,
    [blurEnterBegin, blurEnterEnd, blurExitBegin, blurExitEnd],
    [1, 0.9, 0.9, 1],
  );
  const blur = useTransform(blurAmount, (amount) => `blur(${amount}px)`);

  const [shouldShowPillNav, setShouldShowPillNav] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldShowPillNav(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  useMotionValueEvent(scrollY, "change", () => {
    const prev = scrollY.getPrevious();
    const isScrollingDown = prev && scrollY.get() > prev ? true : false;
    if (
      scrollY.get() < 0 ||
      scrollY.get() > blurExitBegin ||
      !isScrollingDown
    ) {
      setShouldShowPillNav(true);
    } else {
      setShouldShowPillNav(false);
    }
  });

  const fullScreenStyle = "min-h-screen flex items-center justify-center";
  const blueSectionStyle = "mix-blend-difference bg-white text-black";
  const greenSectionStyle = "mix-blend-exclusion text-wallet-green";

  const responsiveMarginStyle = "px-body my-body md:px-[10vw] md:py-[10vw]";
  const bodyMarginStyle = "px-body my-body";

  return (
    <div className="">
      <PillNav isVisible={shouldShowPillNav}>
        <PillNavItem>Get Tickets</PillNavItem>
        <PillNavItem outline>2025.03.22</PillNavItem>
        <PillNavItem outline>SFU Surrey Engineering Building</PillNavItem>
        <PillNavItem>See Schedule</PillNavItem>
        <PillNavItem>Submit Questions</PillNavItem>
        <PillNavItem>Mock Interviews</PillNavItem>
      </PillNav>
      <div className="sticky -z-10 inset-0 flex justify-center items-center w-full h-screen">
        <motion.div
          initial={{ scale: 1.2, filter: "blur(50px)", opacity: 0 }}
          animate={{
            scale: 1,
            filter: "blur(0px)",
            opacity: 1,
            transition: {
              duration: 2,
              transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <motion.div style={{ filter: blur, scale }}>
            <Logo className="max-w-full" width="100%" viewBox="0 0 680 270" />
          </motion.div>
        </motion.div>
      </div>
      <div
        className={cn(
          `text-huge-sans font-bold text-justify`,
          bodyMarginStyle,
          "py-body md:py-[1em]",
          blueSectionStyle,
        )}
      >
        <div>
          Legacy speaks to the long-lasting impact of an individual as well as
          the many. It is to celebrate and honour by taking the responsibility
          to carry forward what many have given us. This is a celebration and
          honouring of the memory of Russell Taylor, founder of Touchpoint, and
          much more
        </div>
      </div>
      <div
        className={cn("text-mid-serif ", fullScreenStyle, greenSectionStyle)}
      >
        <div className="max-w-[28ch] text-justify">
          It is the care and responsibility to continue to thrive and support
          others as in the past. It is a chance to reflect on the legacy we are
          creating as designers — what kind of designers we want to be and to be
          known for. What can we offer to others in how we practice design?
        </div>
      </div>
      <div
        className={cn(
          "text-big-serif text-justify",
          responsiveMarginStyle,
          blueSectionStyle,
          fullScreenStyle,
        )}
      >
        It is a chance to reflect on where design is going. Design’s ongoing and
        continuing legacy has brought wonder and also harm. The conference is an
        opportunity to celebrate and to reflect on the long-lasting impact of
        those at Touchpoint, new to Touchpoint, and design at large.
      </div>
      <footer className="min-h-screen"></footer>
    </div>
  );
}
