import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Projects = () => {

  const location = useLocation();

  return (
    <div>


     {
      location.pathname ==='/projects' && (
        <div>
          <h1> Parent Component</h1>
          <p>this is parent projects component</p>
        </div>
      )
     }

     <Outlet/>
    </div>
  )
}

export default Projects
