// import React, {useState}from 'react';
// import Carrito from '../Carrito';

// function ListaProductos(props) {
//   const anadirProductoCesta = (producto) => {
//     props.anadirProductoCesta(producto)
//   }
//   const [cantidad, setCantidad] = useState('')
//   return (
//     <div>
//       <p>Productos</p>
//       {props.productos.map(producto => {
//         return (
//           <div>
//             <img className="small" src={producto.imagen} alt={producto.nom_producto} />
//             <h3>Nombre: {producto.nom_producto}</h3>
//             <div>Precio: {producto.precio}€</div>
//             <div>Cantidad: <input id='productoCantidad' type="number" min='1' onChange={(u) => setCantidad(u.target.value)}></input></div>
//             <div>
//               <button onClick={() => anadirProductoCesta(producto)}>Añadir al carrito</button>
//             </div>
//           </div>
//         )
//       })}

//     </div>
//   )
// }

// export default ListaProductos;