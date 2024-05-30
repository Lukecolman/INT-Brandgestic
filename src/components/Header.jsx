import Marquee from "react-fast-marquee";
import React, { useEffect, useState } from 'react';

const Header = ({ title, cta }) => {

  return (
    <div className="font-madefor flex text-center bg-octo-green-900 h-full">

      {/* TITLE CTA AND MENTIONS */}
    <div className="w-full p-4 text-center px-20  relative">
      <div>
      <h1 className="font-madefor text-2xl font-bold" dangerouslySetInnerHTML={{ __html: title  }}></h1>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">{cta}</button>
      </div>

      {/* MENTIONS */}
      <div className='bg-octo-green-100 w-[100vw] h-[148px] -mx-20 absolute text-left bottom-0'>
        <div className='relative'>
        <div className='mentions-container '>
          <h3 className='z-10'>Ass seen on!</h3>
        </div>
          <img src="/images/arrow.svg" alt="Arrow" className='absolute left-60 bottom-0 z-50' />
        </div>

      <Marquee autoFill className="z-0"> 
        <ul className='flex gap-14 items-center mt-[26px] px-7'>
          <li>
            <img src="/images/logos/TechCrunch.svg" alt="TechCrunch" />
          </li>
          <li>
            <img src="/images/logos/Forbes.svg" alt="Forbes" />
          </li>
          <li>
            <img src="/images/logos/TWSJ.svg" alt="The Wall Street Journal" />
          </li>
        </ul>
      </Marquee>
      </div>


    </div>

    {/* IMG CONTAINTER */}
    <div className="w-[48%] min-w-[563px] text-center relative">
              {/* PENTAGON CONTAINER */}
              <div className='pentagon-container '>
            <div>
                <div className='pentagon-title'>
                    <p className='-rotate-90 font-black'>COVERED</p>
                </div>
                <div>
                    AMOUNT
                </div>
            </div>
        </div>

      <div className="image-container"	>
      <img className="absolute bottom-0 w-full	" src="public\images\family-export.png" alt="Family Insurance" />

      </div>

        {/* IMG */}
    </div>

    </div>
  );
};

export default Header;
