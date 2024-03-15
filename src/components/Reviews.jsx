import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "./Review";

const Reviews = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="w-full h-[84vh] relative ">
      {/* Background Image */}
      <div
        className="w-full h-[84vh] bg-cover bg-center absolute top-0"
        style={{
          backgroundImage: "url('/images/1.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay */}
      <div className="w-full h-[84vh] absolute top-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto   h-full flex justify-center items-center">
        <div className="text-white">
          <div className="flex flex-col justify-between max-w-screen-xl w-full items-center">
            <p className="text-[30px] font-thin uppercase">CUSTOMER SAYS</p>
            <div>
              <div className="flex items-center gap-2 pb-10  my-[25px]">
                <div className="w-[20vw] h-[1px] bg-[#dadada8f]"></div>
                <div className="w-[7px] h-[7px] bg-[#F3D302] border-none rounded-full"></div>
                <div className="w-[20vw] h-[1px] bg-[#dadada8f]"></div>
              </div>
            </div>
            <Review></Review>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
