import React from "react";

const Navigation = () => {
  return (
    <nav className="fixed z-30 top-0 left-0 right-0 backdrop-blur-2xl">
      <div
        className="flex items-baseline mx-body py-3 border-b-[0.5px] border-b-inverted"
        style={{
          transition: "all .15s linear",
        }}
      >
        <div className="text-sm sm:w-52">Since 2012</div>
        <div className="mx-auto text-lg font-serif">Touchpoint 2025</div>
        <div className="text-sm sm:w-52 text-right">
          <span className="max-sm:hidden">An anthology of</span> quotations
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
