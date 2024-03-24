import React, { useState, useEffect, useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdReviews,
} from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import 'remixicon/fonts/remixicon.css'
const Review = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  // Sample data for media cards
  const mediaData = [
    {
      sections: [
        {
          title: "PRINCE",
          description:
            "The Fitness Icon Gym has truly transformed my fitness journey! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Their supportive staff and top-notch facilities make every workout session enjoyable and productive. I highly recommend it!",
        },
        {
          title: "KUMAR",
          description:
            "I've been a member at The Fitness Icon Gym for months now, and I couldn't be happier with my experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. The trainers are knowledgeable, the equipment is top-of-the-line, and the atmosphere is motivating. Five stars all the way",
        },
      ],
    },
    {
      sections: [
        {
          title: "RAJ",
          description:
            "The atmosphere at The Fitness Icon Gym is simply unbeatable! Lorem ipsum dolor sit amet, consectetur adipiscing elit. From the energetic group classes to the personalized attention from trainers, every visit leaves me feeling rejuvenated and accomplished. It's definitely worth every penny!",
        },
        {
          title: "ANIKET",
          description:
            "Choosing The Fitness Icon Gym was one of the best decisions I've made for my health and well-being. Lorem ipsum dolor sit amet, consectetur adipiscing elit. The variety of equipment, the cleanliness of the facilities, and the friendly staff make it a pleasure to work out here. I'm seeing real results and couldn't be happier!",
        },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (activeSlide === mediaData.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(mediaData.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="container h-fit w-[50%]  px-[1px] md:w-[100%] lg:w-[90%] relative overflow-hidden ">
      <div
        className="slider  h-fit"
        ref={sliderRef}
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {mediaData.map((slide, index) => (
          <div key={index} className="slide  flex gap-[30px] bg-[#252c3a24]">
            {slide.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`w-full  md:w-1/2 flex items-start justify-center ${
                  sectionIndex === 1 ? "hidden w-[0px] md:flex" : "md:flex"
                } py-[50px] px-[20px] bg-[#252c3a41] rounded-lg shadow-md flex justify-center items-start`}
              >
                <div className="w-[200px] border-none  h-[40px] rounded bg-[#F3D302] flex items-center justify-center">
                  {/* <MdReviews className="text-lg font-semibold" /> */}
                  <i className="ri-store-2-fill"></i>
                </div>
                <div className="p-6 ">
                  <p className={`text-white text-[13.5px] md:text-[14.5px] lg:text-[13.5px] `}>
                    {section.description}
                  </p>
                  <h2 className="text-sm font-semibold text-[#F3D302] mt-3">
                    {section.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button
        className="absolute top-[50%] left-0 transform -translate-y-1/2 z-20"
        onClick={prevSlide}
      >
        <MdOutlineKeyboardArrowLeft className="text-white text-3xl" />
      </button>
      <button
        className="absolute top-[50%] right-0 transform -translate-y-1/2 z-20"
        onClick={nextSlide}
      >
        <MdOutlineKeyboardArrowRight className="text-white text-3xl" />
      </button>
      {/* <div className="dots absolute bottom-[0px] left-1/2 transform -translate-x-1/2">
        {mediaData.map((_, index) => (
          <span
            key={index}
            className={index === activeSlide ? "dot active" : "dot"}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Review;
