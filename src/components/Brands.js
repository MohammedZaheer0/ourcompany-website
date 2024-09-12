import React from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {
  return (
    <div className='my-28'>
      <div>
      <h1 className='lg:text-5xl md:text-3xl  text-[1.5rem] font-bold homeparentHeading my-10'>We work with nice people at    
             <span className='homeHeadingTag ml-2'>  
              <Link to='/clients'>world-class brands.</Link>
            </span>
          </h1>

        <div className='md:flex hidden'>
        <img src="/assets/client-logos.svg" alt="clientlogos" />  
        </div>

        <div className='md:hidden flex w-[100%'>
        <img src="/assets/client-logos-vertical.svg" alt="clientlogos" />  
        </div>

      </div>
    </div>
  )
}

export default Brands
