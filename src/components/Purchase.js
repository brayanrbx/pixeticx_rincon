import React from 'react'
import { Link } from 'react-router-dom';

const Purchase = ( {change} ) => {
  return (
    <div className='flex justify-center gap-4'>
      <button
        className='flex justify-center gap-2 p-2 bg-sky-500 rounded text-white hover:bg-sky-600'
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <Link to='/cart'>Buy now</Link>
      </button>
      <button
        className='flex justify-center gap-2 p-2 bg-sky-500 rounded text-white hover:bg-sky-600'
        onClick={change}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
          </svg>
          <Link to=''>Keep buying</Link>
      </button>
    </div>
  )
}

export default Purchase