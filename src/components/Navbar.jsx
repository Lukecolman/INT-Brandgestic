
import React, { useState, useEffect } from 'react';

const Navbar = ({ menu }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="font-madefor py-7 px-9 text-white absolute w-full z-50 md:px-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* LOGO */}
          <a href="#" className="mt-2 h-9 w-[139px] lg:mt-0 z-50">
            <img  src="/images/logos/octo-logo.svg" alt="Octo Logo" />
          </a>

          {/* NAVBAR FIRST ITEMS */}
          <ul className="ml-14 hidden gap-11 font-bold text-base lg:flex">
            {menu.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="text-animation">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* LOG AND QUOTE */}
        <ul className="pl-14 hidden items-center gap-11 font-bold text-base lg:flex">
          <li>
            <a href="#" className="text-animation">Log in</a>
          </li>
          <li className="bg-octo-green-900 px-8 py-3.5 text-animation">
            <a href="#">Get a quote</a>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden mobile-menu-button z-50 mt-1 "
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6.19128" y="4" width="32" height="3.09896" transform="rotate(45 6.19128 4)" fill="white"/>
            <rect x="4" y="26.6274" width="32" height="3.09896" transform="rotate(-45 4 26.6274)" fill="white"/>
            </svg>
            
          ) : (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="32" height="3.09896" fill="white"/>
            <rect y="14.0989" width="32" height="3.09896" fill="white"/>
            <rect y="24.1979" width="32" height="3.09896" fill="white"/>
            </svg>

          )}
        </button>

    {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 flex flex-col items-center mobile-menu font-bold bg-octo-pink text-octo-green-900  lg:hidden">
          <ul className="flex flex-col h-full mt-44 text-left gap-9 text-4xl">
            {menu.map((item, index) => (
              <li key={index} className="fade-in">
                <a href={item.link} className="text-animation" onClick={toggleMobileMenu}>
                  {item.title}
                </a>
              </li>
            ))}
            <li className="fade-in">
              <a href="#" className="text-animation" onClick={toggleMobileMenu}>Log in</a>
            </li>
          </ul>
          <div className="bg-white px-[50px] py-[15px] text-animation fade-in text-center text-2xl mb-[67px]">
            <a href="#">Get a quote</a>
          </div>
        </div>
      )}
      </div>

    </nav>
  );
};

export default Navbar;
