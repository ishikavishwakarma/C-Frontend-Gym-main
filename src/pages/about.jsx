import Lazy from "@/components/Lazy";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { FaRegSmile, FaStar, FaUsers } from "react-icons/fa";
import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinFill, RiTwitterLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="bg-[#18191B]  min-h-[100vh] relative">
      <Navbar />
      <div
        className="w-full flex items-center justify-center overflow-hidden text-white text-[50px] h-[40vh] md:h-[50vh] bg-cover bg-center absolute top-0"
        style={{
          backgroundImage: "url('/images/1.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="mt-[80px] z-10">About Us</p>
        <div className="w-full h-[84vh] absolute top-0 bg-black opacity-40"></div>
      </div>

      <div className="flex w-[100vw] items-center  justify-center  text-sm md:text-md py-[10px]">
        <div className="bg-[#18191B] text-center sm:text-left   w-[100vw] text-white flex flex-col md:flex-row justify-between max-w-screen-xl gap-8 pt-[45vh] md:pt-[55vh] px-4 md:px-0">
          <div className="w-full md:w-1/2">
            <p className="text-lg font-[700] text-[#FAB207] mb-4">
              THE FITNESS ICON GYM
            </p>
            <p className="mb-4  w-[95vw] lg:w-[80vw]">
              Welcome to The Fitness Icon Gym, where health and transformation
              converge. We pride ourselves on providing a cutting-edge fitness
              experience tailored to your individual journey. With
              state-of-the-art equipment, expert trainers, and a vibrant
              community, we are committed to helping you achieve your fitness
              goals. Join us in this empowering environment, where every workout
              is a step towards a healthier, stronger, and more vibrant you.
            </p>
            <p className="text-lg font-[700] text-[#FAB207] mb-4">
              Our Mission
            </p>

             <div className="div w-[100vw] l items-start gap-8 sm:flex-col flex-col lg:flex-row flex">

            <p className=" w-[100%] pr-6 lg:w-[53%] mb-4">
              At The Fitness Icon Gym, our mission is to inspire and empower
              individuals to embrace a healthier lifestyle. We are committed to
              providing a welcoming space where fitness becomes a journey of
              self-discovery and personal growth. Through cutting-edge
              facilities, expert guidance, and a supportive community, we strive
              to make every individual feel motivated and confident on their
              path to optimal well-being. Our mission extends beyond physical
              fitness; we aim to cultivate a culture of positivity, resilience,
              and lifelong wellness. Join us as we work together to transform
              lives and build a healthier, stronger community <br />

            <p className="pt-5"> <span className="font-[600]">1. Inspiration for Health : </span> Inspire individuals to prioritize health and well-being for a positive lifestyle change.</p> 
<p className="pt-5"> <span className="font-[600]">2. Holistic Fitness :</span>  Promote a holistic fitness approach, focusing on physical, mental, and emotional well-being.</p>
<p className="pt-5"> <span className="font-[600]">3. Community Empowerment :</span>  Foster a supportive fitness community for empowerment and collective growth.</p>
<p className="pt-5"> <span className="font-[600]">4. Guidance Towards Growth :</span>  Provide expert guidance for personal growth and reaching individual fitness potential.</p>
<p className="pt-5"> <span className="font-[600]">5. Transformative Wellness : </span>Instill a commitment to transformative wellness, creating positive life changes.</p>
         
            </p>
            <div className="div rounded-lg overflow-hidden w-[94vw] h-80 bg-red-500 lg:w-[29vw]">
            <img className=" object-cover h-full w-full" src="/images/_S0A1753.JPG" alt="mission" />
            </div>
             </div>
            <div className="w-full pt-5 md:w-1/2 flex flex-col">
              <p className="text-lg font-[700] text-[#FAB207] mb-4">Activity</p>
              <div className="flex flex-wrap  pb-7">
                <div className="flex flex-col md:w-full gap-2">
                  <BulletPoint>Strength Training</BulletPoint>
                  <BulletPoint>Cardiovascular Exercise</BulletPoint>
                  <BulletPoint>Group Fitness Classes</BulletPoint>
                  <BulletPoint>Functional Training</BulletPoint>
                
                 
                  <BulletPoint>Flexibility</BulletPoint>
                </div>
              </div>
            </div>
          </div>
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

const BulletPoint = ({ children }) => (
  <p className="flex items-center">
    <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
    {children}
  </p>
);

export default About;
