import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="py-2">
      <div className="container mx-auto">
      <div className="flex justify-between items-center min-h-[4vh] lg:min-h-[4vh]">
  <a href="#">
    <img src={Logo} alt="Logo" style={{ height: '2rem' }} /> {/* Adjust the height using inline styles */}
  </a>

</div>

      </div>
    </header>
  );
};

export default Header;
