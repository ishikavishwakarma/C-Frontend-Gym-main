import React, { useState } from "react";
import Lazy from "./Lazy";

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
      src: "/images/Screenshot 2024-03-09 143131.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 141101.png",
      type: "image",
    },
    
    {
      src: "/images/Screenshot 2024-03-09 141147.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 141005.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 143026.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 140927.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 140856.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 140824.png",
      type: "image",
    },
   
  ];


  var data = [
    {
      src: "/images/Screenshot 2024-03-09 143026.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 140927.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 140856.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 140824.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 140536.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 135740.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 143131.png",
      type: "image",
    },
    {
      src: "/images/Screenshot 2024-03-09 141147.png",
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
    <div className="flex  items-center justify-center w-[100%] ">
      <div className="text-white flex items-center gap-4  justify-center lg:items-start lg:justify-start flex-wrap sm:gap-11 sm:p-20">
        {data1.map(({ src }, i) => {
          return (
            <div className="sm:w-[30vw] w-[42vw]  md:w-[20vw] h-[200px]  overflow-hidden" key={i} onClick={() => openImagePopup(src)}>
               
              <img
                src={src}
                alt={`Image ${i}`}
                className="border-2 rounded transition-all border-[#18191B] border-solid xl:border-4 w-full h-full object-cover object-center hover:scale-[1.2] animateTabImage"
              />
          
              
           
            </div>
          );
        })}
      </div>
      {selectedImage && (
        <div className="fixed top-0   left-0 w-full h-screen z-40 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative z-20 rounded overflow-hidden max-w-[80vw] h-[50vh] sm:h-[60vh] sm:max-w-[50vw] w-fit  ">
            <div
              className="absolute z-40 top-0 right-0 cursor-pointer text-black h-fit w-fit p-3  text-3xl "
              onClick={closeImagePopup}
            >
              &times;
            </div>
            <img
              src={selectedImage}
              alt="Popup"
              className="w-full z-50 h-full object-cover"
            />
          
          </div>
        </div>
      )}
    </div>
  );
  const T2Component = () => (
    <div className="flex  items-center justify-center w-[100%] ">
    <div className="text-white flex items-center gap-4 justify-center lg:items-start lg:justify-start flex-wrap sm:gap-11 sm:p-20">
      {data.map(({ src }, i) => {
        return (
          <div className="sm:w-[30vw] w-[42vw]  md:w-[20vw] h-[200px] overflow-hidden" key={i} onClick={() => openImagePopup(src)}>
           
              <img
                src={src}
                alt={`Image ${i}`}
                className="border-2 rounded transition-all border-[#18191B] border-solid xl:border-4 w-full h-full object-cover object-center hover:scale-[1.2] animateTabImage"
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
            
            <img
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
         
             <img
               src={src}
               alt={`Image ${i}`}
               className="border-2 rounded transition-all border-[#18191B] border-solid xl:border-4 w-full h-full object-cover object-center hover:scale-[1.2] animateTabImage"
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
           
            <img
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
                className="border-2 rounded  border-[#18191B]  border-solid xl:border-4 w-[30vw] md:w-[20vw] object-cover object-center h-[200px] hover:scale-[1.2] animateTabImage "
              ></Lazy>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className=" items-center pt-20   md:items-start    min-h-[75vh] py-[20px] flex justify-center w-[100%]">
      <div className="w-full h-full flex-col text-white  flex items-center">
        <div className="flex md:gap-[15px]  pb-[25px] text-white font-[700] flex-wrap items-center justify-center">
          <div
            onClick={() => setCurrent(1)}
            className={`tabs  h-[40px] w-[150px] py-2 px-2 ${
              current === 1 ? "bg-[#F3D302]" : ""
            } text-center cursor-pointer text-sm align-center flex items-center justify-center`}
          >
            Equipment
          </div>
          <div
            onClick={() => setCurrent(2)}
            className={`tabs h-[40px] w-[150px] py-2 px-2 ${
              current === 2 ? "bg-[#F3D302]" : ""
            } text-center cursor-pointer text-sm align-center flex items-center justify-center`}
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
        <div className="w-full pb-10 pt-10">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Tab;
