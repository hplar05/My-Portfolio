import React from 'react';
import { motion } from 'framer-motion'
import Logo from '../assets/logo2.png';

const Header = () => {
  return (
    <header className="py-3">
    <div className="container lg:mx-4">
      <div className="flex justify-between items-center min-h-[4vh] lg:min-h-[4vh]">
        <a href="#">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: '2rem', borderRadius: '10%' }}
          />
        </a>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
