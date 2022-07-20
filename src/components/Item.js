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
    <div className='card-item w-60 p-2 bg-[#F9F9F9] text-center'>
      <div className='m-auto p-2'>
        <img src={image} alt={title}/>
      </div>
      <div className='p-2'>
        <h2>{title}</h2>
        <p>$ {price}</p>
        <button className='w-[90%] p-2 bg-sky-500 rounded text-white hover:bg-sky-600'>
          <Link to={`/item/${id}`} className='flex justify-center gap-2 mt-auto block'>
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