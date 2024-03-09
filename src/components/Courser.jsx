import { useState, useEffect } from "react";
import { CgGym } from "react-icons/cg";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [grayscale, setGrayscale] = useState(false);
  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      updateCursorGrayscale(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const updateCursorGrayscale = (x, y) => {
    const element = document.elementFromPoint(x, y);
    if (element) {
      const bgColor = window.getComputedStyle(element).backgroundColor;
      setGrayscale(bgColor === "rgba(0, 0, 0, 0)"); // Set grayscale if background color is transparent
    }
  };

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{ left: position.x, top: position.y }}
    >
      {/* Custom cursor with dynamic grayscale and animation */}
      <div>
        <CgGym className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default CustomCursor;
