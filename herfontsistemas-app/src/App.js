import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './componentes/Menu';
function App() {

  return (
    
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <Menu /> 
    
          </div>
        </div>  
      </div>
  )
}

export default App