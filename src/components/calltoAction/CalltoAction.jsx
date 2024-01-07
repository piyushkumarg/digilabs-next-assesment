import Image from "next/image";
import React from "react";

function CalltoAction() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-col items-center gap-4 max-w-[40rem]  p-8">
        <h1 className="sm:text-4xl text-3xl text-center">
          Unlock Limitless Possibilities with Our New Card Solutions
        </h1>
        <div className="flex sm:flex-row flex-col gap-4">
          <button className="bg-[#582066] text-white flex items-center justify-center gap-2 font-medium rounded-lg sm:w-48 w-56 p-2 text-center">
            Unlock your Card
            <Image src="./assets/wallet.svg" alt="" width={20} height={20} />
          </button>
          <button className="bg-[#EEEFEF] text-black flex  gap-4 items-center justify-center font-medium rounded-lg sm:w-48 w-56 p-2 text-center">
            Customer support
            <Image
              src="./assets/headphone.svg"
              alt=""
              width={20}
              height={20}
              className="text-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalltoAction;
