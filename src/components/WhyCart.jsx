import Image from "next/image";
import React from "react";

const WhyCart = ({ children, data }) => {
  return (
    <div
      className="rounded-xl flex flex-col gap-4 items-center justify-end overflow-hidden relative w-full group
 "
      style={{
        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 70%, transparent 100%)",
      }}
    >
      {/* 1. Background Image */}
      <img
        src={data.imgUrl}
        alt={data.title}
        className="w-full h-full transition-all ease-in-out duration-1200 object-cover group-hover:scale-110"
      />

      {/* 2. Inset Shadow Layer (Ye image ke upar ayega) */}
      <div className="absolute  transition-all ease-initial duration-1000 inset-0 bg-[radial-gradient(circle,_transparent_30%,_rgba(99,102,241,0.8)_100%)] group-hover:shadow-[inset_0_-70px_110px_rgba(99,102,241,0.8)] pointer-events-none z-10" />

      {/* 3. Text Content */}
      {children}
    </div>
  );
};
export default WhyCart;
