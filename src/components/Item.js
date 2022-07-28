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
    <div className='card-item w-64 bg-[#F9F9F9] transition-all ease-in-out duration-300 hover:scale-105'>
      <div className='flex justify-center items-center p-2'>
        <img src={image} alt={title} className='max-h-full object-cover'/>
      </div>
      <div className='flex flex-wrap justify-center p-2 items-center text-center'>
        <h2 className='self-center p-2'>{title}</h2>
        <p className='self-end p-2 text-gray-800'>$ {price}</p>
      </div>
      <div className='p-2 mt-auto'>
        <button className='card-button w-full'>
          <Link to={`/item/${id}`} className='flex justify-center gap-2 w-full block'>
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