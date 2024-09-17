import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GoDash } from "react-icons/go";

const Method = () => {

  
  const MethodRuls = [
    {
      id:1,
      number:'I',
      dasharrow:<GoDash />,
      heading:'Listen more than you talk.',
      content: `For a human-centered practice, this might seem obvious, but it's worth saying: we're active listeners, both to you and your customers. Because that's still the best way to understand what you and your customers need, so we can make it.`
    },

    {
      id:2,
      number:'II',
      dasharrow:<GoDash />,
      heading:'Embrace constraints.',
      content: `It sounds counter-intuitive, but if you want to think outside the box, placing arbitrary constraints on creative tasks forces us to be more imaginative. This has been proven by scientific research (and our own observation).`
    },


    {
      id:3,
      number:'III',
      dasharrow:<GoDash />,
      heading:'Generate a ton of options.',
      content: `We generate as many options as quickly as possible, without ruling things out until we absolutely have to. This helps us make sure that we’ve explored every direction that our work could take.`
    },

    {
      id:4,
      number:'IV',
      dasharrow:<GoDash />,
      heading:'Don’t get attached.',
      content: `Sometimes, it’s hard to recognize bad ideas when they’re your very own bad ideas. We keep emotional investment in our ideas to a minimum by generating a ton of ideas and quickly filtering out the stinkers.`
    },


    {
      id:5,
      number:'V',
      dasharrow:<GoDash />,
      heading:'Contribute.',
      content: `Great work happens when smart people trust each other and pull in the same direction, so our creative process includes collaboration between our team and yours. This is a team effort, after all.`
    },


    {
      id:6,
      number:'VI',
      dasharrow:<GoDash />,
      heading:'Let it be fun.',
      content: `When you get the right people in a room working together to solve a problem, it’s magic. A process that’s relaxed, open and fun leads to better collaboration between our teams and ultimately, better work.`
    },
  ]



  const Workshops = [
    {
      id:1,
      number:'I',
      dasharrow:<GoDash />,
      heading:'Idea Generation',
      content: `One of our go-to exercises is something we call a four by four. By dividing a sheet of paper into quarters and asking everyone tackle one focused problem four different ways in sixteen minutes, we create a ton of options in no time. A team of five designers can generate 300 ideas in a week with only 48 minutes of intense work per day.`
    },

    {
      id:2,
      number:'II',
      dasharrow:<GoDash />,
      heading:'Visual Calibration',
      content: `When you say you want your new website to be "clean and modern" it's hard to know exactly what that means. So, we came up with a way to show you a bunch of visual expressions and talk about them with you, an exercise we call a spectrum board workshop. In two hours, everyone understands your brand better and will be able to talk about visual design using a shared vocabulary.`
    },


    {
      id:3,
      number:'III',
      dasharrow:<GoDash />,
      heading:'Architecture',
      content: `We’ll work with you to establish your site’s navigation and content structure though card sorting, white-boarding, core modeling and more. Doing it this way makes the end result better and saves a lot of time.`
    },

    {
      id:4,
      number:'IV',
      dasharrow:<GoDash />,
      heading:'Voice and Tone',
      content: `Our voice and tone workshops help us establish your brand’s verbal personality by asking you to think about your brand as a human being. This humanizing exercise makes it easier for the team to write in a consistent style for your brand.`
    },

  ]




  const divRefs1 = useRef([]); // Refs for the first set of animations
  const divRefs2 = useRef([]); // Refs for the second set of animations

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
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="md:w-[80%] w-[90%] mx-auto my-24">

      <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center md:gap-10 relative">
        
        <div className="pt-56 md:pt-0">
          <h1 className="md:my-10 my-7 font-bold text-[#898A91] tracking-widest">
            METHOD
          </h1>
          <h1 className="lg:text-6xl text-3xl md:text-4xl font-bold md:w-[80%] w-[100%] leading-snug md:leading-snug lg:leading-tight">
            We don’t guess around with your business.
          </h1>
          <p className="text-[#898A91] font-medium leading-7 tracking-wide text-[18px] my-5">
            Starting any creative project is a leap of faith. You’re agreeing to
            go on a journey with us and commit resources to work you can’t see
            yet. We want to deliver amazing work for you, no matter what. But,
            in this business, we don’t have time to go sit by ourselves and wait
            for divine inspiration to strike. Our success depends on our ability
            to develop creative solutions consistently; yours depends on picking
            a partner who will deliver. So, we invented a process to bring our
            creative A–game every time.
          </p>
        </div>

        <div className="w-[100%] bg-red-500">
          <div
            className="absolute transition-all lg:top-[-120px] top-[-100px] md:top-[150px] right-2.5 lg:right-1.5 md:right-2.5 transform -translate-x-1/2 h-[75px] w-[75px] lg:h-[300px] lg:w-[300px] -z-10 md:h-[180px] md:w-[180px] rounded-full border-[#dddbdb]  border-[2px]"
            ref={(el) => (divRefs1.current[0] = el)}
          ></div>

          <div
            className="absolute transition-all h-[25px] w-[25px] bg-[lightgreen] md:top-[80px] lg:top-[-80px] top-[-110px] rotate-45 right-1/3 -z-10 transform"
            ref={(el) => (divRefs1.current[1] = el)}
          ></div>

          <div
            className="absolute transition-all lg:h-[150px] lg:w-[150px] h-[50px] w-[50px] md:h-[50px] md:w-[50px] border-[#208ec169] border-[3px] md:top-3/4 top-36 right-0"
            ref={(el) => (divRefs1.current[2] = el)}
          ></div>

          <div className="absolute right-0 md:top-1/2 top-[-80px] w-[100%]">
            <img
              src="/assets/method-green.jpg"
              alt="method-green"
              className="rounded-full w-[90%] absolute md:top-1/2 md:left-1/2 md:transform md:-translate-y-1/2 mx-auto md:w-[50%] lg:w-[40%] lg:right-0"
            />
          </div>

          <div
            className="absolute transition-all md:h-[80px] md:w-[80px] h-[20px] w-[20px] rounded-full border-[lightgreen] border-[3px] lg:bottom-0 top-36 -z-10 md:top-3/4 lg:right-1/3 right-1/1 transform"
            ref={(el) => (divRefs1.current[3] = el)}
          ></div>
        </div>
      </div>




      <div className="pt-80 lg:pt-80 md:py-20 pb-10 overflow-hidden grid md:grid-cols-2 grid-cols-1 justify-between items-center md:gap-10 relative">
        
        <div className="w-[100%] ">

          <div className="absolute left-0 md:top-1/2 top-[120px] w-[100%] h-[100%]">
          
          <div
            className="border-[#dddbdb] z-10 border-[2px] rounded-full h-[180px] w-[180px] absolute  md:left-0 md:transform md:-translate-y-1/2 md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] lg:right-0"
            ref={(el) => (divRefs2.current[0] = el)}
          ></div>
          </div>


          <div
            className="absolute transition-all h-[25px] w-[25px] bg-[lightgreen] md:top-1/4 lg:top-[150px] top-[50px] rotate-45 left-10 -z-10 transform"
            ref={(el) => (divRefs2.current[1] = el)}
          ></div>

          <div
            className="absolute transition-all lg:h-[100px] lg:w-[100px] h-[50px] w-[50px] md:h-[50px] md:w-[50px] border-[#208ec169] border-[3px] md:top-3/4 top-36 right-0 md:right-1/2"
            ref={(el) => (divRefs2.current[2] = el)}
          ></div>

          <div className="absolute left-0 md:top-1/2 top-[80px] w-[100%]">
            <img
              src="/assets/method-blue.jpg"
              alt="method-blue"
              className="rounded-full w-[90%] absolute md:top-1/2 md:left-0 md:transform md:-translate-y-1/2 md:w-[50%] lg:w-[35%] lg:right-0"
            />
          </div>

          <div
            className="absolute transition-all md:h-[80px] md:w-[80px] h-[20px] w-[20px] rounded-full border-[lightgreen] border-[3px] lg:bottom-0 -z-10 md:top-3/4  left-0 md:left-10  transform"
            ref={(el) => (divRefs2.current[3] = el)}
          ></div>
        </div>

        <div className="lg:pt-0 md:pt-0 pt-20">
          <h1 className="text-3xl font-bold md:w-[100%] w-[100%] leading-snug md:leading-snug lg:leading-tight">
          The Team Workshop Method
          </h1>
          <p className="text-[#898A91] font-medium leading-7 tracking-wide text-[18px] my-5">
          The Team Workshop Method is our framework for getting to know you and your organization, your objectives and your customers. We value collaboration, because the best ideas come when people put their heads together. We generate tons of ideas to test and iterate upon, because the more things you try, the more likely you are to get it right. When we deliver our work, you can trust we aren’t crossing our fingers and hoping your boss or your customers will like it. We’re giving you data-backed recommendations from a process that produces results.
          </p>
        </div>

      </div>



      <div className="lg:pt-32 pt-20 pb-20">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Our method has six rules:</h1>
        
        <div className="w-[100%] py-10 grid md:grid-cols-2 grid-cols-1 justify-between items-start lg:gap-20 md:gap-16">
            {
              MethodRuls.map((item,index) =>(
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





      <div className="lg:py-14">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Workshops</h1>
        <p className="md:text-[22px] text-[20px] my-5 lg:w-[70%] md:w-[85%] font-semibold">Moving creative projects forward is as much about communication and team work as it is inspiration. Over the years, we’ve designed a lot of collaborative exercises to help us work with you and your team better.</p>
        
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
  );
};

export default Method;
