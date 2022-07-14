import React from 'react';
import { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from '../products.json';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 3000);
    });
    prom.then(data => setItems(data));
  }, []);

  return (
    <>
      <div className='mb-2 text-center'>{greeting}</div>
      <ItemCount stock={5} initial={1} onAdd={(n) => alert(`Added ${n} products to cart`)} />
      <ItemList items={items} />
    </>
  );
};


export default ItemListContainer;