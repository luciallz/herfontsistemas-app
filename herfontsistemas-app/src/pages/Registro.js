// import React, { Component } from 'react';
// import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// const USER_VAL = /^[A-z][A-z0-9-_]{3,23}$/;
// const PASSWS_VAL = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/nuevo';
// const Registro = () => {
//     const userRef = useRef()
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [validName, setValidName] = useState(false)
//     const [userFocus, setUserFocus] = useState(false)

//     const [passwd, setPasswd] = useState('');
//     const [validPasswd, setValidPasswd] = useState(false)
//     const [passwdFocus, setPasswdFocus] = useState(false)

//     const [matchPasswd, setMatchPasswd] = useState('');
//     const [validMatch, setValidMatch] = useState(false)
//     const [matchFocus, setMatchFocus] = useState(false)

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false)

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         const result = USER_VAL.test(user);
//         console.log(result);
//         console.log(user);
//         setValidName(result);
//     }, [user])

//     useEffect(() => {
//         const result = PASSWS_VAL.test(passwd);
//         console.log(result);
//         console.log(passwd);
//         setValidPasswd(result);
//         const match = passwd === matchPasswd
//         setValidMatch(match);
//     }, [passwd, matchPasswd])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, passwd, matchPasswd])

   
    
//     return (
//         <section>
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//             <h1>Registrarse</h1>
//             <form>
//                 <label htmlFor="username">
//                     Username:
//                     <span className={validName ? "valid" : "hide"}>
//                         <FontAwesomeIcon icon={faCheck} />
//                     </span>
//                     <span className={validName || !user ? "hide" : "invalid"}>
//                         <FontAwesomeIcon icon={faTimes} />
//                     </span>
//                 </label>
//                 <input
//                     type="text"
//                     id="usuario"
//                     ref={userRef}
//                     autoComplete="off"
//                     onChange={(e) => setUser(e.target.value)}
//                     value={user}
//                     required
//                     aria-invalid={validName ? "false" : "true"}
//                     aria-describedby="uidnote"
//                     onFocus={() => setUserFocus(true)}
//                     onBlur={() => setUserFocus(false)}
//                 />
//                 <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     De 4 a 24 carácteres <br />
//                     Debe empezar con una letra<br />
//                     Se permiten: letras, numeros, barra baja y guiones.
//                 </p>


//                 <label htmlFor='password'>
//                     Contraseña:
//                     <span className={validPasswd ? "valid" : "hide"}>
//                         <FontAwesomeIcon icon={faCheck} />
//                     </span>
//                     <span className={validPasswd || !passwd ? "hide" : "invalid"}>
//                         <FontAwesomeIcon icon={faTimes} />
//                     </span>
//                 </label>
//                 <input
//                     type="password"
//                     id="contrasena"
//                     onChange={(e) => setPasswd(e.target.value)}
//                     required
//                     aria-invalid={validPasswd ? "false" : "true"}
//                     aria-describedby="pwdnote"
//                     onFocus={() => setPasswdFocus(true)}
//                     onBlur={() => setPasswdFocus(false)}
//                 />
//                 <p id="pwdnote" className={passwdFocus && !validPasswd ? "instructions" : "offscreen"}>
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     De 8 a 24 carácteres <br />
//                     Debe incluir mayúsculas y minúsculas, numeros y un caracter especial<br />
//                     Se permiten los siguientes caracteres especiales: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span>
//                     <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
//                 </p>
//                 <label htmlFor="confirm_passwd">
//                     Confirma la contraseña:
//                     <FontAwesomeIcon icon={faCheck} className={validMatch && matchPasswd ? "valid" : "hide"} />
//                     <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPasswd ? "hide" : "invalid"} />
//                 </label>
//                 <input
//                     type="password"
//                     id="confirm_passwd"
//                     onChange={(e) => setMatchPasswd(e.target.value)}
//                     value={matchPasswd}
//                     required
//                     aria-invalid={validMatch ? "false" : "true"}
//                     aria-describedby="confirmnote"
//                     onFocus={() => setMatchFocus(true)}
//                     onBlur={() => setMatchFocus(false)}
//                 />
//                 <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     Debe coincidir con la contraseña que ha puesto antes.
//                 </p>
//                 <button disabled={!validName || !validPasswd || !validMatch ? true : false}>Registrarse</button>
//                 <p>
//                     ¿Ya está registrado?<br />
//                     <span className="line">
//                         {/*put router link here*/}
//                         <a href="#">Iniciar sesión</a>
//                     </span>
//                 </p>


//             </form>
//         </section>
//     )
// }

// export default Registro