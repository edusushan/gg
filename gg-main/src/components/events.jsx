import React from "react";
import "react-slideshow-image/dist/styles.css";
import largerScrn from "../assets/CurrEvents/events.jpg";

export default function Events() {
  const width = window.innerWidth <= 768;
  return (
    <div name="home" className="slide-container bg-red-800">
      <div className={`w-screen pt-[80px] bg-red-700`}>
        <h1 className="p-4 text-lg font-bold text-white">Current Events</h1>
      </div>
      <div>
        {width ? (
          <div className="flex items-center justify-center w-full h-[40vh]">
            <img
              src={largerScrn}
              alt={`current event`}
              className="h-full w-full object-center object-fill"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-[120vh]">
            <img
              src={largerScrn}
              alt={`current event`}
              className="h-auto w-full object-fill"
            />
          </div>
        )}
      </div>
    </div>
  );
}
