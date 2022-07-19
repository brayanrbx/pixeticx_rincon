import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesList = () => {

  return (
    <ul className='text-white lg:text-black'>
        <li><Link to='/category/electronics'>Electronics</Link></li>
        <li><Link to='/category/jewelery'>Jewerely</Link></li>
        <li><Link to="/category/men's clothing">Men's Clothing</Link></li>
        <li><Link to="/category/women's clothing">Women's Clothing</Link></li>
    </ul>
  );
};

export default CategoriesList;