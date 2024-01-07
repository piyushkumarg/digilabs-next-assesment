import Image from "next/image";
import React from "react";

function Testimonial() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-col items-center gap-8 max-w-[40rem]  sm:p-8 p-4">
        <Image
          src="./assets/logoCloud/wise.svg"
          width={100}
          height={100}
          alt=""
        />

        <p className="text-center sm:text-2xl text-xl">
          I had the pleasure of experiencing the next generation of card
          solutions with this incredible product. It's refreshing to see such
          innovation in the financial industry.
        </p>

        <div>
          <Image src="./assets/avtar.svg" width={100} height={100} alt=""/>
          <p className="font-medium text-lg">Nick Babich</p>
          <p>Lead Designer</p>

          <Image
            src="./assets/goldenstar.svg"
            width={100}
            height={100}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
