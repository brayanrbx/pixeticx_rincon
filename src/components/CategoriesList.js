import React from 'react';
import { NavLink } from './NavLink';

/**
 * This component return a list of categories with a link to the item list
 * @returns {JSX.Element}
 */
const CategoriesList = () => {
  return (
    <div className='dropdown-content w-36 p-2 bg-[#F9F9F9] rounded-box lg:w-60 lg:bg-black'>
      <ul className='p-2 text-black lg:text-white'>
          <li className='item-effect p-2'><NavLink to='/category/electronics'>Electronics</NavLink></li>
          <li className='item-effect p-2'><NavLink to='/category/jewelery'>Jewerely</NavLink></li>
          <li className='item-effect p-2'><NavLink to="/category/men's clothing">Men's Clothing</NavLink></li>
          <li className='item-effect p-2'><NavLink to="/category/women's clothing">Women's Clothing</NavLink></li>
      </ul>
    </div>
  );
};

export default CategoriesList;