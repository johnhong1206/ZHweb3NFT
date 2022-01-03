import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex items-center justify-between p-0 py-1 px-4 sticky top-0 z-50">
      <div className="flex-[0.2] relative h-24 w-[100px]  lg:w-[150px]">
        <Image
          src={"/img/logo.png"}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
      <div className="flex items-center flex-[0.8] lg:flex-grow bg-[#1c1c1e] h-8 lg:h-14 rounded-full mx-2">
        <div className="w-12 h-12 flex items-center justify-center">
          <img src={"/img/search.png"} className="" />
        </div>
        <input
          className=" bg-transparent w-full outline-none placeholder-gray-400"
          placeholder="Search"
        />
      </div>
      <div className="hidden lg:flex flex-row items-center text-[#a1a5b0]">
        <p className=" cursor-pointer m-2 hover:underline">Drops</p>
        <p className="cursor-pointer m-2 hover:underline">Market Place</p>
        <p className="cursor-pointer m-2 hover:underline">Create</p>
      </div>
      <div className="hidden lg:flex m-2">
        <div className="flex items-center justify-center bg-[#1c1c1e]  rounded-full">
          <img
            src={"/img/theme-switch.png"}
            className=" object-contain h-[25px]"
          />
        </div>
      </div>
      <div className="px-6 py-1 lg:px-8 lg:py-2 loginbutton cursor-pointer  rounded-xl">
        <p>Get In</p>
      </div>
    </div>
  );
}

export default Header;
