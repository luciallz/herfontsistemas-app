import React, {useState,useEffect} from 'react';
import ListarTrabajadores from './listar/ListarTrabajadores';
import FormDarAltaTr from './formularios/FormDarAltaTr';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from 'sweetalert2';
import { rutaMaquina } from './Rutas';
function Trabajadores() {
    const [trabajadores, setTrabajador]=useState([])
    const [editadoTrabajador, setEditadoTrabajador]=useState(null)
    useEffect(()=>{
        fetch(rutaMaquina + `/herfontsistemas-back/trabajadores`,{
          'method':'GET',
          headers:{"Content-type": "application/json"}
        }).then(
          res=>res.json()
        ).then(
          res=>{
            setTrabajador(res)
          }
        ).catch(error=>console.log(error))
      }, [])
    const editarTrabajador=(trabajador)=>{
        setEditadoTrabajador(trabajador)
    }
    const datoModificadoTr=(trabajador)=>{
        const nuevo_trabajador=trabajadores.map(mi_trabajador=>{
            if(mi_trabajador.id===trabajador.id){
              Swal.fire({
                title:"¡Exito!",
                text:"Se ha modificado correctamente",
                icon:"success"
              })
                return trabajador
            }else{
              Swal.fire({
                title:"¡Exito!",
                text:"Se ha modificado correctamente",
                icon:"success"
              })
              

                return mi_trabajador
            }
        })
        setTrabajador(nuevo_trabajador)
    }
    const abrirFormT=()=>{
        setEditadoTrabajador({nom_trabajador:'', primer_ape_trabajador:'', segundo_ape_trabajador:'', dni_trabajador:'', fecha_nacimiento_trabajador:'', 
            direccion_trabajador:'', poblacion_trabajador:'', correo_trabajador:'', codigo_postal_trabajador:'', tel_fijo_trabajador:'', tel_movil_personal:'', 
            tel_movil_empresa:'', persona_emergencias:'', tel_emergencias:'', banco:'', iban:'', bic:''})
    }
    const trabajadorInsertado=(trabajador)=>{
      console.log(trabajador)
      if(trabajador.errorDuplicado){
        Swal.fire({
          title:"¡Error!",
          text: "El correo electrónico insertado ya existe.",
          icon: "error",})
      }else{
        const nuevo_trabajador=[...trabajadores,trabajador]
        setTrabajador(nuevo_trabajador)
        Swal.fire({
          title:"¡ÉXITO!",
          text: "Se ha añadido un trabajador nuevo",
          icon: "suscess",})
        }
      
        
    }
    const borrarTrabajador=(trabajador)=>{
        const nuevo_trabajador=trabajadores.filter(mi_trabajador=>{
            if(mi_trabajador.id===trabajador.id){
                return false;
            }else{
                return true;
            }
        })
        setTrabajador(nuevo_trabajador)
    }
  return (
    <div className='container'>
        <div className='col'>
            <button className='btn btn-success' onClick={abrirFormT}>Insertar trabajador</button>
        </div>
        <ListarTrabajadores trabajadores={trabajadores} editarTrabajador={editarTrabajador} borrarTrabajador={borrarTrabajador} />
        {editadoTrabajador ? <FormDarAltaTr trabajador = {editadoTrabajador} datoModificadoTr = {datoModificadoTr} trabajadorInsertado={trabajadorInsertado} /> :null}
    </div>
  )
}

export default Trabajadores