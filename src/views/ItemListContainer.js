import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
// import products from '../products.json';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();
  const { pathname } = useLocation();

  // useEffect(() => {
  //   const prom = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, 3000);
  //   });
  //   prom.then(data => setItems(data));
  // }, []);

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
      <div className='mb-2 text-center'>{greeting}</div>
      <ItemCount stock={5} initial={1} onAdd={(n) => alert(`Added ${n} products to cart`)} />
      {(pathname === '/') ? <ItemList items={items}  /> : <ItemList items={categories} /> }
    </>
  );
};

export default ItemListContainer;