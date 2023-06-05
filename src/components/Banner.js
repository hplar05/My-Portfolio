import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[80vh] lg:min-h-[80vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* Your text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false, amount
                  : 0.7
              }}
              className='text-[57px] font-bold leading-[0.8] lg:text-[100px]'>
              Ralph <span>Saladino</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false, amount
                  : 0.7
              }}
              className='mb-6 text-[33px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Mobile Dev',
                  2000,
                  'Web Dev',
                  2000,
                  'Aspiring Student',
                  2000,
                  'Eating Machine',
                  2000,
                ]}
                speed={40}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false, amount
                  : 0.7
              }}
              className='mb-8 max-w-lg mx-auto lg:mx-0 '>
              I am a passionate web development student, constantly seeking to expand my knowledge in this field. I find the dynamic nature of web development fascinating and enjoy discovering new possibilities.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false, amount
                  : 0.7
              }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
            { }
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false, amount
                  : 0.7
              }}
              className='flex text-[20px] gap-x-5 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/hplar05'>
                <FaGithub />
              </a>
              <a href='https://www.facebook.com/nasus.main.16'>
                <FaFacebook />
              </a>
              <a href='#'>
                <FaYoutube />
              </a>
            </motion.div>
          </div>
          {/* Modified image */}
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]'>
            <img
              src={Image}
              alt=''
              className='rounded-full ' // Replace 'h-50' with the desired height class
              width='350px' // Replace '600px' with the desired width value
            />
          </motion.div>



        </div>
      </div>
    </section>
  );
};

export default Banner;




