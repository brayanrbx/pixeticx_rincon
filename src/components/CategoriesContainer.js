import React from 'react';
import CategoriesList from './CategoriesList';

/**
 * This component return the render of the categories list
 * @returns {JSX.Element}
 */
const Categories = () => {
  return (
    <div className='absolute top-20 w-36 p-2 bg-black lg:w-60 lg:bg-white lg:top-14'>
      <CategoriesList />
    </div>
  );
};

export default Categories;