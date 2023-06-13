import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';

const Contact = () => {
  return (<section className='py-16 lg:selection min-h-[90vh] lg:min-h-[95vh] flex items-center' id='contact'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>

        <div className='text-black flex-1'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work <br /> together!</h2>
          </div>
        </div>

        <form className='text-black flex-1 border border-black rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-trasparent border-b border-black py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all' type="text" placeholder='Your name' required />
          <input className='bg-trasparent border-b border-black py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all' type="email" placeholder='Your email' required />
          <textarea className='bg-trasparent border-b border-black py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all resize-none mb-12' placeholder='Your Message' required></textarea>
          <button className='btn btn-lg'>Send Message</button>
        </form>
      </div>
    </div>
  </section>
  );
};

export default Contact;
