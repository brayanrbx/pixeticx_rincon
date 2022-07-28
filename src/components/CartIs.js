import React, { useContext } from 'react';
import CartList from '../components/CartList';
import CartContext from '../context/CartContext';

const CartIs = () => {
  const { cart, clearCart, totalItemPrices } = useContext(CartContext);

  return (
    <>
      <ul className='self-start p-2'>
        <li className='grid grid-cols-6 justify-items-center items-center gap-4 p-2 border-y-2 '>
          <span></span>
          <span>Title</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>SubTotal</span>
          <span></span>
        </li>
        {cart.map((items) => <CartList {...items} key={items.product.id}/>)}
        <li className='grid grid-cols-2 gap-4 justify-items-center p-2 border-y-2'>
          <p>Total</p>
          <p>{totalItemPrices.toFixed(2)}</p>
        </li>
        <span className='p-2' onClick={() => clearCart()}>
        <button className="btn btn-outline mt-4 p-2 hover:border-sky-500">Clear cart</button>
        </span>
        <span className='p-2'>
        <button className="btn btn-outline mt-4 p-2 hover:border-sky-500">Checkout</button>
        </span>
      </ul>
    </>
  );
};

export default CartIs;