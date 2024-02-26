import React from "react";

const Bg = () => {
  return (
    <div className="fixed w-screen h-screen z-0">
      <div className="absolute animate-rotation1 top-[-300px] left-80 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#CA5227] via-[#CA5227] to-[#CD885B] blur-3xl"></div>
      <div className="absolute animate-rotation2 top-[300px] right-80 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#CA5227] via-[#CA5227] to-[#CD885B] blur-3xl"></div>
      <div className="absolute animate-rotation3 top-40 right-80 w-80 h-80 rounded-full bg-[#3E3E3E] blur-3xl"></div>
      <div className="absolute animate-rotation4  top-60 left-80 w-[400px] h-[400px] rounded-full bg-[#3E3E3E] blur-3xl"></div>
    </div>
  );
};

export default Bg;
