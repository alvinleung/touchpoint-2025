import React from "react";
import LEGACY_SPEAKERS from "@/data/legacySpeakers";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import { useDocumentTitle } from "usehooks-ts";
import Link from "next/link";
import Footer from "@/components/Footer";

export const getServerSideProps = getPageColorSchemeProps("green");

const Legacy = () => {
  useDocumentTitle("Touchpoint 2025");
  return (
    <>
      <div className="px-body pt-nav-height min-h-screen">
        <div className="text-big-serif text-justify flex flex-col gap-[1em] mt-nav-height">
          <p>
            Touchpoint is an annual design conference for the creative
            community, that serves as a space for design practitioners,
            students, and like-minded individuals, where bright ideas form the
            most inspired minds.
          </p>
          <p>
            Designed to spark dialogue and collaboration, it offers a platform
            to discuss opportunities, confront challenges, and form connections.
          </p>
        </div>
        {/* Legacy grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-[8vh] mb-12">
          {LEGACY_SPEAKERS.map((event) => (
            <LegacyGridItem key={event.year} year={event.year}>
              {event.talks.map((talk, index) => (
                <Talk key={index} name={talk.speakers} company={talk.company} />
              ))}
            </LegacyGridItem>
          ))}
        </div>
      </div>
      <Footer quote={"Give it all away."} />
    </>
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
    <Link
      href={`https://www.sfu.ca/idc/${year}`}
      className="flex flex-col gap-0 hover:text-good-red"
      target="_blank"
    >
      <div className="font-sans tracking-[-0.12em] leading-none -mb-[.2em] mt-8 text-[40vw] md:text-[18vw] xl:text-[13vw] font-light -ml-[.05em]">
        <KernThatShit
          str={`${year}`}
          kernTable={[
            { pair: "12", value: -0.09 },
            { pair: "01", value: -0.07 },
            { pair: "13", value: -0.1 },
            { pair: "15", value: -0.11 },
            { pair: "14", value: -0.12 },
            { pair: "16", value: -0.1 },
            { pair: "18", value: -0.09 },
            { pair: "17", value: -0.13 },
            { pair: "19", value: -0.09 },
          ]}
        />
      </div>
      <div className="text-smol-serif grid grid-cols-2 gap-x-6">{children}</div>
    </Link>
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

const KernThatShit = ({
  str,
  kernTable,
}: {
  str: string;
  kernTable: {
    pair: string;
    value: number;
  }[];
}) => {
  const applyKerning = React.useMemo(() => {
    const kernedText = str.split("").map((char, index, array) => {
      if (index === array.length - 1) return char;
      const pair = char + array[index + 1];
      const kernValue = kernTable.find((k) => k.pair === pair)?.value || 0;
      return (
        <span key={index} style={{ marginRight: `${kernValue}em` }}>
          {char}
        </span>
      );
    });
    return kernedText;
  }, [str, kernTable]);

  return <>{applyKerning}</>;
};

export default Legacy;
