import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function Premontaje() {
    return (
        <div>
            <button type="button" class="btn btn-primary btn-sm"><Link to="/Servicios">Atrás</Link></button>
            <div class="row justify-content-md-center">
                <div class="col-sm-8">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">PREMONTAJE QUE AHORRA TIEMPO</h5>
                            <p class="card-text">Aseguramos la funcionalidad de los componentes individuales y aseguramos el dimensionamiento más eficiente de los ensamblajes preensamblados.</p>
                            <li>Sin sobredimensionamiento</li>
                            <li>Fiabilidad de la planificación a través de la entrega adaptada a las secuencias de construcción</li>
                            <li>Reducción del tiempo de montaje</li>
                            <li>Identificación clara y embalaje separado de las unidades</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Premontaje