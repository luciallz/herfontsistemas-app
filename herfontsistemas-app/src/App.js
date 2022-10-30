import React, {useState,useEffect} from 'react';
import "./App.css";
import UsuariosList from './componentes/UsuariosList';
import Form from './componentes/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './componentes/img/logo.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css'
import EmojiPicker from 'emoji-picker-react';
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
function App() {
  const [usuarios, setUsuario]=useState([])
  const [editadoUsuario, setEditadoUsuario]=useState(null)

  useEffect(()=>{
    fetch("http://127.0.0.1:5000",{
      'method':'GET',
      headers:{"Content-type": "application/json"}
    }).then(
      res=>res.json()
    ).then(
      res=>{
        setUsuario(res)
      }
    ).catch(error=>console.log(error))
  }, [])

  const editarUsuario = (usuario) => {

    setEditadoUsuario(usuario)
  }
  const datoModificado = (usuario) => {
    const nuevo_usuario = usuarios.map(mi_usuario => {
      if(mi_usuario.id === usuario.id){
        return usuario
      }else{
        return mi_usuario
      }
    })
    setUsuario(nuevo_usuario)
  }
  const abrirForm = ()=>{
    setEditadoUsuario({nombre:'', apellidos:'', correo:'', telefono:'', contrasena:'', direccion:'', ciudad:'', provincia:'', codigo_postal:'', descuento:''})
  }
  const usuarioInsertado = (usuario)=>{
    const nuevo_usuario = [...usuarios, usuario]
    setUsuario(nuevo_usuario)
  }

  const borrarUsuario = (usuario)=>{
    const nuevo_usuario = usuarios.filter(miusuario=>{
      if(miusuario.id === usuario.id){
        return false;
      }
      return true;
    })

    setUsuario(nuevo_usuario)
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>HERFONTSISTEMAS WEB</h1>
          <Navbar bg="green" variant="dark" sticky='top' expand='lg'>
            <Navbar.Brand>
              <img src={logo} height={'85px'} width={'205px'}></img>
            </Navbar.Brand>
            
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
              <i className="bi bi-person fs-1 text-white text-right"></i>
            </Nav>
                
            </Navbar.Collapse>
          </Navbar>
          
        </div>
      </div>   
        <div className='col'>
          <button
          className='btn btn-success'
          onClick={abrirForm}
          >Insertar Usuario</button>
        </div>
      
     <UsuariosList usuarios={usuarios} editarUsuario= {editarUsuario} borrarUsuario = {borrarUsuario}/>

     {editadoUsuario ? <Form usuario = {editadoUsuario} datoModificado = {datoModificado} usuarioInsertado={usuarioInsertado}/> : null}

    </div>
  )
}

export default App