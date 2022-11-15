import React, { useState, useEffect } from 'react';
import APIService from "./componentes/APIService";

function listardatos(props) {
  const [nom_producto, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [imagen, setImagen] = useState('')
  const [precio, setPrecio] = useState('')

  useEffect(() => {
    setNombre(props.producto.nom_producto)
    setDescripcion(props.producto.descripcion)
    setCantidad(props.producto.cantidad)
    setImagen(props.producto.imagen)
    setPrecio(props.producto.precio)
  }, [props.producto])

  const listaProductos = () => {
    APIService.ListarProductos({ nom_producto, descripcion, cantidad, imagen, precio })
      .then(res => res.json())
      .catch(error => console.log(error))
  }
  // const data = {
  //   products: APIService.ListarProductos()
    // products: [

    //   {
    //     'id': '1',
    //     'name': 'MacBook',
    //     'cantidad': 1400,
    //     'image': 'https://picsum.photos/id/180/2400/1600',
    //   },
    //   {
    //     'id': '2',
    //     'name': 'Old Car',
    //     'cantidad': 2400,
    //     'image': 'https://picsum.photos/id/111/4400/2656',
    //   },
    //   {
    //     'id': '3',
    //     'name': 'W Shoes',
    //     'cantidad': 1000,
    //     'image': 'https://picsum.photos/id/21/3008/2008',
    //   },
    // ]
  // };
}

export default listardatos;