import Footer from "@/components/Footer";
import useHasExpired from "@/hooks/useHasExpired";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import Link from "next/link";
import React from "react";
import { useDocumentTitle } from "usehooks-ts";

export const getServerSideProps = getPageColorSchemeProps("red");

const Application = () => {
  useDocumentTitle("Touchpoint 2025");
  const hasExpired = useHasExpired("2025-03-17");
  return (
    <div className="mt-nav-height pt-nav-height min-h-screen flex flex-col  justify-between">
      <div className="px-body flex flex-col gap-[1em] text-more-big-sans text-justify mb-12">
        <p>
          This year, industry mentors — from All Purpose, Aritzia, Artefact,
          Contrary, Critical Mass, Figma, Google, Instagram, Instrument, Meta,
          Retro, SAP, SVSD, Takram, Workday, and Youtube — will be providing
          feedback in mock interviews held remotely on Sunday, March 23, 2025.
        </p>

        <p>Applications close Monday, March 17, 2025 at 17.00.</p>
      </div>


      <Footer quote="as Alexey Brodovitch said, étonnez moi — Astonish me." />
    </div>
  );
};

export default Application;
