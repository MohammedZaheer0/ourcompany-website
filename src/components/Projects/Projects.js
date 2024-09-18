import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ProjectsData from '../ProjectsData';

const Projects = () => {

  const ProjectData = [
    {
      id:1,
      image:'/assets/hlpr.jpg',
      projectLink:'HLPR.com',
      projectDescription:'Making it easy to help those in need.'
    },
    {
      id:2,
      image:'/assets/sudo.png',
      projectLink:'Sudo',
      projectDescription:'Six months in the trenches with Sudos design and development teams, building better on-boarding.'
    },
    {
      id:3,
      image:'/assets/getballpark.png',
      projectLink:'GetBallpark.com',
      projectDescription:'If you build it, they will come. And increase conversions 196%.'
    },
    {
      id:4,
      image:'/assets/phonesope.jpg',
      projectLink:'PhoneSoap.com',
      projectDescription:'If it fits, it cleans.'
    },
    {
      id:5,
      image:'/assets/FedExForum.jpg',
      projectLink:'FedExForum.com',
      projectDescription:"Making events easier to find (with a side of grit 'n'grind)."
    },

    {
      id:6,
      image:'/assets/boattrader.png',
      projectLink:'BoatTrader.com',
      projectDescription:'Building trust and personality with a loyal following of boaters.'
    },
  ]

  const location = useLocation();

  return (
    <div className='md:w-[80%] w-[90%] mx-auto'>


     {
      location.pathname ==='/projects' && (
        <div className='md:my-24'>
          
          <div>
            <h1 className='md:my-10 my-7 font-bold text-[#898A91] tracking-widest'>PROJECTS</h1>
            <h1 className='lg:text-6xl text-3xl md:text-4xl font-bold md:w-[80%] w-[100%] leading-snug md:leading-snug lg:leading-snug'>We’d hang these projects up on our fridge (if we could print them).</h1>
          </div>


          <div className='w-[100%] md:gap-16 grid md:grid-cols-2 grid-cols-1 justify-between items-start my-16'>
          {ProjectData.map((product,index)=>(
          <ProjectsData
            key={index} 
            image={product.image}
            projectLink={product.projectLink}
            projectDescription={product.projectDescription}
            />
      ))}
          </div>

          

        <div className='lg:py-10'>
          <h1 className='my-10 lg:text-5xl md:text-4xl text-3xl font-bold leading-snug md:leading-snug'>We work with nice people at world-class brands.</h1>

          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-19 text-[20px] md:gap-10 font-bold text-[#45464a]'>

          <div className='workwithpeople'>
          <p>100 Club of Memphis</p>
          <p>Active Network</p>
          <p>American Home Shield</p>
          <p className='text-[#d35400]'>Ballpark</p>
          <p className='text-[#d35400]'>Baptist Grief Centers</p>
          <p className='text-[#d35400]'>Baywater</p>
          <p className='text-[#d35400]'>Bella Vita</p>
          <p>Bitfinder</p>
          <p>Children's Museum of Memphis</p>
          <p>Christ Community Health Services</p>
          </div>


          <div className='workwithpeople'>
          <p className='text-[#d35400]'>CTSI Global</p>
          <p className='text-[#d35400]'>Domaine Lumineaux</p>
          <p className='text-[#d35400]'>Dominion Marine Media</p>
          <p className='text-[#d35400]'>Dragonfly</p>
          <p className='text-[#d35400]'>Eventive</p>
          <p className='text-[#d35400]'>FedExForum</p>
          <p>Frontdoor</p>
          <p>Hilton</p>
          <p>International Paper</p>
          <p>Lindsey Software</p>
          </div>


          <div className='workwithpeople'>
          <p>Memphis Grizzlies</p>
          <p className='text-[#d35400]'>Memphis Music Hall of Fame</p>
          <p>Metalab</p>
          <p className='text-[#d35400]'>Metro Ideas Project</p>
          <p className='text-[#d35400]'>MyCityRides</p>
          <p className='text-[#d35400]'>PhoneSoap</p>
          <p>Pyramex</p>
          <p>Red Door Wealth Management</p>
          <p>ServiceMaster</p>
          <p className='text-[#d35400]'>Stash Home</p>
          </div>


          <div className='workwithpeople'>
          <p className='text-[#d35400]'>Sudo</p>
          <p className='text-[#d35400]'>The Daily Memphian</p>
          <p>The Enterprise Center</p>
          <p className='text-[#d35400]'>The Seam</p>
          <p>The Wine Institute</p>
          <p className='text-[#d35400]'>Transnetyx</p>
          <p>United States Air Force</p>
          <p>Wheel Hippo</p>
          <p>zignyl</p>
          </div>

          </div>


        </div>

        
        </div>
      )
     }

     <Outlet/>
    </div>
  )
}

export default Projects
