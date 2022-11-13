import React from 'react'
import Swal from 'sweetalert2';
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
    <h1>Hasta pronto!</h1>
  )
}

export default Logout