import React, { useRef, useState, useEffect } from 'react';
import APIService from '../APIService';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2';

function FormRegistro(props) {
    const NOMBRE_VAL = /^(?=.{3,20})[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+((\s|-)[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+)*$/;
    const APE_VAL = /^(?=.{3,30})[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+((\s|-)[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+)*$/;
    const CORREO_VAL = /^[\w\.\_]{3,5}\+?[\w]{0,10}@[\w]{3,}\.\w{2,5}$/;
    const TEL_VAL = /^[0-9]{9}$/;
    const CONTRASENA_VAL = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const DIR_VAL = /^[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+((\s|-)[A-ZÑÁÉÍÓÚa-zñáéíóúº]+(\s|-)*[0-9]*)*$/;
    const CIUPROV_VAL = /^(?=.{3,30})[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+((\s|-)[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+)*$/;
    const CODPOST_VAL = /^[0-9]{1,5}$/;
    const DESC_VAL = /^[0-9]{1,3}$/;

    const nombreRef = useRef();
    const apeRef = useRef();
    const correoRef = useRef();
    const telRef = useRef();
    const contrasenaRef = useRef();
    const dirRef = useRef();
    const ciudadRef = useRef();
    const provRef = useRef();
    const codpostRef = useRef();
    const descRef = useRef();
    const errRef = useRef();


    const [nombre, setNombre] = useState('')
    const [validNombre, setValidNombre] = useState(false)
    const [nombreFocus, setNombreFocus] = useState(false)

    const [apellidos, setApellidos] = useState('')
    const [validApe, setValidApe] = useState(false)
    const [apeFocus, setApeFocus] = useState(false)

    const [correo, setCorreo] = useState('')
    const [validCorreo, setValidCorreo] = useState(false)
    const [correoFocus, setCorreoFocus] = useState(false)


    const [telefono, setTelefono] = useState('')
    const [validTel, setValidTel] = useState(false)
    const [telFocus, setTelFocus] = useState(false)


    const [contrasena, setContrasena] = useState('')
    const [validContrasena, setValidContrasena] = useState(false)
    const [contrasenaFocus, setContrasenaFocus] = useState(false)
    const [matchPasswd, setMatchPasswd] = useState('');
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)
    const [verPwd, setVerPwd] = useState(false)

    const [direccion, setDireccion] = useState('')
    const [validDir, setValidDir] = useState(false)
    const [dirFocus, setDirFocus] = useState(false)

    const [ciudad, setCiudad] = useState('')
    const [validCiudad, setValidCiudad] = useState(false)
    const [ciudadFocus, setCiudadFocus] = useState(false)

    const [provincia, setProvincia] = useState('')
    const [validProvincia, setValidProvincia] = useState(false)
    const [provinciaFocus, setProvinciaFocus] = useState(false)

    const [codigo_postal, setCodigoPostal] = useState('')
    const [validCodPost, setValidCodPost] = useState(false)
    const [codPostFocus, setCodPostFocus] = useState(false)


    const [descuento, setDescuento] = useState('')
    const [validDesc, setValidDesc] = useState('')
    const [descFocus, setDescFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false)


    useEffect(() => {
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

    }, [props.usuario])

    useEffect(() => {
        nombreRef.current.focus();
        apeRef.current.focus();
        correoRef.current.focus();
        telRef.current.focus();
        contrasenaRef.current.focus();
        dirRef.current.focus();
        ciudadRef.current.focus();
        provRef.current.focus();
        codpostRef.current.focus();
        descRef.current.focus();

    }, [])
    useEffect(() => {
        const result = NOMBRE_VAL.test(nombre);
        setValidNombre(result);
        console.log(result)
    }, [nombre])
    useEffect(() => {
        const result = APE_VAL.test(apellidos);
        setValidApe(result);
        console.log(result)

    }, [apellidos])
    useEffect(() => {
        const result = CORREO_VAL.test(correo);
        setValidCorreo(result);
        console.log(result)

    }, [correo])
    useEffect(() => {
        const result = TEL_VAL.test(telefono);
        setValidTel(result);
        console.log(result)

    }, [telefono])

    useEffect(() => {
        const result = CONTRASENA_VAL.test(contrasena);
        setValidContrasena(result);
        console.log(result)

        const match = contrasena === matchPasswd
        setValidMatch(match);
        console.log(match)

    }, [contrasena, matchPasswd])
    useEffect(() => {
        const result = DIR_VAL.test(direccion);
        setValidDir(result);
        console.log(result)

    }, [direccion])

    useEffect(() => {
        const result = CIUPROV_VAL.test(ciudad);
        setValidCiudad(result);
        console.log(result)

    }, [ciudad])
    useEffect(() => {
        const result = CIUPROV_VAL.test(provincia);
        setValidProvincia(result);
        console.log(result)

    }, [provincia])
    useEffect(() => {
        const result = CODPOST_VAL.test(codigo_postal);
        setValidCodPost(result);
        console.log(result)

    }, [codigo_postal])
    useEffect(() => {
        const result = DESC_VAL.test(descuento);
        setValidDesc(result);
        console.log(result)

    }, [descuento])


    const insertarUsuario = () => {
        console.log(setValidNombre);
        const match = contrasena === matchPasswd
        if (NOMBRE_VAL.test(nombre) === true && APE_VAL.test(apellidos) === true && CORREO_VAL.test(correo) === true && TEL_VAL.test(telefono) === true && CONTRASENA_VAL.test(contrasena) === true && match === true && DIR_VAL.test(direccion) === true && CIUPROV_VAL.test(ciudad) === true && CIUPROV_VAL.test(provincia) === true && CODPOST_VAL.test(codigo_postal) === true) {
            APIService.InsertarUsuario({ nombre, apellidos, correo, telefono, contrasena, direccion, ciudad, provincia, codigo_postal, descuento })
                .then(resp => props.usuarioInsertado(resp))
                .catch(error => console.log(error))
        } else {
            Swal.fire("error! Faltan registros por completar bien")
        }


    }
    const borrarDiv=()=>{
        document.getElementsByClassName('centrado2')[0].remove()
    }


    return (
        <div>
            {props.usuario ? (

                <div className="shadow-lg p-3 mb-5 bg-white rounded">

                    
                    
                    <h1>Registro</h1> 
 
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
                        onBlur={() => setNombreFocus(false)}
                    />
                    <p id="nomnote" className={nombreFocus && nombre && !validNombre ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        De 3 a 20 carácteres <br />
                        Debe empezar con una letra mayúscula<br />
                        Se permiten: letras, barra baja y guiones.
                    </p>
                    <label htmlFor='apellidos' className='form-label'>apellidos
                        <span className={validApe ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validApe || !apellidos ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input type="text" className='form-control'
                        placeholder="Ingrese los apellidos"
                        value={apellidos}
                        onChange={(u) => setApellidos(u.target.value)}
                        id="apeUsuario" ref={apeRef} autoComplete="off"
                        required
                        aria-invalid={validApe ? "false" : "true"}
                        aria-describedby="apenote"
                        onFocus={() => setApeFocus(true)}
                        onBlur={() => setApeFocus(false)}
                    />
                    <p id="apenote" className={apeFocus && apellidos && !validApe ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        De 3 a 30 carácteres <br />
                        Debe empezar con una letra mayúscula<br />
                        Se permiten: letras, barra baja y guiones.
                    </p>

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

                    <label htmlFor='telefono' className='form-label'>telefono
                        <span className={validTel ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validTel || !telefono ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input type="text" className='form-control'
                        placeholder="Ingrese el telefono"
                        value={telefono}
                        onChange={(u) => setTelefono(u.target.value)}
                        id="telUsuario" ref={telRef} autoComplete="off"
                        required
                        aria-invalid={validTel ? "false" : "true"}
                        aria-describedby="telnote"
                        onFocus={() => setTelFocus(true)}
                        onBlur={() => setTelFocus(false)}
                    />
                    <p id="telnote" className={telFocus && telefono && !validTel ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Se esperan 9 números
                    </p>

                    <label htmlFor='contrasena' className='form-label'>contrasena
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
                        Confirma la contraseña:
                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPasswd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPasswd ? "hide" : "invalid"} />
                    </label>
                    <div className='form-floating mt-3'>
                        <input
                            type={verPwd ? "text" : "password"}
                            className='form-control'
                            id="confirm_passwd"
                            onChange={(e) => setMatchPasswd(e.target.value)}
                            value={matchPasswd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
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
                    
                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Debe coincidir con la contraseña que ha puesto en la casilla de antes.
                    </p>
                    <br />
                    <label htmlFor='direccion' className='form-label'>direccion
                        <span className={validDir ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validDir || !direccion ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input type="text" className='form-control'
                        placeholder="Ingrese la direccion"
                        value={direccion}
                        onChange={(u) => setDireccion(u.target.value)}
                        id="dirUsuario" ref={dirRef} autoComplete="off"
                        required
                        aria-invalid={validDir ? "false" : "true"}
                        aria-describedby="dirnote"
                        onFocus={() => setDirFocus(true)}
                        onBlur={() => setDirFocus(false)}
                    />
                    <p id="dirnote" className={dirFocus && direccion && !validDir ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Debe introducir una dirección válida.<br />
                        La primera letra en mayúscula, puede contener espacios, números
                        y los siguientes caracteres especiales
                        <span aria-label="circulo arriba">º</span>
                        <span aria-label="guion">-</span>
                    </p>
                    <label htmlFor='ciudad' className='form-label'>ciudad
                        <span className={validCiudad ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validDir || !ciudad ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input type="text" className='form-control'
                        placeholder="Ingrese la ciudad"
                        value={ciudad}
                        onChange={(u) => setCiudad(u.target.value)}
                        id="ciudadUsuario" ref={ciudadRef} autoComplete="off"
                        required
                        aria-invalid={validCiudad ? "false" : "true"}
                        aria-describedby="ciudadnote"
                        onFocus={() => setCiudadFocus(true)}
                        onBlur={() => setCiudadFocus(false)}
                    />
                    <p id="ciudadnote" className={ciudadFocus && ciudad && !validCiudad ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Debe introducir una ciudad válida<br />
                        Solo se permiten letras y espacios.
                        La primera letra debe estar en mayúscula
                    </p>

                    <label htmlFor='provincia' className='form-label'>provincia
                        <span className={validProvincia ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validProvincia || !provincia ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input type="text" className='form-control'
                        placeholder="Ingrese la provincia"
                        value={provincia}
                        onChange={(u) => setProvincia(u.target.value)}
                        id="provinciaUsuario" ref={provRef} autoComplete="off"
                        required
                        aria-invalid={validProvincia ? "false" : "true"}
                        aria-describedby="provnote"
                        onFocus={() => setProvinciaFocus(true)}
                        onBlur={() => setProvinciaFocus(false)}
                    />
                    <p id="provnote" className={provinciaFocus && provincia && !validProvincia ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Debe introducir una provincia válida,<br />
                        No puede contener números
                    </p>

                    <label htmlFor='codigo_postal' className='form-label'>codigo_postal
                        <span className={validCodPost ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validCodPost || !codigo_postal ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input type="text" className='form-control'
                        placeholder="Ingrese el codigo postal"
                        value={codigo_postal}
                        onChange={(u) => setCodigoPostal(u.target.value)}
                        id="codpostUsuario" ref={codpostRef} autoComplete="off"
                        required
                        aria-invalid={validCodPost ? "false" : "true"}
                        aria-describedby="codpostnote"
                        onFocus={() => setCodPostFocus(true)}
                        onBlur={() => setCodPostFocus(false)}
                    />
                    <p id="codpostnote" className={codPostFocus && codigo_postal && !validCodPost ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Debe introducir un Código postal válida,<br />
                        de 1 a 5 numeros
                    </p>

                    <label htmlFor='descuento' className='form-label'>descuento
                        <span className={validDesc ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validDesc || !descuento ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input type="text" className='form-control'
                        placeholder="Ingrese el descuento (si tiene)"
                        value={descuento}
                        onChange={(u) => setDescuento(u.target.value)}
                        id="descUsuario" ref={descRef} autoComplete="off"
                        aria-invalid={validDesc ? "false" : "true"}
                        aria-describedby="descnote"
                        onFocus={() => setDescFocus(true)}
                        onBlur={() => setDescFocus(false)}
                    />
                    <p id="codpostnote" className={descFocus && descuento && !validDesc ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Si tiene descuento, dene introducirlo, solo se admiten números
                    </p>
                    <br></br>
                    <button
                        onClick={insertarUsuario}
                        className='btn btn-success mt3'
                    >Registrarme</button>

                <br></br>

                </div>
            ) : null}
        </div>
    )
}

export default FormRegistro