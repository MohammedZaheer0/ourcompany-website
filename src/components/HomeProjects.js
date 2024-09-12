// import React, { useEffect, useRef } from 'react';
// import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import { gsap } from 'gsap';

// const HomeProjects = () => {
//   // Create refs for each parent and animated box
//   const parentRefs = [useRef(null), useRef(null), useRef(null)];
//   const boxRefs = [useRef(null), useRef(null), useRef(null)];

//   useEffect(() => {
//     parentRefs.forEach((parentRef, index) => {
//       const handleMouseMove = (e) => {
//         const parent = parentRef.current.getBoundingClientRect();
//         const mouseX = e.clientX - parent.left;
//         const mouseY = e.clientY - parent.top;

//         gsap.to(boxRefs[index].current, {
//           duration: 0.5,
//           x: mouseX - boxRefs[index].current.offsetWidth / 2,
//           y: mouseY - boxRefs[index].current.offsetHeight / 2,
//           ease: 'power3.out',
//         });
//       };

//       const parentElement = parentRef.current;
//       parentElement.addEventListener('mousemove', handleMouseMove);

//       return () => {
//         parentElement.removeEventListener('mousemove', handleMouseMove);
//       };
//     });
//   }, []);


//   return (
//       <div className='my-16'>

//         <div className='w-[100%] grid md:grid-cols-2 grid-cols-1 justify-between items-center my-10'>


//             <div className='justify-self-start relative overflow-hidden cursor-pointer' ref={parentRefs[0]}>

//             <div
//             className='FeaturedCaseStydyInnerDiv absolute'
//             ref={boxRefs[0]}
//             style={{
//               width: '100%',
//               height: '100%',
//               border: '3px solid gray',
//               borderRadius: '50%',
//               position: 'absolute',
//               transition:'all 0.3s ease',
//               top: 0,
//               left: 0,
//               zIndex:'-10'
//             }}
//           ></div>

//                 <div className='w-[90%] mx-auto z-10'>
//                 <img src="/assets/hlpr.jpg" alt="hlpr" />
//                 <h2 className='homeparentHeading my-5 lg:text-2xl text-[1.2rem] font-bold'><span className='homeHeadingTag' ><Link to='/products'>HLPR.com</Link></span></h2>
//                 <p className='mb-5 font-bold text-[18px] md:text-[15px] lg:text-[18px]'>Making it easy to help those in need.</p>
//                 </div>
//             </div>


//             <div className='md:justify-self-end justify-self-center my-10 md:my-0 text-center md:w-[80%] w-[90%]'>
//                 <h1 className='text-2xl font-bold my-5'>"We doubled sales multiple times while working with Simple Focus."</h1>
//                 <h3 className='font-bold my-3 tracking-wide text-[18px]'>Ken Hamric</h3>
//                 <p className='font-medium tracking-wide'>CrossBrowserTesting.com</p>
//             </div>

//         </div>





//             <div className='w-[100%] grid md:grid-cols-2 grid-cols-1 justify-between items-center my-10'>


//             <div className='justify-self-start text-center md:w-[80%] w-[90%] mx-auto order-2 md:order-1'>
//                 <h1 className='text-2xl font-bold my-5'>"Our conversion rate is up 89%, and our average order value is up 24%."</h1>
//                 <h3 className='font-bold my-3 tracking-wide text-[18px]'>Dan Barnes</h3>
//                 <p className='font-medium tracking-wide'>PhoneSoap.com</p>
//             </div>


//             <div className='justify-self-end relative overflow-hidden cursor-pointer order-1 md:order-2' ref={parentRefs[1]}>
            
