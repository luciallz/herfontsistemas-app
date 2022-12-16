import React from 'react'
import { redirect } from 'react-router-dom';

function FinalizarCompra() {
    var sesion = sessionStorage.getItem("nombre");
    console.log(sesion)
    if (sesion == null) {
        redirect('/Login')
    } else {
        return(
            <div class="creditCardForm">
                <div class="heading">
                    <h1>Confirmar Compra</h1>
                </div>
                <div class="payment">
                <form>
                    <div class="form-group owner">
                        <label for="owner">Titular de la Cuenta</label>
                        <input type="text" class="form-control" id="owner" />
                    </div>
                    <div class="form-group CVV">
                        <label for="cvv">CVV</label>
                        <input type="text" class="form-control" id="cvv" />
                    </div>
                    <div class="form-group" id="card-number-field">
                        <label for="cardNumber">Número tarjeta</label>
                        <input type="text" class="form-control" id="cardNumber" />
                    </div>
                    <div class="form-group" id="expiration-date">
                        <label>Fecha caducidad</label>
                        <select>
                            <option value="01">Enero</option>
                            <option value="02">Febrero </option>
                            <option value="03">Marzo</option>
                            <option value="04">Abril</option>
                            <option value="05">Mayo</option>
                            <option value="06">Junio</option>
                            <option value="07">Julio</option>
                            <option value="08">Agosto</option>
                            <option value="09">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Deciembre</option>
                        </select>
                        <select>
                            <option value="16"> 2021</option>
                            <option value="17"> 2022</option>
                            <option value="18"> 2023</option>
                            <option value="19"> 2024</option>
                            <option value="20"> 2025</option>
                            <option value="21"> 2026</option>
                        </select>
                    </div>
                    <div class="form-group" id="credit_cards">
                        <img src="assets/images/visa.jpg" id="visa" />
                        <img src="assets/images/mastercard.jpg" id="mastercard" />
                        <img src="assets/images/amex.jpg" id="amex" />
                    </div>
                    <div class="form-group" id="pay-now">
                        <button type="submit" class="btn btn-default" id="confirm-purchase">Confirmar</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FinalizarCompra