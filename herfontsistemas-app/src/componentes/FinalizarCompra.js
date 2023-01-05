import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2';

const FinalizarCompra = () => {
    const NOMBRE_VAL = /^(?=.{3,20})[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+((\s|-)[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+)*$/;
    const CORREO_VAL = /^[\w\.\_]{3,5}\+?[\w]{0,10}@[\w]{3,}\.\w{2,5}$/;
    const TEL_VAL = /^[0-9]{9}$/;
    const DIR_VAL = /^[A-Za-z]+(\s[A-Za-z])*([0-9])*$/;
    const CIUPROV_VAL = /^[A-z][A-Za-z]+(\s[A-Za-z])$/;
    const CODPOST_VAL = /^[0-9]{1,5}$/;
    const MENSAJE_VAL = /^[a-zA-Z0-9(\s)$%/!.,=?¿+_-]*$/;

    const nombreRef = useRef();
    const apellidosRef = useRef();
    const correoRef = useRef();
    const direccionRef = useRef();
    const telefonoRef = useRef();
    const ciudadRef = useRef();
    const codigoPostalRef = useRef()
    const mensajeRef = useRef();

    const [nombre, setNombre] = useState('')
    const [validNombre, setValidNombre] = useState('')

    const [apellidos, setApellidos] = useState('')
    const [validApe, setValidApe] = useState('')

    const [correo, setCorreo] = useState('')
    const [validCorreo, setValidCorreo]=useState('')

    const [direccion, setDireccion] = useState('')
    const [validDireccion, setValidDireccion] = useState('')

    const [telefono, setTelefono] = useState('')
    const [validTel, setValidTelefono]= useState('')

    const [ciudad, setCiudad] = useState('')
    const [validCiudad, setValidCiudad] = useState('')

    const [provincia, setProvincia] = useState('')
    const [validProvincia, setValidProvincia] = useState('')

    const [codigo_postal, setCodigoPostal] = useState('')
    const [validCodigo, setValidCodigo] = useState('')

    const [mensaje, setMensaje] = useState('')
    const [validMensaje, setValidMensaje] = useState(false)

    // useEffect(() => {
    //     nombreRef.current.focus();
    //     apellidosRef.current.focus();
    //     correoRef.current.focus();
    //     direccionRef.current.focus();
    //     telefonoRef.current.focus();
    //     ciudadRef.current.focus();
    //     codigoPostalRef.current.focus()
    //     mensajeRef.current.focus();
    // }, [])

    useEffect(() => {
        const result = NOMBRE_VAL.test(nombre);
        setValidNombre(result);
    }, [nombre])

    useEffect(() => {
        const result = CORREO_VAL.test(correo);
        setValidCorreo(result);
    }, [correo])

    useEffect(() => {
        const result = DIR_VAL.test(direccion);
        setValidDireccion(result);
    }, [direccion])

    useEffect(() => {
        const result = TEL_VAL.test(telefono);
        setValidTelefono(result);
    }, [telefono])

    useEffect(() => {
        const result = CIUPROV_VAL.test(ciudad);
        setValidCiudad(result);
    }, [ciudad])

    useEffect(() => {
        const result = CODPOST_VAL.test(codigo_postal);
        setValidCodigo(result);

    }, [codigo_postal])

    useEffect(() => {
        const result = MENSAJE_VAL.test(mensaje);
        setValidMensaje(result);

    }, [mensaje])


    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_8rqjaee', 'template_i7e6mue', event.target, 'XDeCN6_0kxkgxNamr')
            .then(response => Swal.fire({
                title: "¡ENVIADO CORRECTAMENTE!",
                text: "Pronto le llegará un correo con la factura",
                icon: "success",
            }))
            .catch(error => console.log(error))
        console.log(event.target)
    }
    return (
        <div className='container'>
            <form className='title-form' onSubmit={sendEmail}>
                <h1>Rellene los Datos:</h1>
                <label htmlFor='nombre' className='form-label'>Nombre</label>
                <input type="text" className='form-control'
                    placeholder="Ingrese el nombre"
                    value={nombre}
                    onChange={(u) => setNombre(u.target.value)}/>

                <label htmlFor='apellidos' className='form-label'>Apellidos</label>
                <input type="text" className='form-control'
                    placeholder="Ingrese los apellidos"
                    value={apellidos}
                    onChange={(u) => setApellidos(u.target.value)}/>

                <label htmlFor='correo' className='form-label'>Correo</label>
                <input type="text" className='form-control'
                    placeholder="Ingrese el correo"
                    value={correo}
                    onChange={(u) => setCorreo(u.target.value)}/>

                <label htmlFor='telefono' className='form-label'>Telefono</label>
                <input type="text" className='form-control'
                    placeholder="Ingrese el telefono"
                    value={telefono}
                    onChange={(u) => setTelefono(u.target.value)}/>

                <label htmlFor='direccion' className='form-label'>Direccion</label>
                <input type="text" className='form-control'
                    placeholder="Ingrese la direccion"
                    value={direccion}
                    onChange={(u) => setDireccion(u.target.value)}/>

                <label htmlFor='ciudad' className='form-label'>Ciudad</label>
                <input type="text" className='form-control'
                    placeholder="Ingrese la ciudad"
                    value={ciudad}
                    onChange={(u) => setCiudad(u.target.value)}/>

                <label htmlFor='provincia' className='form-label'>Provincia</label>
                <input type="text" className='form-control'
                    placeholder="Ingrese la provincia"
                    value={provincia}
                    onChange={(u) => setProvincia(u.target.value)}

                />

                <label htmlFor='codigo_postal' className='form-label'>Codigo Postal</label>
                <input type="text" className='form-control'
                    placeholder="Ingrese el codigo postal"
                    value={codigo_postal}
                    onChange={(u) => setCodigoPostal(u.target.value)}

                />

                <label htmlFor='mensaje' className='form-label'>Comentario para el transportista:
                    <span className={validMensaje ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validMensaje || !mensaje ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span></label>

                <textarea rows={6} cols={18} type="text" className='form-control'
                    placeholder="Ingrese el mensaje"
                    value={mensaje}
                    onChange={(u) => setMensaje(u.target.value)}
                    id="mensajeUsuario" ref={mensajeRef} autoComplete="off"
                    required
                    aria-invalid={validMensaje ? "false" : "true"} name='mensaje_mail' />

                <button className='btn btn-success mt3'>Finalizar Compra</button>
            </form>
        </div>
    )
}

export default FinalizarCompra

// import React from 'react'

// function FinalizarCompra() {
//     var sesion = sessionStorage.getItem("nombre");
//     console.log(sesion)
//     if (sesion == null) {
//         window.location.href = "//localhost:3000/ConfigRegistroLogin";
//     } else {
//         return (
//             <div>
//                     <div className="mb-3">
//                         <h1>Rellene el formulario</h1>
//                         <label htmlFor='nombre' className='form-label'>Nombre</label>
//                         <input type="text" className='form-control'
//                             placeholder="Ingrese el nombre"
//                             value={nombre}
//                             onChange={(u) => setNombre(u.target.value)}
//                         />

//                         <label htmlFor='apellidos' className='form-label'>Apellidos</label>
//                         <input type="text" className='form-control'
//                             placeholder="Ingrese los apellidos"
//                             value={apellidos}
//                             onChange={(u) => setApellidos(u.target.value)}

//                         />

//                         <label htmlFor='correo' className='form-label'>Correo</label>
//                         <input type="text" className='form-control'
//                             placeholder="Ingrese el correo"
//                             value={correo}
//                             onChange={(u) => setCorreo(u.target.value)}

//                         />

//                         <label htmlFor='direccion' className='form-label'>Direccion</label>
//                         <input type="text" className='form-control'
//                             placeholder="Ingrese la direccion"
//                             value={direccion}
//                             onChange={(u) => setDireccion(u.target.value)}

//                         />

//                         <label htmlFor='ciudad' className='form-label'>Ciudad</label>
//                         <input type="text" className='form-control'
//                             placeholder="Ingrese la ciudad"
//                             value={ciudad}
//                             onChange={(u) => setCiudad(u.target.value)}

//                         />

//                         <label htmlFor='provincia' className='form-label'>Provincia</label>
//                         <input type="text" className='form-control'
//                             placeholder="Ingrese la provincia"
//                             value={provincia}
//                             onChange={(u) => setProvincia(u.target.value)}

//                         />

//                         <label htmlFor='codigo_postal' className='form-label'>Codigo Postal</label>
//                         <input type="text" className='form-control'
//                             placeholder="Ingrese el codigo postal"
//                             value={codigo_postal}
//                             onChange={(u) => setCodigoPostal(u.target.value)}

//                         />

//                         <label htmlFor='descuento' className='form-label'>Descuento</label>
//                         <input type="text" className='form-control'
//                             placeholder="Ingrese el descuento (si tiene)"
//                             value={descuento}
//                             onChange={(u) => setDescuento(u.target.value)}
//                         />
//                         <button onClick={insertarUsuario} className='btn btn-success mt3'>FinalizarCompra</button>
//                     </div>
//             </div>
//         )
//     }
// }

// export default FinalizarCompra