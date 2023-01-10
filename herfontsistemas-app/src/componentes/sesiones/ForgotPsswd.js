import React from 'react'
import { useState, useEffect, useRef } from 'react'
import APIService from '../APIService';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2';
import { rutaMaquina } from '../Rutas';
import { ErrorResponse } from '@remix-run/router';
function ForgotPsswd() {
    const [correo, setCorreo] = useState('')
    const [validCorreo, setValidCorreo] = useState(false)
    const [correoFocus, setCorreoFocus] = useState(false)
    const CORREO_VAL = /^[\w\.\_]{3,5}\+?[\w\.\_]{0,20}@[\w]{3,}\.\w{2,5}$/;
    const correoRef = useRef();
    useEffect(() => {
        fetch(rutaMaquina + `/herfontsistemas-back/ForgotPsswd`, {
            'method': 'POST',
            headers: { "Content-type": "application/json" }

        }).then(
            res => res.json()

        ).catch(error => console.log(error))
    }, [])

    useEffect(() => {
        const result = CORREO_VAL.test(correo);
        setCorreo(correo)
        setValidCorreo(result);
    }, [correo])


    const handleSubmit = e => {
        e.preventDefault();
        if (CORREO_VAL.test(correo) === true) {

            APIService.ForgotPsswd({ correo })
                .then((resp) =>{ 
                    if(resp.correcto){
                        Swal.fire({
                        title: "CORREO ENVIADO",
                        text: " Chequea tu correo electrónico para cambiar la contraseña ",
                        icon: "success",
                    
                        })
                    }
                    if(resp.errorForgotPsswd){
                        Swal.fire({
                            title: "ERROR",
                            text: resp.errorForgotPsswd,
                            icon: "error",
                        
                        })
                    }
            }).catch(error => {
                    if (error.errorForgotPsswd) {
                        Swal.fire({
                            title: "¡Error!",
                            text: error.errorForgotPsswd,
                            icon: "error"
                        });
                    } else {
                        Swal.fire({
                            title: "¡Error!",
                            text: "No se reconoce el correo electrónico, escriba uno que ya este en nuestra base de datos.",
                            icon: "error"
                        })
                    }
                })
        } else {
            Swal.fire({
                title: "¡Error!",
                text: "No está bien escrito el correo electrónico, revíselo",
                icon: "error"
            })
        }
    }

    return (
        <div>

            <div className="container">


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
                    onClick={handleSubmit}
                >Enviar</button>



            </div>

        </div>
    )
}

export default ForgotPsswd

