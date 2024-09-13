import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const HomeProjectsData = ({image,projectLink,projectDescription}) => {
  // Create refs for the parent and animated box
  const parentRefs = [useRef(null)];
  const boxRefs = [useRef(null)];

  useEffect(() => {
    // Add event listeners to each parent element
    parentRefs.forEach((parentRef, index) => {
      const box = boxRefs[index].current;

      const handleMouseMove = (e) => {
        const parent = parentRef.current.getBoundingClientRect();
        const mouseX = e.clientX - parent.left;
        const mouseY = e.clientY - parent.top;

        // Move the circle to follow the mouse
        gsap.to(box, {
          duration: 0.5,
          x: mouseX - box.offsetWidth / 2,
          y: mouseY - box.offsetHeight / 2,
          ease: 'power3.out',
        });
      };

      const handleMouseEnter = () => {
        // Show the circle on hover
        gsap.to(box, {
          duration: 0.3,
          opacity: 1, // Make the circle visible
        });
      };

      const handleMouseLeave = () => {
        // Hide the circle when mouse leaves
        gsap.to(box, {
          duration: 0.3,
          opacity: 0, // Hide the circle
          x: 0, // Reset position
          y: 0, // Reset position
          ease: 'power3.out',
        });
      };

      const parentElement = parentRef.current;
      parentElement.addEventListener('mousemove', handleMouseMove);
      parentElement.addEventListener('mouseenter', handleMouseEnter);
      parentElement.addEventListener('mouseleave', handleMouseLeave);

      // Clean up event listeners on component unmount
      return () => {
        parentElement.removeEventListener('mousemove', handleMouseMove);
        parentElement.removeEventListener('mouseenter', handleMouseEnter);
        parentElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className='justify-self-start relative overflow-hidden cursor-pointer py-5' ref={parentRefs[0]}>
        <div
          className='FeaturedCaseStydyInnerDiv absolute'
          ref={boxRefs[0]}
          style={{
            width: '90%',
            height: '90%',
            border: '3px solid gray',
            borderRadius: '50%',
            position: 'absolute',
            transition: 'all 0.3s ease',
            top: 0,
            left: 0,
            zIndex: '-10',
            opacity: 0, // Initially hidden
          }}
        ></div>
        <div className='w-[100%] mx-auto z-10'>
          <img src={image} alt={projectLink}/>
          <h2 className='homeparentHeading my-5 lg:text-2xl text-[1.2rem] font-bold'>
            <span className='homeHeadingTag'>{projectLink}</span>
          </h2>
          <p className='mb-5 font-bold text-[18px] text-[#45464A] md:text-[15px] lg:text-[18px]'>{projectDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeProjectsData;
