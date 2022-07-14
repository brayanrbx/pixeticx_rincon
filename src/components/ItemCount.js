import React from 'react';
import { useState } from 'react';

/**
 * This function let create an item count component
 * @param {int} stock
 * @param {int} initial
 * @param {function} onAdd
 * @returns {JSX.Element}
 */
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  return (
    <div className='grid gap-2 w-60 mx-auto mb-4 p-2 border-2 rounded'>
      <h3 className='text-center text-emerald-700'>In Stock</h3>
      <div className='flex justify-around gap-10 border-2 rounded'>
        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button
        className=' border-2 rounded'
        onClick={() => count <= stock && onAdd(count)}
        >Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
