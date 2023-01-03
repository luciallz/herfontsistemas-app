import React from 'react'
import { useState, useEffect, useRef } from 'react'
import APIService from '../APIService';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2';
import { rutaMaquina } from '../Rutas';
function ForgotPsswd() {
    const [correo, setCorreo] = useState('')
    const [validCorreo, setValidCorreo] = useState(false)
    const [correoFocus, setCorreoFocus] = useState(false)
    useEffect(() => {
        fetch(rutaMaquina , {
          'method': 'GET',
          headers: { "Content-type": "application/json" }
          
        }).then(
          res => res.json()
        // ).then(
        //   res => {
        //     setCorreo(res)
        //   }
        ).catch(error => console.log(error))
      }, [])
      const CORREO_VAL = /^[\w\.\_]{3,5}\+?[\w\.\_]{0,20}@[\w]{3,}\.\w{2,5}$/;
    const correoRef = useRef();

    

    useEffect(() => {
        setCorreo(correo)
    }, [correo])

    // useEffect(() => {
    //     correoRef.current.focus();
    // }, [])
    // useEffect(() => {
    //     const result = CORREO_VAL.test(correo);
    //     setValidCorreo(result);
    //     console.log(result)

    // }, [correo])
    const handleSubmit = e => {
        e.preventDefault();
        APIService.ForgotPsswd({ correo })
                .then(resp => Swal.fire({
                    title: "CORREO ENVIADO",
                    text: " Chequea tu correo electrónico para cambiar la contraseña ",
                    icon: "success",
                    
                }))
                .catch(error => Swal.fire({
                    title: "¡Error!",
                    text: " No se reconoce el correo.",
                    icon: "error"
                }))
        
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

