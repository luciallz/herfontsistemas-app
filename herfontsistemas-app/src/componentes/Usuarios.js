import React, {useState,useEffect} from 'react';
import UsuariosList from './listar/UsuariosList';
import FormUsuarios from './formularios/FormUsuarios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Swal from 'sweetalert2';
import { rutaMaquina } from './Rutas';
function Usuarios() {
  const [usuarios, setUsuario]=useState([])
  const [editadoUsuario, setEditadoUsuario]=useState(null)

  useEffect(()=>{
    fetch(rutaMaquina ,{
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
        Swal.fire({
          title:"¡Exito!",
          text:"Se ha modificado correctamente",
          icon:"success"
        })
        return usuario
      }else{
        Swal.fire({
          title:"¡Exito!",
          text:"Se ha modificado correctamente",
          icon:"success"
        })
        
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
        <div className='col'>
          <button
          className='btn btn-success'
          onClick={abrirForm}
          >Insertar Usuario</button>
        </div>
          
     <UsuariosList usuarios={usuarios} editarUsuario= {editarUsuario}borrarUsuario = {borrarUsuario}/>

     {editadoUsuario ? <FormUsuarios usuario = {editadoUsuario} datoModificado = {datoModificado} usuarioInsertado={usuarioInsertado}/> : null}

    </div>
  )
}

export default Usuarios