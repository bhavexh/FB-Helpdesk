import React from "react";
import { ReceivedText } from "./ReceivedText";
import { SentText } from "./SentText";
import { InputBox } from "./InputBox";

export const Chat = () => {
  return (
    <div className="flex flex-col border-r-2 w-full">
      <div className="flex justify-between border-b-2 py-4 px-4 shadow-inner">
        <div className="text-xl font-medium">Amit RG</div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="py-4 ">
          <ReceivedText />
          <SentText />
          <SentText />
        </div>
        <InputBox />
      </div>
    </div>
  );
};
