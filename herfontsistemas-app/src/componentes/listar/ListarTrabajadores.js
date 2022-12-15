import React,{useState} from 'react'
import APIService from '../APIService'

function ListarTrabajadores(props) {

  const [busqueda, setBusqueda] = useState("")


  const editarTrabajador = (trabajador) => {
    props.editarTrabajador(trabajador)
  }

  const borrarTrabajador = (trabajador) => {
    APIService.BorrarTrabajador(trabajador.id)
      .then(() => props.borrarTrabajador(trabajador))
  }
  const buscador = (e) => {
    setBusqueda(e.target.value)
    console.log(e.target.value)
  }

  console.log("props")
  console.log(props.trabajadores);
  let resultado = []

  if (!busqueda) {
    resultado = props.trabajadores
    console.log("resultado")
    console.log(resultado)
  } else {
    const arrayb = props.trabajadores
    console.log("array")
    console.log(arrayb)

    resultado = arrayb.filter((dato) => dato.nom_trabajador.toLowerCase().includes(busqueda.toLocaleLowerCase()))

    console.log("resultado")
    console.log(resultado)
    if(resultado===""){
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
        {resultado.map(trabajador => {
          return (
            <tbody>
              <tr>
                <td key={trabajador.id}>{trabajador.nom_trabajador}</td>
                <td>{trabajador.primer_ape_trabajador}</td>
                <td>{trabajador.correo_trabajador}</td>
                <td>
                  <button className="btn btn-primary"
                    onClick={() => editarTrabajador(trabajador)}
                  >Modificar</button>

                  <button className="btn btn-danger"
                    onClick={() => borrarTrabajador(trabajador)}
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

export default ListarTrabajadores