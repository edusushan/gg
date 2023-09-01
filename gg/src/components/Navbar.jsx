import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logoo.png";

import { RxCross2 } from "react-icons/rx";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen bg-custom-red h-[80px] z-10  fixed  drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="max-w-full h-auto" src={logo} alt="/" />
        </div>
        <div className="hidden md:flex pr-4">
          <ul className="text-white cursor-pointer hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="" smooth={true} offset={-200} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-50} duration={500}>
                About Us
              </Link>
            </li>
          </ul>
          <button className="px-8 py-3 ">Download Now</button>
        </div>
        <div className="cursor-pointer md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <RiMenu2Fill className="w-5 h-20 text-white" />
          ) : (
            <RxCross2 className="w-5 h-20 text-white" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav ? "hidden" : "cursor-pointer absolute bg-zinc-200 w-full px-8"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About Us
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-red-800 px-8 py-3 mb-4 hover:bg-red-500">
            Download Now
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
