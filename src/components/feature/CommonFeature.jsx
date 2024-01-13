"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { textVariants } from "../motionVariants/motionVariants";

function CommonFeature() {
  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      whileInView="animate"
      className="max-w-[44rem]  flex flex-col justify-center items-center gap-4 sm:px-16 px-2 "
    >
      <motion.h1
        variants={textVariants}
        className="sm:text-4xl text-3xl text-center "
      >
        Elevating Card Programs with Cutting-Edge Technology
      </motion.h1>
      <motion.p variants={textVariants} className="text-center sm:px-10">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </motion.p>
      <motion.div
        variants={textVariants}
        className="pt-4 flex items-center justify-center gap-4 font-medium text-[#582066]"
      >
        <p>Compare all Pro features</p>
        <FaArrowRight />
      </motion.div>
    </motion.div>
  );
}

export default CommonFeature;
