import React from "react";

// import icons
import { FaGooglePlay, FaTwitter } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="w-full py-16">
        <div className=" flex flex-col justify-center items-center space-y-5">
          <h1 className="text-xl md:text-3xl font-bold">
            Download the <span className=" text-violet-600">RealState</span> app
          </h1>
          <div className=" flex space-x-5">
            <div className=" flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl cursor-pointer hover:scale-105 transition-all ">
              <FaGooglePlay size={"1.5rem"} />
              <div>
                <p className="text-xs">Get on</p>
                <h1 className="text-sm">Google Play</h1>
              </div>
            </div>

            <div className=" flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl cursor-pointer hover:scale-105 transition-all">
              <IoLogoAppleAppstore size={"1.5rem"} />
              <div>
                <p className="text-xs">Get on</p>
                <h1 className="text-sm">Apple Srore</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full py-10 bg-neutral-800 text-white">
        <div className=" w-11/12 md:w-1/2 m-auto flex flex-col items-center text-center space-y-5">
          <h1 className="text-2xl font-bold hover:scale-105 transition cursor-pointer hover:text-violet-400">
            Real Estate
          </h1>
          <ul className="flex items-center space-x-5 ">
            <li className=" cursor-pointer hover:text-violet-400 transition">
              Features
            </li>
            <li className=" cursor-pointer hover:text-violet-400 transition">
              Trandings
            </li>
            <li className=" cursor-pointer hover:text-violet-400 transition">
              About
            </li>
          </ul>

          {/* media icon */}
          <div className=" flex items-center space-x-5 ">
            <FiTwitter
              size={"1.5rem"}
              className=" cursor-pointer hover:scale-105 transition-all"
            />
            <AiOutlineInstagram
              size={"2rem"}
              className="cursor-pointer hover:scale-105 transition-all"
            />
            <AiOutlineYoutube
              size={"2rem"}
              className="cursor-pointer hover:scale-105 transition-all"
            />
            <FiFacebook
              size={"1.8rem"}
              className="cursor-pointer hover:scale-105 transition-all"
            />
            <AiOutlineGithub
              size={"1.8rem"}
              className="cursor-pointer hover:scale-105 transition-all"
            />
          </div>
          <p className="p-5  text-sm text-gray-500">
            Discover your dream home with us. We are committed to providing
            exceptional service, personalized attention, and unmatched expertise
            in the real estate market. Contact us today
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
