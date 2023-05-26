import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <a href="#">
            <img src={Logo} alt="Logo" className="w-28" />
          </a>
          <button className='btn btn-sm cursor-pointer'>More about me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