//             <div
//             className='FeaturedCaseStydyInnerDiv absolute'
//             ref={boxRefs[1]}
//             style={{
//               width: '100%',
//               height: '100%',
//               border: '3px solid gray',
//               borderRadius: '50%',
//               position: 'absolute',
//               transition:'all 0.3s ease',
//               top: 0,
//               left: 0,
//               zIndex:'-10'
//             }}
//           ></div>
//             <div className='w-[90%] mx-auto z-10'>
//                 <img src="/assets/getballpark.png" alt="hlpr" />
//                 <h2 className='homeparentHeading my-5 lg:text-2xl text-[1.2rem] font-bold'><span className='homeHeadingTag' ><Link to='/products'>GetBallpark.com</Link></span></h2>
//                 <p className='mb-5 font-bold text-[18px] md:text-[15px] lg:text-[18px]'>If you build it, they will come. And increase conversions 196%.</p>
//             </div>
//             </div>

//             </div>





//         <div className='w-[100%] grid md:grid-cols-2 grid-cols-1 justify-between items-center md:my-10 my-16'>

//             <div className='justify-self-start relative overflow-hidden cursor-pointer' ref={parentRefs[2]}>
//             <div
//             className='FeaturedCaseStydyInnerDiv absolute'
//             ref={boxRefs[2]}
//             style={{
//               width: '100%',
//               height: '100%',
//               border: '3px solid gray',
//               borderRadius: '50%',
//               position: 'absolute',
//               transition:'all 0.3s ease',
//               top: 0,
//               left: 0,
//               zIndex:'-10'
//             }}
//           ></div>
//                 <div className='w-[90%] mx-auto z-10'>
//                 <img src="/assets/getawair.jpg" alt="hlpr" />
//                 <h2 className='homeparentHeading my-5 lg:text-2xl text-[1.2rem] font-bold'><span className='homeHeadingTag' ><Link to='/products'>GetAwair.com</Link></span></h2>
//                 <p className='mb-5 font-bold text-[18px] md:text-[15px] lg:text-[18px]'>Designing and building a sleek website for two lust-worthy products, just in time for Christmas.</p>
//             </div>
//             </div>

//             <div className='justify-self-end text-center md:w-[80%] w-[90%] text-[#D35400]'>
//             <h2 className='homeparentHeading my-5 lg:text-3xl text-[1.3rem] font-bold flex justify-center gap-3 items-center'><span className='UnderlineStyle' ><Link to='/products'>View More Projects</Link></span><FaArrowRightLong /></h2>
//             </div>

//             </div>


//     </div>
//   )
// }

// export default HomeProjects








