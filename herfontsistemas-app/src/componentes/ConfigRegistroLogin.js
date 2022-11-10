import React, {useState,useEffect} from 'react';
import FormRegistro from './formularios/FormRegistro';
import FormLogin from './formularios/FormLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import APIService from './APIService';
import Swal from 'sweetalert2';

function ConfigRegistroLogin() {
  const [usuarios, setUsuario]=useState([])
  const [editadoUsuario, setEditadoUsuario]=useState(null)
  const [logueadoUsuario, setLogueadoUsuario]=useState(null)
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
  const loguearUsuario=(usuario)=>{
    setLogueadoUsuario(usuario)
  }

  
  const abrirForm = ()=>{
    setEditadoUsuario({nombre:'', apellidos:'', correo:'', telefono:'', contrasena:'', direccion:'', ciudad:'', provincia:'', codigo_postal:'', descuento:''})
  }
  const abrirFormLogin = ()=>{
    setLogueadoUsuario({correo:'', contrasena:''})
  }




  const usuarioInsertado = (usuario)=>{
    console.log(usuario)
    if(usuario.errorDuplicado){
      Swal.fire("Error! el correo electrónico insertado ya existe")
    }else{
      const nuevo_usuario = [...usuarios, usuario]
      setUsuario(nuevo_usuario)
    }
    
  
  }
  const usuarioLogueado=(usuario)=>{
    console.log("entra")
    console.log(usuario)
    console.log(usuario.nombre)
    
    if(usuario.errorLog){
      Swal.fire("Error! al intentar iniciar sesion")
    }else{
      setLogueadoUsuario(true)
      sessionStorage.setItem("nombre",usuario.nombre)
      var sesion=sessionStorage.getItem("nombre")
      Swal.fire(sesion+" acaba de iniciar sesión.")
    }
  }
    


  return (
    <div className='container'>
        <div className='col'>
          {/* <button
          className='btn btn-success'
          onClick={abrirForm}
          >Insertar Usuario</button> */}
        <h1>Está a un paso de autenticarse</h1>
        <p>¿Ya está registrado?</p>
        <p><a href='./Login'> Iniciar sesión </a></p>
        <button className='btn btn-success'
        onClick={abrirFormLogin}>Iniciar Sesión</button>
        <p>¿No está registrado?</p>
        <button
          className='btn btn-success'
          onClick={abrirForm}
          >Registrarse</button>


        </div>
          

     {editadoUsuario ? <FormRegistro usuario = {editadoUsuario} usuarioInsertado={usuarioInsertado} /> : null}
     {logueadoUsuario? <FormLogin usuario={logueadoUsuario} usuarioLogueado={usuarioLogueado} /> : null}
    </div>
  )
}

export default ConfigRegistroLogin