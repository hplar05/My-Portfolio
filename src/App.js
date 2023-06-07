import React, { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners/';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {loading ? (
        // Loading screen
        <div className='flex items-center justify-center h-screen'>
          <PacmanLoader
            color='#FF8400' // Set the desired color
            loading={loading}
            size={80}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      ) : (
        // Content after loading
        <>
          <Header />
          <Banner />
          <Nav />
          <Work />
          <Contact />
          <div className='h-[2000px]'></div>
        </>
      )}
    </div>
  );
};

export default App;
