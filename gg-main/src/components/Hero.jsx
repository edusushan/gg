import React from "react";
import logo from "../assets/gamegarage.png";

// style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "auto" }}

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black to-red-800 h-screen flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center text-white md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Who are we?</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            asperiores tempora omnis fugit voluptates maxime ratione. Sit natus
            quo velit quam quaerat animi earum iste eveniet officia? Velit,
            labore tempore.
          </p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get The App</button>
        </div>
        <div className="flex items-center justify-center h-full">
          <img className="max-w-full h-auto" src={logo} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
