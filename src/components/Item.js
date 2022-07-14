import React from 'react';

/**
 * This component shows a bit information about item
 * @param {String} id
 * @param {String} title
 * @param {int} price
 * @param {string} image
 * @returns {JSX.Element}
 */
const Item = ({ id, title, price, image }) => {
  return (
    <div className='flex flex-col w-60 p-2 border text-center'>
      <h2>{title}</h2>
      <p>$ {price}</p>
      <img src={image} alt={title} className='m-auto' />
      <a href={id} className='mt-auto'>More details</a>
    </div>
  );
};

export default Item;