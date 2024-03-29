"use client";
import React from "react";
import Image from "next/image";
import CommonFeature from "./CommonFeature";
import { motion } from "framer-motion";
import { textVariants, logoVariants } from "../motionVariants/motionVariants";

const featureItem = [
  {
    id: 1,
    name: "Globally Accepted",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    icon: "./assets/feature/global.svg",
  },
  {
    id: 2,
    name: "Biometric Integrated",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    icon: "./assets/feature/biometric.svg",
  },
  {
    id: 3,
    name: "Fully Secured",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: "./assets/feature/secured.svg",
  },
];

function Feature() {
  return (
    <div className="">
      {/* feature section 1 */}
      <div className="flex flex-col justify-center items-center sm:px-20 px-4 pt-24 p">
        <CommonFeature />
        <div className="flex justify-center px-8 pt-24 gap-4 flex-wrap items-center">
          {featureItem.map((item, i) => (
            <motion.div
              variants={logoVariants}
              initial="initial"
              whileInView="animate"
              custom={i}
              key={item.id}
            >
              <motion.div
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                custom={i}
                className="flex flex-col gap-4 max-w-sm p-4 justify-center items-center  "
              >
                <Image src={item.icon} alt="" height={30} width={30} />
                <motion.p variants={textVariants} className="font-medium">
                  {item.name}
                </motion.p>
                <motion.p variants={textVariants} className="text-center">
                  {item.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center sm:px-20 px-4 py-24">
        {/* feature section 2 */}
        <CommonFeature />
        <div className="flex justify-center items-center gap-8  px-8 pt-24 flex-wrap">
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileInView="animate"
            custom={1}
          >
            <Image
              src="./assets/feature/mobile.svg"
              alt=""
              height={500}
              width={500}
            />
          </motion.div>

          <motion.div
            variants={logoVariants}
            initial="initial"
            whileInView="animate"
            custom={2}
            className="sm:py-28 py-14 sm:px-20 px-5 rounded-lg  bg-[#FAF9FF]"
          >
            <motion.div
              variants={textVariants}
              initial="initial"
              whileInView="animate"
              className="border-2 sm:px-7 sm:py-7 px-2 py-7 flex flex-col sm:gap-8 gap-4 bg-white border-[#C598FF] rounded-2xl relative "
            >
              <div className="absolute top-[-5%] left-[-8%]">
                <Image
                  src="./assets/feature/star.svg"
                  alt=""
                  height={60}
                  width={60}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <h1 className="sm:text-lg font-medium">Spending</h1>
                  <Image
                    src="./assets/feature/expand.svg"
                    alt=""
                    height={20}
                    width={20}
                  />
                </div>
                <div className="flex  items-center gap-2 sm:text-xs text-[0.52rem]">
                  <Image
                    src="./assets/feature/wallet.svg"
                    alt=""
                    height={15}
                    width={15}
                  />
                  <p>9349 visa card</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="sm:text-3xl text-2xl">127.14</h1>
                  <p className="sm:text-base text-sm">USD</p>
                </div>
                <div className="flex   sm:gap-8 gap-4 sm:text-xs text-[0.52rem]">
                  <p>vs last week</p>
                  <p>Last Purchased ( Feb 24 19:59 UTC-5 )</p>
                </div>
              </div>
              <div className="flex gap-1 sm:text-sm text-[0.6rem]">
                <div>
                  <p className="pl-2">400 USD</p>
                  <Image
                    src="./assets/feature/label1.svg"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
                <div>
                  <p className="pl-2 ">1000 USD</p>
                  <Image
                    src="./assets/feature/label2.svg"
                    alt=""
                    height={130}
                    width={130}
                  />
                </div>
                <div>
                  <p className="pl-2">5000 USD</p>
                  <Image
                    src="./assets/feature/label3.svg"
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
