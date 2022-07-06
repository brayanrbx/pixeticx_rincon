import React from 'react';
import { useState } from 'react';
import CartWidget from './CartWidget';

/**
 * This function let to create a component that added a navbar
 * @returns {JSX.Element}
 */

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  /**
   * This function let to display the menu
   */
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className='grid grid-cols-2 align-content-center gap-2 mb-2 p-2 bg-slate-700 text-center lg:grid-cols-3'>
      <div className='grid grid-cols-2 justify-self-start text-white'>
        <img className='text-white' alt='Logo' />
        <p>Name Logo</p>
      </div>
      <div className='grid grid-cols-2 justify-self-end'>
        <CartWidget />
        <button className="block justify-self-center w-7 py-2 bg-transparent border border-solid border-transparent rounded outline-none text-xl leading-none cursor-pointer focus:outline-none lg:hidden" type="button" onClick={handleClick} >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-2"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-2"></span>
        </button>
      </div>
      <nav className={`${clicked ? 'top-0 left-0 w-[100%] duration-500' : 'top-0 -left-[188rem] duration-1000'} absolute col-span-2 p-2 bg-slate-700 text-white transition-all ease-in-out lg:grid lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:static`}>
        <div className='grid justify-items-center lg:hidden'>
          <button className={`${clicked ? 'top-0 -left-[188rem] duration-1000' : 'top-0 left-0 w-[100%] duration-500'} justify-self-end`} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className='grid gap-2 lg:grid-cols-4'>
          <li className='col-span-2 lg:col-span-1'>Home</li>
          <li className='col-span-2 lg:col-span-1'>Shop</li>
          <li className='col-span-2 lg:col-span-1'>Styles</li>
          <li className='col-span-2 lg:col-span-1'>Technology</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;