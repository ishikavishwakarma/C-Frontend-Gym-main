import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollButton = () => {
  const [visible, setVisible] = useState(true); // Initially hidden

  const scrollTop = () => {
    window.document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {visible && (
        <button
          onClick={scrollTop}
          className="fixed z-20 right-6 bottom-6 bg-blue-500 text-white rounded-full p-2 shadow-md hover:bg-blue-600 focus:outline-none transition duration-300"
        >
          <IoIosArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;