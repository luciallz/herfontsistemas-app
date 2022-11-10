import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './componentes/Menu';
import Login from './componentes/formularios/FormLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <BrowserRouter>
              <Routes>
                <Route exact path="/Login" element={<Login />}/>
              </Routes>
            </BrowserRouter>
          <Menu /> 
    
          </div>
        </div>  
      </div>
  )
}

export default App