import React from 'react';
import APIService from '../APIService'

function ListaProductos(props) {
  const editarProduto = (produto) => {
    props.editarProduto(produto)
  }

  const borrarProduto = (produto) => {
    APIService.BorrarProduto(produto.id)
      .then(() => props.borrarProduto(produto))
  }

  console.log('aaaaaaaaaaaaaa')
  console.log(props)
  console.log(props.productos)
  
  return (
    <div>
      <table className='table table-striped table-hover mt-5 shadow-lg'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th>Precio</th>
          </tr>
        </thead>
        {props.productos.map(producto => {
          return (
            <tbody>
              <tr>
                <td key={producto.id}>{producto.nom_producto}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.imagen}</td>
                <td>{producto.precio}</td>
                <td>
                  <button className="btn btn-primary"
                    onClick={() => editarProduto(producto)}
                  >Modificar</button>

                  <button className="btn btn-danger"
                    onClick={() => borrarProduto(producto)}
                  >Eliminar</button>
                </td>

              </tr>
            </tbody>
          )
        })}
      </table>

    </div>
  )
}

export default ListaProductos;