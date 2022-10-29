import React from 'react'

function UsuariosList(props) {
  
  const editarUsuario = (usuario)=>{
    props.editarUsuario(usuario)
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
                <button className="btn btn-danger">Eliminar</button>
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