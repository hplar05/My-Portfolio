import React, { useState, useEffect } from 'react';
import {PacmanLoader} from 'react-spinners/';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import Work from './components/Work';
import About from './components/About'
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import DarkMode from './components/DarkMode/DarkMode';
import "./App.css";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 overflow-hidden' class="App-header"
    >
      <Cursor />
      {loading ? (
        // Loading screen
        <div className='flex items-center justify-center h-screen'>
          <PacmanLoader
            color='#000000' // Set the desired color
            loading={loading}
            size={50}
            aria-label='Pacman Loader'
            data-testid='loader'
          />
        </div>
      ) : (
        // Content after loading
        <>
          <div className='flex flex-auto justify-between'>
            <Header />
            <div className='flex'>
              <DarkMode />
            </div>
          </div>
          <Banner />
          <Nav />
          <About />
          <Work />
          <Contact />
          <div className='h-[1000px]'></div>
        </>
      )}
    </div>
  );
};

export default App;
