// src/Navbar.jsx
import React from 'react';

const Navbar = ({ menu }) => {
  return (
    <nav className=" font-madefor py-7 px-20 text-white absolute w-full z-50">
      <div className="container flex items-center justify-between">
      <div className=' flex items-center'>
        {/* LOGO */}
          <a href="#">
          <img className="h-9 w-[139]" src="/images/logos/octo-logo.svg" alt="" srcset="" />
          </a>

        {/* NAVBAR FIRST ITEMS */}
        <ul className="ml-14 flex gap-11 font-bold text-base ">
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.link} className='text-animation'>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* LOG AND QUOTE */}
      <ul className="pl-14 flex items-center gap-11 font-bold text-base ">
          <li>
            <a href="#" className='text-animation'>Log in</a>
          </li>
          <li className='bg-octo-green-900 px-8 py-3.5 text-animation'>
            <a href="">Get a quote</a>
          </li>
          
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;
