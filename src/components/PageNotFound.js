import React from 'react';
import Error from '../assets/Images/Error.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <img src={Error} alt="Logo" />
      <Link
        to="/"
        className="bg-blue-500 px-3 py-2 text-white rounded mt-10 hover:bg-blue-700 focus:outline-none"
        role="button"
      >
        Home
      </Link>
    </div>
  );
};

export default PageNotFound;
