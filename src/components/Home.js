import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedCaseStudy from './FeaturedCaseStudy';
import HomeProjects from './HomeProjects';
import Brands from './Brands';
import Footer from './Footer';



const Home = () => {



  return (
    <>
    <div className='md:w-[80%] w-[90%] mx-auto'>


    <header className='w-[100%] md:my-24 my-10'>
        <h1 className='lg:text-[3rem] xl:text-[4rem] md:text-[2.5rem] text-[1.7rem]  font-bold homeparentHeading'>We design <span className='homeHeadingTag' ><Link to='/products'>products</Link></span>, <span className='homeHeadingTag'><Link to='/websites'>websites</Link></span>, and <span className='homeHeadingTag'><Link to='/products'>experience</Link></span> that people love.</h1>
    </header>
    



    <FeaturedCaseStudy/>



      <section>
        <h1 className='xl:text-5xl md:text-2xl lg:text-3xl text-[1.5rem] font-bold md:my-20 my-10 leading-normal'>Our insanely collaborative <span className='homeHeadingTag'>
              <Link to='/method'>Team Workshop Method</Link>
            </span><br /> produces effective, creative work every time.</h1>
      </section>



    <HomeProjects/>


    <Brands/>


    <Footer/>

    </div>
    </>
  )
}

export default Home
