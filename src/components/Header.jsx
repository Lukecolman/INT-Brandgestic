// src/Header.jsx
import React, { useEffect, useState } from 'react';

const Header = ({ title, cta }) => {

  return (
    <div className="font-madefor flex text-center bg-violet-400 h-full">

    <div className="w-full p-4 text-center px-20  bg-green-300">
      <h1 className="font-madefor text-2xl font-bold" dangerouslySetInnerHTML={{ __html: title  }}></h1>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">{cta}</button>
    </div>

    {/* IMG CONTAINTER */}
    <div className="w-[48%] min-w-[48%] text-center bg-octo-pink relative">

        {/* PENTAGON CONTAINER */}
        <div className='pentagon-container'>
            <div>
                <div className='pentagon-title'>
                    <p className='-rotate-90 font-extrabold bg-red-400'>COVERED</p>
                </div>
                <div>
                    AMOUNT
                </div>
            </div>
        </div>

        {/* IMG */}
        <img className="absolute bottom-0	" src="https://source.unsplash.com/random/1800x1800?sig=1" alt="" />
    </div>

    </div>
  );
};

export default Header;
