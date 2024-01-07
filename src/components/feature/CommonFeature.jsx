import React from "react";
import { FaArrowRight } from "react-icons/fa";

function CommonFeature() {
  return (
    <div className="max-w-[44rem]  flex flex-col justify-center items-center gap-4 sm:px-16 px-2 ">
      <h1 className="sm:text-4xl text-3xl text-center ">
        Elevating Card Programs with Cutting-Edge Technology
      </h1>
      <p className="text-center sm:px-10">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </p>
      <div className="pt-4 flex items-center justify-center gap-4 font-medium text-[#582066]">
        <p>Compare all Pro features</p>
        <FaArrowRight />
      </div>
    </div>
  );
}

export default CommonFeature;
