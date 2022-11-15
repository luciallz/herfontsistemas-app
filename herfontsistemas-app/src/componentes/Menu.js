import React from 'react'
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import logo from './img/logo.jpg';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import Usuarios from './Usuarios';
import Logout from './Logout';
import Home from './Home'
import ConfigRegistroLogin from './ConfigRegistroLogin'

function Menu() {
    var sesion=sessionStorage.getItem("nombre");
    console.log(sesion)
    if(sesion==null){
        return (
            <Router>
                
                <Navbar bg="green" variant="dark" sticky='top' expand='lg'>
                        <NavbarBrand>
                            <Nav.Link as={Link} to={"/Home"}><img src={logo} height='85px' width='205px' /></Nav.Link>
                        </NavbarBrand>
                        
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav activeKey="/Usuarios" >
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
        
                                <Nav.Link href="servicios">Servicios</Nav.Link>
                                <Nav.Link href="sobre nosotros">Sobre nosotros</Nav.Link>
                                <Nav.Link href="contacto">Contacto</Nav.Link>
                                <Nav.Link href="trabajadores">Trabajadores</Nav.Link> 
        
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                        <Nav.Link as={Link} to={"/ConfigRegistroLogin"}><i className="bi bi-person fs-1 text-white text-right"></i></Nav.Link>
                        <i className="bi bi-cart3 fs-1 text-white text-right"></i>
                        </Nav>
                </Navbar>
                <div>
                    <Routes>
                        <Route path="/ConfigRegistroLogin" element={<ConfigRegistroLogin />} />
                        <Route path='*' element={<Home />} />
                    </Routes>
                </div>
            </Router>
          )
    }else if (sesion!=null && sesion!="admin" ){
        return (
            <Router>
                
                <Navbar bg="green" variant="dark" sticky='top' expand='lg'>
                        <NavbarBrand>
                            <Nav.Link as={Link} to={"/Home"}><img src={logo} height='85px' width='205px' /></Nav.Link>
                        </NavbarBrand>
                        
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav activeKey="/Usuarios">
                                <NavDropdown title="Productos">
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Abrazaderas de tuberia</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Conectores SML</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Accesorios de montaje</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Sistemas de montaje para ventilación</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>CENTUM</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Carriles de perfil</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Aisladores de resorte</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Abrazaderas de tubería aisladas</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Accesorios de trabajo, heramientas...</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Sistemas de montaje para rociadortes</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Puntos fijos</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Elementos deslizantes</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Recubrumiento TSP-3</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Sistemas de montaje acero inoxidable</NavDropdown.Item>
                                </NavDropdown>
        
                                <Nav.Link href="servicios">Servicios</Nav.Link>
                                <Nav.Link href="sobre nosotros">Sobre nosotros</Nav.Link>
                                <Nav.Link href="contacto">Contacto</Nav.Link>
                                <Nav.Link href="trabajadores">Trabajadores</Nav.Link> 
                                <Nav.Link as={Link} to={"/Logout"}>Cerrar sesión</Nav.Link>
        
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                        <Nav.Link as={Link} to={"/ConfigRegistroLogin"}><i className="bi bi-person fs-1 text-white text-right"></i></Nav.Link>
                        <i className="bi bi-cart3 fs-1 text-white text-right"></i>
                        </Nav>
                </Navbar>
                <div>
                    <Routes>
                        <Route path='*' element={<Home />} />
                        <Route path="/ConfigRegistroLogin" element={<ConfigRegistroLogin />} />
                        <Route path='/Logout' element={<Logout />} />

                    </Routes>
                </div>
            </Router>
          )
    }else if(sesion=="admin"){
        return (
            <Router>
                
                <Navbar bg="green" variant="dark" sticky='top' expand='lg'>
                        <NavbarBrand>
                            <Nav.Link as={Link} to={"/Home"}><img src={logo} height='85px' width='205px' /></Nav.Link>
                        </NavbarBrand>
                        
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav activeKey="/Usuarios">
                                <NavDropdown title="Productos">
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Abrazaderas de tuberia</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Conectores SML</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Accesorios de montaje</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Sistemas de montaje para ventilación</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>CENTUM</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Carriles de perfil</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Aisladores de resorte</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Abrazaderas de tubería aisladas</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Accesorios de trabajo, heramientas...</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Sistemas de montaje para rociadortes</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Puntos fijos</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Elementos deslizantes</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Recubrumiento TSP-3</NavDropdown.Item>
                                <NavDropdown.Item href="productos/abrazaderas" style={{ backgroundColor:'#387e59'}}>Sistemas de montaje acero inoxidable</NavDropdown.Item>
                                </NavDropdown>
        
                                <Nav.Link href="servicios">Servicios</Nav.Link>
                                <Nav.Link href="sobre nosotros">Sobre nosotros</Nav.Link>
                                <Nav.Link href="contacto">Contacto</Nav.Link>
                                <Nav.Link as={Link} to={"/Usuarios"}>Usuarios</Nav.Link>
                                <Nav.Link href="trabajadores">Trabajadores</Nav.Link> 
                                <Nav.Link as={Link} to={"/logout"} >Cerrar sesión</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>

                        <Nav.Link as={Link} to={"/ConfigRegistroLogin"}><i className="bi bi-person fs-1 text-white text-right"></i></Nav.Link>
                        <i className="bi bi-cart3 fs-1 text-white text-right"></i>
                        </Nav>
                </Navbar>
                <div>
                    <Routes>
                        <Route path='*' element={<Home />} />
                        <Route path="/Usuarios" element={<Usuarios />} />
                        <Route path="/ConfigRegistroLogin" element={<ConfigRegistroLogin />} />
                        <Route path='/Logout' element={<Logout />} />
                    </Routes>
                </div>
            </Router>
          )
    }

}

export default Menu
