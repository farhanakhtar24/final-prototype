import React from "react";
import Heading from "../Heading";
import DroppableBlocks from "../Workspace/DroppableBlocks";

type Props = {};

const Blocks = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col bg-Erie-Black">
      <Heading headingName="Blocks" />
      <div className=" -mt-5 flex h-full w-full items-center justify-center">
        <div className="flex gap-2.5">
          <DroppableBlocks />
          <DroppableBlocks />
          <DroppableBlocks />
          <DroppableBlocks />
        </div>
      </div>
    </div>
  );
};

export default Blocks;
