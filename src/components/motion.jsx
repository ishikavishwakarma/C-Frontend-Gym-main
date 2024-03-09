import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingAnimation = () => {
  const [counter, setCounter] = useState(0);
  const [isRevealTriggered, setIsRevealTriggered] = useState(false);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) => Math.min(counter + 1, 100)); // Ensure counter maxes out at 100
    }, 25);

    return () => clearInterval(count);
  }, []);

  useEffect(() => {
    if (counter === 100) {
      setIsRevealTriggered(true);
    }
  }, [counter]); // Track counter changes for reveal trigger

  const revealAnimation = () => ({
    width: 0,
    height: 0,
    opacity: 0,
    transition: { duration: 0.7 },
  });
  return (
    <div
      className={` ${
        isRevealTriggered ? "w-[0vw] h-[0vh] hidden" : "w-[100vw] h-[100vh]"
      }
      }] bg-gray-900 flex items-center justify-center relative`}
    >
      <motion.div
        className="h-2 bg-orange-500 absolute top-[50%] left-0"
        animate={isRevealTriggered ? { width: "0%" } : { width: "100%" }}
        transition={{ duration: 1.2, delay: 0.7 }}
      />
      <motion.div
        className="h-2 bg-white absolute top-0 left-0"
        animate={isRevealTriggered ? revealAnimation : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="h-2 bg-white absolute top-0 left-0"
        animate={isRevealTriggered ? { width: "0%" } : { display: "block" }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="h-full bg-gray-900 absolute top-0 left-0"
        animate={isRevealTriggered ? { width: "0%" } : { display: "block" }}
        transition={{ duration: 0.7, delay: 0.5 }}
      />

      <p className="text-white text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {counter}%
      </p>
    </div>
  );
};

export default LoadingAnimation;
