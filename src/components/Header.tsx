import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import CardProfile from "./CardProfile";

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" relative bg-white p-3 flex justify-between items-center pr-5">
      <div className="text-gray-500 pl-2">Search</div>
      <div className="flex justify-between items-center mr-5">
        <div className="mr-2 text-gray-500 text-sm">Admin</div>
        <div className="mr-2 bg-purple-500 rounded-full w-6 h-6 flex justify-center items-center text-white text-sm">
          K
          {/* <img src="https://blog.kiranyadav.tech/assets/aboutPage/image.svg" alt="" className="w-6 h-6 bg-red-600 rounded-full" /> */}
        </div>
        <div
          className={`hover:bg-gray-500 cursor-pointer  w-6 h-6 flex rounded-full justify-center items-center transform duration-300 ${
            menu && "rotate-180"
          } `}
          onClick={() => setMenu(!menu)}
        >
          <BiChevronDown />
        </div>
      </div>
      <div
        className={`absolute top-0 right-0 w-48 my-3 mt-10 mr-3 z-10 transform   opacity-25 duration-500 ${
          menu && "opacity-100 "
        }`}
      >
        {menu && <CardProfile />}
      </div>
    </div>
  );
}

export default Header;
