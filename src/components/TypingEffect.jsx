import React from "react";
import Typewriter from "typewriter-effect";
const TypingEffect = () => {
  return (
    <div className="absolute left-[50px] text-2xl font-semibold capitalize">
      <Typewriter
        options={{
          strings: ["word best gym", "is best", "is cous"],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
      />
    </div>
  );
};

export default TypingEffect;
