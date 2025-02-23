import React from "react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-2xl">
      <div
        className="flex items-baseline mx-8 py-3 border-b-[0.5px] border-b-inverted"
        style={{
          transition: "all .15s linear",
        }}
      >
        <div className="text-sm w-52">Since 2012</div>
        <div className="mx-auto text-lg font-serif">
          Touchpoint 2025—On the Theme of Legacy
        </div>
        <div className="text-sm w-52 text-right">
          An anthology of quotations
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
