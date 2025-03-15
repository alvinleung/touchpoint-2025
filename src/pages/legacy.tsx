import React from "react";
import LEGACY_SPEAKERS from "@/data/legacySpeakers";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import { useDocumentTitle } from "usehooks-ts";

export const getServerSideProps = getPageColorSchemeProps("green");

const Legacy = () => {
  useDocumentTitle("Touchpoint 2025");
  return (
    <div className="px-body pt-nav-height min-h-screen">
      <div className="text-big-serif text-justify flex flex-col gap-[1em] mt-nav-height">
        <p>
          Touchpoint is an annual design conference for the creative community,
          that serves as a space for design practitioners, students, and
          like-minded individuals, where bright ideas form the most inspired
          minds.
        </p>
        <p>
          Designed to spark dialogue and collaboration, it offers a platform to
          discuss opportunities, confront challenges, and form connections.
        </p>
      </div>
      {/* Legacy grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-[14vh]">
        {LEGACY_SPEAKERS.map((event) => (
          <LegacyGridItem key={event.year} year={event.year}>
            {event.talks.map((talk, index) => (
              <Talk key={index} name={talk.speakers} company={talk.company} />
            ))}
          </LegacyGridItem>
        ))}
      </div>
    </div>
  );
};

const LegacyGridItem = ({
  year = 2012,
  children,
}: {
  year: number;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-0">
      <div className="font-sans tracking-[-0.08em] leading-none text-[40vw] md:text-[18vw] xl:text-[13vw] font-light -ml-[.05em]">
        {year}
      </div>
      <div className="text-smol-serif grid grid-cols-2 gap-x-6">{children}</div>
    </div>
  );
};

const Talk = ({ name, company }: { name: string; company: string }) => {
  return (
    <>
      <span>{name}</span>
      <span>{company}</span>
    </>
  );
};

export default Legacy;
