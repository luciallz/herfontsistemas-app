import React, {useState, useEffect} from 'react';
import APIService from '../APIService';

function FormProductos(props) {
    const [nom_producto, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [imagen, setImagen] = useState('')
    const [precio, setPrecio] = useState('')

    useEffect(()=>{
        setNombre(props.producto.nom_producto)
        setDescripcion(props.producto.descripcion)
        setCantidad(props.producto.cantidad)
        setImagen(props.producto.imagen)
        setPrecio(props.producto.precio)
    },[props.producto])

    const modificarProducto = () => {
        APIService.ModificarProducto(props.producto.id, {nom_producto, descripcion, cantidad, imagen, precio})
        .then(resp => props.datoModificado(resp))
        .catch(error => console.log(error))
    }

    const insertarProducto=()=>{
        APIService.InsertarProducto({nom_producto, descripcion, cantidad, imagen, precio})
        .then(resp=>props.productoInsertado(resp))
        .catch(error=>console.log(error))
    }

  return (
    <div>
        {props.producto ? (
            
            <div className="mb-3">
                <h1>Insetar</h1>
                <label htmlFor='nom_producto' className='form-label'>nombre</label>
                <input type="text" className='form-control'
                placeholder="Ingrese el nombre"
                value={nom_producto}
                onChange={(u) => setNombre(u.target.value)}
                />

                <label htmlFor='descripcion' className='form-label'>descripcion</label>
                <input type="text" className='form-control'
                placeholder="Ingrese los descripcion"
                value={descripcion}
                onChange={(u) => setDescripcion(u.target.value)}

                />

                <label htmlFor='cantidad' className='form-label'>cantidad</label>
                <input type="text" className='form-control'
                placeholder="Ingrese el cantidad"
                value={cantidad}
                onChange={(u) => setCantidad(u.target.value)}

                />

                <label htmlFor='imagen' className='form-label'>imagen</label>
                <input type="text" className='form-control'
                placeholder="Ingrese el imagen"
                value={imagen}
                onChange={(u) => setImagen(u.target.value)}

                />

                <label htmlFor='precio' className='form-label'>precio</label>
                <input type="text" className='form-control'
                placeholder="Ingrese el contraseña"
                value={precio}
                onChange={(u) => setPrecio(u.target.value)}

                />

                <label htmlFor='descripcion' className='form-label'>descripcion</label>
                <input type="text" className='form-control'
                placeholder="Ingrese la descripcion"
                value={descripcion}
                onChange={(u) => setDescripcion(u.target.value)}

                />
                {
                    props.producto.id ? <button 
                    onClick={modificarProducto}
                    className='btn btn-success mt3'
                    >Modificar</button>
                    :
                    <button 
                    onClick={insertarProducto}
                    className='btn btn-success mt3'
                    >Insertar</button>

                }
                
                
            </div>
        ):null}                
    </div>
  )
}

export default FormProductos