import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import ItemDetail from '../components/ItemDetail';
import CartContext from '../context/CartContext';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { items, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    addProduct(items);
  },[items]);

  return (
    (loading) ? <>Loading...</> :
    <>
      {items && (<ItemDetail {...items} />)}
    </>
  );
};

export default ItemDetailContainer;