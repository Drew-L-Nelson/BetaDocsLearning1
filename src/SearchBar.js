import React from 'react';
import Form from 'react-bootstrap/Form';

export default function SearchBar() {
  return (
    <>
      <Form className='search-bar-form'>
        <Form.Control
          type='search'
          placeholder='Search'
          className='search-bar'
          aria-label='Search'
          style={{ width: "300px" }}
        />
      </Form>
    </>
  );
}
