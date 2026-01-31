"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrSubtract } from "react-icons/gr";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navArr = [
    "Home",
    "About",
    "Why Attend",
    "Speakers",
    "Schedule",
    "Tickets",
    "Venue",
    "FAQ",
    "Pages",
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      console.log(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="">
      <div
        className={`w-full flex  items-center justify-between bg-[#101435] fixed top-0 z-10 transition-all duration-300  lg:backdrop-blur-xs px-4 py-2.5 lg:px-4 lg:py-2 xl:px-15 xl:py-3 lg:flex-wrap lg:gap-5 xl:gap-20 xl:flex-nowrap ${
          scrolled ? "bg-[#101435]" : "lg:bg-transparent"
        }`}
      >
        <Image
          src="/logo.webp"
          width={135}
          height={135}
          alt={"this is alt attribute"}
        />

        {/* LARGE DEVICE */}
        <nav className=" hidden lg:block w-full lg:order-3 xl:order-2">
          <ul className="lg:flex items-center justify-between w-full grow lg:gap-3 xl:gap-4">
            {navArr.map((nav, index) => (
              <a href="#footer" key={index}>
                <li className="text-white text-lg whitespace-nowrap">{nav}</li>
              </a>
            ))}
          </ul>
        </nav>

        {/* MOBILE DEVICE */}
        {navbarOpen && (
          <nav className="fixed top-0 left-0 bg-[#101435] w-full h-full -z-10">
            <ul className="flex flex-col items-start px-4 py-30">
              {navArr.map((nav, index) => (
                <a
                  key={index}
                  href="#footer"
                  className="border-white/40 border-b w-full py-3"
                >
                  <li className="text-white text-2xl">{nav}</li>
                </a>
              ))}
            </ul>
          </nav>
        )}

        <div className="flex items-center gap-5 xl:order-3">
          <button className="text-white rounded-lg bg-[#4E37A7] text-sm font-bold hidden md:inline-block px-4 py-2 whitespace-nowrap">
            Buy Tickets
          </button>
          <button
            className="text-white text-xl lg:hidden"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            {!navbarOpen ? <GiHamburgerMenu /> : <GrSubtract />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
