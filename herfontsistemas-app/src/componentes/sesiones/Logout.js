import React from 'react'
import Swal from 'sweetalert2';
import { Navigate, Route } from "react-router-dom"
import { rutaMaquina } from '../Rutas';

async function Logout() {
    sessionStorage.removeItem("nombre")
    localStorage.removeItem("listaCarrito")
    const { value: accept } = await Swal.fire({
        title: "¡Hasta pronto!",
        text: "Ha cerrado sesión",
        icon: "success",
    })
    if (accept) {
        window.location.href = rutaMaquina;
        //window.location.protocol + "//" + window.location.host + Path
    }
    return (
        <Navigate to="/Menu" />
    )

}

export default Logout