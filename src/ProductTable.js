import React from 'react';
import './ProductTable.css'

export default function ProductTable() {
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