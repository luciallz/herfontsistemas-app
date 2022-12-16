import React from 'react'
import { useState, useEffect, useRef } from 'react'
import APIService from '../APIService';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2';
function ForgotPsswd(props) {
    const CORREO_VAL = /^[\w\.\_]{3,5}\+?[\w]{0,10}@[\w]{3,}\.\w{2,5}$/;
    const correoRef = useRef();

    const [correo, setCorreo] = useState('')
    const [validCorreo, setValidCorreo] = useState(false)
    const [correoFocus, setCorreoFocus] = useState(false)

    useEffect(() => {
        setCorreo(props.usuario.correo)
    }, [props.usuario])

    useEffect(() => {
        correoRef.current.focus();
    }, [])
    useEffect(() => {
        const result = CORREO_VAL.test(correo);
        setValidCorreo(result);
        console.log(result)

    }, [correo])
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            {props.usuario ? (

                <div className="mb-3">


                    <h1>Reestablecer contraseña</h1>

                    <label htmlFor='correo' className='form-label'>correo
                        <span className={validCorreo ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validCorreo || !correo ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input type="text" className='form-control'
                        placeholder="Ingrese el correo"
                        value={correo}
                        onChange={(u) => setCorreo(u.target.value)}
                        id="correoUsuario" ref={correoRef} autoComplete="off"
                        required
                        aria-invalid={validCorreo ? "false" : "true"}
                    />


                    <button

                        className='btn btn-success mt3'
                    >Enviar</button>



                </div>
            ) : null}
        </div>
    )
}

export default ForgotPsswd

