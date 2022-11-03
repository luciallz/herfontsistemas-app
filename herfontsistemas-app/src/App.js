import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './componentes/Menu1';
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Registro from './pages/Registro';
function App() {

  return (
    
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <Menu /> 
          <Registro />
            <BrowserRouter>
              <Routes>
                

              </Routes>
            </BrowserRouter>
             
          </div>
        </div>  
      </div>
  )
}

export default App