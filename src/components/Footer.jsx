// components/Footer.js

import React from "react";
import { MdEmail } from "react-icons/md";
import { RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import {
  RiFacebookCircleFill,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";
import Lazy from "./Lazy";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#131926] h-full w-full">
      <div className="flex  lg:pl-7 items-center pt-6 justify-center">
        <div className="sub-footer  justify-between flex-col flex w-full sm:flex-row  max-w-screen-xl">
          <div className="extra  lg:items-start  justify-center md:items-center lg:w-96 md:w-full items-center sm:items-start flex gap-4 flex-col w-full sm:w-60  h-fit ">
            <Lazy src="/fitness icon.png" className="h-24   w-[150px] md:w-[150px] object-cover object-fit " alt="Logo" />
            
          <p className=" text-center md:text-center lg:text-start lg:w-[20vw] md:w-[50vw] sm:text-start sm:w-[20vw] text-sm">The Fitness Icon Gym, where health and transformation converge. We pride ourselves on providing a cutting-edge fitness experience tailored to your individual journey. </p>
          </div>
          
         <div className="div flex  mt-2 lg:pt-5 md:gap-10 lg:justify-start lg:items-start lg:gap-5 md:w-screen md:justify-center sm:mt-1 pl-5 sm:pl-1 sm:items-start justify-start flex-wrap sm:gap-24 gap-[52px]">

          <div className="part-2 -mt-4  sm:-mt-5 ">
            <h1 className="text-xl font-[600]">Site Map</h1>
           <div className="div sm:text-[17px] text-[12px] md:w-fit  pt-4 sm:pt-6 flex flex-col gap-2">

              <Link href ="/packages">Packages</Link>
              <a href="https://www.google.com/maps/place/FITNESS+ICON+GYM/@23.309067,77.416573,12z/data=!4m6!3m5!1s0x397c69337086d4f7:0xf7d941b4d407a100!8m2!3d23.3090669!4d77.4165725!16s%2Fg%2F11vsw65clz?hl=en&entry=ttu">Store Locations</a>
              
              <Link href="/contractUs">Contact Page</Link>
              <Link href="/about">About us</Link>
           </div>
       
          </div>
          <div className="part-1 mt-7  sm:-mt-5  px-2 lg:px-0 ">
          <h1 className="sm:text-xl sm:pl-[60px] -mt-10 sm:mt-1 lg:-mt-2 text-sm font-[600] pb-5">Contact</h1>
           <div className="div md:w-[30vw] lg:w-[20vw] w-[40vw] sm:pl-[60px]  sm:text-[17px] text-[12px] sm:w-[20vw]  pt-6J flex flex-col gap-3">

           <h4>Email : <span className="sm:text-sm text-[11px] ">fitnessiconny@gmail.com</span> </h4>
           <h4 className="text-[12px] lg:w-[20vw] lg:text-[15px] sm:w-[20vw]  sm:text-[15px]">Contact No : <span className="sm:text-sm text-[11px] ">9827566365</span> </h4>
           <h4 className="sm:w-[30vw] lg:w-[20vw] ">Address : <span className="text-[10px]   sm:text-[14px]  ">  GOKUL MARKET, MITTAL COLLEGE, PLOT NO 5, Karond, Bhopal, Madhya Pradesh 462038</span></h4>
           </div>
            
            
          </div>
          <div className="part-3 ml-20">
            <h1 className="sm:text-xl  font-[600] sm:-mt-5">Timings</h1>
            <div className="div text-[17px] pt-2 sm:-mt-1 sm:pt-6 flex flex-col gap-2">
              <h4 className="text-[12px]  sm:text-[17px]">Morning : <span className="sm:text-sm text-[11px] ">6am to 11am</span> </h4>
              <h4 className="text-[12px] sm:text-[17px]">Evening : <span className="sm:text-sm text-[11px] ">6pm to 10pm</span> </h4>
          </div>
          </div>
          </div>
          
          
          
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <footer className="text-white py-4  max-w-screen-xl ">
          <div className="flex w-full items-center justify-between   ">
            <div className="md:-ml-[30px]">
              <h1 className="uppercase">© 2024 Fitness Icon Gym</h1>
            </div>

            <div className="flex items-center gap-4">
              <RiFacebookCircleFill className="hover:text-[#FAB207] cursor-pointer" />
              <RiTwitterLine className="hover:text-[#FAB207] cursor-pointer" />
              <RiInstagramLine className="hover:text-[#FAB207] cursor-pointer" />
              <RiLinkedinFill className="hover:text-[#FAB207] cursor-pointer" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
