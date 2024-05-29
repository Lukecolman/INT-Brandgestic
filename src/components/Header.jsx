// src/Header.jsx
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [headerTitle, setHeaderTitle] = useState('');
  const [headerCta, setHeaderCta] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const response = await fetch('https://fu6hk3qh0f.execute-api.eu-west-3.amazonaws.com/default/frontendTest');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHeaderTitle(data.home['header-title']);
        setHeaderCta(data.home['header-cta']);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHeader();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading header: {error.message}</div>;
  }

  return (
    <div className="font-madefor flex text-center bg-violet-400 h-full">

    <div className="w-full p-4 text-center px-20  bg-green-300">
      <h1 className="font-madefor text-2xl font-bold" dangerouslySetInnerHTML={{ __html: headerTitle }}></h1>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">{headerCta}</button>
    </div>
    <div className="w-[48%] min-w-[48%] text-center bg-octo-pink relative">
        <div className='pentagon-container bg-blue-400 w-[328.5px] h-[150.5px] absolute'>
            <div>
                <div className='pentagon-title'>
                    <p className='-rotate-90 font-extrabold bg-red-400'>COVERED</p>
                </div>
                <div>
                    AMOUNT
                </div>
            </div>
        </div>
      <img className="absolute bottom-0	" src="https://source.unsplash.com/random/1800x1800?sig=1" alt="" />
    </div>

    </div>
  );
};

export default Header;
