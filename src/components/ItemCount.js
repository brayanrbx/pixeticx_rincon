import React, { useState, useContext } from 'react';
import  CartContext  from '../context/CartContext';

/**
 * This function let create an item count component
 * @param {int} stock
 * @param {int} initial
 * @param {function} onAdd
 * @returns {JSX.Element}
 */
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  // Get the method addCart form the context
  const { product, addCart } = useContext(CartContext);

  /**
   * This function let add the product to cart and show a modal with the message added to cart
   */
  const buy = () => {
    if (count > 0 && count <= stock) {
      onAdd(count);
      addCart(count);
    }
  }

  return (
    <div className='grid gap-2 w-60 mx-auto mb-4 p-2 rounded'>
      <h3 className='text-center text-emerald-700'>{stock} in stock</h3>
      <h4>Total: $ {(count * product.price).toFixed(2)}</h4>
      <div className='flex justify-around gap-10 p-2 border-2 rounded  hover:border-sky-500'>
        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button
        className='card-button'
        onClick={buy}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
