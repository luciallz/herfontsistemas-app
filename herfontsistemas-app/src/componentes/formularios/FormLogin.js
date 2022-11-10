import React, {useRef,useState, useEffect} from 'react';
import APIService from '../APIService';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2';

function FormLogin(props) {
    const CORREO_VAL = /^[\w\.\_]{3,5}\+?[\w]{0,10}@[\w]{3,}\.\w{2,5}$/;
    const CONTRASENA_VAL = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  
    const correoRef =useRef();
    const contrasenaRef =useRef();

    const [miLogin,setLogin]=useState(false)
    const [correo, setCorreo] = useState('')
    const [validCorreo, setValidCorreo]=useState(false)
    const [correoFocus, setCorreoFocus]=useState(false)

    const [contrasena, setContrasena] = useState('')
    const [validContrasena, setValidContrasena]=useState(false)
    const [contrasenaFocus, setContrasenaFocus]=useState(false)


    useEffect(()=>{
        setCorreo(props.usuario.correo)
        setContrasena(props.usuario.contrasena)
    },[props.usuario])

    useEffect(() => {
        correoRef.current.focus();
        contrasenaRef.current.focus();
    }, [])
    useEffect(()=>{
        const result = CORREO_VAL.test(correo);
        setValidCorreo(result);
        console.log(result)

    },[correo])
    useEffect(()=>{
        const result = CONTRASENA_VAL.test(contrasena);
        setValidContrasena(result);
        console.log(result)

    },[contrasena])
 
    const lniciarSesion=()=>{
        console.log(setValidCorreo);
        if(CORREO_VAL.test(correo)===true && CONTRASENA_VAL.test(contrasena)===true ){
            APIService.IniciarSesion({correo, contrasena})
            .then(resp=>props.usuarioLogueado(resp))
            .catch(error=>console.log(error))
        }else{
             Swal.fire("error! Faltan registros por completar bien")
        }
        
        
    }


  return (
    <div>
        {props.usuario ? (
            
            <div className="mb-3">
                

                <h1>Iniciar Sesión</h1>

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

                <label htmlFor='contrasena' className='form-label'>contraseña
                    <span className={validContrasena ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validContrasena || !contrasena ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input type="password" className='form-control'
                placeholder="Ingrese el contraseña"
                value={contrasena}
                onChange={(u) => setContrasena(u.target.value)}
                id="passwdUsuario" ref={contrasenaRef} autoComplete="off"
                required
                aria-invalid={validContrasena ? "false" : "true"}
                aria-describedby="contrasenanote"
                onFocus={()=>setContrasenaFocus(true)}
                onBlur={()=> setContrasenaFocus(false)}
                />
                <p id="contrasenanote" className={contrasenaFocus && contrasena && !validContrasena ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    De 8 a 24 carácteres <br />
                    Debe incluir mayúsculas y minúsculas, numeros y un caracter especial<br />
                    Se permiten los siguientes caracteres especiales: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>


                    <button 
                    onClick={lniciarSesion}
                    className='btn btn-success mt3'
                    >Iniciar Sesión</button>

                
                
            </div>
        ):null}                
    </div>
  )
}

export default FormLogin