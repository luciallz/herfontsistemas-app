import React from 'react'
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import logo from './img/logo.jpg';
import AppRoute from '../rutas';
import {Link, NavLink} from "react-router-dom"

import Usuarios from './Usuarios';


function Menu() {
  return (

    <Navbar bg="green" variant="dark" sticky='top' expand='lg'>
            <NavbarBrand>
              <img src={logo} height='85px' width='205px'></img>
            </NavbarBrand>
            
            <Navbar.Toggle/>
              <Navbar.Collapse>
                  <Nav>
                    <NavDropdown title="Productos">
                      <NavDropdown.Item href="productos/abrazaderas">Abrazaderas de tuberia</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Conectores SML</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Accesorios de montaje</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Sistemas de montaje para ventilación</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">CENTUM</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Carriles de perfil</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Aisladores de resorte</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Abrazaderas de tubería aisladas</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Accesorios de trabajo, heramientas...</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Sistemas de montaje para rociadortes</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Puntos fijos</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Elementos deslizantes</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Recubrumiento TSP-3</NavDropdown.Item>
                      <NavDropdown.Item href="productos/abrazaderas">Sistemas de montaje acero inoxidable</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="servicios">Servicios</Nav.Link>
                    <Nav.Link href="sobre nosotros">Sobre nosotros</Nav.Link>
                    <Nav.Link href="contacto">Contacto</Nav.Link>
                    <Nav.Link href="/Usuarios">Usuarios</Nav.Link>
                    <Nav.Link href="trabajadores">Trabajadores</Nav.Link> 

                  </Nav>
              </Navbar.Collapse>
              <i className="bi bi-person fs-1 text-white text-right"></i>
              <i className="bi bi-cart3 fs-1 text-white text-right"></i>
    </Navbar>
  )

}

export default Menu