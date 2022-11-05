import React, {useState, useEffect} from 'react';
import APIService from '../APIService';


function FormUsuarios(props) {
    const NOMBRE_VAL = /^[A-z][A-z0-9-_]{3,23}$/;
    const APE_VAL=/^[A-z][A-Za-z]+(\s[A-Za-z])$/;
    const CORREO_VAL = /^[\w\.\_]{3,5}\+?[\w]{0,10}@[\w]{3,}\.\w{2,5}$/;
    const TEL_VAL = /^[0-9]{9}$/;
    const CONTRASENA_VAL = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const DIR_VAL = /^[A-Za-z]+(\s[A-Za-z])*([0-9])*$/; //nose si está bien
    const CIUPROV_VAL = /^[A-z][A-Za-z]+(\s[A-Za-z])$/;
    const CODPOST_VAL=/^[0-9]{1,5}$/;
    const DESC_VAL=/^[0-9]{1,3}$/;


    const [nombre, setNombre] = useState('')
    const [validNombre, setValidNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [validApe, setValidApe] = useState('')
    const [correo, setCorreo] = useState('')
    const [validCorreo, setValidCorreo]=useState('')
    const [telefono, setTelefono] = useState('')
    const [validTel, setValidTel]= useState('')
    const [contrasena, setContrasena] = useState('')
    const [validContrasena, setValidContrasena]=useState('')
    const [direccion, setDireccion] = useState('')
    const [validDir, setValidDir] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [validCiudadm, setValidCiudad] = useState('')
    const [provincia, setProvincia] = useState('')
    const [validProvincia, setValidProvincia] = useState('')
    const [codigo_postal, setCodigoPostal] = useState('')
    const [validCodPost, setValidCostPost] = useState('')
    const [descuento, setDescuento] = useState('')
    const [validDesc, setValidDesc] = useState('')

    useEffect(()=>{
        setNombre(props.usuario.nombre)
        setApellidos(props.usuario.apellidos)
        setCorreo(props.usuario.correo)
        setTelefono(props.usuario.telefono)
        setContrasena(props.usuario.contrasena)
        setDireccion(props.usuario.direccion)
        setCiudad(props.usuario.ciudad)
        setProvincia(props.usuario.provincia)
        setCodigoPostal(props.usuario.codigo_postal)
        setDescuento(props.usuario.descuento)
    },[props.usuario])
    useEffect(()=>{
        const result = NOMBRE_VAL.test(nombre);
        console.log(result);
        console.log(nombre);
        setValidNombre(result);

    },[nombre])
    useEffect(()=>{
        const result = APE_VAL.test(apellidos);
        console.log(result);
        console.log(apellidos);
        setValidNombre(result);

    },[apellidos])
    useEffect(()=>{
        const result = CORREO_VAL.test(correo);
        console.log(result);
        console.log(correo);
        setValidNombre(result);

    },[correo])
    useEffect(()=>{
        const result = TEL_VAL.test(telefono);
        console.log(result);
        console.log(telefono);
        setValidNombre(result);

    },[telefono])
    
    useEffect(()=>{
        const result = CONTRASENA_VAL.test(contrasena);
        console.log(result);
        console.log(contrasena);
        setValidNombre(result);

    },[contrasena])
    useEffect(()=>{
        const result = DIR_VAL.test(direccion);
        console.log(result);
        console.log(direccion);
        setValidNombre(result);

    },[direccion])
    useEffect(()=>{
        const result = DIR_VAL.test(direccion);
        console.log(result);
        console.log(direccion);
        setValidNombre(result);

    },[direccion])

    useEffect(()=>{
        const result = CIUPROV_VAL.test(ciudad);
        console.log(result);
        console.log(ciudad);
        setValidNombre(result);

    },[ciudad])
    useEffect(()=>{
        const result = CIUPROV_VAL.test(provincia);
        console.log(result);
        console.log(provincia);
        setValidNombre(result);

    },[provincia])
    useEffect(()=>{
        const result = CODPOST_VAL.test(codigo_postal);
        console.log(result);
        console.log(codigo_postal);
        setValidNombre(result);

    },[codigo_postal])
    useEffect(()=>{
        const result = DESC_VAL.test(descuento);
        console.log(result);
        console.log(descuento);
        setValidNombre(result);

    },[descuento])


    
    const modificarUsuario = () => {
        APIService.ModificarUsuario(props.usuario.id, {nombre, apellidos, correo, telefono, contrasena, direccion, ciudad, provincia, codigo_postal, descuento})
        .then(resp => props.datoModificado(resp))
        .catch(error => console.log(error))
    }

    const insertarUsuario=()=>{
        APIService.InsertarUsuario({nombre, apellidos, correo, telefono, contrasena, direccion, ciudad, provincia, codigo_postal, descuento})
        .then(resp=>props.usuarioInsertado(resp))
        .catch(error=>console.log(error))
    }

  return (
    <div>
        {props.usuario ? (
            
            <div className="mb-3">
                <h1>Inserar</h1>
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
                {
                    props.usuario.id ? <button 
                    onClick={modificarUsuario}
                    className='btn btn-success mt3'
                    >Modificar</button>
                    :
                    <button 
                    onClick={insertarUsuario}
                    className='btn btn-success mt3'
                    >Insertar</button>

                }
                
                
            </div>
        ):null}                
    </div>
  )
}

export default FormUsuarios