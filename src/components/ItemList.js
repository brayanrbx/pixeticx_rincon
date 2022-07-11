import React from 'react';
import Item from './Item';

/**
 * With this function we can create a component that iterate over an array
 * @param {Array} items
 * @returns {JSX.Element}
 */
const ItemList = ({ items }) => {
  return (
    <section className='grid justify-center justify-items-center gap-4 w-full mx-auto sm:grid-cols-2 sm: w-[95%] md:grid-cols-3 lg:grid-cols-4'>
      {items.map((item, i) => <Item {...item} key={i} />)}
    </section>
  );
};

export default ItemList;