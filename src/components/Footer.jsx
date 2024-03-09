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

const Footer = () => {
  return (
    <div className="">
      <div className="flex items-center pt-6 justify-center">
        <div className="sub-footer  justify-between flex-col flex w-full sm:flex-row  max-w-screen-xl">
          <div className="extra justify-center items-center sm:items-start flex gap-4 flex-col w-full sm:w-60  h-fit ">
            <Lazy src="/logo.png" className="h-20   w-[150px] md:w-[150px] object-cover object-fit " alt="Logo" />
            {/* <h1 className="text-md uppercase font-[500]">fitness Icon Gym</h1> */}
            {/* <div className="part-4 flex flex-col gap-2 relative right-0">
            <h1 className="font-[900] ">Let&apos;s Talk</h1>
            <div className=" flex gap-2  flex-col">
              <div className="flex items-center gap-1 ">
                <RiMapPinLine className="text-[#FAB207] cursor-pointer" /> GOKUL
                MARKET, MITTAL COLLEGE
              </div>
              <div className="flex items-center gap-1 ">
                <MdEmail className="text-[#FAB207] cursor-pointer" />{" "}
                icongym@gmail.com
              </div>
              <div className="flex items-center gap-1 ">
                <RiPhoneLine className="text-[#FAB207] cursor-pointer" />{" "}
                9827566365
              </div>
             
            </div>
          </div> */}
          <p className=" text-center sm:text-start sm:w-[20vw] text-sm">The Fitness Icon Gym, where health and transformation converge. We pride ourselves on providing a cutting-edge fitness experience tailored to your individual journey. </p>
          </div>
          {/* <div className="flex gap-[34px] flex-wrap"> */}
         <div className="div flex mt-10 sm:mt-1 items-center justify-start flex-wrap sm:gap-24 gap-[57px]">

          <div className="part-2  sm:-mt-5 ">
            <h1 className="text-xl font-[600]">About</h1>
           <div className="div sm:text-[17px] text-[12px]  pt-4 sm:pt-6 flex flex-col gap-2">

              <h4>Product</h4>
              <h4>Store Locations</h4>
              <h4>Join Distributor</h4>
              <h4>Contact Page</h4>
              <h4>About us</h4>
           </div>
       
          </div>
          <div className="part-1   sm:-mt-5  px-2 lg:px-0 ">
          <h1 className="sm:text-xl sm:pl-[60px]   text-sm font-[600] pb-5">Contact</h1>
           <div className="div w-[40vw] sm:pl-[60px]  sm:text-[17px] text-[12px] sm:w-[20vw]  pt-6J flex flex-col gap-3">

           <h4>Email : <span></span> </h4>
           <h4 className="text-[12px] sm:text-[15px]">Contact No : <span className="sm:text-sm text-[11px] ">9827566365</span> </h4>
           <h4>Address : <span className="text-[10px] sm:text-[14px]  ">  GOKUL MARKET, MITTAL COLLEGE, PLOT NO 5, RAOD, Karond, Bhopal, Madhya Pradesh 462038</span></h4>
           </div>
            
            
          </div>
          <div className="part-3 ">
            <h1 className="sm:text-xl  font-[600] -mt-6">Timings</h1>
            <div className="div text-[17px] pt-2 sm:-mt-1 sm:pt-6 flex flex-col gap-2">
              <h4 className="text-[12px] sm:text-[17px]">Morning : <span className="sm:text-sm text-[11px] ">6am to 12 noon</span> </h4>
              <h4 className="text-[12px] sm:text-[17px]">Evening : <span className="sm:text-sm text-[11px] ">6pm to 10pm</span> </h4>
          </div>
          </div>
          
         </div>
          {/* </div> */}
          
          
        </div>
      </div>

      <div className="flex items-center justify-center bg-black">
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
