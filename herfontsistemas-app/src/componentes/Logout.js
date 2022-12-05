import React from 'react'
import Swal from 'sweetalert2';
import {Navigate, Route} from "react-router-dom"


async function Logout() {
    sessionStorage.removeItem("nombre")
    const{value:accept}=await Swal.fire({
        title:"¡Hasta pronto!",
        text: "Ha cerrado sesión",
        icon: "success",})
        if(accept){
          window.location.reload(true);
        }
    return (
        <Navigate to="/Home" />

    )
  
}

export default Logout