import React from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SearchBar({ filterText, inStockOnly }) {
  return (
    <>
      <Form className='search-bar-form'>
        <Form.Control
          type='search'
          value={filterText}
          placeholder='Search'
          className='search-bar'
          aria-label='Search'
          style={{ width: "300px" }}
        />
        <InputGroup className="mb-3">
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          <InputGroup.Text style={{ width: "259px" }}>Only show products in stock</InputGroup.Text>
        </InputGroup>
      </Form>
    </>
  );
}
