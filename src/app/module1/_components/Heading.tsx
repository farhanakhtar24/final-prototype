import React from "react";

type Props = {
  icon?: string;
  headingName: string;
  extraClass?: string;
};

const Heading = ({ icon, headingName, extraClass }: Props) => {
  return (
    <div
      className={`flex h-10 w-full items-center bg-Lavender px-5 ${extraClass}`}
    >
      {icon && <span>{/* icon */}</span>}
      <span className="text-sm font-semibold">{headingName}</span>
    </div>
  );
};

export default Heading;
