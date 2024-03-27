import React, { useState } from "react";
import Lazy from "./Lazy";
import Image from "next/image";

const Tab = () => {
  const [current, setCurrent] = useState(1);
  

  // Function to render the appropriate component based on the current state
  const renderComponent = () => {
    switch (current) {
      case 1:
        return <T1Component />;
      case 2:
        return <T2Component />;
      case 3:
        return <T3Component />;
      case 4:
        return <T4Component />;
      default:
        return null;
    }
  };

  var data1 = [
    {
      src: "/images/gym images/IMG_6371.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6445.png",
      type: "image",
    },
    
    {
      src: "/images/Screenshot 2024-03-09 140927.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6447.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6444.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6450.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6448.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6385.png",
      type: "image",
    },
   
  ];


  var data = [
    {
      
      src: "/images/gym images/IMG_6461.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6382.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6399.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6463.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6425.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6418.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6403.png",
      type: "image",
    },
    {
      src: "/images/gym images/IMG_6370.png",
      type: "image",
    },
    
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePopup = (src) => {
    setSelectedImage(src);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };
  // Define functional components for each tab content
  const T1Component = () => (
    <div className="flex  items-center bg-[#111723] justify-center w-[100%] ">
      <div className="text-white flex  items-center mt-10 lg:gap-5 xl:p-20 gap-4 xl:gap-10 lg:p-10 justify-center lg:items-start lg:justify-start flex-wrap sm:gap-11 sm:p-20">
        {data1.map(({ src }, i) => {
          return (
            <div className="sm:w-[30vw] w-[42vw]  xl:w-[20vw] lg:h-[320px]   lg:w-[45vw]  md:w-[20vw] h-[200px]  overflow-hidden" key={i} onClick={() => openImagePopup(src)}>
               
              <Image
           
width={700} 
height={100}               src={src}
                alt={`Image ${i}`}
                className=" rounded transition-all  xl:border-2 w-full h-full object-cover object-center hover:scale-[1.2] animateTabImage"
              />
          
              
           
            </div>
          );
        })}
      </div>
      {selectedImage && (
        <div className="fixed top-0   left-0 w-full h-screen z-40 flex items-center justify-center bg-[#111723] bg-opacity-75">
          <div className="relative z-20 rounded overflow-hidden max-w-[80vw] h-[50vh] sm:h-[60vh] sm:max-w-[50vw] w-fit  ">
            <div
              className="absolute z-40 top-0 right-0 cursor-pointer text-black h-fit w-fit p-3  text-3xl "
              onClick={closeImagePopup}
            >
              &times;
            </div>
            <Image
           
           width={500} 
           height={100}
              src={selectedImage}
              alt="Popup"
              className="w-96 z-50 h-full object-cover"
            />
          
          </div>
        </div>
      )}
    </div>
  );
  const T2Component = () => (
    <div className="flex  items-center justify-center w-[100%] ">
    <div className="text-white flex items-center gap-4 xl:gap-10  justify-center lg:items-start lg:justify-start flex-wrap sm:gap-11 sm:p-20">
      {data.map(({ src }, i) => {
        return (
          <div className="sm:w-[30vw] w-[42vw]  xl:w-[20vw] lg:h-[300px]   lg:w-[40vw]  md:w-[20vw] h-[200px] overflow-hidden" key={i} onClick={() => openImagePopup(src)}>
           
           <Image
           
           width={700} 
           height={100} 
                src={src}
                alt={`Image ${i}`}
                className=" rounded transition-all   xl:border-2 w-full h-full object-cover object-center hover:scale-[1.2] animateTabImage"
              />
            
          </div>
        );
      })}
    </div>
    {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-screen z-40 flex items-center justify-center bg-black bg-opacity-85">
          <div className="relative z-20 rounded overflow-hidden max-w-[80vw] h-[50vh] sm:h-[60vh] sm:max-w-[50vw]  min-w-[30vw] ">
            <div
              className="absolute z-40 top-0 right-0 cursor-pointer text-black h-fit w-fit px-5 py-3  text-3xl "
              onClick={closeImagePopup}
            >
              &times;
            </div>
            
            <Image
              src={selectedImage}
              alt="Popup"
              className="w-full z-50 h-full object-cover"
            />
          
          </div>
        </div>
      )}
  </div>
  );
  const T3Component = () => (
    <div className="flex  items-center justify-center w-[100%] ">
    <div className="text-white flex items-center justify-center lg:items-start lg:justify-start flex-wrap gap-0">
      {data.map(({ src }, i) => {
        return (
          <div className="w-[30vw]  md:w-[20vw] h-[200px] overflow-hidden" key={i} onClick={() => openImagePopup(src)}>
         
         <Image
           
           width={700} 
           height={100} 
               src={src}
               alt={`Image ${i}`}
               className="border-2 rounded transition-all border-[#111723] border-solid xl:border-4 w-full h-full object-cover object-center hover:scale-[1.2] animateTabImage"
             />
           
         </div>
        );
      })}
    </div>
    {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-screen z-40 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative z-20 rounded overflow-hidden h-[50vh] max-w-[80vw]  min-w-[30vw]  ">
            <div
              className="absolute z-40 top-0 right-0 cursor-pointer text-white h-fit w-fit p-3  text-3xl "
              onClick={closeImagePopup}
            >
              &times;
            </div>
           
            <Image
           
           width={700} 
           height={100} 
              src={selectedImage}
              alt="Popup"
              className="w-full z-50 h-full object-cover"
            />
          
          </div>
        </div>
      )}
  </div>
  );
  const T4Component = () => (
    <div className="flex  items-center justify-center w-[100%] ">
      <div className="text-white flex items-center justify-center lg:items-start lg:justify-start flex-wrap gap-0">
        {data.map(({ src }, i) => {
          return (
            <div className="w-[30vw]  md:w-[20vw] h-[200px] overflow-hidden" key={i}>
              <Lazy
                style={{ transition: "all 2s ease-in-out" }}
                src={src}
                className="border-2 rounded  border-[#18191B]  border-solid xl:border-2 w-[30vw] md:w-[20vw] object-cover object-center h-[200px] hover:scale-[1.2] animateTabImage "
              ></Lazy>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className=" items-center pt-20 bg-[#111723]  md:items-start   min-h-[75vh]  py-[20px] flex justify-center w-[100%]">
      <div className="w-full h-full flex-col text-white  flex items-center">
        <div className="flex md:gap-[15px]  pb-[25px] text-white font-[700] flex-wrap items-center justify-center">
          <div
            onClick={() => setCurrent(1)}
            className={`tabs xl:h-[70px] xl:w-[190px]  h-[40px] w-[150px] py-2 px-2 ${
              current === 1 ? "bg-[#F3D302]" : ""
            } text-center cursor-pointer xl:text-lg text-sm align-center flex items-center justify-center`}
          >
            Equipment
          </div>
          <div
            onClick={() => setCurrent(2)}
            className={`tabs xl:h-[70px] xl:w-[190px]  h-[40px] w-[150px] py-2 px-2 ${
              current === 2 ? "bg-[#F3D302]" : ""
            } text-center cursor-pointer xl:text-lg text-sm align-center flex items-center justify-center`}
          >
             Workout 
          </div>
          {/* <div
            onClick={() => setCurrent(3)}
            className={`tabs h-[40px] w-[150px] py-2 px-2 ${
              current === 3 ? "bg-[#FAB207]" : ""
            } text-center cursor-pointer text-sm align-center flex items-center justify-center`}
          >
           workout
          </div> */}
          {/* <div
            onClick={() => setCurrent(4)}
            className={`tabs h-[40px] w-[150px] py-2 px-2 ${
              current === 4 ? "bg-[#FAB207]" : ""
            } text-center cursor-pointer text-sm align-center flex items-center justify-center`}
          >
            Tab 4
          </div> */}
        </div>
        <div className="w-full pb-10 lg:pt-1 xl:pt-0 pt-10">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Tab;
