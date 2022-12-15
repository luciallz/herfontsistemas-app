import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2';

const Mail = () => {
    const NOMBRE_VAL = /^(?=.{3,20})[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+((\s|-)[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+)*$/;
    const CORREO_VAL = /^[\w\.\_]{3,5}\+?[\w]{0,10}@[\w]{3,}\.\w{2,5}$/;
    const MENSAJE_VAL = /^[a-zA-Z0-9(\s)$%/!.,=?¿+_-]*$/;

    const nombreRef = useRef();
    const correoRef = useRef();
    const mensajeRef = useRef();

    const [nombre, setNombre] = useState('')
    const [validNombre, setValidNombre] = useState(false)
    const [nombreFocus, setNombreFocus] = useState(false)

    const [correo, setCorreo] = useState('')
    const [validCorreo, setValidCorreo] = useState(false)
    const [correoFocus, setCorreoFocus] = useState(false)

    const [mensaje, setMensaje] = useState('')
    const [validMensaje, setValidMensaje] = useState(false)
    const [mensajeFocus, setCorreoMensaje] = useState(false)

    useEffect(() => {
        nombreRef.current.focus();
        correoRef.current.focus();
        mensajeRef.current.focus();
    }, [])

    useEffect(() => {
        const result = NOMBRE_VAL.test(nombre);
        setValidNombre(result);
        console.log(result)
    }, [nombre])

    useEffect(() => {
        const result = CORREO_VAL.test(correo);
        setValidCorreo(result);
        console.log(result)

    }, [correo])

    useEffect(() => {
        const result = MENSAJE_VAL.test(mensaje);
        setValidMensaje(result);
        console.log(result)

    }, [mensaje])

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_8rqjaee', 'template_i7e6mue', event.target, 'XDeCN6_0kxkgxNamr')
            .then(response => Swal.fire({
                title: "¡ENVIADO CORRECTAMENTE!",
                text: "Le enviaremos una respuesta lo antes posible",
                icon: "success",
            }))
            .catch(error => console.log(error))
        console.log(event.target)
    }
    return (
        <div className='container'>
            <form className='title-form' onSubmit={sendEmail}>
                <label htmlFor='nombre' className='form-label'>nombre
                    <span className={validNombre ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validNombre || !nombre ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input type="text" id="nomUsuario" ref={nombreRef} autoComplete="off" className='form-control'
                    placeholder="Ingrese el nombre"
                    value={nombre}
                    onChange={(u) => setNombre(u.target.value)}
                    required
                    aria-invalid={validNombre ? "false" : "true"}
                    aria-describedby="nomnote"
                    onFocus={() => setNombreFocus(true)}
                    onBlur={() => setNombreFocus(false)} name='usuario_mail' />
                <p id="nomnote" className={nombreFocus && nombre && !validNombre ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    De 3 a 20 carácteres <br />
                    Debe empezar con una letra mayúscula<br />
                    Se permiten: letras, barra baja y guiones.
                </p>

                <label htmlFor='correo' className='form-label'>correo
                    <span className={validCorreo ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validCorreo || !correo ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span></label>

                <input type="text" className='form-control'
                    placeholder="Ingrese el correo"
                    value={correo}
                    onChange={(u) => setCorreo(u.target.value)}
                    id="correoUsuario" ref={correoRef} autoComplete="off"
                    required
                    aria-describedby="corrnote"
                    aria-invalid={validCorreo ? "false" : "true"} name='correo_mail' />


                <label htmlFor='mensaje' className='form-label'>Mensaje
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

                <button
                    className='btn btn-success mt3'
                >Enviar</button>
            </form>
        </div>
    )
}

export default Mail