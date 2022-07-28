import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import ItemList from '../components/ItemList';

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const { pathname } = useLocation();

  const { items, loading } = useFetch('https://fakestoreapi.com/products/');
  const { items: itemCategories} = useFetch(`https://fakestoreapi.com/products/category/${category}`);

  return (
    (loading) ? <>Loading...</> :
    <>
      <h2 className='m-2 p-6 text-center text-3xl'>{greeting}</h2>
      {(pathname === '/') ? <ItemList items={items}  /> : <ItemList items={itemCategories} />}
    </>
  );
};

export default ItemListContainer;