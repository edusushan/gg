import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

export default function Sponsers() {
  return (
    <div className="slide-container bg-red-800 h-[80vh]">
      <h1 className="p-4 text-lg font-bold text-white">Our Sponsers</h1>
      <Slide arrows={false} autoplay={true} duration={5000}>
        {slideImages.map((imageUrl, index) => (
          <div key={index}>
            <div className="flex items-center justify-center w-full h-[80vh]">
              <img
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
