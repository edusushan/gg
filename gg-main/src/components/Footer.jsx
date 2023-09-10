import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-red-900 text-gray-300 px-2">
      <div className="max-w-[1240px] mx-auto md:border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Contact Us</h6>
          <ul className="cursor-pointer">
            <li className="flex flex-col md:flex-row  py-1">
              Phone:
              <a href="tel:9806024595">
                {" "}
                +977-9806024595 <span className="px-1">/</span>
              </a>
              <a href="tel:9807182791">
                {" "}
                +977-9807182791<span className="px-1">/</span>
              </a>
              <a href="tel:9808720628">
                {" "}
                +977-9808720628<span className="px-1">/</span>
              </a>
            </li>
            <li className="py-1">
              Email:{" "}
              <a href="mailto:gamegaragenepal@gmail.com">
                gamegaragenepal@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          2020-2023 GameGarage. All rights reserved
        </p>
        <div className="flex justify-between cursor-pointer sm:w-[300px] pt-4 text-2xl">
          <a
            href="https://www.facebook.com/profile.php?id=61550796351938"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <FaInstagram />
          <FaTiktok />
        </div>
      </div>
    </div>
  );
};

export default Footer;
