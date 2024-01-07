'use client'
import Image from 'next/image';
import React from 'react'




const logoCloudItem = [
  {
    id: 1,
    logo: "./assets/logoCloud/nuxt.svg",
  },
  {
    id: 2,
    logo: "./assets/logoCloud/miro.svg",
  },
  {
    id: 3,
    logo: "./assets/logoCloud/lottiefiles.svg",
  },
  {
    id: 4,
    logo: "./assets/logoCloud/wise.svg",
  },
  {
    id: 5,
    logo: "./assets/logoCloud/dribbble.svg",
  },
  {
    id: 6,
    logo: "./assets/logoCloud/kinsta.svg",
  },
  {
    id: 7,
    logo: "./assets/logoCloud/angellist.svg",
  },
  {
    id: 8,
    logo: "./assets/logoCloud/behance.svg",
  },
];

function LogoCloud() {
  return (
    <div className="sm:p-8 p-2 ">
      <div className="flex sm:gap-8 gap-4 items-center justify-center flex-wrap ">
        {logoCloudItem.map((logo) => (
          <div
            key={logo.id}
            className="sm:w-auto w-16"
          >
            <Image
              src={logo.logo}
              alt=''
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoCloud