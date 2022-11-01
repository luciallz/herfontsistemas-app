import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Usuarios from './componentes/Usuarios'


function AppRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/Usuarios" element={<Usuarios/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoute