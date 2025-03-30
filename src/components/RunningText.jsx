import React from "react";
import Charles from '../assets/BrandLogo/Charles.png'
import Gucci from '../assets/BrandLogo/Gucci.png'
import Zara from '../assets/BrandLogo/Zara.png'
const RunningText = () => {
  return (
    <div className="w-full overflow-hidden  flex items-center h-12 md:h-16 ">
      <div className="text-white text-lg font-bold whitespace-nowrap animate-running  w-full flex flex-row items-center gap-5 ">
        <img src={Charles} alt="" className="h-[90%] w-[200px]" />
        <img src={Gucci} alt="" className="h-[90%] w-[70px]" />
        <img src={Zara} alt="" className="h-[90%] w-[70px]"/>
      </div>
    </div>
  );
};

export default RunningText;
