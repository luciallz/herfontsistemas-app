import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './componentes/Menu';
import Productos from './componentes/Productos';
import Productos2 from './componentes/Productos2';
import ListarProductosMenu from './componentes/listar/ListarProductosMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Menu /> 
            <Productos />
            {/* <ListarProductosMenu /> */}
            {/* <ProductosCarrito/> */}
          </div>
        </div>  
      </div>
  )
}

export default App