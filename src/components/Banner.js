import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className="container mx-auto">
        <div>
          {/* Your text */}
          <div></div>
          {/* Modified image */}
          <div className="">
            <img
              src={Image}
              alt=''
              className="w-80 h-80 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
