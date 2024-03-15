import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const slides = [
  {
    imageUrl: "/images/Untitled video - Made with Clipchamp.mp4",
    title: "Explore Our Gym Today!",
    description: "Explore Our Gym Today!",
  },
  {
    imageUrl: "/images/Untitled video - Made with Clipchamp.mp4",
    title: "Your Gateway to Health and ",
    description: "Your Gateway to Health and Wellness",
  },

];

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    // Start autoplay when the component mounts
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change 5000 to the desired autoplay interval in milliseconds

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <div className="w-full md:mt-[100px] h-[100vh] md:h-[90vh] relative overflow-hidden">
      {/* <div className="div absolute top-0 left-0 w-full h-full ">
        <video className="h-full w-full" src="/images/Untitled video - Made with Clipchamp.mp4"></video>
      <h2 className="text-[35px] text-nowrap md:text-[70px] font-[200] mb-4 transition-transform transform  animateHeading flex gap-[20px] capitalize">
                  <p>The</p>
                  <div className="text-[#FAB207] font-[700]">
                    <Typewriter
                      options={{
                        strings: ["Fitness Icon", "best gym"],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                      }}
                    />
                  </div>
                </h2>
                <Link href="contractUs">
                  <button className="text-[12px] md:text-sm transition-transform transform border-2 font-semibold px-[39px] md:px-[46px] py-2 z-[20px] animatebtm">
                    Book A demo
                  </button>
                </Link>
      </div> */}
      
        <div
        
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 transform `}
        >
          <div className="h-full flex items-center justify-start  relative">
            <div className="overlay w-full h-full absolute top-0 left-0 bg-[#242c2ea6] z-10">
              <div className="text-left  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col w-[100%] items-center justify-center md:justify-start md:items-start text-white absolute  md:ml-[150px]">
                <p className="text-[12px] md:text-[20px] uppercase animateDis">
                  
                </p>
                <h2 className="text-[35px] text-nowrap md:text-[70px] font-[200] mb-4 transition-transform transform  animateHeading flex gap-[20px] capitalize">
                  <p>Nitin&apos;s</p>
                  <div className="text-[#F3D302] font-[700]">
                    <Typewriter
                      options={{
                        strings: ["Fitness Icon", "Fitness Icon"],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                      }}
                    />
                  </div>
                </h2>
                <Link href="contractUs">
                  <button className="text-[12px] md:text-sm transition-transform transform border-2 font-semibold px-[39px] md:px-[46px] py-2 z-[20px] animatebtm">
                    Book A demo
                  </button>
                </Link>
              </div>
            </div>
           
            <video
            muted
            loop
            autoPlay
              src="/images/v11.mp4"
              alt=""
              className="object-cover h-[100vh] w-[100vw]"
            />
          </div>
        </div>
     
      {/* <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hidden md:flex">
        <FaChevronLeft size={24} onClick={prevSlide} />
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hidden md:flex">
        <FaChevronRight size={24} onClick={nextSlide} />
      </div> */}
    </div>
  );
};

export default MainPage;
