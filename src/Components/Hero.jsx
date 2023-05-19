/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import Hero Image
import heroImg from "../Images/hero-Img.jpg";
import Logo from "../Images/logo.png";

const Hero = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="flex justify-between items-center py-5 ">
        <h1 className="text-xl lg:text-2xl font-bold ">
          Real <span className=" text-violet-600">Estate</span>
        </h1>
        <ul className=" flex items-center space-x-4 text-xs md:text-base ">
          <li>
            <a className="hover:text-violet-700" href="#">
              Feature
            </a>
          </li>
          <li>
            <a className="hover:text-violet-700" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-violet-700" href="#">
              Contact
            </a>
          </li>
        </ul>
        <button className=" bg-violet-600  px-5 py-3 rounded-xl text-white hover:bg-violet-700 transition-all duration-150 text-xs md:text-base">
          Contact
        </button>
      </nav>

      <div className="h-[500px] relative">
        <img
          className="w-full h-full object-cover rounded-md"
          src={heroImg}
          alt=""
        />

        {/* Search bar */}
        <div className=" absolute bottom-5 w-full">
          <div className=" w-11/12 xl:w-4/5 m-auto bg-white opacity-80 grid grid-cols-2 gap-x-6 lg:flex justify-between items-center p-5 drop-shadow-2xl rounded-md ">
            <div className="flex flex-col space-y-2">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                placeholder="US"
                className=" outline-violet-300"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="property">Property</label>
              <input
                type="text"
                placeholder="House/Apertment"
                className=" outline-violet-300"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="price">Max price</label>
              <input
                type="text"
                placeholder="10,000"
                className=" outline-violet-300"
              />
            </div>
            <div>
              <button className="bg-violet-600 hover:bg-violet-700 transition-all duration-150 px-5 py-2 mt-5 md:mt-0 rounded-full drop-shadow-md text-white text-xs md:text-base ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
