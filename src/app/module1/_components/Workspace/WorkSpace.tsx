import React from "react";
import Heading from "../Heading";

type Props = {};

const WorkSpace = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col bg-Erie-Black">
      <Heading
        headingName="Workspace"
        extraClass="flex items-center justify-center"
      />
      <div className="flex h-full w-full bg-[#292F35]">a</div>
    </div>
  );
};

export default WorkSpace;
