import React, {useState} from 'react';
import APIService from '../componentes/APIService';

function Form(props) {
    const [nombre, setNombre] = useState(props.usuario.nombre)
    const [apellidos, setApellidos] = useState(props.usuario.apellidos)
    const [correo, setCorreo] = useState(props.usuario.correo)
    const [telefono, setTelefono] = useState(props.usuario.telefono)
    const [contrasena, setContrasena] = useState(props.usuario.contrasena)
    const [direccion, setDireccion] = useState(props.usuario.direccion)
    const [ciudad, setCiudad] = useState(props.usuario.ciudad)
    const [provincia, setProvincia] = useState(props.usuario.provincia)
    const [codigo_postal, setCodigoPostal] = useState(props.usuario.codigo_postal)
    const [descuento, setDescuento] = useState(props.usuario.descuento)

    const ModificarUsuario = () => {
        APIService.ModificarUsuario(props.usuario.id, {nombre, apellidos, correo, telefono, contrasena, direccion, ciudad, provincia, codigo_postal, descuento})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }


  return (
    <div>
        {props.usuario ? (
            
            <div className="mb-3">
                <h1>Modificar</h1>
                <label htmlFor='nombre' className='form-label'>nombre</label>
                <input type="text" className='form-control'
                placeholder="Ingrese el nombre"
                value={nombre}
                onChange={(u) => setNombre(u.target.value)}
                />

                <label htmlFor='apellidos' className='form-label'>apellidos</label>
                <input type="text" className='form-control'
                placeholder="Ingrese los apellidos"
                value={apellidos}
                onChange={(u) => setApellidos(u.target.value)}

                />

                <label htmlFor='correo' className='form-label'>correo</label>
                <input type="text" className='form-control'
                placeholder="Ingrese el correo"
                value={correo}
                onChange={(u) => setCorreo(u.target.value)}

                />

                <label htmlFor='telefono' className='form-label'>telefono</label>
                <input type="text" className='form-control'
                placeholder="Ingrese el telefono"
                value={telefono}
                onChange={(u) => setTelefono(u.target.value)}

                />

                <label htmlFor='contrasena' className='form-label'>contrasena</label>
                <input type="password" className='form-control'
                placeholder="Ingrese el contraseña"
                value={contrasena}
                onChange={(u) => setContrasena(u.target.value)}

                />

                <label htmlFor='direccion' className='form-label'>direccion</label>
                <input type="text" className='form-control'
                placeholder="Ingrese la direccion"
                value={direccion}
                onChange={(u) => setDireccion(u.target.value)}

                />

                <label htmlFor='ciudad' className='form-label'>ciudad</label>
                <input type="text" className='form-control'
                placeholder="Ingrese la ciudad"
                value={ciudad}
                onChange={(u) => setCiudad(u.target.value)}

                />

                <label htmlFor='provincia' className='form-label'>provincia</label>
                <input type="text" className='form-control'
                placeholder="Ingrese la provincia"
                value={provincia}
                onChange={(u) => setProvincia(u.target.value)}

                />

                <label htmlFor='codigo_postal' className='form-label'>codigo_postal</label>
                <input type="text" className='form-control'
                placeholder="Ingrese el codigo postal"
                value={codigo_postal}
                onChange={(u) => setCodigoPostal(u.target.value)}

                />

                <label htmlFor='descuento' className='form-label'>descuento</label>
                <input type="text" className='form-control'
                placeholder="Ingrese el descuento (si tiene)"
                value={descuento}
                onChange={(u) => setDescuento(u.target.value)}

                />
                <button 
                onClick={ModificarUsuario}
                className='btn btn-success mt3'
                >Modificar</button>
                
            </div>
        ):null}

            
        
    </div>
  )
}

export default Form