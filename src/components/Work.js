import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';

import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'

const Work = () => {
  return <section className='section' id='work'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-x-10 '>
        <div
          variants={fadeIn('right', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once: false, amount
              : 0.3
          }}
          className='flex-1 flex flex-col gap-y-20 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Latest <br />
              Work.
            </h2>
            <p className='max-w-sm mb-5 text-black'>
            I have immersed myself in web and mobile app development, working on various projects to enhance my skills and expertise. Here's a brief overview of my notable works in creating web and mobile apps.
            </p>
            <a href="https://github.com/hplar05/">
              <button className='btn btn-sm'>View all project</button> </a>
          </div>

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className=''>
                Flutter Project
              </span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>THE GYM STREET COACH</span>
            </div>
          </div>
        </div>

        <div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once: false, amount
              : 0.3
          }}
          className='flex-1 flex flex-col gap-y-5'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className=''>
                Html, Css, and Javascript Project
              </span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>SEABEAWARDS</span>

            </div>

          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className=''>
                Html, Css, and Javascript Project
              </span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>PPSLAWARDS</span>

            </div>

          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Work;
