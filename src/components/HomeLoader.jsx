// Loader.js

import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-container flex flex-col justify-center items-center h-screen text-[] bg-[#18191B]">
      <TailSpin
        visible={true}
        height="90"
        width="90"
        color="#FAB207"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className="text-white text-xl font-semibold mt-[20px]">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
