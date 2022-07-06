import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='grid grid-cols-3 text-center'>
      <ItemCount stock={5} initial={1} onAdd={(n) => alert(`agregados ${n} productos`)} />
    </div>
  );
};

export default ItemListContainer;