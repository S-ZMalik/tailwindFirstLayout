import React from "react";

const SectionHeading = ({ mainHeading, h2, p }) => {
  return (
    <div className="allcartstextarea flex flex-col gap-5 items-center justify-center">
      <h1>
        <span className="text-[#764DF0]">[</span> {mainHeading}
        <span className="text-[#764DF0]">]</span>
      </h1>
      <h2 className="text-4xl sm:text-5xl text-[#D7D7D7]">{h2}</h2>
      {p && (
        <p className="text-[#BFC0C9] leading-8 text-xl max-w-2xl text-center ">
          {p}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
