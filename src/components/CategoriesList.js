import React from 'react';
import { NavLink } from './NavLink';

/**
 * This component return a list of categories with a link to the item list
 * @returns {JSX.Element}
 */
const CategoriesList = () => {

  console.log();
  return (
    <ul className='p-2 text-white lg:text-black'>
        <li className='item-effect'><NavLink to='/category/electronics'>Electronics</NavLink></li>
        <li className='item-effect'><NavLink to='/category/jewelery'>Jewerely</NavLink></li>
        <li className='item-effect'><NavLink to="/category/men's clothing">Men's Clothing</NavLink></li>
        <li className='item-effect'><NavLink to="/category/women's clothing">Women's Clothing</NavLink></li>
    </ul>
  );
};

export default CategoriesList;