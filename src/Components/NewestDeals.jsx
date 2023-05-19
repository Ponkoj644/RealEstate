import React from "react";

// import react icons
import { BsSuitHeart } from "react-icons/bs";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { GiBathtub, GiHomeGarage } from "react-icons/gi";
import { AiOutlineDoubleRight } from "react-icons/ai";

// import images
import House1 from "../Images/house1.jpg";
import House2 from "../Images/house2.jpg";
import House3 from "../Images/house3.jpg";
import House4 from "../Images/house4.jpg";
import House5 from "../Images/house5.jpg";
import House6 from "../Images/house6.jpg";
import House7 from "../Images/house12.jpg";
import House8 from "../Images/house13.jpg";
import House9 from "../Images/house14.jpg";
import House10 from "../Images/house10.jpg";

const NewestDeals = () => {
  return (
    <div className="py-10">
      <p className="w-16  px-4 py-1 bg-violet-600 text-white rounded-lg text-sm">
        NEW
      </p>
      <h1 className=" text-4xl font-bold">
        Newest <span className=" text-violet-600">Deals</span>{" "}
      </h1>
      <div className="deals grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-10">
        {/* Card */}
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl ">
          <div className=" relative h-[60%]">
            <img
              src={House1}
              alt=""
              className=" w-full h-full object-cover rounded-t-xl"
            />
            <div className=" absolute top-0 right-0 p-2">
              <BsSuitHeart size={"24px"} className=" text-violet-600" />
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 item-center">
              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">5 Bed</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiBathtub />
                <p className=" text-sm text-gray-500">3 Bath</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 Gar</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$110.00</h1>
              <div className="flex items-center space-x-2">
                <IoLocationOutline />
                <p className="text-sm text-gray-600">
                  {" "}
                  Pennsylvania, Houtzdale, US
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl ">
          <div className=" relative h-[60%]">
            <img
              src={House2}
              alt=""
              className=" w-full h-full object-cover rounded-t-xl"
            />
            <div className=" absolute top-0 right-0 p-2">
              <BsSuitHeart size={"24px"} className=" text-violet-600" />
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 item-center">
              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">3 Bed</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiBathtub />
                <p className=" text-sm text-gray-500">2 Bath</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 Gar</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$90,000</h1>
              <div className="flex items-center space-x-2">
                <IoLocationOutline />
                <p className="text-sm text-gray-600">Hialeah, Florida, US</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl ">
          <div className=" relative h-[60%]">
            <img
              src={House3}
              alt=""
              className=" w-full h-full object-cover rounded-t-xl"
            />
            <div className=" absolute top-0 right-0 p-2">
              <BsSuitHeart size={"24px"} className=" text-violet-600" />
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 item-center">
              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">4 Bed</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiBathtub />
                <p className=" text-sm text-gray-500">2 Bath</p>
              </div>

              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">1 Gar</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$150,000</h1>
              <div className="flex items-center space-x-2">
                <IoLocationOutline />
                <p className="text-sm text-gray-600">Kissimee, Florida, US</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl ">
          <div className=" relative h-[60%]">
            <img
              src={House4}
              alt=""
              className=" w-full h-full object-cover rounded-t-xl"
            />
            <div className=" absolute top-0 right-0 p-2">
              <BsSuitHeart size={"24px"} className=" text-violet-600" />
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 item-center">
              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">3 Bed</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiBathtub />
                <p className=" text-sm text-gray-500">2 Bath</p>
              </div>

              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">1 Gar</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$80,000</h1>
              <div className="flex items-center space-x-2">
                <IoLocationOutline />
                <p className="text-sm text-gray-600">Kissimee, Florida, US</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl ">
          <div className=" relative h-[60%]">
            <img
              src={House5}
              alt=""
              className=" w-full h-full object-cover rounded-t-xl"
            />
            <div className=" absolute top-0 right-0 p-2">
              <BsSuitHeart size={"24px"} className=" text-violet-600" />
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 item-center">
              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">3 Bed</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiBathtub />
                <p className=" text-sm text-gray-500">2 Bath</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 Gar</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$100,000</h1>
              <div className="flex items-center space-x-2">
                <IoLocationOutline />
                <p className="text-sm text-gray-600">
                  Ticonderoga, New York, US
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl ">
          <div className=" relative h-[60%]">
            <img
              src={House6}
              alt=""
              className=" w-full h-full object-cover rounded-t-xl"
            />
            <div className=" absolute top-0 right-0 p-2">
              <BsSuitHeart size={"24px"} className=" text-violet-600" />
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 item-center">
              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">3 Bed</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiBathtub />
                <p className=" text-sm text-gray-500">2 Bath</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 Gar</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$70,000</h1>
              <div className="flex items-center space-x-2">
                <IoLocationOutline />
                <p className="text-sm text-gray-600">Austin, Texas, US</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl ">
          <div className=" relative h-[60%]">
            <img
              src={House7}
              alt=""
              className=" w-full h-full object-cover rounded-t-xl"
            />
            <div className=" absolute top-0 right-0 p-2">
              <BsSuitHeart size={"24px"} className=" text-violet-600" />
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 item-center">
              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">3 Bed</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiBathtub />
                <p className=" text-sm text-gray-500">2 Bath</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 Gar</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$96,000</h1>
              <div className="flex items-center space-x-2">
                <IoLocationOutline />
                <p className="text-sm text-gray-600">Chicago, Illinois, US</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl ">
          <div className=" relative h-[60%]">
            <img
              src={House8}
              alt=""
              className=" w-full h-full object-cover rounded-t-xl"
            />
            <div className=" absolute top-0 right-0 p-2">
              <BsSuitHeart size={"24px"} className=" text-violet-600" />
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 item-center">
              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">3 Bed</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiBathtub />
                <p className=" text-sm text-gray-500">2 Bath</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 Gar</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$55,000</h1>
              <div className="flex items-center space-x-2">
                <IoLocationOutline />
                <p className="text-sm text-gray-600">Holland, Kentucky, US</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl ">
          <div className=" relative h-[60%]">
            <img
              src={House9}
              alt=""
              className=" w-full h-full object-cover rounded-t-xl"
            />
            <div className=" absolute top-0 right-0 p-2">
              <BsSuitHeart size={"24px"} className=" text-violet-600" />
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 item-center">
              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">3 Bed</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiBathtub />
                <p className=" text-sm text-gray-500">2 Bath</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 Gar</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$68,000</h1>
              <div className="flex items-center space-x-2">
                <IoLocationOutline />
                <p className="text-sm text-gray-600">Las Vegas, Nevada, US</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl ">
          <div className=" relative h-[60%]">
            <img
              src={House10}
              alt=""
              className=" w-full h-full object-cover rounded-t-xl"
            />
            <div className=" absolute top-0 right-0 p-2">
              <BsSuitHeart size={"24px"} className=" text-violet-600" />
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 item-center">
              <div className="flex items-center space-x-2">
                <IoBedOutline />
                <p className=" text-sm text-gray-500">3 Bed</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiBathtub />
                <p className=" text-sm text-gray-500">2 Bath</p>
              </div>

              <div className="flex items-center space-x-2">
                <GiHomeGarage />
                <p className=" text-sm text-gray-500">1 Gar</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$48,000</h1>
              <div className="flex items-center space-x-2">
                <IoLocationOutline />
                <p className="text-sm text-gray-600">
                  Blackwood, New Jersey, US
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className=" w-full flex justify-center py-5 ">
        <button className=" flex justify-center items-center py-2 px-5 rounded-md space-x-2  bg-violet-600 text-white hover:bg-violet-700 transition-all duration-150">
          <span>View More </span>
          <AiOutlineDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default NewestDeals;
