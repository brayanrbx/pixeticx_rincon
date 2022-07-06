import React from 'react';
import { useState } from 'react';

/**
 * This function let create an item count component
 * @param {} param0
 * @returns {JSX.Element}
 */
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  return (
    <div className='grid col-start-2 gap-2 p-2 border-2 rounded'>
      <h3>Item</h3>
      <div className='flex justify-around gap-10 border-2 rounded'>
        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button
        className=' border-2 rounded'
        onClick={() => count <= stock && onAdd(count)}
        >Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
