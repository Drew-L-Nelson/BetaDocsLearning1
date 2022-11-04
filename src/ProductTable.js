import React from 'react';
import './style.css';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow'

export default function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((p) => {
    if (p.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
          category={p.category}
          key={p.category}
        />
      );
    }
    rows.push(
      <ProductRow 
        product={p}
        key={p.name}
      />
    )
    lastCategory = p.category;
  });

  return (
    <table>
      <thead>
        <tr className='name-price-div'>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}