import React, { useEffect, useRef } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  const rectangleRef = useRef(null);
  const circleRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const parentRect = parentRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to parent div
      const mouseX = e.clientX - parentRect.left;
      const mouseY = e.clientY - parentRect.top;
      
      const halfWidth = parentRect.width / 2;
      const halfHeight = parentRect.height / 2;
      
      // Calculate movement for rectangle and circle based on mouse position
      const moveX = ((mouseX - halfWidth) / halfWidth) * 50; // Scale movement to -50 to 50
      const moveY = ((mouseY - halfHeight) / halfHeight) * 50;

      // Move the rectangle in one direction (left/up)
      gsap.to(rectangleRef.current, {
        x: -moveX,
        y: -moveY,
        ease: 'power3.out',
      });

      // Move the circle in the opposite direction (right/down)
      gsap.to(circleRef.current, {
        x: moveX,
        y: moveY,
        ease: 'power3.out',
      });
    };

    const parentElement = parentRef.current;
    parentElement.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle hover on the button to reset shapes to their original positions
  const handleHoverButton = () => {
    gsap.to(rectangleRef.current, {
      duration: 0.5,
      x: 0,
      y: 0,
      top: 0,
      rotate:0,
      borderColor:'green',
      right: 0, // Restore the rectangle position
      ease: 'power3.out',
    });

    gsap.to(circleRef.current, {
      duration: 0.5,
      x: 0,
      y: 0,
      top: 0,
      right: '0px', // Restore the circle position
      borderColor:'green',
      ease: 'power3.out',
    });
  };




  const handleMouseLeave = () => {
    gsap.to(rectangleRef.current, {
      duration: 0.5,
      x: 0,
      y: 0,
      top: 20,
      rotate:45,
      borderColor:'gray',
      right: '-50px',
      ease: 'power3.out',
    });

    gsap.to(circleRef.current, {
      duration: 0.5,
      x: 0,
      y: 0,
      top: '20px',
      right: '50px',
      borderColor:'gray',
      ease: 'power3.out',
    });
  };




  return (
    <footer>
    <div className='w-[100%] my-24 grid grid-cols-2 justify-between items-center'>
      {/* First Div */}
      <div className=''>
        <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-[1.5rem] font-bold'>Let’s make something great together.</h1>
        <div className='text-[#D35400]'>
          <h2
            onMouseEnter={handleHoverButton} onMouseLeave={handleMouseLeave}
            className='homeparentHeading my-5 lg:text-2xl font-bold flex gap-3 items-center border-[2px] border-[#D35400] w-fit py-2 px-3 lg:py-4 lg:px-6 transition-all cursor-pointer hover:border-[#994e1c] hover:text-[#57361f]'
          >
            <span><Link to='/contact'>Contact Us</Link></span>
            <FaArrowRightLong />
          </h2>
        </div>
      </div>

      {/* Second Div (Shapes) */}
      <div ref={parentRef} className='relative h-[100%] w-[100%] flex justify-end overflow-hidden md:overflow-visible'>
        <div
          ref={rectangleRef}
          className='absolute top-0 right-24 rotate-45 h-[150px] w-[150px] border-[2px] border-[gray]'></div>
        <div
          ref={circleRef}
          className='absolute top-0 right-0 h-[150px] w-[150px] rounded-full border-[2px] border-[gray]'></div>
      </div>
    </div>



    <div className='md:my-20 mt-20 mb-10'>
      <h3 className='lg:w-[50%] md:w-[70%] w-[100%] font-medium text-[20px] my-7'>Simple Focus is a happy team of digital designers and developers. We’re fully distributed, with concentrations in Memphis and Chattanooga, Tennessee and employees collaborating across seven time zones.</h3>


      <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center'>

          <div className='order-2 md:order-1 w-[100%]'>
          <p className='my-8 font-bold text-[18px] md:text-[15px] lg:text-[18px]'>We are also behind 
          <span className='text-[#D35400] cursor-pointer hover:text-[#724223]'> Audience Ops, </span> 
          <span className='text-[#D35400] cursor-pointer hover:text-[#724223]'>ARPU, </span> 
          <span className='text-[#D35400] cursor-pointer hover:text-[#724223]'>Sifter, </span> 
          <span className='text-[#D35400] cursor-pointer hover:text-[#724223]'>Ballpark </span> and more.</p>
          
          <div className='flex gap-10 text-2xl text-[#D35400] w-[100%] mx-auto'>
            <FaTwitter className='hover:text-[#724223] cursor-pointer'/>
            <FaLinkedin className='hover:text-[#724223] cursor-pointer'/>
            <FaInstagram className='hover:text-[#724223] cursor-pointer'/>
            <FaPinterest className='hover:text-[#724223] cursor-pointer'/>
            <FaFacebook className='hover:text-[#724223] cursor-pointer'/>
          </div>

          </div>

        <div className='w-[100%] h-[100%] flex md:justify-end justify-start gap-10 items-center order-1 md:order-2'>
          <img src="/assets/footer500.png" alt="footer500" className='w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]'/>
          <img src="/assets/footer360.png" alt="footer360" className='w-[70px] lg:w-[100px] h-[70px] lg:h-[100px]'/>
        </div>

      </div>
    
    </div>



    </footer>
  );
};

export default Footer;
