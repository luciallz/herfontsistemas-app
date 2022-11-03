import React, {useState,useEffect} from 'react';
import UsuariosList from './listar/UsuariosList';
import FormUsuarios from './formularios/FormUsuarios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function Registro1() {
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
  
  const abrirForm = ()=>{
    setEditadoUsuario({nombre:'', apellidos:'', correo:'', telefono:'', contrasena:'', direccion:'', ciudad:'', provincia:'', codigo_postal:'', descuento:''})
  }
  const usuarioInsertado = (usuario)=>{
    const nuevo_usuario = [...usuarios, usuario]
    setUsuario(nuevo_usuario)
  }

  


  return (
    <div className='container'>
        <div className='col'>
          {/* <button
          className='btn btn-success'
          onClick={abrirForm}
          >Insertar Usuario</button> */}
        <h1>Iniciar sesión</h1>
        <p>Aún no estña registrado?</p>
        <button
          className='btn btn-success'
          onClick={abrirForm}
          >Registrarse</button>
        </div>
          

     {editadoUsuario ? <FormUsuarios usuario = {editadoUsuario} usuarioInsertado={usuarioInsertado}/> : null}

    </div>
  )
}

export default Registro1