import React, { useEffect, useRef } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const HomeProjects = () => {
  // Create refs for each parent and animated box
  const parentRefs = [useRef(null), useRef(null), useRef(null)];
  const boxRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    // Add event listeners to each parent element
    parentRefs.forEach((parentRef, index) => {
      const handleMouseMove = (e) => {
        const parent = parentRef.current.getBoundingClientRect();
        const mouseX = e.clientX - parent.left;
        const mouseY = e.clientY - parent.top;

        gsap.to(boxRefs[index].current, {
          duration: 0.5,
          x: mouseX - boxRefs[index].current.offsetWidth / 2,
          y: mouseY - boxRefs[index].current.offsetHeight / 2,
          ease: 'power3.out',
        });
      };

      const parentElement = parentRef.current;
      parentElement.addEventListener('mousemove', handleMouseMove);

      // Clean up event listener on component unmount
      return () => {
        parentElement.removeEventListener('mousemove', handleMouseMove);
      };
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='my-16'>
      <div className='w-[100%] grid md:grid-cols-2 grid-cols-1 justify-between items-center my-10'>
        <div className='justify-self-start relative overflow-hidden cursor-pointer' ref={parentRefs[0]}>
          <div
            className='FeaturedCaseStydyInnerDiv absolute'
            ref={boxRefs[0]}
            style={{
              width: '100%',
              height: '100%',
              border: '3px solid gray',
              borderRadius: '50%',
              position: 'absolute',
              transition: 'all 0.3s ease',
              top: 0,
              left: 0,
              zIndex: '-10'
            }}
          ></div>
          <div className='w-[90%] mx-auto z-10'>
            <img src="/assets/hlpr.jpg" alt="hlpr" />
            <h2 className='homeparentHeading my-5 lg:text-2xl text-[1.2rem] font-bold'><span className='homeHeadingTag' ><Link to='/products'>HLPR.com</Link></span></h2>
            <p className='mb-5 font-bold text-[18px] md:text-[15px] lg:text-[18px]'>Making it easy to help those in need.</p>
          </div>
        </div>

        <div className='md:justify-self-end justify-self-center my-10 md:my-0 text-center md:w-[80%] w-[90%]'>
          <h1 className='text-2xl font-bold my-5'>"We doubled sales multiple times while working with Simple Focus."</h1>
          <h3 className='font-bold my-3 tracking-wide text-[18px]'>Ken Hamric</h3>
          <p className='font-medium tracking-wide'>CrossBrowserTesting.com</p>
        </div>
      </div>

      <div className='w-[100%] grid md:grid-cols-2 grid-cols-1 justify-between items-center my-10'>
        <div className='justify-self-start text-center md:w-[80%] w-[90%] mx-auto order-2 md:order-1'>
          <h1 className='text-2xl font-bold my-5'>"Our conversion rate is up 89%, and our average order value is up 24%."</h1>
          <h3 className='font-bold my-3 tracking-wide text-[18px]'>Dan Barnes</h3>
          <p className='font-medium tracking-wide'>PhoneSoap.com</p>
        </div>

        <div className='justify-self-end relative overflow-hidden cursor-pointer order-1 md:order-2' ref={parentRefs[1]}>
          <div
            className='FeaturedCaseStydyInnerDiv absolute'
            ref={boxRefs[1]}
            style={{
              width: '100%',
              height: '100%',
              border: '3px solid gray',
              borderRadius: '50%',
              position: 'absolute',
              transition: 'all 0.3s ease',
              top: 0,
              left: 0,
              zIndex: '-10'
            }}
          ></div>
          <div className='w-[90%] mx-auto z-10'>
            <img src="/assets/getballpark.png" alt="hlpr" />
            <h2 className='homeparentHeading my-5 lg:text-2xl text-[1.2rem] font-bold'><span className='homeHeadingTag' ><Link to='/products'>GetBallpark.com</Link></span></h2>
            <p className='mb-5 font-bold text-[18px] md:text-[15px] lg:text-[18px]'>If you build it, they will come. And increase conversions 196%.</p>
          </div>
        </div>
      </div>

      <div className='w-[100%] grid md:grid-cols-2 grid-cols-1 justify-between items-center md:my-10 my-16'>
        <div className='justify-self-start relative overflow-hidden cursor-pointer' ref={parentRefs[2]}>
          <div
            className='FeaturedCaseStydyInnerDiv absolute'
            ref={boxRefs[2]}
            style={{
              width: '100%',
              height: '100%',
              border: '3px solid gray',
              borderRadius: '50%',
              position: 'absolute',
              transition: 'all 0.3s ease',
              top: 0,
              left: 0,
              zIndex: '-10'
            }}
          ></div>
          <div className='w-[90%] mx-auto z-10'>
            <img src="/assets/getawair.jpg" alt="hlpr" />
            <h2 className='homeparentHeading my-5 lg:text-2xl text-[1.2rem] font-bold'><span className='homeHeadingTag' ><Link to='/products'>GetAwair.com</Link></span></h2>
            <p className='mb-5 font-bold text-[18px] md:text-[15px] lg:text-[18px]'>Designing and building a sleek website for two lust-worthy products, just in time for Christmas.</p>
          </div>
        </div>

        <div className='justify-self-end text-center md:w-[80%] w-[90%] text-[#D35400]'>
          <h2 className='homeparentHeading my-5 lg:text-3xl text-[1.3rem] font-bold flex justify-center gap-3 items-center'><span className='UnderlineStyle' ><Link to='/products'>View More Projects</Link></span><FaArrowRightLong /></h2>
        </div>
      </div>
    </div>
  )
}

export default HomeProjects;
