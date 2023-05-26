import React from 'react';
//import icon
import {BiHomeHeart, BiUser} from 'react-icons/bi';
import {BiDetail, BiBriefcase, BsChatSquare, BiPhoneCall} from 'react-icons/bi';
//link
import { Link } from 'react-scroll'
const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>

    <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full 
    max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
      <Link to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiHomeHeart />
      </Link>

      <Link to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiUser />
      </Link>

      <Link to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiDetail />
      </Link>

      <Link to='work' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiBriefcase />
      </Link>

      <Link to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
      <BiPhoneCall />
      </Link>

    </div>
  </div>
  </nav>
  );
};

export default Nav;
  