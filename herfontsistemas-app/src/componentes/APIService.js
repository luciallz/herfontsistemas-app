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
    return fetch(rutaMaquina + `/herfontsistemas-back/nuevo`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }
  static IniciarSesion(body) {
    return fetch(rutaMaquina + `/herfontsistemas-back/login`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }
  static ForgotPsswd(body){
    return fetch(rutaMaquina + `/herfontsistemas-back/ForgotPsswd`, {
      'method': ('GET','POST'),
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }
  static ChangePsswd(token){
    return fetch(rutaMaquina + `/herfontsistemas-back/ChangePsswd/${token}`, {
      'method': ('GET','POST'),
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(token)
    })
      .then(resp => resp.json())
  }

  

  static BorrarUsuario(id) {
    return fetch(rutaMaquina + `/herfontsistemas-back/borrar/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  //RUTAS TRABAJADORES
  static ModificarTrabajador(id, body) {
    return fetch(rutaMaquina + `/herfontsistemas-back/modificarTrabajador/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }


  static InsertarTrabajador(body) {
    return fetch(rutaMaquina + `/herfontsistemas-back/nuevoTrabajador`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarTrabajador(id) {
    return fetch(rutaMaquina + `/herfontsistemas-back/borrarTrabajador/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  // RUTAS PRODUCTO
  static ModificarProducto(id, body) {
    return fetch(rutaMaquina + `/herfontsistemas-back/modificarProducto/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }


  static InsertarProducto(body) {
    return fetch(rutaMaquina + `/herfontsistemas-back/nuevoProducto`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarProducto(id) {
    return fetch(rutaMaquina + `/herfontsistemas-back/borrarProducto/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  //RUTAS PEDIDOS
  static ModificarPedido(id, body) {
    return fetch(rutaMaquina + `/herfontsistemas-back/modificarPedido/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static InsertarPedido(body) {
    return fetch(rutaMaquina + `/herfontsistemas-back/nuevoPedido`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarPedido(id) {
    return fetch(rutaMaquina + `/herfontsistemas-back/borrarPedido/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }
}
