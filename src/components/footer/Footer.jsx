"use client";
import Image from "next/image";
import React from "react";

const footerItem = [
  {
    id: 1,
    name: "Company",
    item1: "About us",
    item2: "Pricing",
    item3: "Contact us",
    item4: "Features",
  },
  {
    id: 2,
    name: "Product",
    item1: "Figma design system",
    item2: "Ios kit",
    item3: "Android kit",
    item4: "Wireframe",
  },
  {
    id: 3,
    name: "Resources",
    item1: "Templates",
    item2: "Landing pages",
    item3: "Documentation",
    item4: "Comp library",
  },
  {
    id: 4,
    name: "Legal",
    item1: "Privacy policy",
    item2: "Terms & Conditions",
    item3: "Disclaimer",
    item4: "Affiliate programme",
  },
  {
    id: 5,
    name: "Support",
    item1: "Help centre",
    item2: "Raise ticket",
    item3: "Report",
    item4: "Refund",
  },
];

const socialItems = [
  {
    id: 1,
    name: "github",
    icon: "./assets/footer/github.svg",
  },
  {
    id: 2,
    name: "linkedin",
    icon: "./assets/footer/linkedin.svg",
  },
  {
    id: 3,
    name: "discord",
    icon: "./assets/footer/discord.svg",
  },
];

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center pt-8 ">
      <div className="flex flex-col sm:items-center gap-8 max-w-[40rem]  sm:p-8 p-8">
        <Image src="./assets/logo.svg" width={100} height={100} alt="" />

        <p className="sm:text-center ">
          Mode UI is a comprehensive design system that empowers designers and
          developers to create cohesive and visually stunning user interfaces
          across various platforms and devices
        </p>
      </div>
      <div className="flex flex-wrap  sm:gap-16 gap-8 md:px-24 px-8  w-full">
        {footerItem.map((i) => (
          <div key={i.id} className="flex flex-col gap-2 w-52 ">
            <p className="font-bold pb-2">{i.name}</p>
            <p className="">{i.item1}</p>
            <p className="">{i.item2}</p>
            <p className="">{i.item3}</p>
            <p className="">{i.item4}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:justify-center gap-8 sm:items-center justify-start py-16 px-8">
        <div className="flex gap-8">
          {socialItems.map((i) => (
            <div key={i.id} className="flex">
              <Image src={i.icon} width={30} height={30} alt="" />
            </div>
          ))}
        </div>
        <p className="sm:text-center ">
          © 2024 Mode UI Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
