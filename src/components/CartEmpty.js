import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className='self-center p-2 text-center '>
      <h2 className='text-4xl'>Your cart is empty D:</h2>
      <Link to="/">
        <button className="btn btn-outline flex justify-center items-center gap-2 mt-4 mx-auto p-2 hover:border-sky-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Home
        </button>
      </Link>
    </div>
  );
};

export default CartEmpty;