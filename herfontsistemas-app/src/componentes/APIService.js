import React, { useState, useEffect } from 'react';
import { rutaMaquina } from './Rutas';

export default class APIService {
  static ModificarUsuario(id, body) {
    return fetch(rutaMaquina + `/modificar/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static InsertarUsuario(body) {
    return fetch(rutaMaquina + `/nuevo`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }
  static IniciarSesion(body) {
    return fetch(rutaMaquina + `/login`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarUsuario(id) {
    return fetch(rutaMaquina + `/borrar/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  //RUTAS TRABAJADORES
  static ModificarTrabajador(id, body) {
    return fetch(rutaMaquina + `/modificarTrabajador/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }


  static InsertarTrabajador(body) {
    return fetch(rutaMaquina + `/nuevoTrabajador`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarTrabajador(id) {
    return fetch(rutaMaquina + `/borrarTrabajador/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  // RUTAS PRODUCTO
  static ModificarProducto(id, body) {
    return fetch(rutaMaquina + `/modificarProducto/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }


  static InsertarProducto(body) {
    return fetch(rutaMaquina + `/nuevoProducto`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarProducto(id) {
    return fetch(rutaMaquina + `/borrarProducto/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  //RUTAS PEDIDOS
  static ModificarPedido(id, body) {
    return fetch(rutaMaquina + `/modificarPedido/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static InsertarPedido(body) {
    return fetch(rutaMaquina + `/nuevoPedido`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarPedido(id) {
    return fetch(rutaMaquina + `/borrarPedido/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }
}
