import React, { useState, useEffect } from 'react';
import { rutaMaquina } from './Rutas';
export default class APIService {
  static ModificarUsuario(id, body) {
    return fetch(rutaMaquina + `/api/modificar/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static InsertarUsuario(body) {
    return fetch(rutaMaquina + `/api/nuevo`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }
  static IniciarSesion(body) {
    return fetch(rutaMaquina + `/api/login`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }
  static ForgotPsswd(body){
    return fetch(rutaMaquina + `/api/ForgotPsswd`, {
      'method': ('GET','POST'),
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }
  static ChangePsswd(token){
    return fetch(rutaMaquina + `/api/ChangePsswd/${token}`, {
      'method': ('GET','POST'),
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(token)
    })
      .then(resp => resp.json())
  }

  

  static BorrarUsuario(id) {
    return fetch(rutaMaquina + `/api/borrar/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  //RUTAS TRABAJADORES
  static ModificarTrabajador(id, body) {
    return fetch(rutaMaquina + `/api/modificarTrabajador/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }


  static InsertarTrabajador(body) {
    return fetch(rutaMaquina + `/api/nuevoTrabajador`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarTrabajador(id) {
    return fetch(rutaMaquina + `/api/borrarTrabajador/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  // RUTAS PRODUCTO
  static ModificarProducto(id, body) {
    return fetch(rutaMaquina + `/api/modificarProducto/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }


  static InsertarProducto(body) {
    return fetch(rutaMaquina + `/api/nuevoProducto`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarProducto(id) {
    return fetch(rutaMaquina + `/api/borrarProducto/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  //RUTAS PEDIDOS
  static ModificarPedido(id, body) {
    return fetch(rutaMaquina + `/api/modificarPedido/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static InsertarPedido(body) {
    return fetch(rutaMaquina + `/api/nuevoPedido`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarPedido(id) {
    return fetch(rutaMaquina + `/api/borrarPedido/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }
}
