import React from 'react'
import { useState, useEffect, useRef } from 'react'
import APIService from '../APIService';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2';
import { rutaMaquina } from '../Rutas';
import { useLocation } from 'react-router-dom';

function ChangePasswd() {
    const [contrasena, setContrasena] = useState('')
    const [validContrasena, setValidContrasena] = useState(false)
    const [contrasenaFocus, setContrasenaFocus] = useState(false)
    const [matchPasswd, setMatchPasswd] = useState('');
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)
    const [verPwd, setVerPwd] = useState(false)
    const [verPwd2, setVerPwd2] = useState(false)

    // fetch(rutaMaquina + `/herfontsistemas-back/ChangePsswd/?token=${token}`, {
    const location = useLocation();
    const token = new URLSearchParams(location.search).get('token');
    // const token = new URLSearchParams(props.location.search).get('token');
    // fetch(rutaMaquina + "/herfontsistemas-back/ChangePsswd/${token}", {
    console.log(token)

    fetch(rutaMaquina + `/herfontsistemas-back/ChangePasswd`, {
        'method': 'POST',
        headers: { "Content-type": "application/json" }
    }).then(
        res => res.json()
        // ).then(
        //   res => {
        //     setCorreo(res)
        //   }
    ).catch(error => console.log(error))

    const CONTRASENA_VAL = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const contrasenaRef = useRef();

    useEffect(() => {
        contrasenaRef.current.focus();
    }, [])
    useEffect(() => {
        const result = CONTRASENA_VAL.test(contrasena);
        setValidContrasena(result);
        console.log(result)

        const match = contrasena === matchPasswd
        setValidMatch(match);
        console.log(match)

    }, [contrasena, matchPasswd])

    const handleSubmit = e => {
        e.preventDefault();
        const data={
            token:token,
            contrasena:contrasena,
        }
        APIService.ChangePasswd({ data })
            .then(resp => 
                Swal.fire({
                title: "¡Éxito!",
                text: "Se ha cambiado la contraseña correctamente",
                icon: "susccess"
            }))
            .catch(error => Swal.fire({
                title: "¡Error!",
                text: "No coinciden las contraseñas o ha habido un problema, vuelva a intentarlo.",
                icon: "error"
            }))

    }

    return (
        <div>
            <div className="container">


                <h1>Reestablecer contraseña</h1>
                <label htmlFor='contrasena' className='form-label'>Nueva contraseña:
                    <span className={validContrasena ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validContrasena || !contrasena ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <div className='form-floating mt-3'>
                    <input type={verPwd ? "text" : "password"} className='form-control'
                        placeholder="Ingrese el contraseña"
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

                <label htmlFor="confirm_passwd">
                    Confirmar la contraseña:
                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPasswd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPasswd ? "hide" : "invalid"} />
                </label>
                <div className='form-floating mt-3'>
                    <input
                        type={verPwd2 ? "text" : "password"} className='form-control'
                        id="confirm_passwd"
                        onChange={(e) => setMatchPasswd(e.target.value)}
                        value={matchPasswd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <div className="position-absolute pointer pwd-icon" onClick={() => setVerPwd2(!verPwd2)}>
                        {verPwd2 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                        </svg>}
                    </div>
                </div>
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Debe coincidir con la contraseña que ha puesto en la casilla de antes.
                </p>
                <br></br>
                <button
                    className='btn btn-success mt3'
                    onClick={handleSubmit}
                >Enviar</button>



            </div>
        </div>
    )
}

export default ChangePasswd

