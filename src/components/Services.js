// import React from 'react'

// const Services = () => {
//   return (
//     <>
//       <div className='w-[80%]  mx-auto my-5 relative'>


//       <div className='my-24 w-[100%] overflow-hidden'>


//       <div className='absolute top-[-300px] left-1/2 transform -translate-x-1/2 h-[300px] w-[300px] rounded-full border-[#D35400] border-[3px]'></div>


//         <div className=' absolute h-[100px] w-[100px] border-[orange] border-[3px] top-[-100px] rotate-45 right-1/4 transform'></div>


//         <div className=' absolute h-[150px] w-[150px] border-[#208ec1] border-[3px] top-0 right-0'></div>


//         <div className='absolute h-[50px] w-[50px]  bg-cyan-400 border-[3px] top-[80px] right-[120px] -z-10 transform'></div>


//         <div className='absolute h-[150px] w-[150px] rounded-full border-[cyan] border-[3px] top-[180px] right-[120px]'></div>


//         <div className='absolute h-[50px] w-[50px] rounded-full border-[lightgreen] border-[3px] top-[320px] right-1/2 transform'></div>


//         <div className='absolute h-[50px] w-[50px] bg-green-400 border-[3px] top-[430px] right-1/3 transform'></div>


//         <div className=' absolute h-[180px] w-[180px] border-[#66c366] border-[3px] top-[400px] right-1/4 transform'></div>


//         <h2 className='font-bold text-[#898A91] tracking-widest'>SERVICES</h2>
//         <h1 className='my-10 font-bold text-6xl md:w-[70%] leading-tight'>Building great experiences involves a lot of moving parts.</h1>
//         <h3 className='font-bold text-3xl mt-28 mb-10'>We bring it all together.</h3>
//         <p className='md:w-[55%] text-[#898A91] text-[20px] font-bold'>We're just as happy working on a special project that needs to be done right as we are building an end-to-end digital experience. Below are just some of the things we do.</p>
//       </div>


//       </div>
//     </>
//   )
// }

// export default Services











// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Services = () => {
//   // Create refs for each animated div
//   const divRefs = [
//     useRef(null), useRef(null), useRef(null),
//     useRef(null), useRef(null), useRef(null),
//     useRef(null), useRef(null),
//   ];

//   useEffect(() => {
//     // GSAP animations for infinite rotation
//     gsap.to(divRefs[1].current, {
//       rotation: 360,
//       duration: 26,
//       repeat: -1,
//       ease: 'linear',
//     });

//     gsap.to(divRefs[2].current, {
//       rotation: 360,
//       duration: 26,
//       repeat: -1,
//       ease: 'linear',
//     });

//     gsap.to(divRefs[3].current, {
//       rotation: -360,
//       duration: 26,
//       repeat: -1,
//       ease: 'linear',
//     });

//     gsap.to(divRefs[6].current, {
//       rotation: -360,
//       duration: 26,
//       repeat: -1,
//       ease: 'linear',
//     });

//     gsap.to(divRefs[7].current, {
//       rotation: 360,
//       duration: 26,
//       repeat: -1,
//       ease: 'linear',
//     });

//     // Mouse movement animations
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const { innerWidth, innerHeight } = window;

//       // Calculate distances
//       const xPercent = (clientX / innerWidth) * 100;
//       const yPercent = (clientY / innerHeight) * 100;

//       // Determine movement direction
//       const isHorizontalMove = Math.abs(clientX - innerWidth / 2) > Math.abs(clientY - innerHeight / 2);
//       const moveRight = clientX > innerWidth / 2;
//       const moveDown = clientY > innerHeight / 2;

//       divRefs.forEach((ref, index) => {
//         const baseDuration = 1; // Base duration for slowest move
//         const duration = baseDuration + (index % 4) * 0.2; // Different duration for each div
//         const movement = {
//           x: 0,
//           y: 0,
//         };

//         if (isHorizontalMove) {
//           // Horizontal movement
//           if (moveRight) {
//             movement.x = (xPercent - 50) * (index % 4 < 2 ? 1.5 : -1.5);
//           } else {
//             movement.x = (xPercent - 50) * (index % 4 < 2 ? -1.5 : 1.5);
//           }
//         } else {
//           // Vertical movement
//           if (moveDown) {
//             movement.y = (yPercent - 50) * (index % 4 < 2 ? 1.5 : -1.5);
//           } else {
//             movement.y = (yPercent - 50) * (index % 4 < 2 ? -1.5 : 1.5);
//           }
//         }

