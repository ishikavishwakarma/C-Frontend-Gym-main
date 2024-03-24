import Footer from "@/components/Footer";
import Lazy from "@/components/Lazy";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import { FaRegSmile, FaStar, FaUsers } from "react-icons/fa";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterLine,
} from "react-icons/ri";

const About = () => {
  return (
    <div className="bg-[#0e141e]   min-h-[100vh] relative">
      <Navbar />
      <div
        className="w-full flex items-center  overflow-hidden text-white text-[50px] h-[40vh] md:h-[70vh] bg-cover bg-center absolute top-0"
        style={{
          backgroundImage: "url('/images/1.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="mt-[160px] font-[700] lg:w-[70vw] xl:w-[50vw] text-base sm:text-5xl pl-10 w-[60vw] sm:w-[40vw] lg:pl-[8.5vw] text-left  z-10">
          A FEW WORDS ABOUT THE CLUB
        </p>
        <div className="w-full h-[84vh] absolute top-0 bg-black opacity-40"></div>
      </div>

      <div className="flex w-[100vw] lg:pl-40 xl:pl-0 items-center h-fit sm:pb-1  pb-96 justify-center  text-sm md:text-md ">
        <div className="bg-[#0e141e] text-center sm:text-left py-10  w-[100vw] text-white flex flex-col md:flex-row justify-between max-w-screen-xl gap-8 pt-[45vh] md:pt-[75vh] px-4 md:px-0">
          
          <div className="div md:w-1/2 pt-1 sm:pt-14 flex gap-20 flex-col  w-full h-fit">
            <div className="div flex h-full w-[100vw] flex-col pr-8 sm:flex-row sm:gap-20 items-center   ">
              <div className="head">
                <p className="lg:text-4xl text-xl w-full sm:w-[50vw] uppercase font-[900] lg:leading-[50px] text-[#F3D302] mb-7 lg:mb-10">
                  Discover Your Strength at Nitin&apos; s FITNESS ICON GYM
                </p>
                <p className="mb-4 text-sm  sm:text-lg w-full sm:w-[50vw]">
                  Welcome to The Fitness Icon Gym, where health and
                  transformation converge. We pride ourselves on providing a
                  cutting-edge fitness experience tailored to your individual
                  journey. With state-of-the-art equipment, expert trainers, and
                  a vibrant community, we are committed to helping you achieve
                  your fitness goals. Join us in this empowering environment,
                  where every workout is a step towards a healthier, stronger,
                  and more vibrant you.
                </p>
              </div>
              <div className="div overflow-hidden sm:w-[94vw]  h-80  lg:w-[28vw]">
                <Image
                height={100}
                width={500}
                  className=" object-cover h-full w-full"
                  src="/images/_S0A1754.JPG"
                  alt="mission"
                />
              </div>
            </div>
            <div className="div flex py-1 sm:py-20 gap-[135vw] sm:gap-32 flex-col h-fit w-[100vw]">
              <div className="div h-[60vh] flex flex-col sm:flex-row w-full pr-7 sm:pr-0 gap-10 sm:gap-0  sm:w-[83.5vw]">
                <div className="div h-full relative w-full sm:w-1/2 ">
                  <div className="div w-full h-2/3 ">
                  <Image
                height={100}
                width={500}
                      src="/images/gym images/IMG_6461.png"
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="div w-full h-1/3 lg:px-10 flex items-center justify-center px-1 pt-10 sm:pt-0 sm:px-20 ">
                    <p className="text-center  leading-7">Experience unparalleled precision and performance with our top-of-the-line machines. Elevate your fitness journey and achieve your goals with the highest quality equipment at our gym.</p>
                  </div>
                  <div className="w-full h-2/3 flex items-center justify-center  absolute top-0 bg-black opacity-40">
                    <h2 className="text-3xl text-center text-white font-[700]">HIGHEST QUALITY <br /> MACHINES</h2>
                  </div>
                </div>

                <div className="div h-full  relative w-full sm:w-1/2 ">
                  <div className="div w-full h-2/3 ">
                  <Image
                height={100}
                width={500}
                      src="/images/gym3_pic19.jpg"
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="div w-full h-1/3 lg:px-10 flex items-center justify-center px-1 pt-10 sm:pt-0 sm:px-20 ">
<p className="text-center leading-7">Revitalize your heart health and endurance with our cutting-edge cardiovascular exercise equipment. Energize your workout and push your limits with the latest in cardio technology at our gym.</p>
                  </div>
                  <div className="w-full h-2/3 flex items-center justify-center  absolute top-0 bg-black opacity-40">
                    <h2 className="text-3xl text-center uppercase text-white font-[700]">Cardiovascular <br /> Exercise</h2>
                  </div>
                </div>
              </div>
             
              <div className="div h-[60vh] flex flex-col sm:flex-row w-full pr-7 sm:pr-0 gap-10 sm:gap-0  sm:w-[83.5vw]">
              <div className="div h-full relative w-full sm:w-1/2 ">
                  <div className="div w-full h-2/3 ">
                  <Image
                height={100}
                width={500}
                      src="/images/Screenshot 2024-03-09 140536.png"
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="div w-full h-1/3 lg:px-10 flex items-center justify-center px-1 pt-10 sm:pt-0 sm:px-20">
<p className="text-center leading-7">Maximize your potential with our dynamic functional training and flexibility programs. Elevate your agility, strength, and range of motion through personalized sessions tailored for peak performance.</p>

                  </div>
                  <div className="w-full h-2/3 flex items-center justify-center  absolute top-0 bg-black opacity-40">
                    <h2 className="text-3xl uppercase text-center text-white font-[700]">Functional Training <br /> and flexibility</h2>
                  </div>
                </div>
                <div className="div h-full relative w-full sm:w-1/2 ">
                  <div className="div w-full h-2/3 ">
                  <Image
                height={100}
                width={500}
                      src="/images/gym images/IMG_6373.png"
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="div w-full h-1/3 lg:px-10 flex items-center justify-center px-1 pt-10 sm:pt-0 sm:px-20">
<p className="text-center leading-7">Join the energy of our vibrant community and elevate your fitness journey with dynamic group fitness classes. Experience motivation, camaraderie, and results as you push towards your goals with our expert-led sessions.</p>

                  </div>
                  <div className="w-full h-2/3 flex items-center justify-center  absolute top-0 bg-black opacity-40">
                    <h2 className="text-3xl text-center uppercase text-white font-[700]">Group Fitness <br /> Classes</h2>
                  </div>
                </div>

               
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const BulletPoint = ({ children }) => (
  <p className="flex items-center">
    <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
    {children}
  </p>
);

export default About;
