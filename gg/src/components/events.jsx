import React from "react";
import { Slide } from "react-slideshow-image";
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ],
];

export default function Events() {
  return (
    <div className="flex flex-col lg:flex-row bg-red-800 h-auto lg:h-40vh">
      <div className="lg:w-1/2 p-4">
        <h1 className="text-lg font-bold m-4 text-white">Current Events</h1>
        <Slide
          autoplay={false}
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
          {slideImages[0].map((imageUrl, index) => (
            <div key={index} className="rounded-lg">
              <div className="flex items-center justify-center h-40vh">
                <img
                  src={imageUrl}
                  alt={`Slide 1 - ${index + 1}`}
                  className="h-full rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="lg:w-1/2 p-4">
        <h1 className="text-lg m-4 font-bold text-white">Upcoming Events</h1>
        <Slide
          autoplay={false}
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
          {slideImages[1].map((imageUrl, index) => (
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
