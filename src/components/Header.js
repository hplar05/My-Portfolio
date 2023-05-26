import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-start">
          <a href="#">
            <img src={Logo} alt="Logo" className="w-28" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
