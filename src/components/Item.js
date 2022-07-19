import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to={`/item/${id}`} className='mt-auto item-effect'> See more </Link>
    </div>
  );
};

export default Item;