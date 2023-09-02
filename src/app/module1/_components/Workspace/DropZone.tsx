import React from "react";
import { PiArrowLeftFill as LeftArrow } from "react-icons/pi";

type Props = {};

const DropZone = (props: Props) => {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded border border-[#17FB99] bg-white/25">
      <LeftArrow className="h-7 w-7" />
    </div>
  );
};

export default DropZone;
