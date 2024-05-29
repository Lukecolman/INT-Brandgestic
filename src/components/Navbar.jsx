// src/Navbar.jsx
import React from 'react';

const Navbar = ({ menu }) => {
  return (
    <nav className="bg-octo-green-900 font-madefor py-10 px-20 text-white">
      <div className="container flex items-center justify-between">
      <div className=' flex items-center'>
        {/* LOGO */}
        <div className="text-2xl font-bold ">
          <a href="/">OCTO</a>
        </div>

        {/* NAVBAR FIRST ITEMS */}
        <ul className="pl-14 flex space-x-12 font-bold text-base ">
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* LOG AND QUOTE */}
      <ul className="pl-14 flex items-center space-x-12 font-bold text-base ">
          <li>
            <a href="">Log in</a>
          </li>
          <li className='bg-octo-pink px-8 py-3.5'>
            <a href="">Get a quote</a>
          </li>
          
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;
