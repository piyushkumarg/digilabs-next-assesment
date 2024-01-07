"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { textVariants } from "../motionVariants/motionVariants";


function Testimonial() {
  return (
    <div className="flex justify-center items-center py-8">
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="flex flex-col items-center gap-8 max-w-[40rem]  sm:p-8 p-4"
      >
        <Image
          src="./assets/logoCloud/wise.svg"
          width={100}
          height={100}
          alt=""
        />

        <motion.p
          variants={textVariants}
          className="text-center sm:text-2xl text-xl"
        >
          I had the pleasure of experiencing the next generation of card
          solutions with this incredible product. Its refreshing to see such
          innovation in the financial industry.
        </motion.p>

        <motion.div variants={textVariants}>
          <Image src="./assets/avtar.svg" width={100} height={100} alt="" />
          <p className="font-medium text-lg">Nick Babich</p>
          <p>Lead Designer</p>

          <Image
            src="./assets/goldenstar.svg"
            width={100}
            height={100}
            alt=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Testimonial;
