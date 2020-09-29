import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { RiWechatPayFill, RiTShirtAirFill, RiSettings2Line } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { GiSplitCross } from "react-icons/gi";
import { CgLaptop } from "react-icons/cg";


function SideMenu() {


    const NavItem = ({ children }) => {
        // console.log(icon)
        return (<div className="flex justify-center items-center p-3">
            {children}
        </div>)
    }
    return (
        <div className=" bg-purple-700 p-5 flex flex-col justify-between">
            <div>
                <NavItem >
                    <GiSplitCross color="white " />
                </NavItem >
                <NavItem >
                    <RiWechatPayFill color="white " />
                </NavItem >
                <NavItem >
                    <FaRegCircle color="white " />
                </NavItem >
                <NavItem >
                    <CgLaptop color="white " />
                </NavItem >
                <NavItem >
                    <MdWork color="white " />
                </NavItem >
                <NavItem >
                    <IoIosPeople color="white " />
                </NavItem >



                <NavItem >
                    <RiSettings2Line color="white " />
                </NavItem >
            </div>
            <div>
                <NavItem >
                    <RiTShirtAirFill color="white " />
                </NavItem >
            </div>
        </div>
    )
}

export default SideMenu
