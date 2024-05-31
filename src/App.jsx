import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './index.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fu6hk3qh0f.execute-api.eu-west-3.amazonaws.com/default/frontendTest');
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className='w-full h-[100vh] flex justify-center items-center bg-octo-green-900 text-octo-green-500 font-madefor font-black text-xl'>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar menu={data.nav} />
      <Header className="flex-grow" title={data.home['header-title']} cta={data.home['header-cta']} />
    </div>

  );
}

export default App;
