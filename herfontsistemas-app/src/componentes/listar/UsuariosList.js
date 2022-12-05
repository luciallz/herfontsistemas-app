import React, { useState, useEffect } from 'react'
import APIService from '../APIService'

function UsuariosList(props) {
  const [busqueda, setBusqueda] = useState("")

  const editarUsuario = (usuario) => {
    props.editarUsuario(usuario)
  }

  const borrarUsuario = (usuario) => {
    APIService.BorrarUsuario(usuario.id)
      .then(() => props.borrarUsuario(usuario))
  }

  const buscador = (e) => {
    setBusqueda(e.target.value)
    console.log(e.target.value)
  }

  console.log("props")
  console.log(props.usuarios);
  let resultado = []

  if (!busqueda) {
    resultado = props.usuarios
    console.log("resultado")
    console.log(resultado)
  } else {
    const arrayb = props.usuarios
    console.log("array")
    console.log(arrayb)

    resultado = arrayb.filter((dato) => dato.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))

    console.log("resultado")
    console.log(resultado)
    if (resultado == "") {
      console.log("Sin datos")
    }
  }
  return (
    <div>
      <br />
      <input value={busqueda} onChange={buscador} type="text" placeholder='Search' className='form-control' />
      <table className='table table-striped table-hover mt-5 shadow-lg'>
        <thead>
          <tr>
            <th >Nombre</th>
            <th>Apellidos</th>
            <th>Correo</th>
          </tr>
        </thead>
        {resultado.map(usuario => {
          return (
            <tbody>
              <tr>
                <td key={usuario.id}>{usuario.nombre}</td>
                <td>{usuario.apellidos}</td>
                <td>{usuario.correo}</td>
                <td>
                  <button className="btn btn-primary"
                    onClick={() => editarUsuario(usuario)}
                  >Modificar</button>

                  <button className="btn btn-danger"
                    onClick={() => borrarUsuario(usuario)}
                  >Eliminar</button>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}

export default UsuariosList