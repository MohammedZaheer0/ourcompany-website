// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
// import { IoMenu } from "react-icons/io5";
// import { RxCross2 } from "react-icons/rx";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <>
//             {/* Navbar for larger screens */}
//             <nav className='md:grid hidden grid-cols-2 justify-between items-center w-[80%] mx-auto my-5'>
//                 <div className='w-[100%] flex justify-start items-start'>
//                     <NavLink to='/'>
//                         <img src='/assets/companyLogo.png' alt="Logo" className='w-[20%] h-[20%]' />
//                     </NavLink>
//                 </div>

//                 <div className='flex lg:gap-10 gap-5 font-bold text-[17px] justify-end'>
//                     <NavLink 
//                         to='/services' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
//                         }
//                     >
//                         Services
//                     </NavLink>
//                     <NavLink 
//                         to='/projects' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
//                         }
//                     >
//                         Projects
//                     </NavLink>
//                     <NavLink 
//                         to='/method' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
//                         }
//                     >
//                         Method
//                     </NavLink>
//                     <NavLink 
//                         to='/about' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
//                         }
//                     >
//                         About
//                     </NavLink>
//                     <NavLink 
//                         to='/blog' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
//                         }
//                     >
//                         Blog
//                     </NavLink>
//                     <NavLink 
//                         to='/contact' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
//                         }
//                     >
//                         Contact
//                     </NavLink>
//                 </div>
//             </nav>

//             {/* Navbar for smaller screens */}
//             <nav className='md:hidden grid grid-cols-1 justify-between items-center w-[80%] mx-auto z-40 text-center'>
//                 <div className='w-[100%] z-50'>
//                     <NavLink to='/'>
//                         <img src='/assets/companyLogo.png' alt="Logo" className='w-[80px] my-7 lg:w-[20%] lg:h-[20%]' />
//                     </NavLink>
//                 </div>

//                 <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden absolute top-10 right-4 z-50'>
//                     {isMenuOpen ? <RxCross2 className='h-7 w-7 font-bold text-orange-500' /> : <IoMenu className='h-7 w-7 font-bold text-orange-500' />}
//                 </button>

//                 <div className={`w-[100%] absolute top-0 right-0 bottom-0 left-0 items-center flex flex-col gap-5 font-bold text-[17px] bg-white justify-center ${isMenuOpen ? 'flex bg-white z-20 h-[100vh] text-center text-3xl' : 'hidden'}`}>
//                     <NavLink 
//                         to='/services' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
//                         }
//                     >
//                         Services
//                     </NavLink>
//                     <NavLink 
//                         to='/projects' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
//                         }
//                     >
//                         Projects
//                     </NavLink>
//                     <NavLink 
//                         to='/method' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
//                         }
//                     >
//                         Method
//                     </NavLink>
//                     <NavLink 
//                         to='/about' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
//                         }
//                     >
//                         About
//                     </NavLink>
//                     <NavLink 
//                         to='/blog' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
//                         }
//                     >
//                         Blog
//                     </NavLink>
//                     <NavLink 
//                         to='/contact' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
//                         }
//                     >
//                         Contact
//                     </NavLink>


//                     <NavLink 
//                         to='/career' 
//                         className={({ isActive }) => 
//                             isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
//                         }
//                     >
//                         Career
//                     </NavLink>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;











import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <>
            {/* Navbar for larger screens */}
            <nav className='md:grid hidden grid-cols-2 justify-between items-center w-[80%] mx-auto my-5'>
                <div className='w-[100%] flex justify-start items-start'>
                    <NavLink to='/'>
                        <img src='/assets/companyLogo.png' alt="Logo" className='w-[20%] h-[20%]' />
                    </NavLink>
                </div>

                <div className='flex lg:gap-10 gap-5 font-bold text-[17px] justify-end'>
                    <NavLink 
                        to='/services' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink 
                        to='/projects' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to='/method' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
                        }
                    >
                        Method
                    </NavLink>
                    <NavLink 
                        to='/about' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
                        }
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to='/blog' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        to='/contact' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover border-b-2 border-orange-500' : 'NavLinksHover'
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>

            {/* Navbar for smaller screens */}
            <nav className='md:hidden grid grid-cols-1 justify-between items-center w-[80%] mx-auto z-40 text-center'>
                <div className='w-[100%] z-50'>
                    <NavLink to='/'>
                        <img src='/assets/companyLogo.png' alt="Logo" className='w-[80px] my-7 lg:w-[20%] lg:h-[20%]' />
                    </NavLink>
                </div>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden absolute top-10 right-4 z-50'>
                    {isMenuOpen ? <RxCross2 className='h-7 w-7 font-bold text-orange-500' /> : <IoMenu className='h-7 w-7 font-bold text-orange-500' />}
                </button>

                <div className={`w-[100%] absolute top-0 right-0 bottom-0 left-0 items-center flex flex-col gap-5 font-bold text-[17px] bg-white justify-center ${isMenuOpen ? 'flex bg-white z-20 h-[100vh] text-center text-3xl' : 'hidden'}`}>
                    <NavLink 
                        to='/services' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
                        }
                        onClick={handleLinkClick} // Close menu on link click
                    >
                        Services
                    </NavLink>
                    <NavLink 
                        to='/projects' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
                        }
                        onClick={handleLinkClick} // Close menu on link click
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to='/method' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
                        }
                        onClick={handleLinkClick} // Close menu on link click
                    >
                        Method
                    </NavLink>
                    <NavLink 
                        to='/about' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
                        }
                        onClick={handleLinkClick} // Close menu on link click
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to='/blog' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
                        }
                        onClick={handleLinkClick} // Close menu on link click
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        to='/contact' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
                        }
                        onClick={handleLinkClick} // Close menu on link click
                    >
                        Contact
                    </NavLink>

                    <NavLink 
                        to='/career' 
                        className={({ isActive }) => 
                            isActive ? 'NavLinksHover text-3xl border-b-2 border-orange-500' : 'NavLinksHover text-3xl'
                        }
                        onClick={handleLinkClick} // Close menu on link click
                    >
                        Career
                    </NavLink>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
