import Carosal from "@/components/Carosal";
import Programs from "@/components/Programs";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Coach from "@/components/Coach";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollButton from "@/components/ScrollButton";
import { useEffect, useState } from "react";
import ScrollToTopButton from "@/components/ScrollButton";
import { FaArrowUp } from "react-icons/fa";
import Tab from "@/components/Tab";
import Reviews from "@/components/Reviews";

export default function Home() {
  // max-w-screen-xl 

  return (
    <div className=" text-white" >
      <Navbar />
      <Carosal />
      <Programs />
      <Tab />
      <Reviews />
      <Footer />
    </div>
  )
}
