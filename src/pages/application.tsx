import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";

const Application = () => {
  useColorScheme("red");

  return (
    <div className="px-body mt-nav-height pt-nav-height">
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
        href="https://example.com/apply"
        target="_blank"
        className="bg-inverted text-main px-8 py-4 rounded-full uppercase tracking-[.21em] text-sm font-bold"
      >
        Apply for Mock Interview
      </a>
    </div>
  );
};

export default Application;
