import React from "react";
import { FaCheck } from "react-icons/fa6";

const AboutEventSection = () => {
  return (
    // <section className="px-4 py-2.5  lg:px-6 lg:py-2 xl:px-15 xl:py-6 w-full ">
    <section className="px-4 py-2.5 lg:px-4 lg:py-2 xl:px-15 xl:py-3 w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 xl:gap-1 w-full h-full">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center gap-10 md:px-3 sm:px-5 w-full h-full">
          <div className="allcartstextarea flex flex-col gap-3 items-start justify-start">
            <h1 className="px-3">
              <span className="text-[#764DF0]">[</span>
              About the Event
              <span className="text-[#764DF0]">]</span>
            </h1>
            <h2 className="text-3xl sm:text-5xl text-white uppercase font-medium sm:leading-16 ">
              A Global Gathering of AI Innovators
            </h2>
            <p className="text-[#BFC0C9] leading-8 text-lg ">
              Join thought leaders, developers, researchers, and founders as we
              explore how artificial intelligence is reshaping industries,
              creativity, and the future of work.
            </p>
          </div>

          <ul>
            <li className="flex items-center gap-5 ">
              <FaCheck className="text-[#764DF0] font-bold" />
              <span>5 days of keynotes, workshops, and networking</span>
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-[#764DF0] font-bold" />
              <span>50 world-class speakers</span>
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-[#764DF0] font-bold" />
              <span>Startup showcase and live demos</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-5 h-full md:gap-10">
          <div className="grid grid-cols-1 self-start h-[80%] gap-10">
            <img
              src="https://madebydesignesia.com/themes/aivent/images/misc/s1.webp"
              alt=""
              className="rounded-lg [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
            />
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-[#764DF0] text-white py-10">
              <h2 className="text-5xl font-medium">50</h2>
              <p className="whitespace-nowrap shrink text-sm sm:text-lg">
                World-class Speakers
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-5 ">
            <div className="grid grid-cols-1 self-end gap-10">
              <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-[#764DF0] text-white px-4 py-10">
                <h2 className="text-5xl font-medium">50</h2>
                <p className="whitespace-nowrap shrink text-sm sm:text-lg">
                  World-class Speakers
                </p>
              </div>
              <img
                src="https://madebydesignesia.com/themes/aivent/images/misc/s2.webp"
                alt=""
                className="rounded-lg [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEventSection;
