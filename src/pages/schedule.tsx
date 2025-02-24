import React, { Fragment } from "react";
import SCHEDULE from "@/data/schedule";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";

export const getServerSideProps = getPageColorSchemeProps("red");

const Schedule = () => {
  return (
    <div className="px-body pt-nav-height min-h-screen">
      <div
        className="grid text-big-sans gap-x-4 gap-y-[1em] mt-[1em]"
        style={{
          gridTemplateColumns: "1fr 5fr 1fr",
        }}
      >
        {SCHEDULE.map((item, index) => (
          <Fragment key={index}>
            <div>{item.time}</div>
            <div>{item.event}</div>
            <div>{item.format}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
