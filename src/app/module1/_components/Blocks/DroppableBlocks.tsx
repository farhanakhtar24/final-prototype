import React from "react";
import { PiArrowDownFill as DownArrow } from "react-icons/pi";
import { PiArrowUpFill as UpArrow } from "react-icons/pi";
import { PiArrowLeftFill as LeftArrow } from "react-icons/pi";
import { PiArrowRightFill as RightArrow } from "react-icons/pi";

type Props = {};

export const DroppableUpBlock = () => {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded bg-Spiro-Disco text-black">
      <UpArrow className="h-7 w-7" />
    </div>
  );
};

export const DroppableDownBlock = () => {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded bg-Spiro-Disco text-black">
      <DownArrow className="h-7 w-7" />
    </div>
  );
};

export const DroppableLeftBlock = () => {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded bg-Spiro-Disco text-black">
      <LeftArrow className="h-7 w-7" />
    </div>
  );
};

export const DroppableRightBlock = () => {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded bg-Spiro-Disco text-black">
      <RightArrow className="h-7 w-7" />
    </div>
  );
};
