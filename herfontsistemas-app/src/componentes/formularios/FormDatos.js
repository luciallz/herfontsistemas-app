import React, { useState, useEffect } from 'react';
import APIService from '../APIService';
import Product from '../ejemplocards';

export default function Main(props) {
  console.log(props.products)
  console.log('bbbbbbbbbbbbbbbbbbbbb')
  const { onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Productos</h2>
      <div className="row">
        {props.products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}

//LISTAPRODCUTOS.JS