import React from "react";

export const Conversation = () => {
  return (
    <div className="flex flex-col px-2 py-2 border-b-2 hover:bg-slate-200">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="font-semibold"> Amit RG</div>
          <div className="text-xs font-semibold"> facebook DM</div>
        </div>
        <div className="text-xs">10m</div>
      </div>
      {/* <div>awesome product</div> */}
    </div>
  );
};
