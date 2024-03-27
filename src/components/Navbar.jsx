import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import TypingEffect from "./TypingEffect";
import Lazy from "./Lazy";

import WhatsAppButton from "./whatsup";
import { CiClock2 } from "react-icons/ci";
import LocationIcon from "./Location";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(true);
  const slideImages = [
    {
      // url:'https://images.unsplash.com/photo-1558659616-7742131dcfbb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      url: "../../images/_54fbb8cd-2b3e-4482-b647-743e65c35bd1-removebg.png",
      caption: "Sanatan Sandesh",
    },
    {
      // url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      url: "../../images/_54fbb8cd-2b3e-4482-b647-743e65c35bd1-removebg.png",
      caption: "Sanatan Sandesh",
    },
    {
      url: "../../images/_54fbb8cd-2b3e-4482-b647-743e65c35bd1-removebg.png",
      caption: "Sanatan Sandesh",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeVisible = scrollY <= 0; // Hide when scrolled down 1px or more
      setIsVisible(shouldBeVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className="text-white nav bg-[#111723]  w-full z-20 top-0 start-0 border-b   h-fit fixed">
        <div className="max-w-screen-xl  flex-wrap items-center justify-between mx-auto p-4 relative  hidden md:flex">
          <div className="flex gap-[20px] ">
            <div className="flex items-center gap-1 text-sm">
              <MdOutlineLocalPhone className="text-[#FAB207]" />
            
              <p className="text-sm">9131383718</p>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <MdEmail className="text-[#FAB207]" />
           
              <p className="text-sm"> 
              fitnessiconny@gmail.com
              </p>
            </div>
            <LocationIcon></LocationIcon>

            <div className="flex items-center gap-1 text-sm">
              <IoLogoWhatsapp className="text-[#FAB207] font-semibold" />
         
              <p className="text-sm">9827566365</p>
            </div>
          </div>
          <div className="flex gap-4 text-white items-center justify-center   md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <FaInstagram className="cursor-pointer iconsOpacity" />
            <FaFacebook className="cursor-pointer iconsOpacity" />
            <WhatsAppButton></WhatsAppButton>
          </div>
        </div>
       
    

        <div className="bg-white w-full h-[1px] hidden md:block"></div>

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative ">
          <Link
            href="/"
            className="flex items-center justify-center  space-x-3 rtl:space-x-reverse "
          >
            {/* <Lazy src="/fitness icon.png" className="h-16  md:w-[92px] object-cover  " alt="Logo" /> */}
            <Image src={"/gymicon.png"} width={100} height={90} className="h-16  md:w-[92px] object-cover  " alt="Logo" />
            {/* <h1 className="text-md uppercase font-[500]">fitness Icon Gym</h1> */}
          </Link>

          <div className="items-center justify-between hidden  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <nav>
              <ul className="font-[400] md:flex flex-col text-lg text-white bg-transparent p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#F3D302] rounded-full border-none"></span>
                  <Link
                    href="/"
                    className={`block py-2 px-3 rounded  md:bg-transparent md:p-0 hoverable-text ${
                      router.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#F3D302] rounded-full border-none"></span>

                  <Link
                    href="/about" 
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      router.pathname === "/about" ? "active" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#F3D302] rounded-full border-none"></span>

                  <Link
                    href="/packages"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      router.pathname === "/packages" ? "active" : ""
                    }`}
                  >
                    Packages
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#F3D302] rounded-full border-none"></span>

                  <Link
                    href="/contractUs"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      router.pathname === "/contractUs" ? "active" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            {navbar ? (
              <RxCross2
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer text-[24px]  md:hidden"
              />
            ) : (
              <RxHamburgerMenu
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer text-[24px]  md:hidden"
              />
            )}
          </div>
        </div>
        {navbar && (
          <div className=" md:hidden bg-[#111723] text-white flex flex-col  px-[10px] py-[20px] text-sm gap-3 absolute w-full z-30  animateNav overflow-hidden">
            <div className=" flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#FAB207]  h-full hover:bg-[#111111] items-center ">
                <Link href="/" className="px-[10px]">
                  Home
                </Link>
              </div>
              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className=" flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#FAB207]  h-full hover:bg-[#111111] items-center ">
                <Link href="/about" className="px-[10px]">
                  About
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className=" flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#FAB207]  h-full hover:bg-[#111111] items-center ">
                <Link href="/packages" className="px-[10px]">
                  Packages
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className=" flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#FAB207]  h-full hover:bg-[#111111] items-center ">
                <Link href="/contractUs" className="px-[10px]">
                  Contact Us
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>
          </div>
        )}
        <div className="bg-white w-full h-[.5px] hidden md:block"></div>

            <div class="nav-1  mx-auto ">
      <div class="marquee whitespace-nowrap overflow-hidden flex items-center">
        <h1 className="text-white font-[500] text-sm">Morning : 6am to 11am  Evening : 6pm to 11pm</h1>
      </div>
    </div>
      </nav>
    </div>
  );
};

export default Navbar;
