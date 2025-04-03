import React, { Fragment } from "react";
import SCHEDULE from "@/data/schedule";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import { useDocumentTitle } from "usehooks-ts";
import Footer from "@/components/Footer";

export const getServerSideProps = getPageColorSchemeProps("real-blue");

const Schedule = () => {
  useDocumentTitle("Touchpoint 2025");
  const hasExpired = useHasExpired("2025-08-22");

  return (
    <>
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
                    <span className="font-bold">{item.event}</span>
                    <span className="font-light">, {item.affiliation}</span>
                  </>
                )}
              </div>
            </Fragment>
          ))}
        </div>

        <div className="fixed bottom-8 left-0 right-0 flex justify-center">
          {!hasExpired && <PrimaryCTA />}
        </div>
      </div>
      <Footer quote="This is, finally, a time to come together, and celebrate, as a community." />
    </>
  );
};



export default Schedule;
