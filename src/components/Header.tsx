import React from 'react'
import { BiChevronDown } from "react-icons/bi"

function Header() {
    return (
        <div className=" bg-white p-2 flex justify-between items-center pr-5">
            <div className="text-gray-500 pl-2">
                Search
            </div>
            <div className="flex justify-between items-center">
                <div className="mr-2 text-gray-500 text-sm">
                    Admin
                </div>
                <div className="mr-2 bg-purple-500 rounded-full w-6 h-6 flex justify-center items-center text-white text-sm">
                   
                        K
               
                    {/* <img src="https://blog.kiranyadav.tech/assets/aboutPage/image.svg" alt="" className="w-6 h-6 bg-red-600 rounded-full" /> */}
                </div>
                <div>
                    <BiChevronDown />
                </div>
            </div>
        </div>
    )
}

export default Header
