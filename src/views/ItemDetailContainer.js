import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const [element, setElement] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setElement(json))
  }, [id]);

  return (
    <>
      {element && (<ItemDetail {...element} />)}
    </>
  );
};

export default ItemDetailContainer;