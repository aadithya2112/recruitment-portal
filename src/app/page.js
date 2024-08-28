"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-1 flex-col md:flex-row">
        <div
          className="relative flex flex-col w-full md:w-1/3 bg-[#15CDFE] rounded-xl overflow-hidden"
          style={{
            border: "15px solid #E8C706",
            boxSizing: "border-box",
          }}
        >
          <div className="flex-1 flex items-start p-4">
            <div className="relative w-full h-full">
              <Image
                src="/Final Design.png"
                layout="responsive"
                width={100}
                height={100}
                objectFit="contain"
                alt="Events"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-start p-4 gap-4">
            <h1 className="text-2xl md:text-4xl font-bold text-black">
              Brainstorm Blitz
            </h1>
            <p className="text-base md:text-lg text-black">Lorem Ipsum</p>
            <h1 className="text-2xl md:text-4xl font-bold text-black">
              Crowd Hypnosis
            </h1>
            <p className="text-base md:text-lg text-black">
              Trap the crowd in a blissful trance to aid crowd management
            </p>
            <div className="text-base md:text-lg text-black">
              Orchestrate lorem ipsum lorem ipsum
            </div>
          </div>
        </div>

        <div
          className="relative flex-1 bg-cover bg-center"
          style={{ backgroundImage: "url('/design-portal-2.svg')" }}
        >
          <div className="flex items-center justify-center h-full">
            <button className="relative z-10 border border-white rounded-full bg-black text-white px-8 md:px-16 py-2 md:py-4">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
