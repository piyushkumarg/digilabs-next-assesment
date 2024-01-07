"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { textVariants } from "../motionVariants/motionVariants";

function Hero() {
  return (
    <div className="flex justify-center items-center  py-8 flex-grow">
      <div className=" max-w-[40rem]  sm:p-8 p-2 relative ">
        <motion.div
          variants={textVariants}
          initial={{ x: -500, opacity: 0 }}
          animate="animate"
          className="sm:h-auto h-[55vh] "
        >
          <Image src="./assets/herobg.svg" alt="" width={1000} height={1000} />
        </motion.div>
        <motion.div
          variants={textVariants}
          initial={{ x: -500, opacity: 0 }}
          animate="animate"
          className="flex flex-col items-center gap-4 absolute flex-grow h-full top-0"
        >
          <motion.p variants={textVariants} className="text-center">
            Seamless experience
          </motion.p>
          <motion.h1
            variants={textVariants}
            className="sm:text-6xl text-4xl text-center"
          >
            Unleashing the Next Generation of Card Solutions
          </motion.h1>
          <motion.p variants={textVariants} className="text-center">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </motion.p>
          <motion.button
            variants={textVariants}
            className="bg-[#582066] text-white flex items-center gap-4 font-medium rounded-lg w-52 p-4 text-center"
          >
            Unlock your Card
            <FaArrowRight />
          </motion.button>
          <motion.p variants={textVariants}>*No credit card required</motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
