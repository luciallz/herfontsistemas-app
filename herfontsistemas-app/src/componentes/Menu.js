import React from 'react'
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import logo from './img/logo.jpg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
// import Usuarios from './Usuarios';

function Menu() {
    var sesion = sessionStorage.getItem("nombre");
    console.log(sesion)

    if (sesion == null) {
        return (
                <Navbar bg="green" variant="dark" sticky='top' expand='lg' >
                        <NavbarBrand>
                            <Nav.Link><Link to="/Home"><img src={logo} height='85px' width='205px' /></Link></Nav.Link>
                        </NavbarBrand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav activeKey="/Usuarios" >
                            <Nav.Link><Link to="/Productos">Productos</Link></Nav.Link>
                            <NavDropdown title="Productos" >
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Abrazaderas de tuberia</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Conectores SML</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Accesorios de montaje</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Sistemas de montaje para ventilación</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >CENTUM</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Carriles de perfil</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Aisladores de resorte</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Abrazaderas de tubería aisladas</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Accesorios de trabajo, heramientas...</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Sistemas de montaje para rociadortes</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Puntos fijos</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Elementos deslizantes</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Recubrumiento TSP-3</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Sistemas de montaje acero inoxidable</NavDropdown.Item>
                                </NavDropdown>
        
                                <Nav.Link><Link to="/Servicios">Servicios</Link></Nav.Link>
                                <Nav.Link><Link to="/SobreNosotros">Sobre nosotros</Link></Nav.Link>
                                <Nav.Link><Link to="/Contacto">Contacto</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                        <Nav.Link><Link to="/Login"><i className="bi bi-person fs-1 text-white text-right"></i></Link></Nav.Link>
                        <Nav.Link><Link to="/Carrito"><i className="bi bi-cart3 fs-1 text-white text-right"></i></Link></Nav.Link>
                        </Nav>
                </Navbar>
        )
    }else if (sesion!=null && sesion!="admin" ){
        return (
            <Navbar bg="green" variant="dark" sticky='top' expand='lg' >
                        <NavbarBrand>
                            <Nav.Link><Link to="/Home"><img src={logo} height='85px' width='205px' /></Link></Nav.Link>
                        </NavbarBrand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav activeKey="/Usuarios" >
                            <Nav.Link><Link to="/Productos">Productos</Link></Nav.Link>
                            <NavDropdown title="Productos" >
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Abrazaderas de tuberia</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Conectores SML</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Accesorios de montaje</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Sistemas de montaje para ventilación</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >CENTUM</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Carriles de perfil</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Aisladores de resorte</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Abrazaderas de tubería aisladas</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Accesorios de trabajo, heramientas...</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Sistemas de montaje para rociadortes</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Puntos fijos</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Elementos deslizantes</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Recubrumiento TSP-3</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Sistemas de montaje acero inoxidable</NavDropdown.Item>
                                </NavDropdown>
        
                                <Nav.Link><Link to="/Servicios">Servicios</Link></Nav.Link>
                                <Nav.Link><Link to="/SobreNosotros">Sobre nosotros</Link></Nav.Link>
                                <Nav.Link><Link to="/Contacto">Contacto</Link></Nav.Link>
                                <Nav.Link href="servicios">Servicios</Nav.Link>
                                <p>Hola {sesion}</p>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                        <Nav.Link><Link to="/LogOut">Cerrar sesión</Link></Nav.Link>
                        <Nav.Link><Link to="/Login"><i className="bi bi-person fs-1 text-white text-right"></i></Link></Nav.Link>
                        <Nav.Link><Link to="/Carrito"><i className="bi bi-cart3 fs-1 text-white text-right"></i></Link></Nav.Link>
                        </Nav>
                </Navbar>
          )
    }else if(sesion=="admin"){
        return (
            <Navbar bg="green" variant="dark" sticky='top' expand='lg' >
                        <NavbarBrand>
                            <Nav.Link><Link to="/Home"><img src={logo} height='85px' width='205px' /></Link></Nav.Link>
                        </NavbarBrand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav activeKey="/Usuarios" >
                            <Nav.Link><Link to="/Productos">Productos</Link></Nav.Link>
                            <NavDropdown title="Productos" >
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Abrazaderas de tuberia</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Conectores SML</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Accesorios de montaje</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Sistemas de montaje para ventilación</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >CENTUM</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Carriles de perfil</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Aisladores de resorte</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Abrazaderas de tubería aisladas</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Accesorios de trabajo, heramientas...</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Sistemas de montaje para rociadortes</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Puntos fijos</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Elementos deslizantes</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Recubrumiento TSP-3</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}} >Sistemas de montaje acero inoxidable</NavDropdown.Item>
                                </NavDropdown>
        
                                <Nav.Link><Link to="/Servicios">Servicios</Link></Nav.Link>
                                <Nav.Link><Link to="/SobreNosotros">Sobre nosotros</Link></Nav.Link>
                                <Nav.Link><Link to="/Contacto">Contacto</Link></Nav.Link>
                                <Nav.Link><Link to="/Trabajadores">Trabajadores</Link></Nav.Link>

                                {/* <Nav.Link as={Link} to={"/Usuarios"}>Usuarios</Nav.Link> */}

                                <p>Hola {sesion}</p>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                        <Nav.Link><Link to="/LogOut">Cerrar sesión</Link></Nav.Link>
                        <Nav.Link><Link to="/Login"><i className="bi bi-person fs-1 text-white text-right"></i></Link></Nav.Link>
                        <Nav.Link><Link to="/Carrito"><i className="bi bi-cart3 fs-1 text-white text-right"></i></Link></Nav.Link>
                        </Nav>
                </Navbar>
        )
    }
}
export default Menu
