import React from "react";

const SpeakersCartText = ({ data }) => {
  return (
    <div className="absolute bottom-0 my-8 z-20 w-full px-6 text-center">
      <div className=" backdrop-blur-md  rounded-lg py-8">
        <h3 className="font-semibold text-white text-[1.4rem]">{data.title}</h3>
        <p className="text-white leading-6 text-lg">{data.desc}</p>
      </div>
    </div>
  );
};

export default SpeakersCartText;
