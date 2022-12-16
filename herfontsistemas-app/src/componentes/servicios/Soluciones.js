import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

export function Soluciones() {
    return (
        <div>
            <button type="button" class="btn btn-primary btn-sm"><Link to="/Servicios">Atrás</Link></button>
            <div class="row justify-content-md-center">
                <div class="col-sm-8">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">SOLUCIONES ESPECIALES ÚNICAS</h5>
                            <p class="card-text">Desarrollar e implementar soluciones técnicas fuera del estándar: esta es una característica especial de <b>HERFONT SISTEMAS</b>.</p>
                            <li>Producción de componentes y soluciones de sistemas para cada aplicación</li>
                            <li>Desarrollo e implementación de soluciones especiales específicas para el cliente</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Soluciones
