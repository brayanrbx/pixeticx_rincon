import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../firebase';
import ItemDetail from '../components/ItemDetail';
import CartContext from '../context/CartContext';

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then(snapshot => setItems(snapshot));
  }, [id]);

  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    addProduct(items);
  },[items]);

  return (
    (Object.entries(items).length === 0) ? <>Loading...</> :
    <section className='flex justify-center items-center min-h-screen'>
      {items && (<ItemDetail {...items} />)}
    </section>
  );
};

export default ItemDetailContainer;