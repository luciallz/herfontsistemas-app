import React, { useState, useEffect } from 'react';
import ListaProductos from './listar/ListaProductos';
import FormProductos from './formularios/FormProductos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { rutaMaquina } from './Rutas';

function Productos() {
  const [productos, setProducto] = useState([])
  const [editadoProducto, setEditadoProducto] = useState(null)
  var listaCarrito = []
  if (localStorage.getItem('listaCarrito')) {
    listaCarrito = JSON.parse(localStorage.getItem('listaCarrito'))
  }
  localStorage.setItem('listaCarrito', JSON.stringify(listaCarrito))
  console.log(listaCarrito)
  useEffect(() => {
    fetch(rutaMaquina+`/herfontsistemas-back/productos`, {
      'method': 'GET',
      headers: { "Content-type": "application/json" }
    }).then(
      res => res.json()
    ).then(
      res => {
        setProducto(res)
      }
    ).catch(error => console.log(error))
  }, [])

  const editarProducto = (producto) => {

    setEditadoProducto(producto)
  }
  const datoModificado = (producto) => {
    const nuevo_producto = productos.map(mi_producto => {
      if (mi_producto.id === producto.id) {
        return producto
      } else {
        return mi_producto
      }
    })
    setProducto(nuevo_producto)
  }
  const abrirForm = () => {
    setEditadoProducto({ nom_producto: '', descripcion: '', cantidad: '', imagen: '', precio: '' })
  }
  const productoInsertado = (producto) => {
    const nuevo_producto = [...productos, producto]
    setProducto(nuevo_producto)
  }

  const borrarProducto = (producto) => {
    const nuevo_producto = productos.filter(miproducto => {
      if (miproducto.id === producto.id) {
        return false;
      }
      return true;
    })
    setProducto(nuevo_producto)
  }

  const anadirProductoCesta = (producto) => {
    if (localStorage.getItem('listaCarrito')) {
      listaCarrito = JSON.parse(localStorage.getItem('listaCarrito'))
    }

    const encontrarProductos = productos.find((x) => x.id === producto.id);
    var nuevaCantidad = parseInt(cantidad)
    if (encontrarProductos) {
      var posicion = listaCarrito.findIndex((x) => x.id == producto.id);
      if (posicion != -1) {
        listaCarrito[posicion].cantidad = nuevaCantidad;
      } else {
        var productoComprado = {
          'id': encontrarProductos.id,
          'nombre': encontrarProductos.nom_producto,
          'cantidad': nuevaCantidad,
          'precio': encontrarProductos.precio
        }
        listaCarrito.push(productoComprado)
      }
    }
    localStorage.setItem('listaCarrito', JSON.stringify(listaCarrito))
  };

  const expresion_cantidad = /^[0-9]+$/;
  const [cantidad, setCantidad] = useState('')
  const [validCantidad, setValidCantidad] = useState(false)

  useEffect(() => {
    setCantidad(productos.cantidad)
  }, [productos])
  useEffect(() => {
    const result = expresion_cantidad.test(cantidad);
    setValidCantidad(result)
  });

  var sesion = sessionStorage.getItem("nombre");
  if (sesion != null && sesion != "admin") {
    return (
      <div className='container'>
        <div>
          <p>Productos</p>
          {productos.map(producto => {
            return (
              <div>
                <img className="small" src={producto.imagen} alt={producto.nom_producto} />
                <h3>Nombre: {producto.nom_producto}</h3>
                <div>Precio: {producto.precio}€</div>
                <div>Cantidad: <input id='productoCantidad' type="text" min='1' aria-invalid={validCantidad ? "false" : "true"} onChange={(u) => setCantidad(u.target.value)}></input></div>
                <div>
                  <button onClick={() => anadirProductoCesta(producto)}>Añadir al carrito</button>
                </div>
              </div>
            )}
          )
          }
        </div>
      </div>
    )
  }else if(sesion == null){
    return (
      <div className='container'>
        <div>
          <p>Productos</p>
          {productos.map(producto => {
            return (
              <div>
                <img className="small" src={producto.imagen} alt={producto.nom_producto} />
                <h3>Nombre: {producto.nom_producto}</h3>
                <div>Precio: {producto.precio}€</div>
                <div>Cantidad: <input id='productoCantidad' type="text" min='1' aria-invalid={validCantidad ? "false" : "true"} onChange={(u) => setCantidad(u.target.value)}></input></div>
                <p id="cantidadValid" className={cantidad && !validCantidad ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Solo se permiten números
                </p>
                <div>
                  <button onClick={() => anadirProductoCesta(producto)}>Añadir al carrito</button>
                </div>
              </div>
            )}
          )
          }
        </div>
      </div>
    )
  }else if (sesion == "admin") {
    return (
      <div className='container'>
        <div className='col'>
          <button
            className='btn btn-success'
            onClick={abrirForm}
          >Insertar Productos</button>
        </div>
        <ListaProductos productos={productos} editarProducto={editarProducto} borrarProducto={borrarProducto} />
        {editadoProducto ? <FormProductos producto={editadoProducto} datoModificado={datoModificado} productoInsertado={productoInsertado} /> : null}
      </div>
    )
  }
}

export default Productos