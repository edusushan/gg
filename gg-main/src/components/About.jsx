import React from "react";
import logo from "../assets/gamegarage.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-black to-red-800 pt-24"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center text-white md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Who are we?</h1>
          <p className="text-gray-400">
            GameGarage is at the forefront of sports management, driven by an
            unwavering passion for athletics and an unrelenting commitment to
            excellence. Our comprehensive range of services covers every facet
            of the sports industry, from athlete management to event planning
            and marketing. We harness data analytics and cutting-edge technology
            to optimize ticket sales, sponsorships, and digital fan experiences,
            ensuring that sports organizations thrive both on and off the field.
            But GameGarage isn't just about management; it's a hub where
            athletes, organizations, and fans unite to create a vibrant sports
            ecosystem. Through interactive apps, virtual reality experiences,
            and live-streaming platforms, we connect fans with their favorite
            games and athletes like never before, fostering a sense of community
            and excitement. We're dedicated to ushering in a new era of athletic
            excellence, powered by innovation and a deep love for sports.
            Welcome to GameGarage, where passion meets innovation in sports
            management.
          </p>
        </div>
        <div className="flex items-center justify-center h-full">
          <img className="max-w-full h-auto" src={logo} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
