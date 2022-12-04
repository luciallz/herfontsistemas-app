import React, {useState,useEffect} from 'react';
import FormProductos from './formularios/FormProductos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ListaProductos from './listar/ListaProductos';

function Productos() {
  const [productos, setProducto]=useState([])
  const [editadoProducto, setEditadoProducto]=useState(null)

  useEffect(()=>{
    fetch("http://127.0.0.1:5000",{
      'method':'GET',
      headers:{"Content-type": "application/json"}
    }).then(
      res=>res.json()
    ).then(
      res=>{
        setProducto(res)
      }
    ).catch(error=>console.log(error))
  }, [])

  const editarProducto = (producto) => {

    setEditadoProducto(producto)
  }
  const datoModificado = (producto) => {
    const nuevo_producto = productos.map(mi_producto => {
      if(mi_producto.id === producto.id){
        return producto
      }else{
        return mi_producto
      }
    })
    setProducto(nuevo_producto)
  }
  const abrirForm = ()=>{
    setEditadoProducto({nombre:'', apellidos:'', correo:'', telefono:'', contrasena:'', direccion:'', ciudad:'', provincia:'', codigo_postal:'', descuento:''})
  }
  const productoInsertado = (producto)=>{
    const nuevo_producto = [...productos, producto]
    setProductos(nuevo_producto)
  }

  const borrarProducto = (producto)=>{
    const nuevo_producto = productos.filter(miproducto=>{
      if(miproducto.id === producto.id){
        return false;
      }
      return true;
    })

    setProducto(nuevo_producto)
  }


  return (
    <div className='container'>
        <div className='col'>
          <button
          className='btn btn-success'
          onClick={abrirForm}
          >Insertar Productos</button>
        </div>
          
     <ListaProductos productos={productos} editarProducto= {editarProducto} borrarProducto = {borrarProducto}/>

     {editadoProducto ? <FormProductos producto = {editadoProducto} datoModificado = {datoModificado} productoInsertado={productoInsertado}/> : null}

    </div>
  )
}

export default Productos