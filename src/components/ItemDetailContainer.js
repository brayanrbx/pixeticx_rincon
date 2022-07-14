import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import products from '../products.json';

const ItemDetailContainer = () => {
  const [element, setElement] = useState('');

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    getItem.then(data => setElement(data));
  }, []);

  return (
    <>
      <ItemDetail {...element[2]} />
    </>
  );
};

export default ItemDetailContainer;