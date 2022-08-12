import React, { useState } from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/img/logo.svg';
import CategoriesList from './CategoriesList';
import { NavLink } from './NavLink';

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
    <nav className='grid grid-cols-2 items-center gap-2 mb-2 mx-auto p-2 bg-[#F9F9F9] font-semibold text-center sm:w-[95%] md:w-[90%] lg:grid-cols-[1fr_2fr_1fr] lg:w-[85%] xl:w-4/5 2xl:w-9/12'>
      <div className='p-2 w-36'>
          <NavLink to="/"><img src={logo} alt='Logo' /></NavLink>
      </div>
      <div className={`${clicked ? 'z-[1] top-0 left-0 w-full duration-300': 'top-0 -left-[188rem] duration-300'} absolute flex flex-col p-2 bg-black text-white transition-all ease-in-out lg:static lg:bg-[#F9F9F9] lg:text-white lg:transition-none`}>
        <button className='self-end transition-all ease-in-out duration-700 hover:rotate-180 lg:hidden' onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className='lg:flex lg:justify-evenly lg:text-black'>
          <li className='item-effect p-2' onClick={handleClick}><NavLink to="/">Home</NavLink></li>
          <div className='dropdown dropdown-hover'>
          <li className='item-effect p-2'>Categories</li>
          <CategoriesList />
          </div>
          <li className='item-effect p-2' onClick={handleClick}><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div className='flex justify-end gap-2 p-2'>
        <button className="transition-all ease-in-out duration-700 hover:rotate-180 lg:hidden" type="button" onClick={handleClick} >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;