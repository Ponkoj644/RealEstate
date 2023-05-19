import React from "react";

// import images
import House1 from "../Images/house7.jpg";
import House2 from "../Images/house8.jpg";
import House3 from "../Images/house9.jpg";
import House4 from "../Images/house10.jpg";
import House5 from "../Images/house11.jpg";
import House6 from "../Images/house12.jpg";

// import icon
import { IoLocationOutline } from "react-icons/io5";

const BestDeals = () => {
  return (
    <div>
      <div className=" w-11/12 md:w-1/2 xl:w-1.5/3 m-auto text-start lg:text-center py-10 ">
        <h1 className="text-4xl font-bold ">
          Best Deals not to be <span className="text-violet-600">Mised</span>{" "}
        </h1>
        <p className=" text-gray-500 py-5 lg:p-5">
          Discover the finest real estate deals with our company. We offer
          unparalleled opportunities to invest in prime properties, with
          remarkable returns and exceptional value.
        </p>
      </div>

      {/* All deals */}
      <div className="deals w-full grid lg:grid-flow-col grid-rows-2 gap-8">
        {/* single deal */}
        <div className="deal relative col-span-2 row-span-2">
          <img
            src={House1}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <div className=" w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className=" text-3xl font-bold">Place</h1>
            <p className=" flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimee, Florida, US
            </p>
          </div>
        </div>

        {/* single deal */}
        <div className="deal relative col-span-1 row-span-2">
          <img
            src={House2}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <div className=" w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className=" text-3xl font-bold">Place</h1>
            <p className=" flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimee, Florida, US
            </p>
          </div>
        </div>

        {/* single deal */}
        <div className="deal relative col-span-1 row-span-1">
          <img
            src={House3}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <div className=" w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className=" text-3xl font-bold">Place</h1>
            <p className=" flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimee, Florida, US
            </p>
          </div>
        </div>

        {/* single deal */}
        <div className="deal relative col-span-1 row-span-1">
          <img
            src={House4}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className=" w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className=" text-3xl font-bold">Place</h1>
            <p className=" flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimee, Florida, US
            </p>
          </div>
        </div>

        {/* single deal */}
        <div className="deal relative col-span-1 row-span-1">
          <img
            src={House5}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className=" w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className=" text-3xl font-bold">Place</h1>
            <p className=" flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimee, Florida, US
            </p>
          </div>
        </div>

        {/* single deal */}
        <div className="deal relative col-span-1 row-span-1">
          <img
            src={House6}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className=" w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className=" text-3xl font-bold">Place</h1>
            <p className=" flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimee, Florida, US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
