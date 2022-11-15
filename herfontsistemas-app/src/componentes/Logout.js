import React from 'react'
import Swal from 'sweetalert2';
import {Navigate, Route} from "react-router-dom"


function Logout() {
    sessionStorage.removeItem("nombre")
    Swal.fire({
    title:"¡Hasta pronto!",
    text: "Ha cerrado sesión",
    icon: "success",})

    return (
        <Navigate to="/Home" />
    )
  
}

export default Logout