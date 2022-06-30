import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <header className='grid grid-cols-3 gap-2 align-content-center lg:grid-cols-2 m-2 bg-slate-700 text-center'>
      <div className='grid grid-cols-2 col-span-2 lg:col-span-1 text-white'>
        <img className='text-white' alt='Logo' />
        <p>Name Logo</p>
      </div>
      <button className="block justify-self-center align-self-center w-7 py-2 bg-transparent border border-solid border-transparent rounded outline-none text-xl leading-none cursor-pointer lg:hidden  focus:outline-none" type="button" onClick={handleClick} >
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
      <nav className={`col-span-3 lg:col-span-1 ${clicked ? 'grid' : 'hidden'} bg-blue-200 lg:grid`}>
        <ul className='grid lg:grid-cols-4'>
          <li className='col-span-3 lg:col-span-1'>Home</li>
          <li className='col-span-3 lg:col-span-1'>Shop</li>
          <li className='col-span-3 lg:col-span-1'>Styles</li>
          <li className='col-span-3 lg:col-span-1'>technology</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar