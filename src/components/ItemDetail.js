import React from 'react';

const ItemDetail = ( { title, price, description, image }) => {
  return (
    <div className='flex flex-row gap-10 mx-auto p-2 border text-center sm:w-[70%]'>
      <div>
        <img src={image} alt={title} className="m-auto" />
      </div>
      <div className='self-center'>
        <h2>{title}</h2>
        <p>$ {price}</p>
        <p>Description</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;