//         gsap.to(ref.current, {
//           x: movement.x,
//           y: movement.y,
//           duration: duration,
//           ease: 'power3.out',
//         });
//       });
//     };

//     const handleMouseLeave = () => {
//       divRefs.forEach((ref, index) => {
//         const baseDuration = 1; // Base duration for slowest move
//         const duration = baseDuration + (index % 4) * 0.2; // Matching duration on reset
//         gsap.to(ref.current, {
//           x: 0,
//           y: 0,
//           duration: duration,
//           ease: 'power3.out',
//         });
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div className='w-[80%] mx-auto my-5 relative'>
//       <div className='my-24 w-[100%] overflow-hidden'>
//         <div className='absolute transition-all top-[-300px] left-1/2 transform -translate-x-1/2 h-[300px] w-[300px] rounded-full border-[#ef9152] border-[3px]' ref={divRefs[0]}></div>
//         <div className='absolute transition-all h-[100px] w-[100px] border-[#f5c770] border-[3px] top-[-140px] rotate-45 right-1/4 -z-10 transform' ref={divRefs[1]}></div>
//         <div className='absolute transition-all h-[150px] w-[150px] border-[#208ec169] border-[3px] top-0 right-0' ref={divRefs[2]}></div>
//         <div className='absolute transition-all h-[50px] w-[50px] bg-cyan-400 border-[3px] top-[80px] right-[120px] -z-10 transform' ref={divRefs[3]}></div>
//         <div className='absolute transition-all h-[150px] w-[150px] rounded-full border-[cyan] border-[3px] top-[180px] right-[120px]' ref={divRefs[4]}></div>
//         <div className='absolute transition-all h-[50px] w-[50px] rounded-full border-[lightgreen] border-[3px] top-[320px] right-1/2 transform' ref={divRefs[5]}></div>
//         <div className='absolute transition-all h-[50px] w-[50px] bg-green-400 border-[3px] top-[430px] right-1/3 transform' ref={divRefs[6]}></div>
//         <div className='absolute transition-all h-[180px] w-[180px] border-[#66c366] border-[3px] top-[400px] right-1/4 transform' ref={divRefs[7]}></div>

//         <h2 className='font-bold text-[#898A91] tracking-widest'>SERVICES</h2>
//         <h1 className='my-10 font-bold text-6xl md:w-[70%] leading-tight'>Building great experiences involves a lot of moving parts.</h1>
//         <h3 className='font-bold text-3xl mt-28 mb-10'>We bring it all together.</h3>
//         <p className='md:w-[55%] text-[#898A91] text-[20px] font-bold'>We're just as happy working on a special project that needs to be done right as we are building an end-to-end digital experience. Below are just some of the things we do.</p>
//       </div>
//     </div>
//   );
// }

// export default Services;

















// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Services = () => {
//   // Create refs for each animated div, wrapped in useRef to ensure it stays stable
//   const divRefs = useRef([
//     { current: null }, { current: null }, { current: null },
//     { current: null }, { current: null }, { current: null },
//     { current: null }, { current: null }
//   ]);

//   useEffect(() => {
//     // GSAP animations for infinite rotation
//     gsap.to(divRefs.current[1], {
//       rotation: 360,
//       duration: 26,
//       repeat: -1,
//       ease: 'linear',
//     });

//     gsap.to(divRefs.current[2], {
//       rotation: 360,
//       duration: 26,
//       repeat: -1,
//       ease: 'linear',
//     });

//     gsap.to(divRefs.current[3], {
//       rotation: -360,
//       duration: 26,
//       repeat: -1,
//       ease: 'linear',
//     });

//     gsap.to(divRefs.current[6], {
//       rotation: -360,
//       duration: 26,
//       repeat: -1,
//       ease: 'linear',
//     });

//     gsap.to(divRefs.current[7], {
//       rotation: 360,
//       duration: 26,
//       repeat: -1,
//       ease: 'linear',
//     });

//     // Mouse movement animations
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const { innerWidth, innerHeight } = window;

