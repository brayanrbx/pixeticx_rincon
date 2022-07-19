import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';
// import products from '../products.json';

const ItemDetailContainer = () => {
  const [element, setElement] = useState('');
  const { id } = useParams();

  // useEffect(() => {
  //   const getItem = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, 2000);
  //   });
  //   getItem.then(data => setElement(data));
  // }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setElement(json))
  }, [id]);

  return (
    <>
      {element &&(<ItemDetail {...element} />)}
    </>
  );
};

export default ItemDetailContainer;