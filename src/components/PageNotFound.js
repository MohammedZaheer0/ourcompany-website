import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h1>Error Page 404</h1>
      <h2>
      <Link to='/'>Back To Home Page</Link>
      </h2>
    </div>
  )
}

export default PageNotFound
