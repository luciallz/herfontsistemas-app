import React from 'react'
import APIService from '../componentes/APIService'
function UsuariosList(props) {
  
  const editarUsuario = (usuario)=>{
    props.editarUsuario(usuario)
  }

  const borrarUsuario = (usuario)=>{
    APIService.BorrarUsuario(usuario.id)
    .then(()=> props.borrarUsuario(usuario))
  }
  return (
    <div> 
        {props.usuarios && props.usuarios.map(usuario=>{
        return(
          <div key={usuario.id}>
            <h2>{usuario.nombre}</h2>
            <p>{usuario.apellidos}</p>
            <p>{usuario.correo}</p>

            <div className="row">
              <div className="col-md-1">
                <button className="btn btn-primary"
                onClick={()=>editarUsuario(usuario)}
                >Modificar</button>
              </div>

              <div className="col">
                <button className="btn btn-danger"
                onClick={()=> borrarUsuario(usuario)}
                >Eliminar</button>
              </div>

            </div>

            <hr/>

          </div>
        )
      })}
    </div>
  )
}

export default UsuariosList