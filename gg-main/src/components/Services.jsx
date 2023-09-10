import React from "react";

const Service = () => {
  return (
    <div name="services" className="w-full bg-red-800 pt-20">
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h3 className="text-5xl font-bold py-6 text-center">
            Our Services
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <h3 className="font-bold text-2xl my-6">Sport</h3>
              <p className="text-gray-600 text-xl">
                We organize exciting physical sports tournaments and leagues that welcome participants of all skill levels, from experienced athletes to sports fans. Our carefully organized events provide excellent facilities, fair competition, and an energetic atmosphere.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <h3 className="font-bold text-2xl my-6">Gaming</h3>
              <p className="text-gray-600 text-xl">
              We host a variety of exciting online gaming tournaments and leagues. Everyone can join, whether you're a pro gamer or just a gaming enthusiast. Our events are well-organized, with excellent facilities, fair competition, and an exciting online gaming environment.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                We are a dedicated team of event management professionals, well-versed in orchestrating both physical and online events. Whether you need full event management or assistance with specific aspects, we're here to help. Get in touch with us to elevate your event experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;