//       // Calculate distances
//       const xPercent = (clientX / innerWidth) * 100;
//       const yPercent = (clientY / innerHeight) * 100;

//       // Determine movement direction
//       const isHorizontalMove = Math.abs(clientX - innerWidth / 2) > Math.abs(clientY - innerHeight / 2);
//       const moveRight = clientX > innerWidth / 2;
//       const moveDown = clientY > innerHeight / 2;

//       divRefs.current.forEach((ref, index) => {
//         const baseDuration = 1; // Base duration for slowest move
//         const duration = baseDuration + (index % 4) * 0.2; // Different duration for each div
//         const movement = {
//           x: 0,
//           y: 0,
//         };

//         if (isHorizontalMove) {
//           // Horizontal movement
//           if (moveRight) {
//             movement.x = (xPercent - 50) * (index % 4 < 2 ? 1.5 : -1.5);
//           } else {
//             movement.x = (xPercent - 50) * (index % 4 < 2 ? -1.5 : 1.5);
//           }
//         } else {
//           // Vertical movement
//           if (moveDown) {
//             movement.y = (yPercent - 50) * (index % 4 < 2 ? 1.5 : -1.5);
//           } else {
//             movement.y = (yPercent - 50) * (index % 4 < 2 ? -1.5 : 1.5);
//           }
//         }

//         gsap.to(ref.current, {
//           x: movement.x,
//           y: movement.y,
//           duration: duration,
//           ease: 'power3.out',
//         });
//       });
//     };

//     const handleMouseLeave = () => {
//       divRefs.current.forEach((ref, index) => {
//         const baseDuration = 1; // Base duration for slowest move
//         const duration = baseDuration + (index % 4) * 0.2; // Matching duration on reset
//         gsap.to(ref.current, {
//           x: 0,
//           y: 0,
//           duration: duration,
//           ease: 'power3.out',
//         });
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className='w-[80%] mx-auto my-5 relative'>
//       <div className='my-24 w-[100%] overflow-hidden'>
//         <div className='absolute transition-all top-[-300px] left-1/2 transform -translate-x-1/2 h-[300px] w-[300px] rounded-full border-[#ef9152] border-[3px]' ref={el => divRefs.current[0] = el}></div>
//         <div className='absolute transition-all h-[100px] w-[100px] border-[#f5c770] border-[3px] top-[-140px] rotate-45 right-1/4 -z-10 transform' ref={el => divRefs.current[1] = el}></div>
//         <div className='absolute transition-all h-[150px] w-[150px] border-[#208ec169] border-[3px] top-0 right-0' ref={el => divRefs.current[2] = el}></div>
//         <div className='absolute transition-all h-[50px] w-[50px] bg-cyan-400 border-[3px] top-[80px] right-[120px] -z-10 transform' ref={el => divRefs.current[3] = el}></div>
//         <div className='absolute transition-all h-[150px] w-[150px] rounded-full border-[cyan] border-[3px] top-[180px] right-[120px]' ref={el => divRefs.current[4] = el}></div>
//         <div className='absolute transition-all h-[50px] w-[50px] rounded-full border-[lightgreen] border-[3px] top-[320px] right-1/2 transform' ref={el => divRefs.current[5] = el}></div>
//         <div className='absolute transition-all h-[50px] w-[50px] bg-green-400 border-[3px] top-[430px] right-1/3 transform' ref={el => divRefs.current[6] = el}></div>
//         <div className='absolute transition-all h-[180px] w-[180px] border-[#66c366] border-[3px] top-[400px] right-1/4 transform' ref={el => divRefs.current[7] = el}></div>

//         <h2 className='font-bold text-[#898A91] tracking-widest'>SERVICES</h2>
//         <h1 className='my-10 font-bold text-6xl md:w-[70%] leading-tight'>Building great experiences involves a lot of moving parts.</h1>
//         <h3 className='font-bold text-3xl mt-28 mb-10'>We bring it all together.</h3>
//         <p className='md:w-[55%] text-[#898A91] text-[20px] font-bold'>We're just as happy working on a special project that needs to be done right as we are building an end-to-end digital experience. Below are just some of the things we do.</p>
//       </div>
//     </div>
//   );
// }

// export default Services;













