import React from "react";

const WhyCartText = ({ data }) => {
  return (
    <div className="absolute bottom-0 py-10 px-10 z-20  ">
      <h3 className="font-semibold text-white text-[1.4rem]">{data.title}</h3>
      <p className="text-[#BFC0C9] leading-6 text-lg">{data.desc}</p>
    </div>
  );
};

export default WhyCartText;
