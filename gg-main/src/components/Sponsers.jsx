import React from "react";
import { Slide } from "react-slideshow-image";
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";
import titleSponser from "../assets/CurrEvents/TitleSponser.png";
import Sponser1 from "../assets/CurrEvents/Sponser1.png";
import Sponser2 from "../assets/CurrEvents/Sponser2.png";
import Sponser3 from "../assets/CurrEvents/Sponser3.png";
import "react-slideshow-image/dist/styles.css";

const slideImages = [Sponser1, Sponser2, Sponser3];

export default function Sponsers() {
  return (
    <div className="flex flex-col lg:flex-row bg-red-800 h-auto lg:h-40vh">
      <div className="lg:w-1/2 p-4">
        <h1 className="text-lg font-bold m-4 text-white">Title Sponser</h1>
        <div className="flex items-center justify-center h-40vh">
          <img
            src={titleSponser}
            alt={`Title Sponser`}
            className="h-full rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="lg:w-1/3 p-4">
        <h1 className="text-lg m-4 font-bold text-white">Sponsers</h1>
        <Slide
          autoplay={true}
          prevArrow={
            <div className="custom-prev-arrow text-white">
              <VscTriangleLeft />
            </div>
          }
          nextArrow={
            <div className="custom-next-arrow text-white">
              <VscTriangleRight />
            </div>
          }
        >
          {slideImages.map((imageUrl, index) => (
            <div key={index}>
              <div className="flex items-center rounded-lg justify-center h-40vh">
                <img
                  src={imageUrl}
                  alt={`Slide 2 - ${index + 1}`}
                  className="h-full rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div className="lg:w-1/3 p-4">
        <h1 className="text-lg m-4 font-bold text-white">Support</h1>
        <Slide
          autoplay={true}
          prevArrow={
            <div className="custom-prev-arrow text-white">
              <VscTriangleLeft />
            </div>
          }
          nextArrow={
            <div className="custom-next-arrow text-white">
              <VscTriangleRight />
            </div>
          }
        >
          {slideImages.map((imageUrl, index) => (
            <div key={index}>
              <div className="flex items-center rounded-lg justify-center h-40vh">
                <img
                  src={imageUrl}
                  alt={`Slide 2 - ${index + 1}`}
                  className="h-full rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}
