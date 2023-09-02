import React from "react";
import Heading from "../Heading";
import DropZone from "./DropZone";
import PlayBtn from "./PlayBtn";
import ResetBtn from "./ResetBtn";

type Props = {};

const WorkSpace = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col bg-Erie-Black">
      <Heading
        headingName="Workspace"
        extraClass="flex items-center justify-center"
      />
      <div className="flex h-full w-full flex-col items-center justify-between bg-[#292F35] p-10 py-20">
        <p className="font-OpenSans text-sm font-light">
          Gizmo Will Move Forward
        </p>
        <div className="grid grid-cols-6 grid-rows-3 gap-3">
          {[...Array(18)].map((_, i) => (
            <DropZone key={i} />
          ))}
        </div>
        <div className="flex gap-5">
          <PlayBtn />
          <ResetBtn />
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
