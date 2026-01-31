"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
// Import Swiper React components

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
const HeroSlider = () => {
  const heroArr = [
    {
      id: 1,
      imgUrl:
        "https://madebydesignesia.com/themes/aivent/images/background/1.webp",
    },
    {
      id: 2,
      imgUrl:
        "https://madebydesignesia.com/themes/aivent/images/background/2.webp",
    },
  ];
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]} // Dono modules yahan hona zaroori hain
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500, // 2.5 seconds baad slide change hogi
          disableOnInteraction: false, // Click karne ke baad bhi autoplay band nahi hoga
        }}
        className="mySwiper relative h-screen"
      >
        {heroArr.map((data) => (
          <SwiperSlide key={data.id}>
            <div
              className="bg-cover bg-bottom- w-full flex items-center justify-center h-full md:h-screen "
              style={{ backgroundImage: `url(${data.imgUrl})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
