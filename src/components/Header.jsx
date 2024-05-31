import Marquee from 'react-fast-marquee';
import React, { useEffect, useState } from 'react';

const Header = ({ title, cta }) => {
    return (
        <div className='font-madefor flex text-center bg-octo-green-900 h-full'>

            {/* TITLE CTA AND MENTIONS */}
            <div className='w-full p-4 text-center relative flex justify-center 
            sm:px-20 sm:justify-start
            '>

                {/* TITLE AND CTA */}
                <div className='  flex flex-col  self-center mb-12 just'>
                    <h1 className='text-[40px] font-normal px-5 center  font-madefor text-octo-green-500  text-left leading-tight mb-14 
                    sm:text-6xl sm:px-0 sm:block
                    md:text-7xl 
                    base:max-w-md base:text-[55px]
                    xl:max-w-full xl:text-7xl
                    ' 
                    dangerouslySetInnerHTML={{ __html: title }}></h1>

                    {/* CTA */}
                    <button className='cta bg-red-500 max-w-sm'>
                      <img src="/images/office-woman.png" alt="Comercial agent" className='h-11 bg-octo-pink rounded-full' />
                      {cta}
                      </button>
                </div>

                {/* MENTIONS */}
                <div className='bg-octo-green-100 w-[100vw] h-[148px] -mx-20 absolute text-left bottom-0'>
                    <div className='relative'>
                        <div className='mentions-container'>
                            <h3 className='z-10'>As seen on!</h3>
                        </div>
                        <img src='/images/arrow.svg' alt='Arrow' className='absolute left-60 bottom-0 z-20 hidden sm:block' />
                    </div>

                    <Marquee autoFill className='z-0'>
                        <ul className='flex gap-14 items-center mt-[26px] px-7'>
                            <li>
                                <img src='/images/logos/TechCrunch.svg' alt='TechCrunch' />
                            </li>
                            <li>
                                <img src='/images/logos/Forbes.svg' alt='Forbes' />
                            </li>
                            <li>
                                <img src='/images/logos/TWSJ.svg' alt='The Wall Street Journal' />
                            </li>
                        </ul>
                    </Marquee>
                </div>
            </div>

            {/* IMG CONTAINTER */}
            <div className='w-[48%] min-w-[563px] text-center relative hidden base:block'>

                {/* PENTAGON CONTAINER */}
                <div className='pentagon-container '>
                        {/* TITLE */}
                        <div className='pentagon-title'>
                            <p className='-rotate-90 font-black'>COVERED</p>
                        </div>
                        <div className=' w-full items-start justify-center z-30 flex flex-col text-octo-green-900 pl-12'>
                          
                          {/* AMOUNT COVERED */}
                          <div className='relative font-extrabold text-[45px] leading-tight'>
                            <div className="text-[23px] h-[57px] w-[57px] content-center rounded-full bg-octo-green-500 absolute -z-10 -left-10 bottom-4 pt-1">
                              <span className=''>$</span>
                            </div>
                          <span>500K</span>
                          </div>

                          <span className='text-[23px] font-semibold'>$10.99 / month</span>

                        </div>
                </div>

                {/* IMG */}
                <div className='image-container'>
                    <img
                        className='absolute bottom-0 w-full	'
                        src='public\images\family-export.png'
                        alt='Family Insurance'
                    />
                </div>

            </div>
        </div>
    );
};

export default Header;
