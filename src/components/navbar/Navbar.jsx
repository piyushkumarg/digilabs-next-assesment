"use client";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const navigation = [
  { id: 1, name: "Card access", src: "#", icon: "" },
  { id: 2, name: "Banking", src: "#", icon: "" },
  {
    id: 3,
    name: "Processing",
    src: "#",
    icon: "",
  },
  { id: 4, name: "About", src: "#", icon: "" },
  {
    id: 5,
    name: "Carrier",
    src: "#",
    icon: "",
  },
  { id: 6, name: "Contact", src: "#", icon: "" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [updates, setUpdates] = useState([]);

  // Fetch all users
  useEffect(() => {
    const fetchUpdatess = async () => {
      try {
        const { data } = await axios.get("/api/updates");
        setUpdates(data.updates || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUpdatess();
  }, []);

  return (
    <>
      <nav className=" flex items-center justify-between h-[3.85rem]  lg:pl-16 lg:pr-16 pl-4 pr-4 ">
      
          <div
            to="/"
            className=" font-bold font-carattere tracking-widest  "
           
          >
          { updates.length !==0 ? <Image src={updates[0].logo} alt="" width={100} height={100} className="" /> : <div>Loading...</div>}
          </div>
       
        {/* Desktop menu navigation */}
        <div className="lg:gap-4 gap-1 hidden md:flex">
          {navigation.map((nav) => (
            <div
              className="flex items-center justify-center p-2 gap-1 cursor-pointer"
              key={nav.id}
            >
              {nav.name}
            </div>
          ))}
        </div>

        {/* Mobile menu Navigation  */}
        <div className="md:hidden  absolute w-full  block   left-0  top-[6.75rem] bg-white z-50">
          {open && (
            <div className="h-[calc(100vh-6rem)]  flex flex-col justify-center items-center gap-4 ">
              {navigation.map((nav) => (
                <div
                  className="flex items-center justify-center ml-4 mr-4 p-2 w-52  gap-1 cursor-pointer "
                  key={nav.id}
                >
                  {nav.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-4 items-center justify-center">
          <button className="bg-[#E6E7E9] hover:bg-[#F1F1F2] px-4 py-1 rounded-xl flex gap-2 items-center">
            Login{" "}
            <Image src="./assets/login.svg" alt="" width={20} height={20} />
          </button>
          <button
            className="md:hidden block text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>
      <div className="flex justify-center items-center gap-4">
        <Link
          href="/"
          className="bg-red-500 hover:bg-red-400 px-4 py-1 rounded-xl flex gap-2 items-center text-white text-lg font-medium"
        >
          Users Home
        </Link>

        <Link
          href="/userForm"
          className="bg-[#5e8ce8] hover:bg-[#444495] px-4 py-1 rounded-xl flex gap-2 items-center text-white text-lg font-medium"
        >
          Email
        </Link>
        <Link
          href="/admin"
          className="bg-red-500 hover:bg-red-400 px-4 py-1 rounded-xl flex gap-2 items-center text-white text-lg font-medium"
        >
          Admin
        </Link>
      </div>
    </>
  );
}

export default Navbar;
