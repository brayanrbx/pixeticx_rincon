import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartIs from '../components/CartIs';
import CartEmpty from '../components/CartEmpty';

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <h2 className='m-2 p-6 text-center text-3xl'>Cart</h2>
      <section className='flex justify-center items-center p-2'>
        {cart.length > 0 ? <CartIs /> : <CartEmpty />}
      </section>
    </>
  );
};

export default Cart;