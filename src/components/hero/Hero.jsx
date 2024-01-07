import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex justify-center items-center  py-8 flex-grow">
      <div className=" max-w-[40rem]  sm:p-8 p-2 relative ">
        <div className="sm:h-auto h-[55vh] ">
          <Image src="./assets/herobg.svg" alt="" width={1000} height={1000} />
        </div>
        <div className="flex flex-col items-center gap-4 absolute flex-grow h-full top-0">
          <p className="text-center">Seamless experience</p>
          <h1 className="sm:text-6xl text-4xl text-center">
            Unleashing the Next Generation of Card Solutions
          </h1>
          <p className="text-center">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <button className="bg-[#582066] text-white flex items-center gap-4 font-medium rounded-lg w-52 p-4 text-center">
            Unlock your Card
            <FaArrowRight />
          </button>
          <p>*No credit card required</p>
        </div>
      </div>
    </div>
  );
}

export default Hero