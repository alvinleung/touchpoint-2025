import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import Link from "next/link";
import React from "react";
import { useDocumentTitle } from "usehooks-ts";

export const getServerSideProps = getPageColorSchemeProps("red");

const Application = () => {
  useDocumentTitle("Touchpoint 2025");
  return (
    <div className="px-body mt-nav-height pt-nav-height pb-32 min-h-screen">
      <div className="flex flex-col gap-[1em] text-more-big-sans text-justify mb-24">
        <p>
          This year we have industry mentors providing feedback and insights in
          mock interviews held remotely on Sunday, March 23, 2025.
        </p>

        <p>
          Those applying will need a portfolio and/or presentation slide deck of
          the project they want to present and receive feedback on.
        </p>

        <p>Applications close end of day, Wednesday, March 19 2025.</p>
      </div>
      <div className="flex justify-center">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfx4DzZFHuhMMJiyitBhUDEWk5pmNwqQ-ggeZ1nsJKOKgqFHw/viewform"
          target="_blank"
          className="bg-inverted text-main hover:bg-bianchi-blue hover:text-wallet-green text-2xl inline-flex items-center justify-center px-6 pt-2 pb-1  rounded-full w-fit "
        >
          Apply for Mock Interview
        </Link>
      </div>
    </div>
  );
};

export default Application;
