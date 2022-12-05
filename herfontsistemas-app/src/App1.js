import React from 'react';
import { useState } from 'react';
import Carrito from './componentes/Carrito';
function App() {
  const [listaProductos, setlistaProductos] = useState([]);
  const onAdd = (product) => {
    const encontrarProductos = listaProductos.find((x) => x.id === product.id);
    if (encontrarProductos) {
      setlistaProductos(
        listaProductos.map((x) =>
          x.id === product.id ? { ...encontrarProductos, cantidad: encontrarProductos.cantidad + 1 } : x
        )
      );
    } else {
      setlistaProductos([...listaProductos, { ...product, cantidad: 1 }]);
    }
  };
  const onRemove = (product) => {
    const encontrarProductos = listaProductos.find((x) => x.id === product.id);
    if (encontrarProductos.cantidad === 1) {
      setlistaProductos(listaProductos.filter((x) => x.id !== product.id));
    } else {
      setlistaProductos(
        listaProductos.map((x) =>
          x.id === product.id ? { ...encontrarProductos, cantidad: encontrarProductos.cantidad - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <div className="row">
        <main className="block col-2">
          <h2>Productos</h2>
          <div className="row">
            {props.productos.map((producto) => (
              <div>
                <img className="small" src={producto.imagen} alt={producto.nom_producto} />
                <h3>{producto.nom_producto}</h3>
                <div>{producto.cantidad}€</div>
                <div>
                  <button onClick={() => onAdd(props)}>Añadir al carrito</button>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Carrito
          listaProductos={listaProductos}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Carrito>
      </div>
    </div>
  );
}

export default App;