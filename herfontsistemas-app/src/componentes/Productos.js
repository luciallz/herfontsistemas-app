import React, { useState, useEffect } from 'react';
import ListaProductos from './listar/ListaProductos';
import FormProductos from './formularios/FormProductos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ListarProductosMenu from './listar/ListarProductosMenu';


function Productos() {
  const [productos, setProducto] = useState([])
  const [editadoProducto, setEditadoProducto] = useState(null)

  useEffect(() => {
    fetch("http://127.0.0.1:5000/productos", {
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
    const encontrarProductos = productos.find((x) => x.id === producto.id);
    console.log('encontrarProdutos')
    console.log(encontrarProductos)
    if (encontrarProductos) {
      setProducto(
        productos.map((x) =>
          x.id === producto.id ? { ...encontrarProductos, cantidad: encontrarProductos.cantidad + 1 } : x
        )
      );
    } else {
      setProducto([...productos, { ...producto, cantidad: 1 }]);
    }
  };

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
      <ListarProductosMenu productos={productos} anadirProductoCesta={anadirProductoCesta} />
    </div>
  )

}

export default Productos