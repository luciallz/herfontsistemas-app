// import React from 'react';
// import { useState, useEffect } from 'react';
// import Carrito from '../Carrito';

// function ListarProductosMenu(props) {
//     // const [listaProductos, setlistaProductos] = useState([]);
//     // useEffect(() => {
//     //   fetch("http://127.0.0.1:5000/productos", {
//     //     'method': 'GET',
//     //     headers: { "Content-type": "application/json" }
//     //   }).then(
//     //     res => res.json()
//     //   ).then(
//     //     res => {
//     //       setlistaProductos(res)
//     //     }
//     //   ).catch(error => console.log(error))
//     // }, [])

//     // console.log('cccccccccccccc')
//     // console.log(props)
//     // console.log(props.productos)

//     // const anadirProductoCesta = (producto) => {
//     //     const encontrarProductos = listaProductos.find((x) => x.id === producto.id);
//     //     if (encontrarProductos) {
//     //       setlistaProductos(
//     //         listaProductos.map((x) =>
//     //           x.id === producto.id ? { ...encontrarProductos, cantidad: encontrarProductos.cantidad + 1 } : x
//     //         )
//     //       );
//     //     } else {
//     //       setlistaProductos([...listaProductos, { ...producto, cantidad: 1 }]);
//     //     }
//     //   };

//     // const eliminarCesta = (producto) => {
//     //   const encontrarProductos = listaProductos.find((x) => x.id === producto.id);
//     //   if (encontrarProductos.cantidad === 1) {
//     //     setlistaProductos(listaProductos.filter((x) => x.id !== producto.id));
//     //   } else {
//     //     setlistaProductos(
//     //       listaProductos.map((x) =>
//     //         x.id === producto.id ? { ...encontrarProductos, cantidad: encontrarProductos.cantidad - 1 } : x
//     //       )
//     //     );
//     //   }
//     // };
//     return (
//       <div className="App">
//         <div className="row">
//           <main className="block col-2">
//             <h2>Productos</h2>
//             <div className="row">
//               {props.productos.map((producto) => (
//                 <div>
//                   <img className="small" src={producto.imagen} alt={producto.nom_producto} />
//                   <h3>{producto.nom_producto}</h3>
//                   <div>{producto.cantidad}€</div>
//                   <div>
//                     {/* <button onClick={() => anadirProductoCesta(props)}>Añadir al carrito</button> */}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </main>
//           {/* <Carrito listaProductos={listaProductos} anadirProductoCesta={anadirProductoCesta} eliminarCesta={eliminarCesta}></Carrito> */}
//         </div>
//       </div>
//     );
// }

// export default ListarProductosMenu;

import React from 'react';
import Carrito from '../Carrito';

function ListaProductos(props) {
  const anadirProductoCesta = (producto) => {
    props.anadirProductoCesta(producto)
  }
  
  const eliminarCesta = (producto) => {
    props.eliminarCesta(producto)
  }
  return (
    <div>
      <p>Productos</p>
      {props.productos.map(producto => {
        return (
          <div>
            <img className="small" src={producto.imagen} alt={producto.nom_producto} />
            <h3>{producto.nom_producto}</h3>
            <div>{producto.cantidad}€</div>
            <div>
              <button onClick={() => anadirProductoCesta(producto)}>Añadir al carrito</button>
            </div>
            {/* <Carrito productos={producto} anadirProductoCesta={anadirProductoCesta} eliminarCesta={eliminarCesta} /> */}
          </div>
        )
      })}

    </div>
  )
}

export default ListaProductos;