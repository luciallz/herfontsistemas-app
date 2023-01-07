import React from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {HashRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// HOME PAGES
import Menu from './componentes/Menu';
import Home from './componentes/Home';

// SERVICIOS
import Servicios from './componentes/Servicios';
import GamaCompleta from './componentes/servicios/GamaCompleta';
import Soluciones from './componentes/servicios/Soluciones';
import Apoyo from './componentes/servicios/Apoyo';
import Premontaje from './componentes/servicios/Premontaje';
import Logistica from './componentes/servicios/Logistica';

// CARRITO Y PRODUCTOS
import Productos from './componentes/Productos';
import ListarCarrito from './componentes/listar/ListarCarrito';
import FinalizarCompra from './componentes/FinalizarCompra';

// PÁGINAS
import SobreNosotros from './componentes/SobreNosotros';
import Mail from './componentes/Mail/Mail';
import Trabajadores from './componentes/Trabajadores';

// SESIONES
import ConfigRegistroLogin from './componentes/sesiones/ConfigRegistroLogin';
import PaginaPersonal from './componentes/PaginaPersonal';
import Logout from './componentes/sesiones/Logout';
import ForgotPsswd from './componentes/sesiones/ForgotPsswd';
import ChangePasswd from './componentes/sesiones/ChangePasswd';

function App() {
  return (
    <div>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Servicios/GamaCompleta" element={<GamaCompleta />}></Route>
          <Route path="/Servicios/Soluciones" element={<Soluciones />}></Route>
          <Route path="/Servicios/Apoyo" element={<Apoyo />}></Route>
          <Route path="/Servicios/Premontaje" element={<Premontaje />}></Route>
          <Route path="/Servicios/Logistica" element={<Logistica />}></Route>
          <Route path="/Carrito" element={<ListarCarrito />} />
          <Route path="/FinalizarCompra" element={<FinalizarCompra />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Contacto" element={<Mail />} />
          <Route path="/Trabajadores" element={<Trabajadores />} />
          <Route path="/Login" element={<ConfigRegistroLogin />} />
          <Route path="/PaginaPrincipal" element={<PaginaPersonal />} />
          <Route path="/RecuperarContrasena" element={<ForgotPsswd />} />
          <Route path='/ForgotPsswd' element={<ForgotPsswd />} />
          <Route path='/ChangePasswd/<token>' element={<ChangePasswd />} />
          <Route path="/LogOut" element={<Logout />} />
        </Routes>
      </HashRouter>
    </div>
    
  )
}

export default App
