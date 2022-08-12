import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { getProductById } from '../firebase';
import ItemDetail from '../components/ItemDetail';
import CartContext from '../context/CartContext';

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProductById("items", id).then(snapshot => setItems(snapshot));
  }, [id]);

  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    addProduct(items);
  },[items]);

  return (
    (Object.entries(items).length === 0) ? <ClipLoader size={90} cssOverride={{ display: "block", margin: "auto auto" }}  /> :
    <>
      <h2 className='m-2 p-6 text-center text-3xl'>Welcome</h2>
      <section className='flex justify-center'>
        {items && (<ItemDetail {...items} />)}
      </section>
    </>
  );
};

export default ItemDetailContainer;