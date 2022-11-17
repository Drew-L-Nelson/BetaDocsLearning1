import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return(
    <div>
      <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={products}
      />
    </div>
  )
};