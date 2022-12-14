import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function Apoyo() {
    return (
        <div>
            <button type="button" class="btn btn-primary btn-sm"><Link to="/Servicios">Atrás</Link></button>
            <div class="row justify-content-md-center">
                <div class="col-sm-8">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">APOYO A LA PLANIFICACIÓN</h5>
                            <p class="card-text">Nuestros especialistas brindan soporte para todos los servicios de planificación.</p>
                            <li>Registro de todos los datos y desarrollo de soluciones técnicas, también in situ</li>
                            <li>Planificación de rutas de tuberías y ventilación, cálculo de punto fijo</li>
                            <li>Verificaciones estáticas, listas de piezas y dibujos</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Apoyo
