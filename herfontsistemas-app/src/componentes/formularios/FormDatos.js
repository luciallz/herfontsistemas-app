import React, { useState, useEffect } from 'react';
import APIService from '../APIService';
import Product from '../ejemplocards';

export default function Main(props) {
  const [product, setProduct]=useState([])
  useEffect(()=>{
    fetch("http://127.0.0.1:5000",{
      'method':'GET',
      headers:{"Content-type": "application/json"}
    }).then(
      res=>res.json()
    ).then(
      res=>{
        setProduct(res)
      }
    ).catch(error=>console.log(error))
  }, [])


  // const listaProductos = () => {
  //   APIService.ListarProductos({ id, nom_producto, descripcion, cantidad, imagen, precio })
  //     .then(res => res.json())
  //     .catch(error => console.log(error))
  // }
  //console.log(listaProductos)
  console.log(props.product)
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Productos</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}

//LISTAPRODCUTOS.JS