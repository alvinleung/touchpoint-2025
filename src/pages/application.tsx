import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
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
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfx4DzZFHuhMMJiyitBhUDEWk5pmNwqQ-ggeZ1nsJKOKgqFHw/viewform"
        target="_blankschedule"
        className="bg-inverted text-main px-8 py-4 rounded-full uppercase tracking-[.21em] text-sm font-bold"
      >
        Apply for Mock Interview
      </a>
    </div>
  );
};

export default Application;
