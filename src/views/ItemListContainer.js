import { React, useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ItemList from '../components/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => setItems(json))
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(json => setCategories(json))
  }, [category]);

  return (
    <>
      <div className='mb-2 p-6 text-center'>{greeting}</div>
      {(pathname === '/') ? <ItemList items={items}  /> : <ItemList items={categories} />}
    </>
  );
};

export default ItemListContainer;