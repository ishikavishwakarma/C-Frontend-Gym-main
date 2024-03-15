// LocationIcon.js

import { useRouter } from "next/router";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const LocationIcon = () => {
  const latitude = "";
  const longitude = "";
  const router = useRouter();

  const handleClick = () => {
    // Redirect to the map page with latitude and longitude as query parameters
    router.push(
      `https://www.google.com/maps/place/FITNESS+ICON+GYM/@23.30905,77.4166569,15z/data=!4m2!3m1!1s0x0:0xf7d941b4d407a100?sa=X&ved=2ahUKEwid2qiWt7qEAxVSbPUHHWu8CucQ_BJ6BAgUEAA&cshid=1708449761005922`
    );
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="flex items-center gap-1 text-sm">
        <IoLocationSharp className="text-[#FAB207]" />
        {/* <p>Location</p> */}
        <p className="text-sm">Karond,Bhopal</p>
      </div>
    </div>
  );
};

export default LocationIcon;
