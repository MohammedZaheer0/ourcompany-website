import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const FeaturedCaseStudy = () => {
  const boxRef = useRef(null);
  const parentRef = useRef(null);

  // Capture the mouse movement within the parent div and animate the circle div
  useEffect(() => {
    const handleMouseMove = (e) => {
      const parent = parentRef.current.getBoundingClientRect(); // Get parent bounds
      const mouseX = e.clientX - parent.left; // Get mouse X position relative to parent
      const mouseY = e.clientY - parent.top; // Get mouse Y position relative to parent

      gsap.to(boxRef.current, {
        duration: 0.5,
        x: mouseX - boxRef.current.offsetWidth / 2, // Center the circle inside parent
        y: mouseY - boxRef.current.offsetHeight / 2,
        ease: 'power3.out',
      });
    };

    // Attach mousemove event listener to the parent div
    const parentElement = parentRef.current;
    parentElement.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <main className='h-[100vh] md:h-[60vh] xl:h-[90vh] w-[100%] grid md:grid-cols-2 grid-cols-1 justify-between items-center'>
        
        
        <div className='md:w-[80%] w-[95%] order-2 md:order-1'>
          <p className='text-[#898A91] font-bold mb-5'>FEATURED CASE STUDY</p>

          <h2 className='xl:text-4xl lg:text-3xl md:text-2xl  text-[1.5rem] my-5 font-bold homeparentHeading'>
            <span className='homeHeadingTag'>
              <Link to='/projects/thedailymemphian'>The Daily Memphian</Link>
            </span>
          </h2>

          <p className='text-[#575963] text-[18px] font-medium'>
            Memphians love their new source for serious local journalism. From
            first intro to first edition in 90 days, we designed and built a
            startup nonprofit publication that's innovating civic journalism.
          </p>
        </div>



        {/* Parent container */}
        <div className='w-[95%] mx-auto flex justify-end items-end h-[90%] p-20 relative overflow-hidden order-1 md:order-2' ref={parentRef}>
          {/* Circle div to move */}
          <div
            className='FeaturedCaseStydyInnerDiv absolute'
            ref={boxRef}
            style={{
              width: '100%',
              height: '100%',
              border: '3px solid orange',
              borderRadius: '50%',
              position: 'absolute',
              transition:'all 0.3s ease',
              top: 0,
              left: 0,
            }}
          ></div>
          <img
            src='/assets/FeaturedCaseStudyImage.jpg'
            alt='FeaturedCaseStudyImage'
            className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
          />
        </div>


      </main>
    </>
  );
};

export default FeaturedCaseStudy;
