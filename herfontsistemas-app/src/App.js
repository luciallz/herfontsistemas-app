import React, {useState,useEffect} from 'react';
import "./App.css";
import Usuarios from './componentes/Usuarios';
import UsuariosList from './componentes/UsuariosList';
import Form from './componentes/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './componentes/Menu'
import {BrowserRouter, Routes, Route, Router, Link} from "react-router-dom"
import AppRoute from './rutas';
function App() {
  // const [usuarios, setUsuario]=useState([])
  // const [editadoUsuario, setEditadoUsuario]=useState(null)

  // useEffect(()=>{
  //   fetch("http://127.0.0.1:5000",{
  //     'method':'GET',
  //     headers:{"Content-type": "application/json"}
  //   }).then(
  //     res=>res.json()
  //   ).then(
  //     res=>{
  //       setUsuario(res)
  //     }
  //   ).catch(error=>console.log(error))
  // }, [])

  // const editarUsuario = (usuario) => {

  //   setEditadoUsuario(usuario)
  // }
  // const datoModificado = (usuario) => {
  //   const nuevo_usuario = usuarios.map(mi_usuario => {
  //     if(mi_usuario.id === usuario.id){
  //       return usuario
  //     }else{
  //       return mi_usuario
  //     }
  //   })
  //   setUsuario(nuevo_usuario)
  // }
  // const abrirForm = ()=>{
  //   setEditadoUsuario({nombre:'', apellidos:'', correo:'', telefono:'', contrasena:'', direccion:'', ciudad:'', provincia:'', codigo_postal:'', descuento:''})
  // }
  // const usuarioInsertado = (usuario)=>{
  //   const nuevo_usuario = [...usuarios, usuario]
  //   setUsuario(nuevo_usuario)
  // }

  // const borrarUsuario = (usuario)=>{
  //   const nuevo_usuario = usuarios.filter(miusuario=>{
  //     if(miusuario.id === usuario.id){
  //       return false;
  //     }
  //     return true;
  //   })

  //   setUsuario(nuevo_usuario)
  // }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
  
            <Menu />
          
        </div>
      </div>  
        {/* <div className='col'>
          <button
          className='btn btn-success'
          onClick={abrirForm}
          >Insertar Usuario</button>
        </div>
          
     <UsuariosList usuarios={usuarios} editarUsuario= {editarUsuario} borrarUsuario = {borrarUsuario}/>

     {editadoUsuario ? <Form usuario = {editadoUsuario} datoModificado = {datoModificado} usuarioInsertado={usuarioInsertado}/> : null} */}

    </div>
  )
}

export default App