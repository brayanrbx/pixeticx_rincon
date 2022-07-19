import React from 'react';
import Item from './Item';

/**
 * With this function we can create a component that iterate over an array
 * @param {Array} items
 * @returns {JSX.Element}
 */
const ItemList = ({ items }) => {
  return (
    <section className='grid justify-center justify-items-center gap-4 w-full mx-auto p-2 sm:grid-cols-2 sm:w-[95%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {items.map((item) => <Item {...item} key={item.id} />)}
    </section>
  );
};

export default ItemList;