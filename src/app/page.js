"use client";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import SpeakersCartText from "@/components/SpeakersCartText";
import WhyCart from "@/components/WhyCart";
import WhyCartText from "@/components/WhyCartText";
import React, { useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import AboutEventSection from "@/components/AboutEventSection";

const page = () => {
  const speakerArrForPersons = [
    {
      id: 1,
      time: "08:00 – 10:00 AM",
      name: "Joshua Henry",
      role: "AI Research Lead, DeepTech Lab",
      title: "Session: Opening Keynote – The State of AI 2026",
      desc: "Kick off the event with an insightful overview of where artificial intelligence is headed. Ava will explore breakthroughs, global shifts, and what’s next in deep learning, generative models, and AI ethics.",
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/team/1.webp",
    },
    {
      id: 2,
      time: "10:30 – 12:00 PM",
      name: "Dr. Sarah Chen",
      role: "Chief Innovation Officer, Future",
      title: "Session: Human-AI Collaboration",
      desc: "A deep dive into how humans and AI can work together to solve complex problems in healthcare and engineering, focusing on intuitive interfaces and cognitive synergy.",
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/team/2.webp",
    },
    {
      id: 3,
      time: "01:00 – 02:30 PM",
      name: "Marcus Thorne",
      role: "Lead Architect, Neural-Systems",
      title: "Session: Scaling Large Language Models",
      desc: "Learn about the infrastructure and optimization techniques required to train and deploy the next generation of massive neural networks across distributed cloud systems.",
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/team/3.webp",
    },
    {
      id: 4,
      time: "03:00 – 04:30 PM",
      name: "Elena Rodriguez",
      role: "Ethical AI Advocate, Global Trust",
      title: "Session: Governance and AI Safety",
      desc: "Addressing the critical need for regulations and safety protocols in the rapid development of AI. Discussing policy frameworks that ensure technology serves humanity fairly.",
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/team/4.webp",
    },
  ];
  const [frequentlyAskedQuestionsArr, setFrequentlyAskedQuestionsArr] =
    useState([
      {
        id: 1,
        question: "What is the AI Summit 2026?",
        answer:
          "The AI Summit 2026 is a premier event gathering leading AI experts, thought leaders, and innovators. It features keynotes, workshops, panels, and networking opportunities focusing on the latest advancements in artificial intelligence.",
        open: true,
      },
      {
        id: 2,
        question: "When and where will the event be held?",
        answer:
          "The AI Summit 2026 will take place from **[Event Dates]** at **[Event Location]**. More details about the venue and directions will be provided closer to the event.",
        open: true,
      },
      {
        id: 3,
        question: "How can I register for the event?",
        answer:
          "You can register for the AI Summit 2026 through our official website. Simply choose your ticket type and fill out the registration form.",
        open: true,
      },
      {
        id: 4,
        question: "What ticket options are available?",
        answer:
          "We offer a range of ticket options, including Standard, VIP, Full Access Pass, Student, and Virtual tickets. You can find more details about each ticket type on our [Tickets Page](#).",
        open: true,
      },
      {
        id: 5,
        question: "Can I transfer my ticket to someone else?",
        answer:
          "Tickets are non-transferable. If you are unable to attend, please contact our support team for assistance.",
        open: true,
      },
      {
        id: 6,
        question: "Will there be virtual participation?",
        answer:
          "Yes! For those who can’t attend in person, we offer a **Virtual Ticket**. This provides access to live-streamed sessions, workshops, and networking opportunities online.",
        open: true,
      },
    ]);
  const locationArr = [
    {
      id: 1,
      title: "Address",
      desc: "121 AI Blvd, San Francisco, CA 94107",
      icon: <FaLocationDot />,
    },
    {
      id: 2,
      title: "Phone",
      desc: "Call: +1 123 456 789",
      icon: <FaPhone />,
    },
    {
      id: 3,
      title: "Email",
      desc: "contact@gmail.com",
      icon: <IoMdMail />,
    },
  ];
  const scheduleArr = [1, 2, 3, 4, 5];
  const speakerArr = [
    {
      id: 1,
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/team/1.webp",
      title: "Joshua Henry",
      desc: "Chief AI Scientist, OpenAI",
    },
    {
      id: 2,
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/team/2.webp",
      title: "Leila Zhang",
      desc: "VP of Machine Learning, Google",
    },
    {
      id: 3,
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/team/3.webp",
      title: "Carlos Rivera",
      desc: "Founder & CEO, NeuralCore",
    },
  ];
  const whyCartArr = [
    {
      id: 1,
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/misc/s4.webp",
      title: "Hands-On Learning",
      desc: "Join live workshops and labs to build practical skills in AI and machine learning.",
    },
    {
      id: 2,
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/misc/s3.webp",
      title: "Cutting-Edge Knowledge",
      desc: "Stay ahead of the curve with insights from AI leaders shaping tomorrow’s technology.",
    },
    {
      id: 3,
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/misc/s5.webp",
      title: "Global Networking",
      desc: "Meet developers, founders, and researchers from around the world to collaborate and grow.",
    },
    {
      id: 4,
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/misc/s6.webp",
      title: "Startup Showcase",
      desc: "Explore the latest AI tools and ideas from promising startups and research labs.",
    },
    {
      id: 5,
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/misc/s7.webp",
      title: "AI Career Boost",
      desc: "Access exclusive job fairs, mentorship sessions, and recruiting events to grow your career.",
    },
    {
      id: 6,
      imgUrl: "https://madebydesignesia.com/themes/aivent/images/misc/s8.webp",
      title: "Ethics & Future",
      desc: "Engage in vital conversations around AI ethics, policy, and the future of intelligence.",
    },
  ];

  const handleAskedQuestions = (data) => {
    setFrequentlyAskedQuestionsArr((prevArr) =>
      prevArr.map((item) =>
        item.id === data.id
          ? { ...item, open: !item.open }
          : {
              ...item,
              open: true,
            }
      )
    );
  };

  const h2HeroArr = [
    "Pioneering ",
    "breakthroughs",
    "in AI",
    "robotics",
    "and",
    "digital",
    "human",
    "evolution.",
  ];
  return (
    <div className="w-screen text-white bg-[#101435] overflow-hidden">
      {/* ============================= NAVBAR==================== */}
      <Navbar />

      {/* ============================= HERO SLIDER ==================== */}
      <section
        className="heroSection  w-screen h-screen mb-25 overflow-hidden [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] relative"
      >
        <div className="w-screen z-10 h-full  absolute bg-transparent flex flex-col items-center justify-center gap-10  px-4 py-2.5 lg:px-4 lg:py-2 xl:px-15 xl:py-6">
          <div className="allcartstextarea w-[70%] flex flex-col gap-5 items-center justify-center text-center">
            <h1>
              <span className="text-[#764DF0]">[</span>
              The Future of Intelligence
              <span className="text-[#764DF0]">]</span>
            </h1>
            <div className="flex flex-col">
              <h2 className="text-[2.5rem] leading-12  sm:leading-16 sm:text-7xl text-[#D7D7D7] uppercase font-medium wrap-break-word">
                Pioneering breakthroughs in AI, robotics, and digital human
                evolution.
              </h2>
            </div>

            <div className="flex items-center justify-center gap-5 ">
              <button className="transition-all duration-300 cursor-pointer text-white rounded-lg px-4 py-2 bg-[#764DF0] text-sm md:text-[1rem] font-bold hover:bg-[#2d1f56] font-mono shrink-0">
                GET TICKETS
              </button>

              <button className="transition-colors duration-300 cursor-pointer text-white rounded-lg px-4 py-2 bg-transparent border-white border text-sm md:text-[1rem] font-bold  hover:bg-[#2d1f56] font-mono hover:border-[#2d1f56] shrink-0">
                VIEW Tickets
              </button>
            </div>
          </div>
        </div>
        <HeroSlider />
      </section>

      {/* ============================= ABOUT EVENT SECTION ==================*/}
      <AboutEventSection />

      {/* =============================WHYATTENDCARTSSECTION==================*/}
      <section className="w-screen flex flex-col items-center my-22 justify-center gap-10 px-4 py-2.5 lg:px-4 lg:py-2 xl:px-15 xl:py-3 overflow-hidden">
        {/* SECTION HEADING */}
        <SectionHeading
          mainHeading={"Why Attend "}
          h2={"What You’ll Gain"}
          p={
            "Hear from global AI pioneers, industry disruptors, and bold thinkers shaping the future across every domain."
          }
        />

        {/* =========== ALL CARTS ==========*/}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9">
          {whyCartArr.map((data) => (
            <WhyCart key={data.id} data={data}>
              <WhyCartText data={data} />
            </WhyCart>
          ))}
        </div>
      </section>

      {/* ================== Elon Musk SECTION AI EXPLAIN */}
      <section
        className=" w-full my-20 px-2 py-14 lg:px-4 lg:py-14 xl:px-15 xl:py-14 shadow-[inset_0_-70px_110px_rgba(99,102,241,0.8)] pointer-events-none bg-fixed bg-no-repeat bg-center bg-cover  [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] bg-[#101435]/50"
        style={{
          backgroundImage: `url(https://madebydesignesia.com/themes/aivent/images/background/2.webp)`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 lg:gap-15 px-5 ">
          <div className="w-full col-span-1 items-start flex justify-center lg:justify-start">
            <figure className="relative w-full">
              <img
                src="https://madebydesignesia.com/themes/aivent/images/misc/s9.webp"
                className="rounded-xl w-full"
                alt="AI"
              />
              <span className="absolute -right-5 md:-right-10 top-0 bg-[#764DF0] rounded-xl text-6xl md:text-7xl py-1 px-1 z-10 flex items-center justify-center">
                ❝
              </span>
            </figure>
          </div>

          {/* Dusra Box (Text) */}
          <div className="w-full flex items-center col-span-2">
            <h1 className="text-2xl md:text-4xl text-white  w-full leading-tight">
              “Artificial intelligence is advancing rapidly, and while it offers
              immense opportunity, it also poses significant risks. If not
              properly regulated and aligned with human values, AI could become
              a fundamental threat to civilization.”
            </h1>
          </div>
        </div>
      </section>

      {/* ============= SPEAKERS SECTION ============ */}
      <section className=" flex flex-col items-center justify-center gap-10 px-4 py-2.5 lg:px-4 lg:py-2 xl:px-15 xl:py-3">
        {/* SECTION HEADING */}
        <SectionHeading
          mainHeading={"Speakers"}
          h2={"Meet the Visionaries"}
          p={
            "Whether it's a quick refresh or a deep clean transformation, our expert touch leaves your home or office shining."
          }
        />
        {/* =========== ALL CARTS ==========*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 w-full">
          {speakerArr.map((data) => (
            <WhyCart key={data.id} data={data}>
              <SpeakersCartText data={data} />
            </WhyCart>
          ))}
        </div>
      </section>

      {/* ====================== EVENT SCHEDULE SECTION ================ */}
      <section className=" flex flex-col items-center justify-center gap-10 px-4 py-2.5 lg:px-4 lg:py-2 xl:px-15 xl:py-3">
        {/* SECTION HEADING */}
        <SectionHeading
          mainHeading={"Event Schedule"}
          h2={"5 Days of AI Excellence"}
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-0 w-full">
          {scheduleArr.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <h2 className="text-3xl font-semibold">Day {d}</h2>
              <h3 className="text-xl">Oct {d}, 2026</h3>
            </div>
          ))}
        </div>

        <div className="w-full">
          {speakerArrForPersons.map((data) => (
            <div
              key={data.id}
              className="flex items-center  flex-wrap md:flex-nowrap justify-between gap-5 lg:gap-10 border-b border-white/50 py-14 overflow-hidden"
            >
              <h3 className=" whitespace-nowrap">{data.time}</h3>

              <div className="flex flex-col md:flex-row gap-5 lg:gap-5">
                <div className="flex items-center gap-5 shrink-0">
                  <img src={data.imgUrl} className="w-28  h-auto rounded-lg" />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl  whitespace-nowrap">{data.name}</h2>
                    <h3 className="wrap-break-word   sm:whitespace-nowrap">
                      {data.role}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col gap-5 ">
                  <h1 className="text-2xl font-semibold">{data.title}</h1>
                  <p className="text-[#BFC0C9] leading-7 ">{data.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== TICKET OPTION SECTION ================ */}
      {/* <section className=" flex flex-col items-center justify-center gap-10 px-15 py-15">
        <SectionHeading
          mainHeading={"Ticket Options"}
          h2={"Choose Your Pass"}
          p={
            "Select the perfect ticket for your needs and gain access to exclusive sessions, workshops, and more."
          }
        />
      </section> */}

      {/* ====================== EVENT LOCATION SECTION ================ */}
      <section className=" flex flex-col items-center justify-center gap-10 px-4 py-2.5 lg:px-4 lg:py-2 xl:px-15 xl:py-3">
        <SectionHeading
          mainHeading={"Event Location"}
          h2={"Location & Venue"}
          p={
            "Join us in the heart of innovation at San Francisco Tech Pavilion—surrounded by top hotels, transit, and culture."
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <figure className="w-full">
            <img
              src="https://madebydesignesia.com/themes/aivent/images/misc/l1.webp"
              className="rounded-xl"
            />
          </figure>
          <figure className="w-full">
            <img
              src="https://madebydesignesia.com/themes/aivent/images/misc/l2.webp"
              className="rounded-xl"
            />
          </figure>
        </div>

        {/* <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full justify-items-start gap-5"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start gap-10">
          {locationArr.map((data) => (
            <div
              key={data.id}
              className="flex items-center justify-center gap-5"
            >
              <span className="text-[#764DF0] text-5xl">{data.icon}</span>
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl">{data.title}</h2>
                <h3 className="text-[#BFC0C9] whitespace-nowrap">
                  {data.desc}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================FREUQUENTLY ASKED QUESTIONS ============= */}
      <section className="my-20 grid grid-cols-1 gap-20 px-4 py-2.5 lg:px-4 lg:py-2 xl:px-15 xl:py-3">
        <div className="allcartstextarea flex flex-col gap-5 items-start justify-start ">
          <h1>
            <span className="text-[#764DF0]">[</span> Everything You Need to
            Know
            <span className="text-[#764DF0]">]</span>
          </h1>
          <h2 className="text-4xl md:text-5xl text-[#D7D7D7] ">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ACCORDIAN */}
        <div className="flex flex-col">
          {frequentlyAskedQuestionsArr.map((data) => (
            <div
              key={data.id}
              className="leading-7 flex flex-col "
              onClick={() => handleAskedQuestions(data)}
            >
              <div className="flex items-center justify-between border-b border-white/50 py-1.5">
                <h3 className="text-xl  ">{data.question}</h3>
                {data.open ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  data.open === false
                    ? "grid-rows-[1fr] opacity-100 mt-2"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="min-h-0 text-[#BFC0C9] leading-6">
                  {data.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================= STAY IN THE LOOP SECTION ======== */}
      <section
        className=" flex flex-col items-center justify-center gap-10 bg-fixed  bg-no-repeat bg-center bg-cover  bg-[#101435]/50 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] px-4 py-12 lg:px-4 lg:py-14 xl:px-15 xl:py-16"
        style={{
          backgroundImage:
            "url(https://madebydesignesia.com/themes/aivent/images/background/3.webp)",
        }}
      >
        <div className=" flex flex-col items-center justify-center ">
          {/* SECTION HEADING */}
          <SectionHeading
            mainHeading={"Stay in the Loop"}
            h2={"Join the Future of Innovation"}
            p={
              "Making better things takes time. Drop us your email to stay in the know as we work to reduce our environmental impact. We'll share other exciting news and exclusive offers, too."
            }
          />
          {/* FORM FOOTER */}
          <form className="flex flex-col gap-4 pt-5">
            <div className="flex items-center justify-center flex-wrap gap-5">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="border-[#BFC0C9] outline-0 border px-3 py-1 lg:px-6 lg:py-3 text-center  rounded-md text-lg whitespace-nowrap lg:text-xl"
                required
              />
              <button className="bg-indigo-600 px-3 py-1 lg:px-6 lg:py-3 text-center rounded-md text-lg whitespace-nowrap lg:text-xl">
                Sign Up
              </button>
            </div>
            {/* Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer justify-center">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  className="peer appearance-none w-6 h-6 border-2 border-slate-400 rounded-md checked:bg-blue-600 checked:border-blue-600 transition-all"
                />
                {/* Tick Mark Icon (Initially hidden, peer-checked par show hoga) */}
                <svg
                  className="absolute w-4 h-4 text-white p-0.5 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none left-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Keep me updated on other news and exclusive offers</span>
            </label>
          </form>
        </div>
      </section>

      {/* ======================= FOOTER ======== */}

      <footer id="footer">
        <div className="py-10 px-15 grid grid-cols-1 lg:grid-cols-3">
          <div className="text-center leading-7">
            {" "}
            <h2 className="text-2xl pb-2">Address</h2>
            <p className="">121 AI Blvd, San Francisco</p>
            <p className="">BCA 94107</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image
              src="/logo.webp"
              width={150}
              height={150}
              alt={"this is alt attribute"}
            />
            <div className="flex items-center gap-4">
              <span className="bg-[#282C4A] rounded-sm p-2">
                <FaFacebookF />
              </span>
              <span className="bg-[#282C4A] rounded-sm p-2">
                <FaInstagram />
              </span>
              <span className="bg-[#282C4A] rounded-sm p-2">
                <BsTwitter />
              </span>
              <span className="bg-[#282C4A] rounded-sm p-2">
                <FaYoutube />
              </span>
            </div>
          </div>
          <div className="text-center leading-7">
            {" "}
            <h2 className="text-2xl pb-2">Contact Us</h2>
            <p className="">T. +1 123 456 789</p>
            <p className="">M. contact@aivent.com</p>
          </div>
        </div>
      </footer>
      <h3 className="whitespace-nowrap border-t py-4 flex items-center justify-center">
        Copyright 2026 - AIvent by Designesia
      </h3>
    </div>
  );
};

export default page;
