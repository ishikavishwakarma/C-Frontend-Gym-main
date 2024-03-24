// pages/packages.js

import Footer from "@/components/Footer";
import Lazy from "@/components/Lazy";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";

const Packages = () => {
  const router = useRouter();

  return (
    <>
    <div className="bg-[#0E141E] ">

      <Navbar></Navbar>

      <div className="min-h-screen lg:px-16 bg-[#0E141E] py-12 mt-[25px] md:mt-[100px] px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="div py-10 lg:pb-16 pb-10 ">
            <h1 className="text-2xl pb-2 lg:pt-7 lg:text-4xl font-bold text-white lg:mb-8">
              Membership Packages
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-5 sm:pt-10 xl:grid-cols-4 lg:grid-cols-2 gap-8">
              <PackageCard
                title="1 Month Pack"
                description="Get started on your fitness journey with access to our top-notch facilities and expert guidance for one month."
                price="₹1500*"
                imageSrc="/images/gym images/IMG_6460.png"
                id={1}
              />
              <PackageCard
                title="4 Month Pack"
                description="Commit to your fitness goals with extended access and personalized training plans over four months."
                price="₹4000*"
                imageSrc="/images/Screenshot 2024-03-09 140536.png"
                id={2}
              />
              <PackageCard
                title="6 Month Pack"
                description="Elevate your fitness journey with unlimited access, ongoing support, and exclusive discounts for six months."
                price="₹6000*"
                imageSrc="/images/gym images/IMG_6415.png"
                id={3}
              />
              <PackageCard
                title="12 Month Pack"
                description="Invest in long-term wellness with a full year of unrestricted access, personalized nutrition guidance, and priority booking."
                price="₹11,000*"
                imageSrc="/images/Screenshot 2024-03-09 140927.png"
                id={4}
              />
            </div>
          </div>
          <hr />
          <div className="div py-10 lg:pb-16 pb-10 ">
            <h1 className="text-2xl pb-2 lg:text-4xl font-bold text-white lg:mb-8">
              Weight Gain and Weight Loss Packages
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-5 sm:pt-10 xl:grid-cols-4 lg:grid-cols-2 gap-8">
              <PackageCard
                 title="3kg Weight Gain Pack"
                 description="Achieve a 3kg weight gain with personalized training and nutritional guidance for a healthier you."
                 price="₹3000*"
                 imageSrc="/images/gym images/IMG_6440.png"
                 id={1}
              />
              <PackageCard
                 title="5kg Weight Gain Pack"
                 description="Step up your weight gain journey with our 5kg package - tailored workouts and expert advice for lasting results."
                 price="₹5000*"
                 imageSrc="/images/gym images/IMG_6370.png"
                 id={2}
              />
              <PackageCard
                 title="3kg Weight Loss Pack"
                 description="Embark on a journey to lose 3kg with our tailored weight loss exercises and personalized nutritional guidance."
                 price="₹3000*"
                 imageSrc="/images/gym images/IMG_6375.png"
                 id={3}
              />
              <PackageCard
                title="5kg Weight Loss Pack"
                description="Accelerate your weight loss with our 5kg package - expert guidance, targeted exercises, and personalized meal plans."
                price="₹5000*"
                imageSrc="/images/gym images/IMG_6385.png"
                id={4}
              />
            </div>
          </div>
          {/* <div className="div py-10 lg:py-14 lg:pb-16 pb-14 ">
            <h1 className="text-3xl pb-2 lg:text-4xl font-bold text-white mb-1 lg:mb-8">
              Weight Gain Packages
            </h1>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 pt-5 sm:pt-10 lg:grid-cols-3 lg:gap-28 gap-10">
              <PackageCard
                title="3kg Weight Gain Pack"
                description="Achieve a 3kg weight gain with personalized training and nutritional guidance for a healthier you."
                price="₹3000*"
                imageSrc="/images/Screenshot 2024-03-09 121725.png"
                id={1}
              />
              <PackageCard
                title="5kg Weight Gain Pack"
                description="Step up your weight gain journey with our 5kg package - tailored workouts and expert advice for lasting results."
                price="₹5000*"
                imageSrc="/images/Screenshot 2024-03-09 140536.png"
                id={2}
              />
            </div>
          </div> */}
          {/* <hr />
          <div className="div py-10 lg:py-14 pb-10 ">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-1 lg:mb-8">
              Weight Loss Packages
            </h1>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 pt-10 lg:grid-cols-3 lg:gap-28 gap-10">
              <PackageCard
                title="3kg Weight Loss Pack"
                description="Embark on a journey to lose 3kg with our tailored weight loss exercises and personalized nutritional guidance."
                price="₹1500*"
                imageSrc="/images/Screenshot 2024-03-09 121725.png"
                id={1}
              />
              <PackageCard
                title="5kg Weight Loss Pack"
                description="Accelerate your weight loss with our 5kg package - expert guidance, targeted exercises, and personalized meal plans."
                price="₹4000*"
                imageSrc="/images/Screenshot 2024-03-09 140536.png"
                id={2}
              />
            </div>
          </div> */}
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

const PackageCard = ({ title, description, price, imageSrc, id }) => {
  const router = useRouter();

  return (
    <div className="bg-[#ffffffe4] rounded-lg shadow-md overflow-hidden">
      <Lazy
        height={""}
        width={"120%"}
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl  text-gray-800 mb-4 font-[900]">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-700 font-[700]">Price: {price}</p>
        <p className="text-gray-700 text-sm pt-1 font-[400]">
          * Terms and Conditions Apply
        </p>
        <button
          onClick={(e) => router.push("/contractUs?id=" + id)}
          className="mt-4 bg-[#131926] text-white py-2 px-4  font-[400] rounded-md transition duration-300 hover:bg-[#18191bb8]"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Packages;
