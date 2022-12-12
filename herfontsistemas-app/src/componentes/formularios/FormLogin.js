import React, { useRef, useState, useEffect } from 'react';
import APIService from '../APIService';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2';

function FormLogin(props) {
    const CORREO_VAL = /^[\w\.\_]{3,5}\+?[\w]{0,10}@[\w]{3,}\.\w{2,5}$/;
    const CONTRASENA_VAL = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const correoRef = useRef();
    const contrasenaRef = useRef();

    const [miLogin, setLogin] = useState(false)
    const [correo, setCorreo] = useState('')
    const [validCorreo, setValidCorreo] = useState(false)
    const [correoFocus, setCorreoFocus] = useState(false)

    const [contrasena, setContrasena] = useState('')
    const [validContrasena, setValidContrasena] = useState(false)
    const [contrasenaFocus, setContrasenaFocus] = useState(false)
    const [verPwd, setVerPwd] = useState(false)

    useEffect(() => {
        setCorreo(props.usuario.correo)
        setContrasena(props.usuario.contrasena)
    }, [props.usuario])

    useEffect(() => {
        correoRef.current.focus();
        contrasenaRef.current.focus();
    }, [])
    useEffect(() => {
        const result = CORREO_VAL.test(correo);
        setValidCorreo(result);
        console.log(result)

    }, [correo])
    useEffect(() => {
        const result = CONTRASENA_VAL.test(contrasena);
        setValidContrasena(result);
        console.log(result)

    }, [contrasena])

    const lniciarSesion = () => {
        console.log(setValidCorreo);
        if (CORREO_VAL.test(correo) === true && CONTRASENA_VAL.test(contrasena) === true) {
            APIService.IniciarSesion({ correo, contrasena })
                .then(resp => props.usuarioLogueado(resp))
                .catch(error => Swal.fire({
                    title: "¡Error!",
                    text: " No se reconoce el correo o contraseña con el que se está intentando acceder.",
                    icon: "error"
                }))
        } else {
            Swal.fire({
                title: "¡error!",
                text: " Faltan registros por completar correctamente.",
                icon: "Error"
            })

        }


    }
    // const borrarDiv=()=>{
    //     document.getElementsByClassName('centrado')[0]=remove()
    // }
    const [verDiv, setVerDiv]=useState(false)
    return (
        <div className='container'>
            {props.usuario ? (

                <div className={verDiv ? "hidden" : "shadow-lg p-3 mb-5 bg-white rounded "}>
                    {/* <button id='x' onClick={() => window.location.href = window.location.href} className='btn btn-danger mt3' >X</button>  */}

                    <h1>Iniciar Sesión</h1>
                    <form >


                        <div className='mt-3'>
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
                        </div>
                        <label htmlFor='contrasena' className='form-label'>contraseña
                            <span className={validContrasena ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validContrasena || !contrasena ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <div className='form-floating mt-3'>

                            <input type={verPwd ? "text" : "password"} className='form-control '
                                placeholder="Ingrese la contraseña"
                                value={contrasena}
                                onChange={(u) => setContrasena(u.target.value)}
                                id="passwdUsuario" ref={contrasenaRef} autoComplete="off"
                                required
                                aria-invalid={validContrasena ? "false" : "true"}
                                aria-describedby="contrasenanote"
                                onFocus={() => setContrasenaFocus(true)}
                                onBlur={() => setContrasenaFocus(false)}

                            />
                            <div className="position-absolute pointer pwd-icon" onClick={() => setVerPwd(!verPwd)}>
                                {verPwd ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                </svg>}
                            </div>

                        </div>
                        <p id="contrasenanote" className={contrasenaFocus && contrasena && !validContrasena ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            De 8 a 24 carácteres <br />
                            Debe incluir mayúsculas y minúsculas, numeros y un caracter especial<br />
                            Se permiten los siguientes caracteres especiales: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span>
                            <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <br></br>
                        <div className='col-sm'>
                            <button
                                onClick={lniciarSesion}
                                className='btn btn-success mt3'
                            >Iniciar Sesión</button>
                        </div>

                    </form>


                </div>
            ) : null}
        </div>
    )
}

export default FormLogin