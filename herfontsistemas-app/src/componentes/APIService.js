import React, { useState, useEffect } from 'react';
export default class APIService {
  static rutaMaquina = 'http://127.0.0.1:5000'
  static ModificarUsuario(id, body) {
    return fetch(this.rutaMaquina + `/modificar/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static InsertarUsuario(body) {
    return fetch(this.rutaMaquina + `/nuevo`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }
  static IniciarSesion(body) {
    return fetch(this.rutaMaquina + `/login`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarUsuario(id) {
    return fetch(this.rutaMaquina + `/borrar/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  //RUTAS TRABAJADORES
  static ModificarTrabajador(id, body) {
    return fetch(this.rutaMaquina + `/modificarTrabajador/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }


  static InsertarTrabajador(body) {
    return fetch(this.rutaMaquina + `/nuevoTrabajador`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarTrabajador(id) {
    return fetch(this.rutaMaquina + `/borrarTrabajador/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  // RUTAS PRODUCTO
  static ModificarProducto(id, body) {
    return fetch(this.rutaMaquina + `/modificarProducto/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }


  static InsertarProducto(body) {
    return fetch(this.rutaMaquina + `/nuevoProducto`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarProducto(id) {
    return fetch(this.rutaMaquina + `/borrarProducto/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }

  //RUTAS PEDIDOS
  static ModificarPedido(id, body) {
    return fetch(this.rutaMaquina + `/modificarPedido/${id}`, {
      'method': 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static InsertarPedido(body) {
    return fetch(this.rutaMaquina + `/nuevoPedido`, {
      'method': 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  static BorrarPedido(id) {
    return fetch(this.rutaMaquina + `/borrarPedido/${id}`, {
      'method': 'DELETE',
      headers: { "Content-type": "application/json" },
    })
  }
}
