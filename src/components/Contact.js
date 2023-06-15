import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lxj0psa', 'template_iji3ion', form.current, 'dYa18ARENP1rBSqMx')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (<section className='py-16 lg:selection min-h-[90vh] lg:min-h-[98vh] flex items-center' id='contact'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>

        <div className='text-black flex-1 flex justify-start'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 dark:text-white'>
              Contact Me <br /> anytime!</h2>
          </div>
        </div>

        <form  ref={form} onSubmit={sendEmail} className='text-black dark:border-white flex-1 border border-black rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-trasparent dark:bg-gray border-b border-black dark:border-white py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all user_name' name="user_name" type="text" placeholder='Your name' required />
          <input className='bg-trasparent border-b border-black dark:border-white py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all email' name="user_name" type="email" placeholder='Your email' required />
          <textarea className='bg-trasparent border-b border-black dark:border-white py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all resize-none mb-12 message' name="message"  placeholder='Your Message' required></textarea>
          <input className='btn btn-lg text-center dark:text-black' type="submit" value="Send Message"/>
        </form>
      </div>
    </div>
  </section>
  );
};

export default Contact;
