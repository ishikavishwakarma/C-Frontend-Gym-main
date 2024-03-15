// pages/packages.js

import React from "react";
import Lazy from "./Lazy";

const Packages = () => {
  return (
    <div className="px-4">
      <div className="w-fit   mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Membership Packages
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Lazy
              src="/images/1.jpg"
              alt="Package 1"
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1 Month Pack
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor est nec turpis luctus, eget condimentum mi finibus.
            </p>
            <p className="text-gray-700">Price: $50</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Lazy
              src="/images/1.jpg"
              alt="Package 2"
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4 Month Pack
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor est nec turpis luctus, eget condimentum mi finibus.
            </p>
            <p className="text-gray-700">Price: $180</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Lazy
              src="/images/1.jpg"
              alt="Package 3"
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6 Month Pack
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor est nec turpis luctus, eget condimentum mi finibus.
            </p>
            <p className="text-gray-700">Price: $250</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Lazy
              src="/images/1.jpg"
              alt="Package 4"
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              12 Month Pack
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor est nec turpis luctus, eget condimentum mi finibus.
            </p>
            <p className="text-gray-700">Price: $450</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Packages;
