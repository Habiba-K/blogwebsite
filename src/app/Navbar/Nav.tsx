"use client";
import Link from "next/link";
import { navLinks } from "../Constant/Constant";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import React, { useEffect, useState } from "react";

//define prop type
type Props = {
    openNav:() => void
}
const Nav = ({openNav}:Props) => {
    const [currentDateTime, setCurrentDateTime] = useState(``);
      useEffect(() => {
        const updateDateTime = () => {
          const now = new Date();
          const options: Intl.DateTimeFormatOptions = {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          };
          setCurrentDateTime(
            now.toLocaleDateString("en-US", options) 
          );
        };
        updateDateTime();
        const interValId = setInterval(updateDateTime, 1000);
        return () => clearInterval(interValId);
      }, []);
return (    
    <div className="item-center sm:justify-round relative h-[12vh] w-full z-[10] text-gray-600 body-font bg-white shadow-xl ring-1 ring-slate-100">
        <div className="flex h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto ">
            {/*logo */}
            <div className=" text-black items-center hidden md:flex">
                <span>{currentDateTime}</span>
            </div>
            <a className="flex titlefont font-medium items-center text-gray-900 sm:ml-5 ">
            <img src="/images/htmlcsswebsite.JPG" 
             alt="logo"
             width={170}
             height={170} 
             className="w-12 h-12 sm:ml-6 ml-0 rounded-full xl:ml-0"/>
                <span className="ml-3 text-xl">TechCodeBlog</span></a>
                 
             <div className="flex items-center space-x-10 ">
                <div className="hidden lg:flex items-center space-x-8">
                {navLinks.map((navlink)=>{
                    return <Link key={navlink.id} href={navlink.url}>
                        <p className="relative text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-400 text-black after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right">{navlink.label}</p>
                </Link>
                })}
                </div>
                {/*buttons */}
                <div className="flex items-center  space-x-4">
                    <Link href="https://www.linkedin.com/in/habiba-khan-7ba46329b/">
                    <button className="sm:px-8  md:px-6 md:py-2 px-2 py-2 size-max  bg-blue-700  focus:outline-none hover:bg-red-700 rounded text-white   transition-colors duration-300 flex items-center">
                    Linkedin
                    <svg 
                    fill ="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    </button>
                    </Link>
                    
                    {/*burger */}
                    <HiMiniBars3BottomRight onClick={openNav} 
                        className="w-8 h-8 cursor-pointer text-black lg:hidden"></HiMiniBars3BottomRight>
                </div>
             </div>
        </div>
    </div>
)};
export default Nav;