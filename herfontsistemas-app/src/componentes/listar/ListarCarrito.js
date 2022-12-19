import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';

export default function ListarCarrito() {
  var listaCarrito = []
  if (localStorage.getItem('listaCarrito')){
    listaCarrito = JSON.parse(localStorage.getItem('listaCarrito'))
  }
  const eliminarCesta = (producto) => {
    var posicion = listaCarrito.findIndex((x) => x.id === producto.id);
    console.log(posicion)
    if(posicion != -1){
        listaCarrito.splice(posicion, 1);
        localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito));
    }
  }
  const precioProducto = listaCarrito.reduce((a, c) =>  a + c.precio * c.cantidad, 0);
  console.log(precioProducto)
  //const precioEnvio = precioProducto > 2000 ? 0 : 20;
  const precioTotal = precioProducto; //+ precioEnvio;
  return (
    <aside className="block col-1">
      <h2>Carrito</h2>
      <div id='divCarrito'>
        {listaCarrito.length === 0 && <div>Carrito vacío</div>}
        {listaCarrito.map((producto) => (
          <div key={producto.id} className="row">
            <div className="col-2">{producto.nombre}</div>
            <div className="col-2 text-right">
              {producto.cantidad} x €{producto.precio.toFixed(2)}
              <button onClick={() => eliminarCesta(producto)} className="remove">
              <i class="fa fa-trash" aria-hidden="true"></i>
              </button>{' '}
            </div>
          </div>
        ))}

        {listaCarrito.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Precio Productos</div>
              <div className="col-1 text-right">{precioProducto.toFixed(2)}€</div>
            </div>
            {/* <div className="row">
              <div className="col-2">Precio Envio</div>
              <div className="col-1 text-right">
                {precioEnvio.toFixed(2)}€
              </div>
            </div> */}

            <div className="row">
              <div className="col-2">
                <strong>Precio Total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{precioTotal.toFixed(2)}€</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <Link to="/FinalizarCompra" className="btn btn-primary">Finalizar Compra</Link>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}