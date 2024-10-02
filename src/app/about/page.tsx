"use client";


import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import 'aos/dist/aos.css';
import AOS from 'aos';


const AboutPage: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="container mx-[5%] my-8 px-4 py-8">
      <div className='flex flex-col sm:flex-row sm:gap-20'>
        <h2 className="sm:text-7xl text-4xl font-bold mb-4 text-[#120081]" data-aos="fade-right" data-aos-duration="1000">About Us</h2>
        <p className="text-justify" data-aos="fade-left" data-aos-duration="1000">Welcome to <span className="text-[#8475e7] font-bold">My Blog</span>, your go-to source for technology-related informations. We're dedicated to providing you with the <span className="text-[#8475e7] font-bold ">best up-to-date tech news</span>, with a focus on quality, reliability, and uniqueness.
        My Blog was founded in 2024 by IEEE's Web Development Team with the goal of educating the society. What started as a passion project has blossomed into a thriving online community where enthusiasts and experts alike can come together to share insights, experiences, and inspiration.
        We believe that a blog is more than just a collection of articles; it's a community. We encourage you to join the conversation by commenting on posts, sharing your own experiences, and connecting with us on social media.
        We love hearing from our readers! If you have any questions, suggestions, or just want to say hello, feel free to contact us through email or social media.
        </p>
      </div>
      <div className='text-center' data-aos="fade-up" data-aos-duration="1000">
        <TypeAnimation
          sequence={[
            'Meet Our Team!',
            1000,
            '',
            1000,
            'Meet Our Team!',
            1000
          ]}
          wrapper="span"
          speed={10}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
          className='text-4xl font-bold mt-10 mb-10 text-[#120081]'
        />
        <div className='flex flex-col gap-5'>
          <div className='border-4 text-left px-5 py-3 rounded-xl'>
            <h3 className='font-semibold text-[#8475e7] text-xl'>UI/UX</h3>
            <p className='pt-2'>Farras, Varel</p>
          </div>
          <div className='border-4 text-left px-5 py-3 rounded-xl'>
            <h3 className='font-semibold text-[#8475e7] text-xl'>Front End</h3>
            <p className='pt-2'>Farhan, Riswandha, Allen, Chika, Tian</p>
          </div>
          <div className='border-4 text-left px-5 py-3 rounded-xl'>
            <h3 className='font-semibold text-[#8475e7] text-xl'>Back End</h3>
            <p className='pt-2'>Alvin</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AboutPage;