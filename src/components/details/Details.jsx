'use client'
import React from 'react'
import { motion } from "framer-motion";
import { textVariants, logoVariants } from "../motionVariants/motionVariants";

const detailsItems = [
  {
    id: 1,
    name: "Customers",
    cnt: "2 Million",
    desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    id: 2,
    name: "Downloads",
    cnt: "1K",
    desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    id: 3,
    name: "Transaction",
    cnt: "$73 Million",
    desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    id: 4,
    name: "Latest Version",
    cnt: "2.0",
    desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];

export default function Details() {
  return (
    <div className="sm:py-24 sm:px-20 px-10 flex items-center justify-center ">
      <div
        variants={logoVariants}
        initial="initial"
        whileInView="animate"
        className="flex items-center justify-center gap-8 flex-wrap"
      >
        {detailsItems.map((det,i) => (
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileInView="animate"
            custom={i}
            key={det.id}
          >
            <motion.div
              variants={textVariants}
              initial="initial"
              whileInView="animate"
              custom={i}
              className="flex flex-col items-center justify-center gap-2 max-w-72 p-4"
            >
              <h1 className="sm:text-5xl text-4xl text-[#582066] font-medium">
                {det.cnt}
              </h1>
              <p className="font-medium">{det.name}</p>
              <p className="text-center">{det.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
