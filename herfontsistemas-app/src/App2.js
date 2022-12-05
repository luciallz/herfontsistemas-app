import React from 'react';
import Main from './componentes/formularios/FormDatos';
import Carrito from './componentes/Carrito';
import data from './ejemplodatos';
import { useState } from 'react';
import Carrito from './componentes/Carrito';
function App() {
  const { products } = data;
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
        <Main products={products} onAdd={onAdd}></Main>
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