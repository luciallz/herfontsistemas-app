import React, { useRef, useState, useEffect } from 'react';
import APIService from '../APIService';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2';
import PrimeReact from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import moment from 'moment'

//import 'primeflex/primeflex.css';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

function FormDarAltaTr(props) {

  const NOM_VAL = /^(?=.{3,20})[A-ZÑÁÉÍÓÚÜü][a-zñáéíóúü]+((\s|-)[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]+)*$/;
  const PRIAPE_VAL = /^(?=.{3,30})[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]+((\s|-)[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]+)*$/;
  const SEGAPE_VAL = /^(?=.{3,30})[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]+((\s|-)[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]+)*$/;
  const BANCO_VAL = /^(?=.{3,20})[A-ZÑÁÉÍÓÚÜ][A-ZÁÉÍÓÚÜa-zñáéíóúü]+((\s|-)[A-ZÑÁÉÍÓÚÜ][A-ZÁÉÍÓÚÜa-zñáéíóúü]+)*$/;
  const DNI_VAL = /^[0-9]{8}[A-Z]{1}$/; //MIRAR PARA LOS NIE
  // const FECHA_VAL = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;
  const CORREO_VAL = /^[\w\.\_]{3,5}\+?[\w\.\_]{0,20}@[\w]{3,}\.\w{2,5}$/;
  const TELFIJ_VAL = /^[0-9]{9}$/;
  const TELPER_VAL = /^[0-9]{9}$/;
  const TELEMP_VAL = /^[0-9]{9}$/;
  const TELEMERG_VAL = /^[0-9]{9}$/;
  const PERSEMERG_VAL = /^[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]+((\s|-)[A-ZÑÁÉÍÓÚÜa-zñáéíóúüº]+(\s|-)*[0-9]*)*$/;
  const DIR_VAL = /^[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]+((\s|-)[A-ZÑÁÉÍÓÚÜa-zñáéíóúüº]+(\s|-)*[0-9]*)*$/;
  const CIUPROV_VAL = /^[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]+((\s|-)[A-ZÑÁÉÍÓÚÜa-zñáéíóúüº]+(\s|-)*[0-9]*)*$/;
  const CODPOST_VAL = /^[0-9]{1,5}$/;
  const IBAN_VAL = /^[A-Z]{2}[0-9]{2}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?$/;
  const BIC_VAL = /^[A-Z]{6}[A-Z0-9]{5}$/;

  const nomRef = useRef();
  const priApeRef = useRef();
  const segApeRef = useRef();
  const dniRef = useRef();
  const fechNacRef = useRef();
  const dirRef = useRef();
  const pobRef = useRef();
  const correoRef = useRef();
  const codPostRef = useRef();
  const telFijoRef = useRef();
  const telPersonalRef = useRef();
  const telEmpresaRef = useRef();
  const perEmergenciaRef = useRef();
  const telEmergenciaRef = useRef();
  const bancoRef = useRef();
  const ibanRef = useRef();
  const bicRef = useRef();

  const [nom_trabajador, setNom] = useState('')
  const [validNom, setValidNom] = useState(false)
  const [nomFocus, setNomFocus] = useState(false)

  const [primer_ape_trabajador, setPrimer_ape] = useState('')
  const [validPrimer_ape, setValidPrimer_ape] = useState(false)
  const [primer_apeFocus, setPrimer_apeFocus] = useState(false)

  const [segundo_ape_trabajador, setSegundo_ape] = useState('')
  const [validSegundo_ape, setValidSegundo_ape] = useState(false)
  const [segundo_apeFocus, setSegundo_apeFocus] = useState(false)


  const [dni_trabajador, setDni] = useState('')
  const [validDni, setValidDni] = useState(false)
  const [dniFocus, setDniFocus] = useState(false)

  const [fecha_nacimiento_trabajador, setFecha_nacimiento] = useState(null)
  const [validFecha_nacimiento, setValidFecha_nacimiento] = useState(false)
  const [fecha_nacimientoFocus, setFecha_nacimientoFocus] = useState(false)

  const [direccion_trabajador, setDireccion] = useState('')
  const [validDireccion, setValidDireccion] = useState(false)
  const [direccionFocus, setDireccionFocus] = useState(false)

  const [poblacion_trabajador, setPoblacion] = useState('')
  const [validPoblacion, setValidPoblacion] = useState(false)
  const [poblacionFocus, setPoblacionFocus] = useState(false)

  const [correo_trabajador, setCorreo] = useState('')
  const [validCorreo, setValidCorreo] = useState(false)
  const [correoFocus, setCorreoFocus] = useState(false)

  const [codigo_postal_trabajador, setCodigo_postal] = useState('')
  const [validCodigo_postal, setValidCodigo_postal] = useState(false)
  const [codigo_postalFocus, setCodigo_postalFocus] = useState(false)

  const [tel_fijo_trabajador, setTel_fijo] = useState('')
  const [validTel_fijo, setValidTel_fijo] = useState(false)
  const [tel_fijoFocus, setTel_fijoFocus] = useState(false)

  const [tel_movil_personal, setTel_movil_personal] = useState('')
  const [validTel_movil_personal, setValidTel_movil_personal] = useState(false)
  const [tel_movil_personalFocus, setTel_movil_personalFocus] = useState(false)

  const [tel_movil_empresa, setTel_movil_empresa] = useState('')
  const [validTel_movil_empresa, setValidTel_movil_empresa] = useState(false)
  const [tel_movil_empresaFocus, setTel_movil_empresaFocus] = useState(false)

  const [persona_emergencias, setPersona_emergencias] = useState('')
  const [validPersona_emergencias, setValidPersona_emergencias] = useState(false)
  const [persona_emergenciasFocus, setPersona_emergenciasFocus] = useState(false)

  const [tel_emergencias, setTel_emergencias] = useState('')
  const [validTel_emergencias, setValidTel_emergencias] = useState(false)
  const [tel_emergenciasFocus, setTel_emergenciasFocus] = useState(false)

  const [banco, setBanco] = useState('')
  const [validBanco, setValidBanco] = useState(false)
  const [bancoFocus, setBancoFocus] = useState(false)

  const [iban, setIban] = useState('')
  const [validIban, setValidIban] = useState(false)
  const [ibanFocus, setIbanFocus] = useState(false)

  const [bic, setBic] = useState('')
  const [validBic, setValidBic] = useState(false)
  const [bicFocus, setBicFocus] = useState(false)


  useEffect(() => {
    setNom(props.trabajador.nom_trabajador)
    setPrimer_ape(props.trabajador.primer_ape_trabajador)
    setSegundo_ape(props.trabajador.segundo_ape_trabajador)
    setDni(props.trabajador.dni_trabajador)
    setFecha_nacimiento(props.trabajador.fecha_nacimiento_trabajador)
    setDireccion(props.trabajador.direccion_trabajador)
    setPoblacion(props.trabajador.poblacion_trabajador)
    setCorreo(props.trabajador.correo_trabajador)
    setCodigo_postal(props.trabajador.codigo_postal_trabajador)
    setTel_fijo(props.trabajador.tel_fijo_trabajador)
    setTel_movil_personal(props.trabajador.tel_movil_personal)
    setTel_movil_empresa(props.trabajador.tel_movil_empresa)
    setPersona_emergencias(props.trabajador.persona_emergencias)
    setTel_emergencias(props.trabajador.tel_emergencias)
    setBanco(props.trabajador.banco)
    setIban(props.trabajador.iban)
    setBic(props.trabajador.bic)
  }, [props.trabajador])
  useEffect(() => {
    const result = NOM_VAL.test(nom_trabajador);
    setValidNom(result);
  }, [nom_trabajador])
  useEffect(() => {
    const result = PRIAPE_VAL.test(primer_ape_trabajador);
    setValidPrimer_ape(result);
  }, [primer_ape_trabajador])
  useEffect(() => {
    const result = SEGAPE_VAL.test(segundo_ape_trabajador);
    setValidSegundo_ape(result);
  }, [segundo_ape_trabajador])
  useEffect(() => {
    const result = DNI_VAL.test(dni_trabajador);

    setValidDni(result);
  }, [dni_trabajador])
  useEffect(() => {
    // const result = FECHA_VAL.test(fecha_nacimiento_trabajador);


    if (fecha_nacimiento_trabajador != "") {
      const dateToValid = fecha_nacimiento_trabajador;
      const isValid = moment(dateToValid, "YYYY-MM-DD", true).isValid();
      const mayorde16 = moment().diff(dateToValid, 'years') > 16;
      if (isValid === true && mayorde16 === true) {
        setValidFecha_nacimiento(true);
      } else {
        setValidFecha_nacimiento(false);
      }
    } else {
      setValidFecha_nacimiento(false);
    }
  }, [fecha_nacimiento_trabajador])
  useEffect(() => {
    const result = DIR_VAL.test(direccion_trabajador);
    setValidDireccion(result);
  }, [direccion_trabajador])
  useEffect(() => {
    const result = CIUPROV_VAL.test(poblacion_trabajador);
    setValidPoblacion(result)
  }, [poblacion_trabajador])
  useEffect(() => {
    const result = CORREO_VAL.test(correo_trabajador);
    setValidCorreo(result);
  }, [correo_trabajador])
  useEffect(() => {
    const result = CODPOST_VAL.test(codigo_postal_trabajador);
    setValidCodigo_postal(result);
  }, [codigo_postal_trabajador])
  useEffect(() => {
    const result = TELFIJ_VAL.test(tel_fijo_trabajador);
    setValidTel_fijo(result);
  }, [tel_fijo_trabajador])
  useEffect(() => {
    const result = TELPER_VAL.test(tel_movil_personal);
    setValidTel_movil_personal(result);
  }, [tel_movil_personal])
  useEffect(() => {
    const result = TELEMP_VAL.test(tel_movil_empresa);
    setValidTel_movil_empresa(result);
  }, [tel_movil_empresa])
  useEffect(() => {
    const result = PERSEMERG_VAL.test(persona_emergencias);
    setValidPersona_emergencias(result);
  }, [persona_emergencias])
  useEffect(() => {
    const result = TELEMERG_VAL.test(tel_emergencias);
    setValidTel_emergencias(result);
  }, [tel_emergencias])
  useEffect(() => {
    const result = BANCO_VAL.test(banco);
    setValidBanco(result);
  }, [banco])
  useEffect(() => {
    const result = IBAN_VAL.test(iban);
    setValidIban(result);
  }, [iban])
  useEffect(() => {
    const result = BIC_VAL.test(bic);
    setValidBic(result);
  }, [bic])


  const modificarTrabajador = () => {
    if (NOM_VAL.test(nom_trabajador) === true && PRIAPE_VAL.test(primer_ape_trabajador) === true && SEGAPE_VAL.test(segundo_ape_trabajador) === true && DNI_VAL.test(dni_trabajador) === true &&
      DIR_VAL.test(direccion_trabajador) === true && CIUPROV_VAL.test(poblacion_trabajador) === true && CORREO_VAL.test(correo_trabajador) === true
      && CODPOST_VAL.test(codigo_postal_trabajador) === true && TELFIJ_VAL.test(tel_fijo_trabajador) === true && TELPER_VAL.test(tel_movil_personal) === true &&
      TELEMP_VAL.test(tel_movil_empresa) === true && PERSEMERG_VAL.test(persona_emergencias) === true && TELEMERG_VAL.test(tel_emergencias) === true
      && BANCO_VAL.test(banco) === true && IBAN_VAL.test(iban) === true && BIC_VAL.test(bic) === true) {
      if (fecha_nacimiento_trabajador != "") {
        APIService.ModificarTrabajador(props.trabajador.id, {
          nom_trabajador, primer_ape_trabajador, segundo_ape_trabajador, dni_trabajador, fecha_nacimiento_trabajador, direccion_trabajador, poblacion_trabajador, correo_trabajador, codigo_postal_trabajador,
          tel_fijo_trabajador, tel_movil_personal, tel_movil_empresa, persona_emergencias, tel_emergencias, banco, iban, bic
        })
          .then(resp => props.datoModificadoTr(resp))
          .catch(error => console.log(error))
      } else {
        Swal.fire({
          title: "¡Error!",
          text: "Algo ha ido mal con la FECHA",
          icon: "error",
        })
      }
    } else {
      Swal.fire({
        title: "¡Error!",
        text: "Faltan registros por completar bien.",
        icon: "error",
      })
    }

  }
  //fecha_nacimiento_trabajador=format( fecha_nacimiento_trabajador,"dd MM yyyy")
  // setFecha_nacimiento(format(fecha_nacimiento_trabajador,"dd MM yyyy"))
  // setFecha_nacimiento=()=>{
  //   fecha_nacimiento_trabajador=format( fecha_nacimiento_trabajador,"dd MM yyyy")
  // }

  const insertarTrabajador = () => {
    if (NOM_VAL.test(nom_trabajador) === true && PRIAPE_VAL.test(primer_ape_trabajador) === true && SEGAPE_VAL.test(segundo_ape_trabajador) === true && DNI_VAL.test(dni_trabajador) === true &&
      DIR_VAL.test(direccion_trabajador) === true && CIUPROV_VAL.test(poblacion_trabajador) === true && CORREO_VAL.test(correo_trabajador) === true
      && CODPOST_VAL.test(codigo_postal_trabajador) === true && TELFIJ_VAL.test(tel_fijo_trabajador) === true && TELPER_VAL.test(tel_movil_personal) === true &&
      TELEMP_VAL.test(tel_movil_empresa) === true && PERSEMERG_VAL.test(persona_emergencias) === true && TELEMERG_VAL.test(tel_emergencias) === true
      && BANCO_VAL.test(banco) === true && IBAN_VAL.test(iban) === true && BIC_VAL.test(bic) === true) {

      if (fecha_nacimiento_trabajador != "") {

        APIService.InsertarTrabajador({
          nom_trabajador, primer_ape_trabajador, segundo_ape_trabajador, dni_trabajador, fecha_nacimiento_trabajador, direccion_trabajador, poblacion_trabajador, correo_trabajador, codigo_postal_trabajador,
          tel_fijo_trabajador, tel_movil_personal, tel_movil_empresa, persona_emergencias, tel_emergencias, banco, iban, bic
        })
          .then(resp => props.trabajadorInsertado(resp))
          .catch(error => console.log(error))
      } else {
        Swal.fire({
          title: "¡Error!",
          text: "Algo ha ido mal con la FECHA",
          icon: "error",
        })
      }
    } else {
      Swal.fire({
        title: "¡Error!",
        text: "Faltan registros por completar bien.",
        icon: "error",
      })
    }

  }


  return (
    <div>
      {props.trabajador ? (
        <div className="mb-3">
          <label htmlFor='nombre' className='form-label'>nombre
            <span className={validNom ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validNom || !nom_trabajador ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el nombre"
            value={nom_trabajador}
            onChange={(u) => setNom(u.target.value)}
            id="nomTrabajador"
            ref={nomRef}
            autoComplete="off"
            required
            aria-invalid={validNom ? "false" : "true"}
            aria-describedby="nomnote"
            onFocus={() => setNomFocus(true)}
            onBlur={() => setNomFocus(false)}
          />
          <p id="nomnote" className={nomFocus && nom_trabajador && !validNom ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            De 3 a 20 carácteres <br />
            Debe empezar con una letra mayúscula<br />
            Se permiten: letras, barra baja y guiones.
          </p>

          <label htmlFor='pri_ape' className='form-label'>Primer apellido
            <span className={validPrimer_ape ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validPrimer_ape || !primer_ape_trabajador ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el primer apellido"
            value={primer_ape_trabajador}
            onChange={(u) => setPrimer_ape(u.target.value)}
            id="primerApe" ref={priApeRef} autoComplete="off"
            required
            aria-invalid={validPrimer_ape ? "false" : "true"}
            aria-describedby="apenote"
            onFocus={() => setPrimer_apeFocus(true)}
            onBlur={() => setPrimer_apeFocus(false)}
          />
          <p id="apenote" className={primer_apeFocus && primer_ape_trabajador && !validPrimer_ape ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            De 3 a 30 carácteres <br />
            Debe empezar con una letra mayúscula<br />
            Se permiten: letras, barra baja y guiones.
          </p>

          <label htmlFor='sec_ape' className='form-label'>Segundo apellido
            <span className={validSegundo_ape ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validSegundo_ape || !segundo_ape_trabajador ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el segundo apellido"
            value={segundo_ape_trabajador}
            onChange={(u) => setSegundo_ape(u.target.value)}
            id="segundoApe" ref={segApeRef} autoComplete="off"
            required
            aria-invalid={validSegundo_ape ? "false" : "true"}
            aria-describedby="secnote"
            onFocus={() => setSegundo_apeFocus(true)}
            onBlur={() => setSegundo_apeFocus(false)}
          />
          <p id="secnote" className={segundo_apeFocus && segundo_ape_trabajador && !validSegundo_ape ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            De 3 a 30 carácteres <br />
            Debe empezar con una letra mayúscula<br />
            Se permiten: letras, barra baja y guiones.
          </p>
          <label htmlFor='dni' className='form-label'>DNI
            <span className={validDni ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validDni || !dni_trabajador ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el DNI"
            value={dni_trabajador}
            onChange={(u) => setDni(u.target.value)}
            id="dni" ref={dniRef} autoComplete="off"
            required
            aria-invalid={validDni ? "false" : "true"}
            aria-describedby="dninote"
            onFocus={() => setDniFocus(true)}
            onBlur={() => setDniFocus(false)}
          />
          <p id="dninote" className={dniFocus && dni_trabajador && !validDni ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Dni válido
          </p>
          <label htmlFor='fech_nacimiento' className='form-label'>Fecha nacimiento
            <span className={validFecha_nacimiento ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validFecha_nacimiento || !fecha_nacimiento_trabajador ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>

          <input type="date" className='form-control'
            placeholder="Ingrese la fecha de nacimiento"
            value={fecha_nacimiento_trabajador}
            onChange={(u) => setFecha_nacimiento(u.target.value)}
            id="fechaNacimiento" ref={fechNacRef} autoComplete="off"
            required
            aria-invalid={validFecha_nacimiento ? "false" : "true"}
            aria-describedby="fnacnote"
            onFocus={() => setFecha_nacimientoFocus(true)}
            onBlur={() => setFecha_nacimientoFocus(false)}
          />
          <p id="fnacnote" className={fecha_nacimientoFocus && fecha_nacimiento_trabajador && !validFecha_nacimiento ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Fecha válida
          </p>


          <label htmlFor='dir' className='form-label'>Dirección
            <span className={validDireccion ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validDireccion || !direccion_trabajador ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese La dirección"
            value={direccion_trabajador}
            onChange={(u) => setDireccion(u.target.value)}
            id="direccion" ref={dirRef} autoComplete="off"
            required
            aria-invalid={validDireccion ? "false" : "true"}
            aria-describedby="dirnote"
            onFocus={() => setDireccionFocus(true)}
            onBlur={() => setDireccionFocus(false)}
          />
          <p id="dirnote" className={direccionFocus && direccion_trabajador && !validDireccion ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            La primera con mayúsculas, se admiten letras, numeros,espacios y º
          </p>

          <label htmlFor='pob' className='form-label'>Población
            <span className={validPoblacion ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validPoblacion || !poblacion_trabajador ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese La población"
            value={poblacion_trabajador}
            onChange={(u) => setPoblacion(u.target.value)}
            id="poblacion" ref={pobRef} autoComplete="off"
            required
            aria-invalid={validPoblacion ? "false" : "true"}
            aria-describedby="pobnote"
            onFocus={() => setPoblacionFocus(true)}
            onBlur={() => setPoblacionFocus(false)}
          />
          <p id="pobnote" className={poblacionFocus && poblacion_trabajador && !validPoblacion ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Solo se permiten letras, la priemra en mayúscula
          </p>

          <label htmlFor='correo' className='form-label'>correo
            <span className={validCorreo ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validCorreo || !correo_trabajador ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el correo"
            value={correo_trabajador}
            onChange={(u) => setCorreo(u.target.value)}
            id="correoUsuario" ref={correoRef} autoComplete="off"
            required
            aria-invalid={validCorreo ? "false" : "true"}
          />

          <label htmlFor='cod_post' className='form-label'>Código postal
            <span className={validCodigo_postal ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validCodigo_postal || !codigo_postal_trabajador ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el código postal"
            value={codigo_postal_trabajador}
            onChange={(u) => setCodigo_postal(u.target.value)}
            id="cod_post" ref={codPostRef} autoComplete="off"
            required
            aria-invalid={validCodigo_postal ? "false" : "true"}
            aria-describedby="codpostnote"
            onFocus={() => setCodigo_postalFocus(true)}
            onBlur={() => setCodigo_postalFocus(false)}
          />
          <p id="codpostnote" className={codigo_postalFocus && codigo_postal_trabajador && !validCodigo_postal ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            5 números como máximo
          </p>

          <label htmlFor='tel_fijo' className='form-label'>Teléfono fijo
            <span className={validTel_fijo ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validTel_fijo || !tel_fijo_trabajador ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el teléfono fijo"
            value={tel_fijo_trabajador}
            onChange={(u) => setTel_fijo(u.target.value)}
            id="cod_post" ref={telFijoRef} autoComplete="off"
            required
            aria-invalid={validTel_fijo ? "false" : "true"}
            aria-describedby="telfijnote"
            onFocus={() => setTel_fijoFocus(true)}
            onBlur={() => setTel_fijoFocus(false)}
          />
          <p id="telfijnote" className={tel_fijoFocus && tel_fijo_trabajador && !validTel_fijo ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Se esperan 9 numeros
          </p>
          <label htmlFor='tel_personal' className='form-label'>Teléfono móvil personal
            <span className={validTel_movil_personal ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validTel_movil_personal || !tel_movil_personal ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el teléfono móvil personal"
            value={tel_movil_personal}
            onChange={(u) => setTel_movil_personal(u.target.value)}
            id="cod_post" ref={telPersonalRef} autoComplete="off"
            required
            aria-invalid={validTel_movil_personal ? "false" : "true"}
            aria-describedby="telmovnote"
            onFocus={() => setTel_movil_personalFocus(true)}
            onBlur={() => setTel_movil_personalFocus(false)}
          />
          <p id="telmovnote" className={tel_movil_personalFocus && tel_movil_personal && !validTel_movil_personal ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Se esperan 9 numeros
          </p>
          <label htmlFor='tel_empresa' className='form-label'>Teléfono empresa
            <span className={validTel_movil_empresa ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validTel_movil_empresa || !tel_movil_empresa ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el teléfono móvil de empresa"
            value={tel_movil_empresa}
            onChange={(u) => setTel_movil_empresa(u.target.value)}
            id="cod_post" ref={telEmpresaRef} autoComplete="off"
            required
            aria-invalid={validTel_movil_empresa ? "false" : "true"}
            aria-describedby="telemprnote"
            onFocus={() => setTel_movil_empresaFocus(true)}
            onBlur={() => setTel_movil_empresaFocus(false)}
          />
          <p id="telemprnote" className={tel_movil_empresaFocus && tel_movil_empresa && !validTel_movil_empresa ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Se esperan 9 numeros
          </p>

          <label htmlFor='persona_emergencias' className='form-label'>Persona emergencias
            <span className={validPersona_emergencias ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validPersona_emergencias || !persona_emergencias ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese la persona de contacto para emergencias"
            value={persona_emergencias}
            onChange={(u) => setPersona_emergencias(u.target.value)}
            id="cod_post" ref={perEmergenciaRef} autoComplete="off"
            required
            aria-invalid={validPersona_emergencias ? "false" : "true"}
            aria-describedby="peremgnote"
            onFocus={() => setPersona_emergenciasFocus(true)}
            onBlur={() => setPersona_emergenciasFocus(false)}
          />
          <p id="peremgnote" className={persona_emergenciasFocus && persona_emergencias && !validPersona_emergencias ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Solo letras, priemera en mayúsculas de cada palábra
          </p>

          <label htmlFor='tel_emergencias' className='form-label'>Teléfono emergencias
            <span className={validTel_emergencias ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validTel_emergencias || !tel_emergencias ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el teléfono de contacto para emergencias"
            value={tel_emergencias}
            onChange={(u) => setTel_emergencias(u.target.value)}
            id="cod_post" ref={telEmergenciaRef} autoComplete="off"
            required
            aria-invalid={validTel_emergencias ? "false" : "true"}
            aria-describedby="telemgnote"
            onFocus={() => setTel_emergenciasFocus(true)}
            onBlur={() => setTel_emergenciasFocus(false)}
          />
          <p id="telemgnote" className={tel_emergenciasFocus && tel_emergencias && !validTel_emergencias ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            9 números
          </p>

          <label htmlFor='banco' className='form-label'>Banco
            <span className={validBanco ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validBanco || !banco ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el banco al que pertenece"
            value={banco}
            onChange={(u) => setBanco(u.target.value)}
            id="cod_post" ref={bancoRef} autoComplete="off"
            required
            aria-invalid={validBanco ? "false" : "true"}
            aria-describedby="bancnote"
            onFocus={() => setBancoFocus(true)}
            onBlur={() => setBancoFocus(false)}
          />
          <p id="bancnote" className={bancoFocus && banco && !validBanco ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Solo letras, priemra en mayúsculas
          </p>

          <label htmlFor='iban' className='form-label'>IBAN
            <span className={validIban ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validIban || !iban ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el IBAN"
            value={iban}
            onChange={(u) => setIban(u.target.value)}
            id="cod_post" ref={ibanRef} autoComplete="off"
            required
            aria-invalid={validIban ? "false" : "true"}
            aria-describedby="ibannote"
            onFocus={() => setIbanFocus(true)}
            onBlur={() => setIbanFocus(false)}
          />
          <p id="ibannote" className={ibanFocus && iban && !validIban ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Formato IBAN
          </p>

          <label htmlFor='bic' className='form-label'>BIC
            <span className={validBic ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validBic || !bic ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input type="text" className='form-control'
            placeholder="Ingrese el BIC"
            value={bic}
            onChange={(u) => setBic(u.target.value)}
            id="cod_post" ref={bicRef} autoComplete="off"
            required
            aria-invalid={validBic ? "false" : "true"}
            aria-describedby="bicnote"
            onFocus={() => setBicFocus(true)}
            onBlur={() => setBicFocus(false)}
          />
          <p id="bicnote" className={bicFocus && bic && !validBic ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Formato BIC
          </p>
          {
            props.trabajador.id ?
              <button onClick={modificarTrabajador} className='btn btn-success mt3'>Modificar</button>
              :
              <button onClick={insertarTrabajador} className='btn btn-success mt3'>Insertar</button>

          }

        </div>
      ) : null}

    </div>
  )
}

export default FormDarAltaTr