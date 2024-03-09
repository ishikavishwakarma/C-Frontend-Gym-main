import React from "react";

const Programs = () => {
  return (
    <div className="flex items-center   justify-center min-h-[89vh] px-[20px] py-[20px]">
      <div className="flex flex-col justify-between max-w-screen-xl w-full items-center bg-[#18191B]">
        <p className="text-[30px] font-thin uppercase pt-10">What We Do</p>
        <div>
          <div className="flex items-center  gap-2  my-[25px]">
            <div className="w-[30vw] h-[1px] bg-[#dadada8f]"></div>
            <div className="w-[7px] h-[7px] bg-[#DCB800] border-none rounded-full"></div>
            <div className="w-[30vw] h-[1px] bg-[#dadada8f]"></div>
          </div>
        </div>

        <div className="flex w-full items-center pt-10 justify-between flex-col lg:flex-row gap-[10px] lg:gap-0 md:px-2">
          <div className="lg:w-[380px] bg-zinc-800 p-6 rounded w-fit flex flex-col gap-[10px]">
            <p>
              <span className="text-[#FAB207] font-[500] "> Personalized </span>Fitness
            </p>

            <p className="text-[13.5px] font-extralight md:text-[13px]">
              We understand that every individual has unique fitness goals and
              needs. That&apos;s why we offer personalized fitness solutions tailored
              to each member. Whether you&apos;re aiming to lose weight, build
              muscle, or improve your overall health, our experienced trainers
              will work closely with you to develop a customized workout plan
              that suits your lifestyle and preferences.
            </p>

            <img
              src="/images/Screenshot 2024-03-09 140856.png"
              className="w-full h-[200px] rounded object-cover object-center"
              alt=""
            />
          </div>

          <div className="lg:w-[380px] bg-zinc-800 p-6 rounded w-fit flex flex-col  gap-[10px]">
            <p>
              {" "}
              <span className="text-[#FAB207] font-[500]">Expert </span> Guidance and
              Support
            </p>
            <p className="text-[13.5px] font-extralight md:text-[13px]">
              Our team of certified trainers is committed to helping you achieve
              your fitness goals safely and effectively. With their expertise
              and guidance, you&apos;ll receive personalized coaching, technique
              correction, and motivational support every step of the way.
              Whether you&apos;re new to exercise or a seasoned athlete, our trainers
              are here to challenge you, inspire you, and celebrate your
              progress.
            </p>
            <img
              src="/images/_S0A1753.JPG"
              className="w-full h-[200px] rounded object-cover object-center"
              alt=""
            />
          </div>

          <div className="lg:w-[380px] bg-zinc-800 p-6 rounded w-fit flex flex-col  gap-[10px]">
            <p>
              {" "}
              <span className="text-[#FAB207] font-[500]">Building </span> a Supportive
              Community
            </p>
            <p className="text-[13.5px] font-extralight md:text-[13px]">
              At The Fitness Icon Gym, we believe that a strong sense of
              community is essential for long-term success in fitness. That&apos;s
              why we foster a supportive and inclusive environment where members
              can connect, motivate each other, and celebrate their
              achievements. From group classes to social events, our gym
              provides opportunities for members to build meaningful
            </p>
            <img
              src="/images/s3.jpg"
              className="w-full h-[200px] rounded object-cover object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
