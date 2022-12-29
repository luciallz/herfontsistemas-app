import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

export function Logistica() {
    return (
        <div>
            <button type="button" class="btn btn-primary btn-sm"><Link to="/Servicios">Atrás</Link></button>
            <div class="row justify-content-md-center">
                <div class="col-sm-8">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">LOGÍSTICA FIABLE</h5>
                            <p class="card-text">Tener la mercancía en el lugar correcto en el momento adecuado.</p>
                            <li>Entrega de todas las mercancías, incluidos los carriles de montaje de hasta 2 m por servicio de paquetería</li>
                            <li>Entrega de todas las mercancías, incluidos los rieles de montaje de más de 2 m por el agente de transporte</li>
                            <li>Envíos urgentes y entrega directa también en obras de construcción con nuestro propio transporte</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logistica
