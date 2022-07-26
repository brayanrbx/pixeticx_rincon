import { useState, createContext } from 'react';

const CartContext = createContext();

const CardProvider = ({ children }) => {

  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (item) => {
    setProduct(item);
  }

  const isInCart = () => {
    return cart.find(item => item.product.id === product.id);
  }

  const totalItems = cart.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);
  console.log(totalItems);

  const addCart = (count) => {
    const inCart = isInCart();
    if (inCart) {
      const index = cart.indexOf(inCart);
      const _cart = [...cart];
      _cart[index].quantity += count;
      _cart[index].total = _cart[index].product.price * _cart[index].quantity;
      setCart(_cart);
    }
    else {
      setCart([...cart, { product, quantity:count, totalPrice: (product.price * count)}]);
    }
  }

  const removeCart = (itemId) => {
    const items = cart.filter(item => item.product.id !== itemId);
    setCart(items);
  }

  const clearCart = () => {
    setCart([]);
  }

  const data = {product, addProduct, cart, addCart, clearCart}

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export { CardProvider };
export default CartContext;