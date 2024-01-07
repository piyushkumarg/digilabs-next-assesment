import React from 'react'

function Announcement() {
  return (
    <div className="sticky top-0 bg-white sm:text-base text-xs z-[999] ">
      <div className="flex gap-2 items-center justify-center p-2  ">
        <button className="bg-[#E6E7E9] hover:bg-[#F1F1F2] px-2 py-1 rounded-xl">
          Announcement
        </button>
        <p>We are happy to announce that we raise $2 Million in Seed Funding</p>
      </div>
    </div>
  );
}

export default Announcement