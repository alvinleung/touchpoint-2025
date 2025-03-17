import React, { Fragment } from "react";
import SCHEDULE from "@/data/schedule";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import { useDocumentTitle } from "usehooks-ts";
import Link from "next/link";

export const getServerSideProps = getPageColorSchemeProps("real-blue");

const Schedule = () => {
  useDocumentTitle("Touchpoint 2025");

  return (
    <div className="px-body pt-nav-height min-h-screen pb-24">
      <div
        className="grid text-big-sans gap-x-4 gap-y-[1em] mt-[1em]"
        style={{
          gridTemplateColumns: "1fr 5fr",
        }}
      >
        {SCHEDULE.map((item, index) => (
          <Fragment key={index}>
            <div className="font-light">{item.time}</div>
            <div>
              {item.type === "event" && (
                <span className="font-light">{item.event}</span>
              )}
              {item.type === "talk" && (
                <>
                  <span className="font-bold">{item.event}</span>,{" "}
                  <span className="font-light">{item.affiliation}</span>
                </>
              )}
            </div>
          </Fragment>
        ))}
      </div>
      <div className="fixed bottom-8 left-0 right-0 flex justify-center">
        <PrimaryCTA />
      </div>
    </div>
  );
};

const PrimaryCTA = () => (
  <Link
    href="https://docs.google.com/forms/d/e/1FAIpQLSdTwDuUNP16lE4iVlNWZiu7wfgxKVtXb29vQWB0t5jMk6Ylug/viewform"
    target="_blank"
    className="flex hover:bg-black hover:text-wallet-green px-6 pt-2 pb-1 bg-wallet-green text-bianchi-blue  rounded-full font-sans text-2xl font-normal leading-snug tracking-tight"
  >
    Submit Questions
  </Link>
);

export default Schedule;
