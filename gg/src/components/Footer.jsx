import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-red-900 text-gray-300 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul className="cursor-pointer">
            <li className="py-1">xyz</li>
            <li className="py-1">xyz</li>
            <li className="py-1">xyz</li>
            <li className="py-1">xyz</li>
            <li className="py-1">xyz</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul className="cursor-pointer">
            <li className="py-1">xyz</li>
            <li className="py-1">xyz</li>
            <li className="py-1">xyz</li>
            <li className="py-1">xyz</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul className="cursor-pointer">
            <li className="py-1">About</li>
            <li className="py-1">Contact</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul className="cursor-pointer">
            <li className="py-1">Privacy Policy</li>
            <li className="py-1">Terms & Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest gaming news, articles, and resources, sent to your inbox
            weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full text-black p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          2024 GameGarage. All rights reserved
        </p>
        <div className="flex justify-between cursor-pointer sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
