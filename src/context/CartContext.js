import { useState, createContext } from 'react';

const CartContext = createContext();

const CardProvider = ({ children }) => {

  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const[buyer, setBuyer] = useState(null);

  /**
   * This function let add a product to state
   * @param {object} item
   */
  const addProduct = (item) => {
    setProduct(item);
  }

  /**
   * This function let to know if a product is in cart
   * @returns {object}
   */
  const isInCart = () => {
    return cart.find(item => item.product.id === product.id);
  }

  /**
   * This function let add a product to cart
   * @param {int} count
   */
  const addCart = (count) => {
    const inCart = isInCart();
    if (inCart) {
      const index = cart.indexOf(inCart);
      const _cart = [...cart];
      _cart[index].quantity += count;
      _cart[index].totalPrice = (_cart[index].product.price * _cart[index].quantity);
      setCart(_cart);
    }
    else {
      setCart([...cart, { product, quantity:count, totalPrice: (product.price * count) }]);
    }
  }

  const modifiedQuantity = (initial, ref) => {
      const index = cart.findIndex(item => item.product.id === ref);
      if (cart[index].quantity >= 1 || initial === 1) {
      cart[index].quantity += initial;
      cart[index].totalPrice = (cart[index].quantity * cart[index].product.price);
      setCart([...cart]);
    }
  }

  /**
   * This function let remove a product from cart
   */
  const removeCart = (itemId) => {
    const items = cart.filter(item => item.product.id !== itemId);
    setCart(items);
  }

  /**
   * This function let remove all products from cart
   */
  const clearCart = () => {
    setCart([]);
  }

  const totalItems = cart.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);

  const totalItemPrices = cart.map(item => item.totalPrice).reduce((prev, curr,) => prev + curr, 0);

  const data = { product, addProduct, cart, addCart, modifiedQuantity, removeCart, clearCart, totalItems, totalItemPrices, setBuyer };

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export { CardProvider };
export default CartContext;