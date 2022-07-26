import React, { useState } from 'react';
import ItemCount from './ItemCount';
import Purchase from './Purchase';
import Swal from 'sweetalert2';

/**
 * This component let to return a card that show a product
 * @param {int} title
 * @param {int} price
 * @param {string} description
 * @param {string} image
 * @returns {JSX.Element}
 */
const ItemDetail = ({ title, price, description, image, rating }) => {
  const [purchase, setPurchase] = useState(false);

  const success = (n) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Added ${n} products to cart`,
      showConfirmButton: false,
      timer: 1000
    });
    setPurchase(true);
  };

  return (
    <div className='card-item gap-10 mx-auto p-2 bg-[#F9F9F9] text-center shadow-xl sm:w-[70%]'>
      <div className='self-center p-2'>
        <img src={image} alt={title} className='w-52' />
      </div>
      <div className='p-2'>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>$ {price}</p>
      </div>
      {purchase ? <Purchase change={() => setPurchase(false)} /> : <ItemCount stock={rating.count} initial={1} onAdd={success} />}
    </div>
  );
};

export default ItemDetail;