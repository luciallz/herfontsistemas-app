import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ListarCarrito from './listar/ListarCarrito';


function Carrito() {
    const [productos, setProducto] = useState([])

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

    const anadirProductoCesta = (producto) => {
        const encontrarProductos = productos.find((x) => x.id === producto.id);
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
    const eliminarCesta = (producto) => {
        const encontrarProductos = productos.find((x) => x.id === producto.id);
        if (encontrarProductos.cantidad === 1) {
            setProducto(productos.filter((x) => x.id !== producto.id));
        } else {
            setProducto(
                productos.map((x) =>
                    x.id === producto.id ? { ...encontrarProductos, cantidad: encontrarProductos.cantidad - 1 } : x
                )
            );
        }
    };

    return (
        <div className='container'>
            <div className='col'>
                <h1>Productos Carrito</h1>
            </div>
            <ListarCarrito productos={productos} anadirProductoCesta={anadirProductoCesta} eliminarCesta={eliminarCesta} />
        </div>
    )

}

export default Carrito