import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Services = () => {
  // Create refs for each animated div
  const divRefs = useRef([
    null, null, null, null, null, null, null, null
  ]);

  useEffect(() => {
    // GSAP animations for infinite rotation
    gsap.to(divRefs.current[1], {
      rotation: 360,
      duration: 26,
      repeat: -1,
      ease: 'linear',
    });

    gsap.to(divRefs.current[2], {
      rotation: 360,
      duration: 26,
      repeat: -1,
      ease: 'linear',
    });

    gsap.to(divRefs.current[3], {
      rotation: -360,
      duration: 26,
      repeat: -1,
      ease: 'linear',
    });

    gsap.to(divRefs.current[6], {
      rotation: -360,
      duration: 26,
      repeat: -1,
      ease: 'linear',
    });

    gsap.to(divRefs.current[7], {
      rotation: 360,
      duration: 26,
      repeat: -1,
      ease: 'linear',
    });

    // Mouse movement animations
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate distances
      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;

      // Determine movement direction
      const isHorizontalMove = Math.abs(clientX - innerWidth / 2) > Math.abs(clientY - innerHeight / 2);
      const moveRight = clientX > innerWidth / 2;
      const moveDown = clientY > innerHeight / 2;

      divRefs.current.forEach((ref, index) => {
        if (!ref) return;  // Ensure ref is not null

        const baseDuration = 1; // Base duration for slowest move
        const duration = baseDuration + (index % 4) * 0.2; // Different duration for each div
        const movement = {
          x: 0,
          y: 0,
        };

        if (isHorizontalMove) {
          // Horizontal movement
          movement.x = (xPercent - 50) * (index % 4 < 2 ? (moveRight ? 1.5 : -1.5) : (moveRight ? -1.5 : 1.5));
        } else {
          // Vertical movement
          movement.y = (yPercent - 50) * (index % 4 < 2 ? (moveDown ? 1.5 : -1.5) : (moveDown ? -1.5 : 1.5));
        }

        gsap.to(ref, {
          x: movement.x,
          y: movement.y,
          duration: duration,
          ease: 'power3.out',
        });
      });
    };

    const handleMouseLeave = () => {
      divRefs.current.forEach((ref, index) => {
        if (!ref) return;  // Ensure ref is not null

        const baseDuration = 1; // Base duration for slowest move
        const duration = baseDuration + (index % 4) * 0.2; // Matching duration on reset
        gsap.to(ref, {
          x: 0,
          y: 0,
          duration: duration,
          ease: 'power3.out',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='md:w-[80%] w-[90%] mx-auto my-5 relative'>
      
      <div className='lg:my-24 my-14 w-[100%] overflow-hidden'>
        
        
        <div className='absolute transition-all lg:top-[-300px] top-[-80px] md:top-[-60px] left-1/2 transform -translate-x-1/2 h-[65px] w-[65px] lg:h-[300px] lg:w-[300px] rounded-full border-[#ef9152] border-[3px]' ref={el => divRefs.current[0] = el}></div>
        
        
        <div className='absolute transition-all lg:h-[100px] lg:w-[100px] h-[30px] w-[30px] border-[#f5c770] border-[3px] lg:top-[-140px] top-[-40px] rotate-45 right-1/4 -z-10 transform' ref={el => divRefs.current[1] = el}></div>
        
        
        <div className='absolute transition-all lg:h-[150px] lg:w-[150px] h-[30px] w-[30px] md:h-[50px] md:w-[50px] border-[#208ec169] border-[3px] top-0 right-0' ref={el => divRefs.current[2] = el}></div>
        
        
        <div className='absolute transition-all lg:h-[50px] lg:w-[50px] h-[15px] w-[15px] bg-cyan-400 border-[3px] top-[0px] right-[0px] lg:top-[80px] lg:right-[120px] -z-10 transform' ref={el => divRefs.current[3] = el}></div>
        
        
        <div className='absolute transition-all lg:h-[150px] lg:w-[150px] h-[40px] w-[40px] rounded-full border-[cyan] border-[3px] 
        top-[180px] right-[120px]' ref={el => divRefs.current[4] = el}></div>
        
        
        <div className='absolute transition-all lg:h-[50px] lg:w-[50px] h-[20px] w-[20px] rounded-full border-[lightgreen] border-[3px] lg:top-[320px] top-[200px] lg:right-1/2 right-1/1 transform' ref={el => divRefs.current[5] = el}></div>
        
        
        <div className='absolute transition-all lg:h-[50px] lg:w-[50px] h-[20px] w-[20px] bg-green-400 border-[3px] lg:top-[430px] top-[330px] right-1/3 transform' ref={el => divRefs.current[6] = el}></div>
        
        
        <div className='absolute transition-all lg:h-[180px] lg:w-[180px] h-[80px] w-[80px] border-[#66c366] -z-10 border-[3px] lg:top-[400px] top-[300px] lg:right-1/4 right-10 transform' ref={el => divRefs.current[7] = el}></div>



        <h2 className='font-bold text-[#898A91] tracking-widest'>SERVICES</h2>
        <h1 className='lg:my-10 my-7 font-bold lg:text-6xl text-3xl md:text-4xl md:w-[70%] leading-tight'>Building great experiences involves a lot of moving parts.</h1>
        <h3 className='font-bold md:text-3xl text-2xl lg:mt-28 mt-16 md:mb-10 mb-5'>We bring it all together.</h3>
        <p className='lg:w-[55%] md:w-[65%] text-[#898A91] text-[20px] font-bold'>We're just as happy working on a special project that needs to be done right as we are building an end-to-end digital experience. Below are just some of the things we do.</p>
      </div>




      <div className='lg:my-28'>
          
          <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-start lg:pt-36 pt-10 md:pb-10 lg:pb-20'>
              <div>
                  <h1 className='font-bold md:text-3xl text-2xl my-5'>User Experience</h1>
                  <h3 className='md:w-[90%] lg:w-[80%] text-[20px] font-medium my-5'>We’ll help you improve customer experience and build brand equity. It’s what we do best.</h3>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>UX Design</p>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>UI Design</p>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Usability Testing</p>
              </div>

              <div>
                <h1 className='font-bold md:text-3xl text-2xl my-5'>Strategy</h1>
                <h3 className='md:w-[90%] lg:w-[80%] text-[20px] font-medium my-5'>Meeting your goals and user needs is at the heart of everything we do for you.</h3>
                <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Brand Strategy</p>
                <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Content Strategy</p>
              </div>
          </div>

         

          <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-start md:pt-0 pt-10 md:pb-10 lg:pb-20'>
              <div>
                  <h1 className='font-bold md:text-3xl text-2xl my-5'>Design</h1>
                  <h3 className='md:w-[90%] lg:w-[80%] text-[20px] font-medium my-5'>We advance brands with smart, human-centered design that solves problems (and looks good doing it).</h3>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Website Design</p>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>E-commerce Design</p>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Branding Design</p>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Responsive Design</p>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Animation</p>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Illustration</p>
              </div>

              <div>
                <h1 className='font-bold md:text-3xl text-2xl my-5'>Development</h1>
                <h3 className='md:w-[90%] lg:w-[80%] text-[20px] font-medium my-5'>Our developers build things the right way. Their work is functional, secure and fast.</h3>
                <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Front-end Development</p>
                <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Product Development</p>
                <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>E-Commerce Development</p>
                <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>CMS Development</p>
              </div>
          </div>




          <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-start md:pt-0 pt-10 md:pb-10 lg:pb-20'>
              <div>
                  <h1 className='font-bold md:text-3xl text-2xl my-5'>Content</h1>
                  <h3 className='md:w-[90%] lg:w-[80%] text-[20px] font-medium my-5'>We plan, create and manage content that tells your brand's story in its own voice.</h3>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Content Strategy</p>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Copywriting</p>
                  <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Voice and Tone</p>
              </div>

              <div>
                <h1 className='font-bold md:text-3xl text-2xl my-5'>Research</h1>
                <h3 className='md:w-[90%] lg:w-[80%] text-[20px] font-medium my-5'>Qualitative and quantitative data informs and validates our work, before, during and after the design process.</h3>
                <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>User Research</p>
                <p className='font-bold text-[20px] my-3 text-[#D35400] hover:text-[#fc9652] cursor-pointer w-fit'>Usability Testing</p>
              </div>
          </div>


      </div>

    </div>
  );
};

export default Services;
