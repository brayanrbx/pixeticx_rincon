import React from 'react';
import Item from './Item';

/**
 * With this function we can create a component that iterate over an array
 * @param {Array} items
 * @returns {JSX.Element}
 */
const ItemList = ({ items }) => {
  return (
    <section className='grid justify-items-center gap-4 mx-auto p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:w-4/5'>
      {items.map((item) => <Item {...item} key={item.id} />)}
    </section>
  );
};

export default ItemList;