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
    <div className='card-item w-64 bg-[#F9F9F9] md:w-52'>
      <div className='flex justify-center items-center p-2'>
        <img src={image} alt={title} className='object-cover max-h-full'/>
      </div>
      <div className='p-2 m-auto text-center'>
        <h2 className='p-2'>{title}</h2>
        <p className='p-2'>$ {price}</p>
      </div>
      <div className='p-2 mt-auto'>
        <button className='card-button w-full'>
          <Link to={`/item/${id}`} className='flex justify-center gap-2 block'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            See more
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Item;