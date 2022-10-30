import React, {useState,useEffect} from 'react';
import "./App.css";
import UsuariosList from './componentes/UsuariosList';
import Form from './componentes/Form';
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

  return (
    <div className='container'>
     <UsuariosList usuarios={usuarios} editarUsuario= {editarUsuario}/>

     {editadoUsuario ? <Form usuario = {editadoUsuario} datoModificado = {datoModificado}/> : null}

    </div>
  )
}

export default App