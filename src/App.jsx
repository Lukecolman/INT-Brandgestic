import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
// import Header from './Header';
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <>
      <Navbar menu={data.nav} />
      {/* <Header title={data.home['header-title']} cta={data.home['header-cta']} /> */}
    </>
  );
}

export default App;
