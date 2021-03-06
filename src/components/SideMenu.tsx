import React from "react";
import { FaRegCircle } from "react-icons/fa";
import {
  RiWechatPayFill,
  RiTShirtAirFill,
  RiSettings2Line,
} from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { GiSplitCross } from "react-icons/gi";
import { CgLaptop } from "react-icons/cg";
import { NavLink } from "react-router-dom";

function SideMenu() {
  const NavItem = ({ children, to }) => {
    // console.log(icon)
    return (
      <NavLink
        to={to}
        exact
        className="flex justify-center items-center p-4  "
        activeClassName="bg-purple-800 border-l-4 "
      >
        {children}
      </NavLink>
    );
  };
  return (
    <div className=" bg-purple-700  flex flex-col justify-between">
      <div>
        <NavItem to="/">
          <GiSplitCross
            color="white "
            className="hover:scale-125 transform duration-300"
          />
        </NavItem>
        <NavItem to="/strategy">
          <RiWechatPayFill
            color="white "
            className="hover:scale-125 transform duration-300"
          />
        </NavItem>
        <NavItem to="/puzzle">
          <FaRegCircle
            color="white "
            className="hover:scale-125 transform duration-300"
          />
        </NavItem>
        <NavItem to="/presentation">
          <CgLaptop
            color="white "
            className="hover:scale-125 transform duration-300"
          />
        </NavItem>
        <NavItem to="/chart">
          <MdWork
            color="white "
            className="hover:scale-125 transform duration-300"
          />
        </NavItem>
        <NavItem to="/data">
          <IoIosPeople
            color="white "
            className="hover:scale-125 transform duration-300"
          />
        </NavItem>

        <NavItem to="/settings">
          <RiSettings2Line
            color="white "
            className="hover:scale-125 hover:rotate-45 transform duration-300"
          />
        </NavItem>
      </div>
      <div className="relative ">
        <span className="absolute right-0 mr-1 mt-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex w-5 h-5 rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 text-xs text-white  justify-center items-center ">
            1
          </span>
        </span>
        <NavItem to="/documents">
          <RiTShirtAirFill
            color="white "
            className="hover:scale-125 transform duration-300"
          />
        </NavItem>
      </div>
    </div>
  );
}

export default SideMenu;
