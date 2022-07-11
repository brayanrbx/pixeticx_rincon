import React from 'react';
import { useState } from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/img/logo.svg';

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
    <nav className='grid grid-cols-2 items-center gap-2 mb-2 p-2 bg-white font-roboto-slab text-center lg:grid-cols-3'>
      <div className='flex gap-10 p-2 w-36'>
        <img src={logo} alt='Logo' className='object-fit'/>
      </div>
      <div className={`${clicked ? 'top-0 left-0 w-[100%] duration-300': 'top-0 -left-[188rem] duration-300'} absolute flex flex-col p-2 bg-black text-white transition-all ease-in-out lg:static lg:bg-white lg:text-white lg:transition-none`}>
        <div className='flex justify-end'>
          <button className='transition-all ease-in-out duration-700 hover:rotate-180 lg:hidden' onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className='lg:flex lg:justify-between lg:text-black'>
          <li className='item-effect'>Home</li>
          <li className='item-effect'>Shop</li>
          <li className='item-effect'>Styles</li>
          <li className='item-effect'>Technology</li>
        </ul>
      </div>
      <div className='flex justify-end gap-2 p-2'>
        <CartWidget />
        <button className="transition-all ease-in-out duration-700 hover:rotate-180 lg:hidden" type="button" onClick={handleClick} >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;