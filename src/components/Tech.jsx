import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    
    <div className="text-white font-black md:text-[50px] sm:text-[47px] xs:text-[40px] text-[30px]">
      <h2>Technologies.</h2>
    </div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

const WrappedTech = SectionWrapper(Tech, "");
export default WrappedTech;