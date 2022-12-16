import React from 'react'
import { useState } from 'react'
import { Router, Route, Switch, Link, Navigate } from 'react-router-dom'
import "../App.css";
function Servicios() {

    const [toGamaServicios, setToGamaServicios] = React.useState(false)
    if (toGamaServicios) {
        return <Navigate to="/GamaCompleta" />
    }

    return (
        <div>
            <ul>
                <li><Link to="/Servicios/GamaCompleta">GAMA COMPLETA DE PRODUCTOS</Link></li>
                <li><Link to="/Servicios/Soluciones">SOLUCIONES ESPECIALES ÚNICAS</Link></li>
                <li><Link to="/Servicios/Apoyo">APOYO A LA PLANIFICACIÓN</Link></li>
                <li><Link to="/Servicios/Premontaje">PREMONTAJE QUE AHORRA TIEMPO</Link></li>
                <li><Link to="/Servicios/Logistica">LOGÍSTICA FIABLE</Link></li>
            </ul>
        </div>

    )

}

export default Servicios