import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GoDash } from "react-icons/go";

const About = () => {
  const Workshops = [
    {
      id: 1,
      number: "I",
      dasharrow: <GoDash />,
      heading: "Invested",
      content: `We respect our crafts and care deeply about producing work that “just feels good.” This reverence results in us having an innately high bar for the quality of our work. No one has to ask us to make something the best - we do it by default.`,
    },
    {
      id: 2,
      number: "II",
      dasharrow: <GoDash />,
      heading: "Impactful",
      content: `We do work that has meaningful outcomes for our clients, users and communities. Our work is intentional and resonates with real people and their experiences in the world.`,
    },
    {
      id: 3,
      number: "III",
      dasharrow: <GoDash />,
      heading: "Humble",
      content: `We understand the value of perspectives beyond our own expertise. We strive for the best solution, no matter whose idea it is. It’s not about us - it’s about doing what’s best for our clients and their users.`,
    },
    {
      id: 4,
      number: "IV",
      dasharrow: <GoDash />,
      heading: "Courageous",
      content: `We are daring when taking on new opportunities. Driven by curiosity and confidence, we’re willing to face the unknown and do whatever it takes to get the job done.`,
    },
  ];

  const CompanyMembers = [
    {
      id: 1,
      image: "/assets/AboutCompany1.png",
      name: "JD Graffam",
      position: "Owner",
      content: `As Simple Focus's founder and owner, JD sets the vision for the business, builds relationships with our partners, and mentors our team.
      He is a nationally recognized user experience expert, author, speaker and writer, and he loves helping others in our industry learn from how we do things. In addition to Simple Focus, JD owns more than 10 profitable businesses.`,
      linkedIn: "LinkedIn",
    },
    {
      id: 2,
      image: "/assets/AboutCompany2.jpeg",
      name: "Patrick McNeely",
      position: "Vice President of Experience",
      content: `Patrick is a user experience expert who oversees the work we do at Simple Focus and keeps our team focused on optimizing usability in everything we do. He also makes sure our team is happy and fulfilled, while pushing us to do our best work (which he’s great it, because he used to be a UI designer). As our resident Cool Dad, Patrick plays in two bands and has a preternatural talent for racquet sports.`,
      linkedIn: "LinkedIn",
    },
    {
      id: 3,
      image: "/assets/AboutCompany3.png",
      name: "Matthew Washburn",
      position: "Vice President of Operations",
      content: `Matt helps us keep our promises to clients by overseeing current projects and making sure the right people are working on the right things. He has a keen eye for finding opportunities where Simple Focus can help businesses and organizations solve problems and makes sure clients have a great experiences while working with us. Outside of work, he volunteers with Creative Works and runs a Twitter account dedicated to naming fish after country music stars.`,
      linkedIn: "LinkedIn",
    },
    {
      id: 4,
      image: "/assets/AboutCompany4.png",
      name: "John Mears",
      position: "Director of Creative Services",
      content: `John leads all aspects of our user experience and design work, overseeing the quality of our work and challenging our designers to learn and grow. In addition to being a talented UX/UI designer, John is a brilliant fine artist who makes really good buttermilk biscuits.`,
      linkedIn: "LinkedIn",
    },
    {
      id: 5,
      image: "/assets/AboutCompany5.jpg",
      name: "Kerry Crawford",
      position: "Director of Research and Strategy",
      content: `Kerry is responsible for setting and guiding strategy for our projects, running our user research and overseeing the quality of our content work. Outside of Simple Focus, she hoards books and does aerial arts.`,
      linkedIn: "LinkedIn",
    },
  ];

  const divRefs1 = useRef([]); // Refs for the first set of animations
  const divRefs2 = useRef([]); // Refs for the second set of animations
  const divRefs3 = useRef([]); // Refs for the second set of animations

  useEffect(() => {
    // GSAP animations for infinite rotation for the first set of elements
    divRefs1.current.forEach((ref, index) => {
      if (!ref) return; // Ensure ref exists

      const rotationDirection = index % 2 === 0 ? 360 : -360; // Alternate direction for even/odd refs
      gsap.to(ref, {
        rotation: rotationDirection,
        duration: 26,
        repeat: -1,
        ease: "linear",
      });
    });

    // GSAP animations for infinite rotation for the second set of elements
    divRefs2.current.forEach((ref, index) => {
      if (!ref) return; // Ensure ref exists

      const rotationDirection = index % 2 === 0 ? 360 : -360; // Alternate direction for even/odd refs
      gsap.to(ref, {
        rotation: rotationDirection,
        duration: 26,
        repeat: -1,
        ease: "linear",
      });
    });



    divRefs3.current.forEach((ref, index) => {
      if (!ref) return; // Ensure ref exists

      const rotationDirection = index % 2 === 0 ? 360 : -360; // Alternate direction for even/odd refs
      gsap.to(ref, {
        rotation: rotationDirection,
        duration: 26,
        repeat: -1,
        ease: "linear",
      });
    });



    // Function to handle mouse movement for both sets of elements
    const handleMouseMove = (e) => {  
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;

      // Apply mouse move animation to the first set of elements
      divRefs1.current.forEach((ref, index) => {
        if (!ref) return; // Ensure ref is not null

        const baseDuration = 1; // Base duration for slowest move
        const duration = baseDuration + (index % 4) * 0.2;
        const movement = {
          x: (xPercent - 50) * (index % 2 === 0 ? 1.5 : -1.5),
          y: (yPercent - 50) * (index % 2 === 0 ? 1.5 : -1.5),
        };

        gsap.to(ref, {
          x: movement.x,
          y: movement.y,
          duration: duration,
          ease: "power3.out",
        });
      });

      // Apply mouse move animation to the second set of elements
      divRefs2.current.forEach((ref, index) => {
        if (!ref) return; // Ensure ref is not null

        const baseDuration = 1; // Base duration for slowest move
        const duration = baseDuration + (index % 4) * 0.2;
        const movement = {
          x: (xPercent - 50) * (index % 2 === 0 ? 1.5 : -1.5),
          y: (yPercent - 50) * (index % 2 === 0 ? 1.5 : -1.5),
        };

        gsap.to(ref, {
          x: movement.x,
          y: movement.y,
          duration: duration,
          ease: "power3.out",
        });
      });
      
      
      divRefs3.current.forEach((ref, index) => {
        if (!ref) return; // Ensure ref is not null
  
        const baseDuration = 1; // Base duration for slowest move
        const duration = baseDuration + (index % 4) * 0.2;
        const movement = {
          x: (xPercent - 50) * (index % 2 === 0 ? 1.5 : -1.5),
          y: (yPercent - 50) * (index % 2 === 0 ? 1.5 : -1.5),
        };
  
        gsap.to(ref, {
          x: movement.x,
          y: movement.y,
          duration: duration,
          ease: "power3.out",
        });
      });

    };




    // Function to handle mouse leave for both sets of elements
    const handleMouseLeave = () => {
      // Apply mouse leave animation to the first set of elements
      divRefs1.current.forEach((ref, index) => {
        if (!ref) return; // Ensure ref is not null

        const baseDuration = 1;
        const duration = baseDuration + (index % 4) * 0.2;
        gsap.to(ref, {
          x: 0,
          y: 0,
          duration: duration,
          ease: "power3.out",
        });
      });

      // Apply mouse leave animation to the second set of elements
      divRefs2.current.forEach((ref, index) => {
        if (!ref) return; // Ensure ref is not null

        const baseDuration = 1;
        const duration = baseDuration + (index % 4) * 0.2;
        gsap.to(ref, {
          x: 0,
          y: 0,
          duration: duration,
          ease: "power3.out",
        });
      });


      // Apply mouse leave animation to the second set of elements
      divRefs3.current.forEach((ref, index) => {
        if (!ref) return; // Ensure ref is not null

        const baseDuration = 1;
        const duration = baseDuration + (index % 4) * 0.2;
        gsap.to(ref, {
          x: 0,
          y: 0,
          duration: duration,
          ease: "power3.out",
        });
      });


    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  
  return (
    <div className='md:w-[80%] w-[90%] mx-auto'>

      <div>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-start md:gap-10 relative">
        
        <div className="pt-96 md:pt-0">
          <h1 className="md:my-10 my-7 font-bold text-[#898A91] tracking-widest">
            ABOUT
          </h1>
          <h1 className="lg:text-6xl text-3xl md:text-4xl font-bold md:w-[90%] w-[100%] leading-snug md:leading-snug lg:leading-tight">
          We are usability and digital design experts.
          </h1>
          <p className="text-[#898A91] font-medium leading-7 tracking-wide text-[18px] my-5">
          Since 2009, we’ve worked with our clients to design and build digital products, websites and experiences.
          </p>

          <p className="text-[#898A91] font-medium leading-7 tracking-wide text-[18px] my-5">
          And while our work has won some awards (we've been named to the Entrepreneur 360 and the Inc. 500), we’re most excited to help our clients see measurable improvements in their businesses and organizations. We live for increasing conversion rates, reducing friction, telling stories, and helping our clients grow.
          </p>

          <p className="text-[#898A91] font-medium leading-7 tracking-wide text-[18px] my-5">
          We work on all kinds of projects: think marketing and e-commerce sites, mobile apps, internal applications, vision-setting projects, and 1200 sq. ft. semi-trailers with interactive exhibits inside.
          </p>

          <p className="text-[#898A91] font-medium leading-7 tracking-wide text-[18px] my-5">
          Most importantly, the work we do is fun. We love our industry and the people we work with—and we’ll love your brand like it’s our own.
          </p>
        </div>




        <div className="w-[100%] py-10">
          <div
            className="absolute transition-all lg:top-[120px] top-[-20px] md:top-[220px] left-1/2 lg:left-2/3 md:left-1/2 transform -translate-x-1/2 md:h-[100px] md:w-[100px] h-[40px] w-[40px]  rounded-full border-[#ffa6009c]  border-[2px]"
            ref={(el) => (divRefs1.current[0] = el)}
          ></div>

          <div
            className="absolute transition-all md:h-[30px] md:w-[30px] h-[10px] w-[10px] rounded-full bg-[#ffa6009c] md:top-[80px] lg:top-1/3 top-[370px] rotate-45 right-0 -z-10 transform"
            ref={(el) => (divRefs1.current[1] = el)}
          ></div>

          <div
            className="absolute transition-all md:h-[120px] md:w-[120px] h-[50px] w-[50px] border-[#ffa600] border-[3px] md:top-1/2 lg:top-1/2 top-[150px] md:left-1/2 rotate-45 md:right-1/1 -z-10 transform"
            ref={(el) => (divRefs1.current[2] = el)}
          ></div>

          <div className="absolute pt-20 mx-auto right-0 md:top-1/2 top-[-80px] w-[100%]">
            <img
              src="/assets/about-orange@2x.jpg"
              alt="method-green"
              className="w-[100%] absolute md:top-1/2 md:left-1/2 md:transform md:-translate-y-1/2 mx-auto md:w-[50%] lg:w-[40%] lg:right-0"
            />
          </div>

          <div
            className="absolute transition-all md:h-[30px] md:w-[30px] h-[20px] w-[20px] bg-[orange] border-[3px] lg:top-full bottom-0 top-[360px] -z-10 md:top-3/4 md:right-0 lg:right-1/3 right-1/1 transform"
            ref={(el) => (divRefs1.current[3] = el)}
          ></div>
        </div>
      </div>


      </div>




    <div className="md:mt-44">
        <div>
          <p className="md:my-10 my-7 font-bold text-[#898A91] tracking-widest">CORE VALUES</p>
          <h1 className="lg:text-6xl text-3xl md:text-4xl font-bold md:w-[70%] w-[100%] leading-snug md:leading-snug lg:leading-tight">These foundational principles guide our actions:</h1>
        </div>

        <div className="lg:py-14">
        
        <div className="w-[100%] py-10 grid md:grid-cols-2 grid-cols-1 justify-between items-start lg:gap-20 md:gap-16">
            {
              Workshops.map((item,index) =>(
                <div key={index} className="my-6 flex items-start gap-3">

                  <div className="flex items-center">
                      <span className="font-bold md:text-[20px] text-[18px]">{item.number}</span>
                      <span className="md:text-[2rem] text-[1.8rem]">{item.dasharrow}</span>
                  </div>

                  <div>
                      <h2 className="font-bold md:text-3xl text-2xl mb-5">{item.heading}</h2>
                      <p className="md:text-[20px] text-[18px] font-medium">{item.content}</p>
                  </div>

                </div>
              ))
            }
        </div>

      </div>
    </div>






    <div className="pt-40 md:pt-10 lg:pt-40 md:pb-10 lg:pb-60">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-between md:gap-10 relative">
        
        <div className="pt-96 md:pt-0">
          <h1 className="md:my-10 my-7 font-bold text-[#898A91] tracking-widest">
            TEAM
          </h1>

          <p className="text-[#898A91] font-medium leading-7 tracking-wide text-[18px] my-5">
          Simple Focus started as a small team of designers who could code. Since 2009, our squad has expanded to include developers, researchers, strategists, writers, and project managers. While we have different skill sets, backgrounds, and musical tastes, we’re all passionate about serving our clients and doing beautiful work.
          </p>

          
        </div>




        <div className="w-[100%] md:py-10">
          <div
            className="absolute transition-all lg:top-[-150px] top-[-150px] md:top-[50px] left-1/2 lg:left-2/3 md:left-1/2 transform -translate-x-1/2 md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px] h-[80px] w-[80px] rounded-full border-[#beced0]  border-[2px]"
            ref={(el) => (divRefs2.current[0] = el)}
          ></div>

          <div
            className="absolute transition-all md:h-[30px] md:w-[30px] h-[10px] w-[10px] rounded-full bg-[#2996c8] md:top-[80px] lg:top-1/3 top-[370px] rotate-45 right-0 -z-10 transform"
            ref={(el) => (divRefs2.current[1] = el)}
          ></div>

          <div
            className="absolute transition-all md:h-[120px] md:w-[120px] h-[50px] w-[50px] border-[#2996c8] border-[3px] md:top-1/2 lg:top-1/2 top-[150px] md:left-1/2 rotate-45 md:right-1/1 -z-10 transform"
            ref={(el) => (divRefs2.current[2] = el)}
          ></div>

          <div className="absolute md:pt-20 mx-auto right-0 md:top-1/2 top-[-80px] w-[100%]">
            <img
              src="/assets/about_team.jpg"
              alt="About Team"
              className="w-[300px] h-[300px]  absolute md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-x-0 md:left-1/2 rounded-full md:transform md:-translate-y-1/2 mx-auto md:w-[250px] md:h-[250px] lg:w-[450px] lg:h-[450px] object-cover lg:right-0 md:gap-10"
            />

          </div>

          <div
            className="absolute transition-all md:h-[30px] md:w-[30px] h-[20px] w-[20px] bg-[#2996c8] border-[3px] lg:bottom-0 bottom-0 top-[360px] -z-10 md:top-3/4 md:right-0 lg:right-1/3 right-1/1 transform"
            ref={(el) => (divRefs2.current[3] = el)}
          ></div>
        </div>
      </div>


      </div>






      <div className="md:my-36">

            {
              CompanyMembers.map((employee,index)=>(
                <div key={index} className="grid md:grid-cols-[1.2fr,2fr,1fr] grid-cols-1 items-start   justify-between w-[100%] md:gap-14 gap-7 md:my-36 my-20">
                    <div className="w-[100%]">
                        <img src={employee.image} alt={employee.name} className="rounded-full md:w-[100%] lg:w-[70%] w-[50%] "/>
                    </div>

                  <div className="">
                    <h2 className="font-bold md:text-3xl text-2xl mb-5">{employee.name}</h2>
                    <p className="font-bold text-[#898A91] mb-5 text-[20px]">{employee.position}</p>
                    <p className="font-medium md:text-[20px] text-[18px]">{employee.content}</p>
                  </div>

                  <div className="">
                  <a href="www.linkedin.com" className="font-bold text-[20px] text-[#e86832] cursor-pointer hover:text-[#76422b]" >{employee.linkedIn}</a>
                  </div>

                </div>
              ))
            }

      </div>





      <div className="pt-40 md:pt-10 lg:pt-40 md:pb-32 lg:pb-60 overflow-hidden md:overflow-visible">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-between md:gap-10 relative">
        
        <div className="pt-96 md:pt-0">
          <h1 className="md:my-10 my-7 font-bold text-[#898A91] tracking-widest">
            LOCATIONS
          </h1>

          <h1 className="lg:text-6xl text-3xl md:text-4xl font-bold md:w-[70%] w-[100%] leading-snug md:leading-snug lg:leading-tight">We’re a fully distributed, national agency.</h1>
        
        </div>




        <div className="w-[100%] md:py-10">
          <div
            className="absolute transition-all lg:top-[-50px] top-[-150px] md:top-[50px] left-1/2 lg:left-2/3 md:left-1/2 transform -translate-x-1/2 md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px] h-[80px] w-[80px] rounded-full border-[#87ea87]  border-[2px]"
            ref={(el) => (divRefs3.current[0] = el)}
          ></div>

          <div
            className="absolute transition-all md:h-[140px] md:w-[140px] h-[100px] w-[100px] md:top-[-50px] lg:top-1/3 top-[-150px] rotate-45 right-0 -z-10 transform"
            ref={(el) => (divRefs3.current[1] = el)}
          >
            <img src="/assets/AboutLocation1.jpg" alt="About Location 1" />
          </div>

          <div
            className="absolute transition-all md:h-[150px] md:w-[150px] h-[100px] w-[100px] md:top-full lg:top-full top-[150px] md:left-1/2 md:right-1/1 -z-10 transform -rotate-12" ref={(el) => (divRefs3.current[2] = el)}>
            <img src="/assets/AboutLocation2.jpg" alt="About Location 2" />
          </div>


          <div className="absolute md:pt-20 mx-auto right-0 md:top-1/2 top-[-80px] w-[100%]">
            <img
              src="/assets/AboutLocation3.jpg"
              alt="About Location 3"
              className="w-[250px] h-[250px] absolute md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-x-0 md:left-1/2  md:transform md:-translate-y-1/2 mx-auto md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] object-cover lg:right-0 md:gap-10"
            />

          </div>

          <div
            className="absolute transition-all md:h-[30px] md:w-[30px] h-[20px] w-[20px] bg-[#87ea87] border-[3px] lg:bottom-0 bottom-0 top-[360px] -z-10 md:top-3/4 md:right-0 lg:right-1/3 right-1/1 transform"
            ref={(el) => (divRefs3.current[3] = el)}
          ></div>

        </div>
      </div>


      </div>





    </div>
  )
}

export default About
