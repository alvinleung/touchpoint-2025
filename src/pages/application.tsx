import Footer from "@/components/Footer";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import Link from "next/link";
import React from "react";
import { useDocumentTitle } from "usehooks-ts";

export const getServerSideProps = getPageColorSchemeProps("red");

const Application = () => {
  useDocumentTitle("Touchpoint 2025");
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
      <div className="flex justify-center mb-16">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfx4DzZFHuhMMJiyitBhUDEWk5pmNwqQ-ggeZ1nsJKOKgqFHw/viewform"
          target="_blank"
          className="bg-inverted text-main hover:bg-bianchi-blue hover:text-wallet-green text-2xl inline-flex items-center justify-center px-6 pt-2 pb-1  rounded-full w-fit "
        >
          Apply for Mock Interview
        </Link>
      </div>
      <Footer quote="as Alexey Brodovitch said, étonnez moi — Astonish me." />
    </div>
  );
};

export default Application;
