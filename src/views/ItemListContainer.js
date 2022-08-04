import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { getProducts } from '../firebase';
import ItemList from '../components/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    getProducts().then(snapshot => setItems(snapshot.docs.map(doc => doc.data())));
  }, []);

  useEffect(() => {
    getProducts(category).then(snapshot => setCategories(snapshot.docs.map(doc => doc.data())));
  }, [category]);

  return (
    (items.length === 0 || categories.length === 0) ? <ClipLoader size={90} cssOverride={{ display: "block", margin: "auto auto" }}  /> :
    <>
      <h2 className='m-2 p-6 text-center text-3xl'>{(pathname === '/' ? "Welcome" : category.toUpperCase())}</h2>
      {(pathname === '/') ? <ItemList items={items}  /> : <ItemList items={categories} />}
    </>
  );
};

export default ItemListContainer;