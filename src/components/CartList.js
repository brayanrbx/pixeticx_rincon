import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartList = ( item ) => {
  const { modifiedQuantity, removeCart } = useContext(CartContext);

  return (
    <li className='grid grid-cols-6 justify-items-center items-center gap-4 p-2 shadow-zinc-400 text-sm'>
      <span>
        <img src={item.product.image} alt={item.product.title} className='w-32'/>
      </span>
      <span>{item.product.title}</span>
      <span>{item.product.price}</span>
      <span className='flex justify-around items-center gap-4 w-[85%] h-1/4 p-2 border-2 rounded hover:border-sky-500'>
        <button onClick={() => (item.quantity > 1) && modifiedQuantity(-1, item.product.id)}>-</button>
        <p>{item.quantity}</p>
        <button onClick={() => modifiedQuantity(1, item.product.id)}>+</button>
      </span>
      <span>{item.totalPrice.toFixed(2)}</span>
      <span className="item-effect cursor-pointer" onClick={() => removeCart(item.product.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </span>
    </li>
  );
};

export default CartList;