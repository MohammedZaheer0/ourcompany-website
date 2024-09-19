import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { GoDash } from "react-icons/go";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      title: 'Graphic Design in Motorsport: Race Track Logos',
      heading: 'John Mears',
      dash: <GoDash />,
      time: '20 minutes',
      image: '/assets/Blog1.jpg'
    },
    {
      id: 2,
      title: 'How 10 Subscription Services Explain Cancellation During Sign Up',
      heading: 'Kerry Crawford',
      dash: <GoDash />,
      time: '12 minutes',
      image: '/assets/Blog2.png'
    },
    {
      id: 3,
      title: 'How 10 Popular Product Subscriptions Talk About Cancellation During Sign Up',
      heading: 'Kerry Crawford',
      dash: <GoDash />,
      time: '6 minutes',
      image: '/assets/Blog3.jpg'
    },
    {
      id: 4,
      title: 'A Not-So-Simple Question About Subscription Anxiety',
      heading: 'Kerry Crawford',
      dash: <GoDash />,
      time: '5 minutes',
      image: '/assets/Blog4.jpg'
    },
    {
      id: 5,
      title: 'Attack the Climbs',
      heading: 'Patrick McNeely',
      dash: <GoDash />,
      time: '5 minutes',
      image: '/assets/Blog5.gif'
    },
  ];

  // Create refs for all blog items
  const parentRefs = useRef([]);
  const boxRefs = useRef([]);

  useEffect(() => {
    // Attach event listeners for each blog item
    parentRefs.current.forEach((parentRef, index) => {
      const box = boxRefs.current[index];

      const handleMouseMove = (e) => {
        const parent = parentRef.getBoundingClientRect();
        const mouseX = e.clientX - parent.left;
        const mouseY = e.clientY - parent.top;

        gsap.to(box, {
          duration: 0.5,
          x: mouseX - box.offsetWidth / 2,
          y: mouseY - box.offsetHeight / 2,
          ease: 'power3.out',
        });
      };

      const handleMouseEnter = () => {
        gsap.to(box, {
          duration: 0.3,
          opacity: 1,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(box, {
          duration: 0.3,
          opacity: 0,
          x: 0,
          y: 0,
          ease: 'power3.out',
        });
      };

      parentRef.addEventListener('mousemove', handleMouseMove);
      parentRef.addEventListener('mouseenter', handleMouseEnter);
      parentRef.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        parentRef.removeEventListener('mousemove', handleMouseMove);
        parentRef.removeEventListener('mouseenter', handleMouseEnter);
        parentRef.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className='md:w-[80%] w-[90%] mx-auto'>
      <div className='md:my-24 my-10'>
        <h1 className="lg:text-6xl text-3xl md:text-4xl font-bold md:w-[80%] w-[100%] leading-snug md:leading-snug lg:leading-tight">Blog</h1>
        <p className="md:my-10 my-7 font-medium text-[#898A91] text-[20px] tracking-widest">
          Members of our team share their thoughts on UX, design, development and the questions that keep them awake at night.
        </p>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-16'>
          {blogData.map((blog, index) => (
            <div
              key={blog.id}
              ref={(el) => (parentRefs.current[index] = el)} // Assign each parentRef
              className='relative overflow-hidden cursor-pointer py-5'
            >
              <div
                ref={(el) => (boxRefs.current[index] = el)} // Assign each boxRef
                className='FeaturedCaseStydyInnerDiv absolute'
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

              <div className='w-[100%] mb-16 mx-auto z-10'>
                <img src={blog.image} alt={blog.heading} className='w-[100%]' />
                <h2 className='homeparentHeading my-5 lg:text-2xl leading-relaxed text-[1.2rem] font-bold'>
                  <Link to={`/blog/${blog.id}`} className='homeHeadingTag'>{blog.title}</Link>
                </h2>

                <div className='flex items-center gap-3'>
                  <h2 className='font-bold text-[18px]'>{blog.heading}</h2>
                  <div className='flex items-center gap-3'>
                    <span className='text-2xl'>{blog.dash}</span>
                    <p className='font-bold text-[18px] text-[#898A91] md:text-[15px] lg:text-[18px]'>{blog.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

