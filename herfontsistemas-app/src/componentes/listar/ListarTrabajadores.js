import React, { useState } from 'react'
import APIService from '../APIService'

function ListarTrabajadores(props) {

  const [busqueda, setBusqueda] = useState("")
  const [verMas, setVerMas] = useState(null)

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
    if (resultado === "") {
      console.log("Sin datos")
    }
  }
  return (
    <div>
      <br />
      <input value={busqueda} onChange={buscador} type="text" placeholder='Search' className='form-control' />

      <table className='table table-striped table-hover table-responsive mt-5 shadow-lg'>
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
                <td>{trabajador.primer_ape_trabajador} {trabajador.segundo_ape_trabajador}</td>
                <td>{trabajador.correo_trabajador}</td>


                <td>
                  <button className="btn btn-success mx-2 my-2"
                    onClick={() => editarTrabajador(trabajador)}
                  >Modificar</button>

                  <button className="btn btn-danger mx-2 my-2"
                    onClick={() => borrarTrabajador(trabajador)}
                  >Eliminar</button>
                  <button className="btn btn-success mx-2 my-2"
                    onClick={() => setVerMas(trabajador)}
                  >Ver Mas</button>
                </td>

              </tr>
            </tbody>
          )
        })}

      </table>
      {verMas && (
        <div className=" mx-auto d-block d-flex justify-content-center align-items-center container ">
          <table className='table table-striped table-hover table-responsive mt-5 shadow-lg table-success' >
            <thead className='table bg-green'>
              <tr className='text-light'>
                <th >Campo</th>
                <th>Datos</th>
              </tr>
            </thead>
            <tbody>
              <br></br>
              <tr >
                <td key={verMas.id}><b>Nombre</b></td> <td>{verMas.nom_trabajador}</td>
              </tr>
              <br></br>
              <tr >
                <td><b>Apellidos</b></td><td>{verMas.primer_ape_trabajador} {verMas.segundo_ape_trabajador}</td>
              </tr>
              <br></br>
              <tr >
                <td ><b>DNI</b></td><td>{verMas.dni_trabajador}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>Fecha nacimiento</b></td><td>{verMas.fecha_nacimiento_trabajador}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>Dirección</b></td><td>{verMas.direccion_trabajador}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>Población</b></td><td>{verMas.poblacion_trabajador}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>Correo</b></td><td>{verMas.correo_trabajador}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>Código postal</b></td><td>{verMas.codigo_postal_trabajador}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>Teléfono fijo</b></td><td>{verMas.tel_fijo_trabajador}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>Teléfono móvil personal</b></td><td>{verMas.tel_movil_personal}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>Teléfono móvil empresa</b></td><td>{verMas.tel_movil_empresa}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>Persona contacto emergencias</b></td><td>{verMas.persona_emergencias}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>Teléfono emergencias</b></td><td>{verMas.tel_emergencias}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>Banco</b></td><td>{verMas.banco}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>IBAN</b></td><td>{verMas.iban}</td>
              </tr>
              <br></br>
              <tr>
                <td><b>BIC</b></td><td>{verMas.bic}</td>
              </tr>
              <br></br>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ListarTrabajadores