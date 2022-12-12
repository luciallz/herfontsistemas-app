import React from 'react'
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import logo from './img/logo.jpg';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import Usuarios from './Usuarios';
import Productos from './Productos';
import Logout from './Logout';
import Home from './Home'
import ConfigRegistroLogin from './ConfigRegistroLogin'
import Trabajadores from './Trabajadores';
import Mail from './Mail/Mail';
import ListarCarrito from './listar/ListarCarrito';
import Servicios from './Servicios';
import SobreNosotros from './SobreNosotros';
function Menu() {
    var sesion=sessionStorage.getItem("nombre");
    console.log(sesion)
    if(sesion==null){
        return (
            <Router>
                <Navbar bg="green" variant="dark" sticky='top' expand='lg' >
                        <NavbarBrand>
                            <Nav.Link as={Link} to={"/Home"}><img src={logo} height='85px' width='205px' /></Nav.Link>
                        </NavbarBrand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav activeKey="/Usuarios" >
                            <Nav.Link as={Link} to={"/Productos"}>Productos</Nav.Link>
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
        
                                <Nav.Link as={Link} to={"/Servicios"} href="servicios">Servicios</Nav.Link>
                                <Nav.Link as={Link} to={"/SobreNosotros"} href="sobre nosotros">Sobre nosotros</Nav.Link>
                                <Nav.Link as={Link} to={"/Mail"} href="contacto">Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                        <Nav.Link as={Link} to={"/ConfigRegistroLogin"}><i className="bi bi-person fs-1 text-white text-right"></i></Nav.Link>
                        <Nav.Link as={Link} to={"/Carrito"}><i className="bi bi-cart3 fs-1 text-white text-right"></i></Nav.Link>
                        </Nav>
                </Navbar>
                <div>
                    <Routes>
                        <Route path="/ConfigRegistroLogin" element={<ConfigRegistroLogin />} />
                        <Route path="/Mail" element={<Mail />} />
                        <Route path='*' element={<Home />} />
                        <Route path='/Carrito' element={<ListarCarrito />} />
                        <Route path="/Productos" element={<Productos />} />
                        <Route path='/Servicios' element={<Servicios />} />
                        <Route path='/SobreNosotros' element={<SobreNosotros />} />
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
                                
                                <Nav.Link as={Link} to={"/Servicios"} href="servicios">Servicios</Nav.Link>
                                <Nav.Link as={Link} to={"/SobreNosotros"} href="sobre nosotros">Sobre nosotros</Nav.Link>
                                <Nav.Link as={Link} to={"/Mail"} href="contacto">Contacto</Nav.Link>
                                <Nav.Link as={Link} to={"/Logout"}>Cerrar sesión</Nav.Link>
                                <p>Hola ${sesion}</p>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                        <Nav.Link as={Link} to={"/ConfigRegistroLogin"}><i className="bi bi-person fs-1 text-white text-right"></i></Nav.Link>
                        <Nav.Link as={Link} to={"/Carrito"}><i className="bi bi-cart3 fs-1 text-white text-right"></i></Nav.Link>
                        </Nav>
                </Navbar>
                <div>
                    <Routes>
                        <Route path='*' element={<Home />} />
                        <Route path="/ConfigRegistroLogin" element={<ConfigRegistroLogin />} />
                        <Route path="/Mail" element={<Mail />} />
                        <Route path='/Logout' element={<Logout />} />
                        <Route path='/Productos' element={<Productos />} />
                        <Route path='/Carrito' element={<ListarCarrito />} />
                        <Route path='/Servicios' element={<Servicios />} />
                        <Route path='/SobreNosotros' element={<SobreNosotros />} />
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
                                <Nav.Link as={Link} to={"/Mail"} href="contacto">Contacto</Nav.Link>
                                <Nav.Link as={Link} to={"/Usuarios"}>Usuarios</Nav.Link>
                                <Nav.Link as={Link} to={"/Trabajadores"}>Trabajadores</Nav.Link> 
                                {/* <Nav.Link href="trabajadores">Dar de alta trbajador</Nav.Link>  */}
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
                        <Route path="/Mail" element={<Mail />} />
                        <Route path="/Trabajadores" element={<Trabajadores />} />
                        <Route path="/Usuarios" element={<Usuarios />} />
                        <Route path="/ConfigRegistroLogin" element={<ConfigRegistroLogin />} />
                        <Route path='/Logout' element={<Logout />} />
                        <Route path='/Servicios' element={<Servicios />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}
export default Menu
