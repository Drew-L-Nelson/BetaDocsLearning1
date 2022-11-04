import React from 'react';
import './style.css';
import ProductCategoryRow from './ProductCategoryRow';

export default function ProductTable() {
  const rows = [];
  let lastCategory = null;






  return (
    <table>
      <thead>
        <div className='name-price-div'>
          <th>Name</th>
          <th>Price</th>
        </div>
      </thead>
      {/* <tbody>{rows}</tbody> */}
    </table>
  );
}