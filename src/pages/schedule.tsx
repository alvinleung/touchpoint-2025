import React, { Fragment } from "react";
import SCHEDULE from "@/data/schedule";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";
import { useDocumentTitle } from "usehooks-ts";

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
            <div>{item.time}</div>
            <div>
              {item.type === "event" && <>{item.event}</>}
              {item.type === "talk" && (
                <>
                  <span className="font-bold">{item.event}</span>,
                  {item.affiliation}
                </>
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
